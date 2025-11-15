# GerAI - Direktori Kisah UMKM Lokal

GerAI adalah platform direktori UMKM (Usaha Mikro, Kecil, dan Menengah) yang berfokus pada **storytelling** — menggali dan menampilkan kisah inspiratif di balik setiap bisnis lokal. Nama "GerAI" merupakan gabungan dari "Gerai" dan "AI/Kisah", mencerminkan misi proyek ini: **Ulik Kisahnya**.

Proyek ini dibuat sebagai submisi untuk **MIA (Multimedia In Action) 2025** dengan tema *Empowering Visionaries Impacting Industries*. Seluruh aplikasi dibuat sebagai **Front-End murni** sesuai ketentuan kompetisi.

## ✨ Fitur Utama

* **Direktori UMKM Dinamis**
  Data UMKM diambil dari database JSON statis (`umkm-data.json`) dan dirender secara dinamis.

* **Pencarian Real-time (TBD)**
  Search bar pada navbar untuk memfilter bisnis secara instan.

* **Halaman Detail Bisnis**
  Setiap UMKM memiliki halaman detail (melalui `BusinessDetailPage.jsx`) lengkap dengan cerita, galeri, dan lokasi (sesuai TM MIA 2025).

* **Filter Kategori**
  Pengguna dapat menelusuri UMKM berdasarkan kategori menggunakan `CategoriesPage.jsx` dan `categories-data.json`.

* **X-Factor Feature – Simpan Favorit (Tanpa Database)**
  Menggunakan React Hook (`useFavorites.js`) dengan penyimpanan pada **Local Storage**. Tetap memenuhi aturan *front-end only*.

* **Desain Modern & Responsif**
  Dibangun menggunakan Tailwind CSS.

---

## 💻 Tech Stack

* **React 19** (Vite)
* **Tailwind CSS**
* **React Router v6+**
* **React Hooks** (useState, useEffect, useContext)
* **Local Storage** (untuk fitur favorit)
* **ESLint**

---

## 📂 Struktur Folder

```
PHOENIXDIR/
├── public/           # Aset statis (gambar UMKM)
├── src/
│   ├── assets/       # Logo, ikon, dll.
│   ├── components/
│   │   ├── common/   # Komponen UI umum (BusinessCard.jsx)
│   │   └── layout/   # Navbar, Footer, Layout global
│   ├── data/         # JSON statis untuk UMKM & kategori
│   ├── hooks/        # Custom hooks (useFavorites.js)
│   ├── pages/        # Halaman (Home, Categories, Detail, dll.)
│   ├── App.jsx       # Routing utama
│   └── index.css     # CSS global & setup Tailwind
├── .gitignore
├── package.json
└── vite.config.js
```

---

## 🛠️ Menjalankan Projek Secara Lokal

1. **Clone repository**

```
git clone https://github.com/USERNAME_ANDA/NAMA_REPO.git
```

2. **Masuk direktori proyek**

```
cd PHOENIXDIR
# atau cd NAMA_REPO
```

3. **Instal dependency**

```
npm install
```

4. **Jalankan development server**

```
npm run dev
```

5. **Buka di browser**
   [http://localhost:5173](http://localhost:5173)

---

## 📄 Lisensi

Proyek ini menggunakan **Lisensi MIT**.

---
