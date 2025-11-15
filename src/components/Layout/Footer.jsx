import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Bagian atas: Newsletter (dari screenshot image_4aff43.png) */}
      <div className="bg-orange-50 text-slate-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Bergabung Dengan Komunitas Kami
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-700 max-w-2xl mx-auto">
          Dapatkan Update mingguan terbaru tentang UMKM yang ada di sekitar
          kita, acara komunitas, kisah inspiratif, dan lain sebagainya
        </p>
        <form className="mt-8 sm:flex max-w-md mx-auto">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 border border-transparent rounded-md shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:outline-none text-gray-900"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-700 hover:bg-amber-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Bagian bawah: Footer Links (dari screenshot image_4aff43.png) */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Kolom Logo & Deskripsi */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold">GerAI</h3>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Connecting communities through the power of local business
              stories. Every entrepreneur has a journey worth sharing.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Anda bisa tambahkan ikon sosial media di sini */}
            </div>
          </div>

          {/* Kolom Explore */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase">
              Explore
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  All Businesses
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Featured Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Community Events
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase">
              Support
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Add Your Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 GerAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
