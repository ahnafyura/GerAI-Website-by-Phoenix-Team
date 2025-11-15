# GerAI Direktori Kisah UMKM Lokal

GerAI adalah platform direktori UMKM yang berfokus pada storytelling untuk menggali dan menampilkan kisah inspiratif di balik setiap bisnis lokal. Nama GerAI merupakan gabungan dari Gerai dan AI Kisah yang mencerminkan misi proyek ini yaitu Ulik Kisahnya.

Proyek ini dibuat sebagai submisi untuk MIA Multimedia In Action 2025 dengan tema Empowering Visionaries Impacting Industries. Seluruh aplikasi dibuat sebagai Front End murni sesuai ketentuan kompetisi.

## Tampilan Aplikasi

<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p1.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p2.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p3.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p4.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p5.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p6.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p7.png" width="600" />
<img src="https://raw.githubusercontent.com/ahnafyura/GerAI-Website-by-Phoenix-Team/main/img/p8.png" width="600" />

---

## Fitur Utama

* Direktori UMKM Dinamis
  Data UMKM diambil dari database JSON statis umkm data json dan dirender secara dinamis.

* Pencarian Real time TBD
  Search bar pada navbar untuk memfilter bisnis secara instan.

* Halaman Detail Bisnis
  Setiap UMKM memiliki halaman detail melalui BusinessDetailPage jsx lengkap dengan cerita galeri dan lokasi sesuai TM MIA 2025.

* Filter Kategori
  Pengguna dapat menelusuri UMKM berdasarkan kategori menggunakan CategoriesPage jsx dan categories data json.

* X Factor Simpan Favorit Tanpa Database
  Menggunakan React Hook useFavorites js dengan penyimpanan pada Local Storage. Tetap memenuhi aturan front end only.

* Desain Modern dan Responsif
  Dibangun menggunakan Tailwind CSS.

---

## Tech Stack

* React 19 Vite
* Tailwind CSS
* React Router v6
* React Hooks useState useEffect useContext
* Local Storage untuk fitur favorit
* ESLint

---

## Struktur Folder

```
PHOENIXDIR/
├── public/           # Aset statis seperti gambar UMKM
├── src/
│   ├── assets/       # Logo ikon dan aset lainnya
│   ├── components/
│   │   ├── common/   # Komponen UI umum seperti BusinessCard jsx
│   │   └── layout/   # Navbar Footer dan layout
│   ├── data/         # JSON statis untuk UMKM dan kategori
│   ├── hooks/        # Custom hooks seperti useFavorites js
│   ├── pages/        # Halaman seperti Home Categories Detail dan lain lain
│   ├── App jsx       # Routing utama
│   └── index css     # CSS global dan setup Tailwind
├── .gitignore
├── package json
└── vite config js
```

---

## Menjalankan Proyek Secara Lokal

1. Clone repository

```
git clone https://github.com/USERNAME/NAMA REPO.git
```

2. Masuk direktori proyek

```
cd PHOENIXDIR
```

3. Instal dependency

```
npm install
```

4. Jalankan development server

```
npm run dev
```

5. Buka di browser

[http://localhost:5173](http://localhost:5173)

---

## Lisensi

Proyek ini menggunakan Lisensi MIT.
