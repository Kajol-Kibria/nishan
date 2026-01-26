import React from 'react';
import LabMemberCard from './LabMemberCard';

// Data for lab members
const labMembers = [
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Dr. Alice Smith',
    position: 'Principal Investigator',
    email: 'alice.smith@unilab.edu',
    phone: '555-123-1000',
    additionalInfo: ['Neuroscience', 'Brain-Computer Interfaces', 'Cognitive Modeling'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Bob Johnson',
    position: 'PhD Student',
    email: 'bob.johnson@unilab.edu',
    phone: '555-123-1001',
    additionalInfo: ['Machine Learning', 'Biological Systems'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Carla Wei',
    position: 'Postdoctoral Fellow',
    email: 'carla.wei@unilab.edu',
    phone: '555-123-1002',
    additionalInfo: ['Neural Imaging', 'Data Analysis Pipelines'],
  },
  {
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    name: 'Dave Kim',
    position: 'Lab Manager',
    email: 'dave.kim@unilab.edu',
    phone: '555-123-1003',
    additionalInfo: ['Experiment Coordination', 'Lab Equipment'],
  },
  {
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Emily Turner',
    position: "Master's Student",
    email: 'emily.turner@unilab.edu',
    phone: '555-123-1004',
    additionalInfo: ['Behavioral Assays', 'Animal Models'],
  },
];



export default function CurrentLabMembers() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50/50 via-white to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">Current Lab Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labMembers.map((member, idx) => (
            <LabMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}