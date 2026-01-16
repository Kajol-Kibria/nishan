'use client'
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fd_hero-img-1.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fa_hero-img-2.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844f8_hero-img-3.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fb_hero-img-4.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fc_hero-img-5.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844f9_hero-img-6.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fd_hero-img-1.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fa_hero-img-2.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844f8_hero-img-3.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fb_hero-img-4.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844fc_hero-img-5.png",
  "https://cdn.prod.website-files.com/683291cc4c6cf1f4e8e84237/683291cc4c6cf1f4e8e844f9_hero-img-6.png"
];

// CSS keyframes for infinite vertical scroll up and down
const carouselStyle = `
@keyframes vertical-scroll-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
@keyframes vertical-scroll-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50%);
  }
}
`;

function VerticalInfiniteCarousel({ images, width = 256, height = 256, duration = 90, direction = "up" }) {
  // Increased width and height from 192 to 256 for bigger images
  let carouselSet = [...images];
  if (direction === "down") {
    // Start at 4th image (index 3), so shift initial images
    carouselSet = images.slice(3).concat(images.slice(0, 3));
  }
  const doubled = [...carouselSet, ...carouselSet];

  const animationName = direction === "down" ? "vertical-scroll-down" : "vertical-scroll-up";
  // Down direction: do not offset initial transform (images already rotated)
  const wrapperStyle = {};

  return (
    <div
      className="overflow-hidden h-[800px] w-[300px] p-2 rounded-xl shadow-2xl flex items-center justify-center"
      style={{ minWidth: width + 44 }}
    >
      <style>{carouselStyle}</style>
      <div
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          ...wrapperStyle,
        }}
        className="will-change-transform"
      >
        <div className="flex flex-col gap-6">
          {doubled.map((src, idx) => (
            <Image
              src={src}
              key={idx}
              alt={`Hero carousel ${idx + 1}`}
              width={width}
              height={height}
              loading="lazy"
              className="w-64 h-auto rounded-lg shadow-lg object-cover bg-white/20"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-20 py-20">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100/20 text-white rounded-full text-sm font-medium">
                <div>👋 Hi, I’m As Sazzad Mahmud</div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Top Strategic <span className="text-secondary">Consultant</span> That Drives Real Growth
              </h1>
              <p className="text-lg leading-relaxed">
                Partner with AS Research Lab to navigate challenges, optimize performance, and unlock new opportunities.
              </p>
              <Link href="/publications" className="btn">
                <div className="flex items-center justify-center space-x-2 py-2 px-3">
                  <div>View Publications</div>
                </div>
              </Link>
            </div>
            <div className="mt-16 border-gray-200">
              <p className="text-sm font-medium mb-6 text-gray-400">
                Advancing AI & Computational Science — Research featured in top conferences & journals
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Image src="/images/neuralips.svg" loading="lazy" alt="NeurIPS" width={90} height={40} className="opacity-80" />
                <Image src="/images/cvpr.svg" loading="lazy" alt="CVPR" width={80} height={40} className="opacity-80" />
                <Image src="/images/iclr.svg" loading="lazy" alt="ICLR" width={85} height={40} className="opacity-80" />
                <Image src="/images/springer.svg" loading="lazy" alt="Springer" width={70} height={40} className="opacity-70" />
                <Image src="/images/elsevier.svg" loading="lazy" alt="Elsevier" width={100} height={40} className="opacity-70" />
              </div>
            </div>
          </div>
          {/* Two vertical infinite carousels: one up, one down (down starts from 4th image) */}
          <div className="hidden xl:flex gap-8 justify-end">
            <VerticalInfiniteCarousel images={carouselImages} direction="up" />
            <VerticalInfiniteCarousel images={carouselImages} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}