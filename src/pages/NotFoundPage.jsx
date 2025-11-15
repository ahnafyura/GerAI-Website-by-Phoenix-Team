import React from 'react';
import { Link } from 'react-router-dom';

// Ini adalah placeholder untuk halaman 404
export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-900">Halaman Tidak Ditemukan</h2>
      <p className="mt-2 text-lg text-gray-600">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link
        to="/"
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
