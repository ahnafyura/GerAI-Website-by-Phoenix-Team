import React from 'react';
// Outlet adalah komponen dari react-router-dom yang akan
// merender halaman aktif (Homepage, CategoriesPage, dll.)
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (

    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Konten Halaman akan dimuat di sini */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;

