"use client";

import { useEffect } from "react";
import { initScroll, destroyScroll } from "../lib/scroll";

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initScroll();
    return () => {
      destroyScroll();
    };
  }, []);

  return <>{children}</>;
}
