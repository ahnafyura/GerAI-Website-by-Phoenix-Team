import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layout
import Layout from './components/Layout/Layout'; 

// Pages
import Homepage from './pages/Homepage';
import CategoriesPage from './pages/CategoriesPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import SubmitBusinessPage from './pages/SubmitBusinessPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Konfigurasi router untuk aplikasi.
 * Menggunakan createBrowserRouter untuk setup rute berbasis objek.
 * * "Layout" (Navbar + Footer) akan membungkus semua halaman (children).
 * "errorElement" akan menangani error yang tidak terduga di dalam rute.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />, // Halaman error default
    children: [
      {
        index: true, // "index: true" berarti ini adalah elemen untuk path "/"
        element: <Homepage />,
      },
      {
        path: "categories", // Menjadi "/categories"
        element: <CategoriesPage />,
      },
      {
        path: "business/:businessId", // Menjadi "/business/nama-bisnis-123"
        element: <BusinessDetailPage />,
      },
      {
        path: "search", // Menjadi "/search"
        element: <SearchResultsPage />,
      },
      {
        path: "bagikan-kisah", // Menjadi "/bagikan-kisah"
        element: <SubmitBusinessPage />,
      },
      {
        path: "*", // Catch-all untuk 404 Not Found
        element: <NotFoundPage />,
      },
    ],
  },
]);

// 3. Render Router
function App() {
  // RouterProvider akan me-render komponen halaman yang sesuai dengan URL
  return <RouterProvider router={router} />;
}

export default App;