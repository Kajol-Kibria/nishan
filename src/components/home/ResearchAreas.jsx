import Image from 'next/image';
import Link from 'next/link';

const researchAreas = [
  {
    icon: '🌿',
    bg: 'bg-green-100',
    title: 'Natural Product Chemistry',
    description:
      'Exploring and characterizing bioactive molecules from nature for drug development and discovery.',
  },
  {
    icon: '💻',
    bg: 'bg-blue-100',
    title: 'Computer Aided Drug Design',
    description:
      'Leveraging computational tools and modeling to accelerate and enhance drug discovery processes.',
  },
  {
    icon: '🧬',
    bg: 'bg-purple-100',
    title: 'Network Pharmacology',
    description:
      'Studying the interplay between drugs, targets, and diseases using systems biology and network models.',
  },
  {
    icon: '🧪',
    bg: 'bg-pink-100',
    title: 'Anti-cancer & Anti-inflammatory',
    description:
      'Focusing on molecular therapeutics for cancer and inflammation using both experimental and in silico techniques.',
  },
  {
    icon: '🧫',
    bg: 'bg-yellow-100',
    title: 'Vaccine Design',
    description:
      'Applying modern techniques for the rational design and evaluation of novel vaccines.',
  },
];

export default function ResearchAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Current Research Areas
            </h2>
            {/* Center the grid and cards */}
            <div className="flex flex-wrap justify-center gap-8">
              {researchAreas.map((area, idx) => (
                <div 
                  key={area.title} 
                  className="flex flex-col items-center h-full w-full sm:w-[350px] max-w-[370px]"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col flex-1 items-center text-center">
                    <div className="mb-4">
                      <div className={`h-12 w-12 ${area.bg} rounded-lg flex items-center justify-center mx-auto`}>
                        <span className="text-2xl">{area.icon}</span>
                      </div>
                    </div>
                    <div className="space-y-4 flex-1 w-full">
                      <div className="space-y-2">
                        <Link aria-label={`Link Block: ${area.title}`} href="#research">
                          <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">
                            {area.title}
                          </h2>
                        </Link>
                        <p className="text-gray-600">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Link
                href="/our-research"
                className="btn"
              >
                <div className="flex items-center justify-center space-x-2 py-2 px-6">
                  <div>View All Research</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}