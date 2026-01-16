import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Research Collaborations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Advancing AI Research Through Global Partnerships
              </h3>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🌍</div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex">
                  <div className="w-full flex-shrink-0">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="/Review Star.svg"
                              loading="lazy"
                              alt="Icon"
                              className="h-5 w-5 text-yellow-400"
                              width={20}
                              height={20}
                            />
                          ))}
                        </div>
                        <h4 className="text-lg leading-relaxed">
                          "The research collaboration has been exceptional. The innovative approaches to AI challenges have opened
                          new avenues for our work. The methodological rigor and technical expertise demonstrated throughout the
                          project have been invaluable to our research outcomes."
                        </h4>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src="/user-3.png"
                            loading="lazy"
                            alt="Avatar Image"
                            className="h-12 w-12 rounded-full"
                            width={60}
                            height={60}
                          />
                          <div className="space-y-1">
                            <p className="font-semibold">Dr. Maria Rodriguez</p>
                            <p className="text-sm text-gray-500">Research Collaborator, MIT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0" aria-hidden="true">
                    <div className="space-y-6" aria-hidden="true">
                      <div className="space-y-4" aria-hidden="true">
                        <div className="flex space-x-1" aria-hidden="true">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="/Review Star.svg"
                              loading="lazy"
                              alt="Icon"
                              className="h-5 w-5 text-yellow-400"
                              width={20}
                              height={20}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <h4 className="text-lg leading-relaxed" aria-hidden="true">
                          "From the beginning, Vistara aligned with our vision and delivered a strategy that fit our needs.
                          Their expertise and reliable execution made a clear difference. They streamlined our workflow and led
                          a seamless digital shift. Vistara's open communication and commitment stood out. Working with them helped
                          us grow stronger, smarter, and more agile."
                        </h4>
                      </div>
                      <div className="flex items-center space-x-4" aria-hidden="true">
                        <div className="flex items-center space-x-4" aria-hidden="true">
                          <Image
                            src="/member-12.png"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="/member-12-p-500.png 500w, /member-12.png 624w"
                            alt="Avatar Image"
                            className="h-12 w-12 rounded-full"
                            width={60}
                            height={60}
                            aria-hidden="true"
                          />
                          <div className="space-y-1" aria-hidden="true">
                            <p className="font-semibold" aria-hidden="true">Csatár Géza</p>
                            <p className="text-sm text-gray-500" aria-hidden="true">Founder, Retailcloud</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0" aria-hidden="true">
                    <div className="space-y-6" aria-hidden="true">
                      <div className="space-y-4" aria-hidden="true">
                        <div className="flex space-x-1" aria-hidden="true">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="/Review Star.svg"
                              loading="lazy"
                              alt="Icon"
                              className="h-5 w-5 text-yellow-400"
                              width={20}
                              height={20}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <h4 className="text-lg leading-relaxed" aria-hidden="true">
                          "Vistara quickly understood our business goals and created a strategy that truly worked.
                          Their insight and dedication made a big impact. They helped us simplify operations and led
                          a smooth digital transition. Their honest, hands-on approach stood out. Partnering with Vistara
                          changed everything—we came out stronger and more prepared."
                        </h4>
                      </div>
                      <div className="flex items-center space-x-4" aria-hidden="true">
                        <div className="flex items-center space-x-4" aria-hidden="true">
                          <Image
                            src="/member-11.png"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="/member-11-p-500.png 500w, /member-11.png 624w"
                            alt="Avatar Image"
                            className="h-12 w-12 rounded-full"
                            width={60}
                            height={60}
                            aria-hidden="true"
                          />
                          <div className="space-y-1" aria-hidden="true">
                            <p className="font-semibold" aria-hidden="true">Marcus Lane</p>
                            <p className="text-sm text-gray-500" aria-hidden="true">Founder, Retailcloud</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors" aria-label="Previous testimonial">
                <Image
                  src="/arrow-left-01.svg"
                  loading="lazy"
                  alt="Icon"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors" aria-label="Next testimonial">
                <Image
                  src="/arrow-right-03.svg"
                  loading="lazy"
                  alt="Icon"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </button>
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}