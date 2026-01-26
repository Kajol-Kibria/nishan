'use client'
import React, { useState } from 'react';
import LabMemberCard from './LabMemberCard';

// Data for former lab members (20 entries)
const formerLabMembers = [
  {
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Dr. John Doe',
    position: 'Postdoctoral Fellow',
    email: 'john.doe@unilab.edu',
    phone: '555-123-2000',
    additionalInfo: ['Synaptic Plasticity', 'Computational Neuroscience'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    name: "Mary O'Brien",
    position: 'PhD Student',
    email: 'mary.obrien@unilab.edu',
    phone: '555-123-2001',
    additionalInfo: ['Connectomics', 'Neural Tracing'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
    name: 'Steven Chen',
    position: "Master's Student",
    email: 'steven.chen@unilab.edu',
    phone: '555-123-2002',
    additionalInfo: ['Genetic Tools', 'Microscopy'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    name: 'Priya Singh',
    position: 'Lab Manager',
    email: 'priya.singh@unilab.edu',
    phone: '555-123-2003',
    additionalInfo: ['Laboratory Operations', 'Safety Training'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
    name: 'Carlos Martinez',
    position: 'Intern',
    email: 'carlos.martinez@unilab.edu',
    phone: '555-123-2004',
    additionalInfo: ['Data Entry', 'Assay Prep'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    name: 'Fatima Zahra',
    position: 'PhD Student',
    email: 'fatima.zahra@unilab.edu',
    phone: '555-123-2005',
    additionalInfo: ['Neural Networks', 'Electrophysiology'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/37.jpg',
    name: 'Andrew Becker',
    position: "Master's Student",
    email: 'andrew.becker@unilab.edu',
    phone: '555-123-2006',
    additionalInfo: ['Behavioral Studies', 'Zebrafish'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Helena Park',
    position: 'Research Assistant',
    email: 'helena.park@unilab.edu',
    phone: '555-123-2007',
    additionalInfo: ['Lab Maintenance', 'Data Collection'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Emil Johansson',
    position: 'Visiting Scholar',
    email: 'emil.johansson@unilab.edu',
    phone: '555-123-2008',
    additionalInfo: ['Optogenetics', 'Rodent Models'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    name: 'Zara Patel',
    position: 'Lab Technician',
    email: 'zara.patel@unilab.edu',
    phone: '555-123-2009',
    additionalInfo: ['Assay Prep', 'Stock Management'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Michael Stern',
    position: 'Research Assistant',
    email: 'michael.stern@unilab.edu',
    phone: '555-123-2010',
    additionalInfo: ['Data Entry', 'Sample Processing'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
    name: 'Sofia Gomez',
    position: 'PhD Student',
    email: 'sofia.gomez@unilab.edu',
    phone: '555-123-2011',
    additionalInfo: ['Electrophysiology', 'Neural Signaling'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'Roberto Rossi',
    position: 'Postdoctoral Fellow',
    email: 'roberto.rossi@unilab.edu',
    phone: '555-123-2012',
    additionalInfo: ['Neural Circuits', 'Imaging'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/95.jpg',
    name: 'Jelena Petrovic',
    position: "Master's Student",
    email: 'jelena.petrovic@unilab.edu',
    phone: '555-123-2013',
    additionalInfo: ['Genomics', 'Big Data Analysis'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    name: 'Tom Lee',
    position: 'Lab Manager',
    email: 'tom.lee@unilab.edu',
    phone: '555-123-2014',
    additionalInfo: ['Animal House', 'Training'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    name: 'Julia Nowak',
    position: 'Research Assistant',
    email: 'julia.nowak@unilab.edu',
    phone: '555-123-2015',
    additionalInfo: ['Behavioral Tracking', 'Histology'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'Lucas Brown',
    position: 'Intern',
    email: 'lucas.brown@unilab.edu',
    phone: '555-123-2016',
    additionalInfo: ['Stock Maintenance', 'Support'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/53.jpg',
    name: 'Amira Khalid',
    position: 'PhD Student',
    email: 'amira.khalid@unilab.edu',
    phone: '555-123-2017',
    additionalInfo: ['Neuroinformatics', 'Data Analysis'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    name: 'Samuel Fischer',
    position: 'Visiting Scholar',
    email: 'samuel.fischer@unilab.edu',
    phone: '555-123-2018',
    additionalInfo: ['Immunohistochemistry', 'Rat Models'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/80.jpg',
    name: 'Leah Stein',
    position: 'Lab Technician',
    email: 'leah.stein@unilab.edu',
    phone: '555-123-2019',
    additionalInfo: ['PCR', 'Sample Processing'],
  },
];

const ITEMS_PER_PAGE = 6;

export default function FormerLabMembers() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(formerLabMembers.length / ITEMS_PER_PAGE);

  const paginatedMembers = formerLabMembers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const canGoPrev = page > 1;
  const canGoNext = page < pageCount;

  const handlePrev = () => {
    if (canGoPrev) setPage(page - 1);
  };

  const handleNext = () => {
    if (canGoNext) setPage(page + 1);
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50/50 via-white to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
          Former Lab Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {paginatedMembers.map((member, idx) => (
            <LabMemberCard key={(page - 1) * ITEMS_PER_PAGE + idx} {...member} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`px-4 py-2 rounded ${canGoPrev
              ? "bg-gray-200 hover:bg-gray-300 text-gray-900"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } font-semibold transition text-sm`}
          >
            Previous
          </button>
          <span className="font-medium text-gray-700 text-sm">
            Page {page} of {pageCount}
          </span>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`px-4 py-2 rounded ${canGoNext
              ? "bg-gray-200 hover:bg-gray-300 text-gray-900"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } font-semibold transition text-sm`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
