import React from "react";
import { Link } from "react-router-dom";

// Ikon-ikon placeholder. Anda bisa ganti dengan SVG asli nanti.
const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
  </svg>
);
const LocationIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
const TagIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a1 1 0 011-1h5a.997.997 0 01.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
);
const ClockIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
      clipRule="evenodd"
    />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// Komponen BusinessCard menerima data 'business' sebagai prop
const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow">
      {/* Gambar */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={business.imageUrl}
          alt={business.nama}
        />
        <span className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
          Est. {business.estYear}
        </span>
      </div>

      {/* Konten */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Judul & Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{business.nama}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
            <StarIcon />
            <span className="text-sm font-semibold text-gray-800">
              {business.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({business.reviewCount})
            </span>
          </div>
        </div>

        {/* Lokasi & Kategori */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1.5">
            <LocationIcon />
            <span>{business.district}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <TagIcon />
            <span>{business.category}</span>
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-gray-600 mb-5 flex-grow">
          {business.description.length > 100
            ? business.description.substring(0, 100) + "..."
            : business.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bagian Bawah: Jam & Link */}
        <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-1.5 text-gray-500">
            <ClockIcon />
            <span>{business.hours}</span>
          </div>
          <Link
            to={`/business/${business.id}`}
            className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
          >
            Ulik Kisahnya <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
