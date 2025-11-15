import React, { useRef, useState, useEffect } from "react";
import businessData from "../data/umkm-data.json";
import BusinessCard from "../components/common/BusinessCard";
// REMOVED: import CategoriesPage - you're not using it on homepage

const BusinessModal = ({ business, onClose }) => {
  const isVisible = !!business;

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isVisible) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl font-bold z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          &times;
        </button>

        {business && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-video md:aspect-auto md:h-full">
              <img
                src={business.imageUrl}
                alt={business.nama}
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>

            <div className="p-8">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {business.category}
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                {business.nama}
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Established: {business.estYear} | {business.district}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">About the Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  {business.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <p className="text-gray-500 text-sm">Rating</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {business.rating} ({business.reviewCount})
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Hours</p>
                  <p className="text-base font-semibold">{business.hours}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {business.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const query = encodeURIComponent(
                    `${business.nama} ${business.district}`
                  );
                  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
                  window.open(mapsUrl, "_blank");
                }}
                className="mt-6 inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                View on Map
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero = ({ handleAnchorClick }) => (
  <div className="bg-slate-700 text-white text-center py-20 px-4 flex-col">
    <h1 className="text-5xl font-bold mb-4">
      Temukan Kisah di balik UMKM yang<br></br> Ada di Sekitar Kita
    </h1>
    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
      Setiap Bisnis memiliki cerita perjalanannya masing-masing, temukan
      <br></br>
      cerita-cerita tersebut di komunitas kami.
    </p>
    <div>
      <button
        onClick={handleAnchorClick}
        className="bg-orange-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg mr-4 cursor-pointer"
      >
        Telusuri Kisahnya
      </button>
      <button
        onClick={() => (window.location.href = "/bagikan-kisah")}
        className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg cursor-pointer"
      >
        Bagikan Kisahmu
      </button>
    </div>
  </div>
);

const FeaturedStories = () => (
  <div className="bg-orange-50 py-20 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Rekomendasi Minggu Ini
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Temukan Bisnis Lokal yang Mungkin Kamu Suka
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Featured Story 1 */}
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover mb-4"
            src="https://placehold.co/100x100/F3EADB/C0A98E?text=Ampera"
            alt="Ampera"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Masakan Padang Ampera
          </h3>
          <p className="text-gray-500 mb-2">Food & Beverage</p>
          <p className="text-sm text-gray-600">
            Masakan Padang Ampera Uni 2 adalah rumah makan yang menyajikan cita rasa khas Minang
          </p>
        </div>

        {/* Featured Story 2 */}
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover mb-4"
            src="https://placehold.co/100x100/E8F5E9/81C784?text=Tombo"
            alt="food & Beverage"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Tombo Luwe
          </h3>
          <p className="text-gray-500 mb-2">food & Beverage</p>
          <p className="text-sm text-gray-600">
            Warteg Tombo Luwe adalah tempat makan sederhana yang menyajikan beragam lauk rumahan
          </p>
        </div>

        {/* Featured Story 3 */}
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full object-cover mb-4"
            src="https://placehold.co/100x100/E3F2FD/64B5F6?text=Goeboeg"
            alt="TechHub Repairs"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Warkop Goeboeg 99
          </h3>
          <p className="text-gray-500 mb-2">food & Beverage</p>
          <p className="text-sm text-gray-600">
            Warkop Goeboeg 99 adalah tempat nongkrong sederhana yang menawarkan suasana hangat dan akrab
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Homepage = () => {
  const mainContentRef = useRef(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBusinessClick = (e, business) => {
    e.preventDefault(); // Prevent any default navigation
    e.stopPropagation(); // Stop event bubbling
    setSelectedBusiness(business);
  };

  return (
    <div>
      <Hero handleAnchorClick={handleAnchorClick} />

      <div
        ref={mainContentRef}
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="flex">
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {businessData.map((business) => (
                <div
                  key={business.id}
                  onClick={(e) => handleBusinessClick(e, business)}
                  className="cursor-pointer"
                >
                  <BusinessCard business={business} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <FeaturedStories />

      <div className="bg-slate-700 py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-orange-50 mb-4">
          Gak Nemu Apa yang Kamu Cari?
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          Kami Selalu Melakukan Pembaharuan Kisah UMKM Lokal di Sekitar Kami.
          Beritahu Kami Jika Anda Ingin Membagikan Kisah UMKM pada Komunitas
          Kami
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-orange-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg cursor-pointer"
        >
          Kembali Ke Awal
        </button>
      </div>

      <BusinessModal
        business={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
      />
    </div>
  );
};

export default Homepage;
