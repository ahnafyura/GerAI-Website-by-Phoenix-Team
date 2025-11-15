/** @type {import('tailwindcss').Config} */
export default {
  // Ini adalah bagian terpenting:
  // Kita memberi tahu Tailwind untuk memindai SEMUA file .jsx dan .html
  // untuk mencari class yang kita gunakan (seperti 'bg-white', 'text-lg', dll.)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Nanti kita bisa menambahkan font 'Inter' di sini
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}