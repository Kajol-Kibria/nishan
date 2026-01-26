'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Three landscape images for the background carousel
const carouselImages = [
  "/hero-bg-1.jpg",
  "/hero-bg-2.jpg",
  "/hero-bg-3.jpg",
];

function BackgroundCarousel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={1000}
        showIndicators={true}
        swipeable
        emulateTouch
        stopOnHover={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <li
              className={`inline-block mx-1 ${
                isSelected
                  ? "bg-gray-300 scale-110"
                  : "bg-gray-300/40 hover:bg-gray-300/80"
              } rounded-full h-2.5 w-2.5 cursor-pointer transition-all duration-200`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
        className="w-full h-full"
      >
        {carouselImages.map((src, idx) => (
          <div key={src} className="relative w-full h-[70vh] min-h-[360px]">
            <Image
              src={src}
              fill
              alt={`background-slide-${idx + 1}`}
              priority={idx === 0}
              className="object-cover object-center w-full h-full"
              sizes="100vw"
            />
            {/* Dim overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <BackgroundCarousel />
      {/* Content on top */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center py-24 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100/20 text-white rounded-full text-sm font-medium mb-6">
          <div>🔬 Welcome to Nishan Research Lab</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
          Breakthroughs in <span className="text-secondary">Drug Discovery</span> & <span className="text-secondary">Cancer Research</span>
        </h1>
        <p className="text-sm leading-relaxed mt-6 text-gray-100 drop-shadow">
          We specialize in natural product research, anti-cancer studies, and computer aided drug design — harnessing cutting-edge computational and experimental approaches to accelerate therapeutic breakthroughs.
        </p>
        <Link href="/publications" className="btn mt-8 shadow-lg">
          <div className="flex items-center justify-center space-x-2 py-2 px-6">
            <div>Explore Our Publications</div>
          </div>
        </Link>
      </div>
    </section>
  );
}