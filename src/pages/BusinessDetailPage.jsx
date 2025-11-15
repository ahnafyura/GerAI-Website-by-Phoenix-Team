/*
import React from 'react';
import { useParams } from 'react-router-dom';

// Ini adalah placeholder. Nanti kita akan kembangkan halaman ini
// untuk menampilkan detail UMKM dan PETA (sesuai kewajiban lomba).
export default function BusinessDetailPage() {
  // Kita bisa ambil 'businessId' dari URL menggunakan hook useParams
  const { businessId } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Halaman Detail Bisnis</h1>
      <p className="mt-4">
        Ini adalah halaman untuk: <strong className="text-indigo-600">{businessId}</strong>
      </p>
      <p className="mt-2">Peta Google Maps dan detail lengkap akan muncul di sini.</p>
    </div>
  );
}
*/
import { useParams, useNavigate } from "react-router-dom";
import umkmData from "../data/umkm-data.json";
import React, { useEffect } from "react";

export default function BusinessDetailPage() {
  const { businessId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // setiap kali halaman ini muncul, scroll ke atas
    window.scrollTo(0, 250);
  }, []);

  // Cari data UMKM berdasarkan ID di URL
  const business = umkmData.find((b) => b.id === businessId);

  if (!business) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">UMKM Tidak Ditemukan</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          ← Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <img
          src={business.imageUrl}
          alt={business.nama}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end text-center">
          <div className="max-w-7xl mx-auto px-6 py-6 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">{business.nama}</h1>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                ⭐ {business.rating} ({business.reviewCount} reviews)
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {business.category}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Sejak {business.estYear}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Konten utama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Kolom kiri (detail utama) */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tentang UMKM</h2>
              <p className="text-gray-600 leading-relaxed">{business.description}</p>
            </section>

            {business.tags && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tag Kategori</h2>
                <div className="flex flex-wrap gap-2">
                  {business.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Kolom kanan (info & peta) */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Informasi Bisnis</h2>
            <div className="text-gray-600 space-y-2 text-sm">
              <p><strong className="text-gray-800">Wilayah:</strong> {business.district}</p>
              <p><strong className="text-gray-800">Jam Operasional:</strong> {business.hours}</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Lokasi</h3>
              {business.gmaps_url ? (
                <iframe
                  src={business.gmaps_url}
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg border"
                ></iframe>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  Lokasi belum tersedia
                </p>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600 transition font-medium"
              >
                ← Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

