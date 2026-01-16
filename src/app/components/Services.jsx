import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Current Research Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Link aria-label="Link Block" href="#research">
                        <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Deep Learning</h2>
                      </Link>
                      <p className="text-gray-600">
                        Neural networks and deep learning architectures for computer vision.
                      </p>
                    </div>
                    <Link href="#research" className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <div className="flex items-center justify-center space-x-2">
                        <div>Learn More</div>
                        <div className="flex items-center">
                          <span className="text-sm">→</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Link aria-label="Link Block" href="#research">
                        <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Edge Computing</h2>
                      </Link>
                      <p className="text-gray-600">
                        Optimizing AI models for edge devices and IoT applications with limited resources.
                      </p>
                    </div>
                    <Link href="#research" className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <div className="flex items-center justify-center space-x-2">
                        <div>Learn More</div>
                        <div className="flex items-center">
                          <span className="text-sm">→</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Link aria-label="Link Block" href="#research">
                        <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Privacy-Preserving ML</h2>
                      </Link>
                      <p className="text-gray-600">
                        Developing secure and privacy-preserving machine learning techniques.
                      </p>
                    </div>
                    <Link href="#research" className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
                      <div className="flex items-center justify-center space-x-2">
                        <div>Learn More</div>
                        <div className="flex items-center">
                          <span className="text-sm">→</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="#research" className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                <div className="flex items-center justify-center space-x-2">
                  <div>View All Research</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">👨‍🔬</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-5 w-5 text-yellow-400">★</div>
                  ))}
                </div>
                <h3 className="text-lg font-medium italic">
                  "The research collaboration has been exceptional. The innovative approaches to AI challenges have opened new avenues for our work."
                </h3>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Dr. Sarah Chen,</p>
                <p className="text-sm text-gray-500">Research Collaborator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}