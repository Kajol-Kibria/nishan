import Lenis from "lenis";

/* ————————————————————————————————————————————
   Central scroll manager.

   - Lenis drives buttery smooth scrolling for everyone
     who has not asked for reduced motion.
   - A single document-level click handler intercepts
     in-page anchors (#research, …) and routes them
     through Lenis with a header-height offset. On the
     reduced-motion path it performs an instant native
     jump instead.
   - Overlays (mobile menu, member profiles) can stop
     and resume scrolling via stopScroll()/startScroll().
   ———————————————————————————————————————————— */

const HEADER_OFFSET = -72;

let lenis: Lenis | null = null;
let rafId = 0;
let initialized = false;

function onDocumentClick(e: MouseEvent) {
  if (e.defaultPrevented) return;
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

  const target = e.target as Element | null;
  const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href || href === "#") return;

  let el: HTMLElement | null = null;
  try {
    el = document.getElementById(decodeURIComponent(href.slice(1)));
  } catch {
    el = null;
  }
  if (!el) return;

  e.preventDefault();
  scrollToElement(el);
}

function scrollToElement(el: HTMLElement) {
  /* An overlay may be closing in the same frame — release any
     body lock first, then scroll on the next frame. */
  document.body.style.overflow = "";
  requestAnimationFrame(() => {
    if (lenis) {
      lenis.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.15 });
    } else {
      el.scrollIntoView({ block: "start" });
    }
  });
}

export function initScroll() {
  if (initialized) return;
  initialized = true;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
  }

  document.addEventListener("click", onDocumentClick);
}

export function destroyScroll() {
  if (rafId) cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
  document.removeEventListener("click", onDocumentClick);
  initialized = false;
}

export function stopScroll() {
  lenis?.stop();
  document.body.style.overflow = "hidden";
}

export function startScroll() {
  document.body.style.overflow = "";
  lenis?.start();
}

/** Programmatic scroll to a section id (works with or without Lenis). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  scrollToElement(el);
}
