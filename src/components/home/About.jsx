import Image from 'next/image';

export default function About() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-semibold text-gray-900">AI & Machine Learning</div>
              <p className="text-gray-600">
                Developing advanced algorithms and models for intelligent systems and data-driven decision making.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-semibold text-gray-900">Computational Research</div>
              <p className="text-gray-600">Exploring complex computational problems and developing efficient solutions.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-semibold text-gray-900">Data Science</div>
              <p className="text-gray-600">Analyzing large datasets to extract meaningful insights and patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}