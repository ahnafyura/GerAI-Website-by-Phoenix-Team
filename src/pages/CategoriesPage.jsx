import { useState } from "react";
import umkmData from "../data/umkm-data.json";
import categoriesData from "../data/categories-data.json";
import BusinessCard from "../components/common/BusinessCard";

export default function CategoriesPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredUmkm =
    selectedCategories.length === 0
      ? umkmData
      : umkmData.filter((item) => selectedCategories.includes(item.category));

  return (
    <div className="min-h-screen bg-slate-700 py-10 px-6">
      {/* --- Tombol kategori --- */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {categoriesData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => toggleCategory(cat.name)}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition transform
              ${
                selectedCategories.includes(cat.name)
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:scale-105"
              }`}
          >
            <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-3" />
            <span className="text-lg font-semibold text-center">
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* --- Grid daftar UMKM --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredUmkm.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
}
