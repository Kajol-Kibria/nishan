import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Featured Research Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🧠</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">AI/ML Research</p>
                  <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Neural Architecture Search</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🔬</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Computer Vision</p>
                  <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Advanced Image Recognition</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">⚡</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-600">Edge Computing</p>
                  <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Efficient ML on Edge Devices</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🔒</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-600">Privacy & Security</p>
                  <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-200">Federated Learning Systems</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}