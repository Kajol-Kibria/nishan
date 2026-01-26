import React from 'react'

const positionColorClasses = [
  'bg-yellow-100 text-yellow-800',
  'bg-green-100 text-green-800',
  'bg-blue-100 text-blue-800',
  'bg-pink-100 text-pink-800',
  'bg-purple-100 text-purple-800',
  'bg-red-100 text-red-800',
  'bg-orange-100 text-orange-800',
  'bg-teal-100 text-teal-800',
  'bg-indigo-100 text-indigo-800',
];

function getRandomColorClass(position) {
  // Use a hash function to deterministically select a color for each position
  let hash = 0;
  for (let i = 0; i < position.length; i++) {
    hash = position.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % positionColorClasses.length;
  return positionColorClasses[idx];
}

export default function LabMemberCard({ image, name, position, email, phone, additionalInfo }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-7 py-6 w-full max-w-full flex flex-col gap-4 relative transition hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-row-reverse items-center gap-4">
        {/* Image at right and hidden if image is not available */}
        {image ? (
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        ) : null}
        <div className="flex-1 min-w-0">
          <span
            className={`inline-block mb-2 px-2.5 py-0.5 text-xs font-medium rounded capitalize ${getRandomColorClass(position)}`}
          >
            {position}
          </span>
          <h3 className="text-lg font-bold leading-tight mb-0.5 truncate">{name}</h3>
          <div className="flex items-center text-gray-500 text-sm gap-2">
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-1">
        {additionalInfo &&
          additionalInfo.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {item}
            </div>
          ))}
      </div>
      <div className="flex gap-2 mt-3">
        <a
          href={`mailto:${email}`}
          className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition text-sm"
        >
          Email
        </a>
        <a
          href={`tel:${phone}`}
          className="px-4 py-1.5 bg-black text-white hover:bg-gray-900 font-semibold rounded-xl transition text-sm"
        >
          Call
        </a>
      </div>
    </div>
  );
}