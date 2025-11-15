import React from "react";
import { useLocation } from "react-router-dom";
import businessData from "../data/umkm-data.json";
import BusinessCard from "../components/common/BusinessCard";

const SearchResultsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query")?.toLowerCase() || "";

  // 🔍 Fungsi pencarian lebih LUAS
  const matchesQuery = (business, query) => {
    // Ubah seluruh object menjadi satu string panjang
    const combinedText =
      JSON.stringify(business)
        .replace(/[^\w\s]/g, " ") // remove simbol biar lebih bersih
        .toLowerCase();

    return combinedText.includes(query);
  };

  const filteredBusinesses = businessData.filter((b) => matchesQuery(b, query));

  return (
    <div className="min-h-screen bg-slate-700 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-100 mb-4">
        Search Results
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-white/90 mb-10">
        Showing results for: <span className="font-semibold text-white">"{query}"</span>
      </p>

      {/* Empty State */}
      {filteredBusinesses.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-white mb-3">
            No results found
          </h2>
          <p className="text-white/80">Try searching with another keyword.</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchResultsPage;
