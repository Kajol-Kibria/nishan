import Link from 'next/link'
import React from 'react'
import { FaHandHoldingUsd, FaUniversity, FaRegEnvelope, FaFlask, FaExternalLinkAlt } from 'react-icons/fa'

export default function Funding() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50/60 via-white to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-900 tracking-tight flex flex-col items-center gap-2">
          <span>Funding</span>
        </h1>
        <div className="bg-white rounded-3xl shadow-xl px-8 py-12 border border-indigo-100">
          <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0 flex items-center justify-center bg-indigo-50 rounded-full w-20 h-20 mb-4 md:mb-0 shadow">
              <FaUniversity className="text-indigo-400 text-4xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl text-gray-800 font-semibold mb-2">
                <span className="font-bold text-primary">Not funded yet</span> – but our curiosity and determination are unstoppable!
              </p>
              <p className="text-gray-600">
                We are actively seeking <span className="font-medium text-primary">grants, institutional support, and private donations</span> to drive our research forward in <span className="font-semibold text-gray-800">Anticancer, Computer aided drug design and Advance research</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center my-8">
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 text-white font-bold shadow-lg hover:bg-indigo-600 transition"
              >
                <FaRegEnvelope className="text-xl" />
                Contact Us
              </Link>
              {/* <a
                href="https://www.grants.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 transition"
              >
                <FaFlask className="text-lg" />
                Explore Grants <FaExternalLinkAlt className="ml-1 text-xs" />
              </a> */}
            </div>
            <span className="text-sm text-gray-500 mt-2 text-center">
              We welcome collaborators, sponsors, and those who share our vision for scientific advancement.
            </span>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
              How You Can Contribute
            </h2>
            <ul className="text-gray-700 flex flex-col gap-1 text-sm md:text-base">
              <li>
                🌱 Sponsor a research project or fellowship
              </li>
              <li>
                🤝 Partner for industry or academic collaborations
              </li>
              <li>
                🎯 Direct support for equipment or outreach programs
              </li>
              <li>
                💡 Introduce us to potential donors or funding bodies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
