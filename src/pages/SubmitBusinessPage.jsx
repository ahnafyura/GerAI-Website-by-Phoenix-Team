import React, { useState } from 'react';
// Impor data kategori Anda jika perlu, atau fetch dari API
// import categoriesData from '../data/categories-data.json';

// Impor CSS khusus untuk halaman ini
import './Submit.css'; 

const SubmitBusinessPage = () => {
  // Menggunakan satu state object untuk menampung semua data formulir
  const [formData, setFormData] = useState({
    namaUsaha: '',
    kategori: '',
    tahunBerdiri: '',
    alamat: '',
    area: '',
    googleMapsLink: '',
    telepon: '',
    deskripsiSingkat: '',
    kisahLengkap: '',
    tags: '', // Pengguna bisa mengetik dipisah koma, cth: "holistic, peaceful"
    jamOperasional: '',
    fotoUtama: null,
  });

  // Handler umum untuk mengubah state pada input teks, textarea, dan select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler khusus untuk file input
  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      fotoUtama: e.target.files[0], // Menyimpan file object
    }));
  };

  // Handler untuk submit formulir
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    
    // -----------------------------------------------------------------
    // UNTUK SAAT INI (DEVELOPMENT):
    // Kita hanya akan console.log data yang terkumpul.
    console.log('Data Formulir yang Dikirim:', formData);
    alert('Kisah Anda telah dikirim! (Silakan cek console log untuk melihat datanya)');
    
    // NANTI (PRODUCTION):
    // Anda akan mengirim `formData` ini ke backend/API Anda.
    // const dataToSend = new FormData();
    // Object.keys(formData).forEach(key => {
    //   dataToSend.append(key, formData[key]);
    // });
    // fetch('/api/submit-umkm', { method: 'POST', body: dataToSend });
    // -----------------------------------------------------------------

    // Opsional: Reset formulir setelah submit
    // setFormData({ ... (state awal yang kosong) ... });
  };

  return (
    <div className="submit-page-container">
      <div className="submit-form-card">
        <h2>Bagikan Kisah UMKM Anda</h2>
        <p>Isi detail di bawah ini untuk mendaftarkan bisnis baru di platform GerAI.</p>

        <form onSubmit={handleSubmit} className="submit-form">
          
          <h3>Informasi Dasar</h3>
          <div className="form-group">
            <label htmlFor="namaUsaha">Nama Usaha</label>
            <input
              type="text"
              id="namaUsaha"
              name="namaUsaha"
              value={formData.namaUsaha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="kategori">Kategori</label>
            <select
              id="kategori"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Kategori</option>
              {/* Anda bisa mapping dari categories-data.json di sini */}
              <option value="Teknologi">Teknologi</option>
              <option value="Automotive">Automotive</option>
              <option value="Kuliner">Kuliner</option>
              <option value="Jasa">Jasa</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tahunBerdiri">Tahun Berdiri (Contoh: 2017)</label>
            <input
              type="number"
              id="tahunBerdiri"
              name="tahunBerdiri"
              value={formData.tahunBerdiri}
              onChange={handleChange}
              placeholder="2017"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fotoUtama">Foto Utama Bisnis</label>
            <input
              type="file"
              id="fotoUtama"
              name="fotoUtama"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>

          <h3>Lokasi & Kontak</h3>
          <div className="form-group">
            <label htmlFor="alamat">Alamat Lengkap</label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="area">Area (Contoh: Gebang, Keputih)</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="googleMapsLink">Link Google Maps (Opsional)</label>
            <input
              type="url"
              id="googleMapsLink"
              name="googleMapsLink"
              value={formData.googleMapsLink}
              onChange={handleChange}
              placeholder="https://maps.app.goo.gl/..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="telepon">No. Telepon / WhatsApp (Opsional)</label>
            <input
              type="tel"
              id="telepon"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              placeholder="08123456789"
            />
          </div>

          <h3>Kisah & Detail Bisnis</h3>
          <div className="form-group">
            <label htmlFor="deskripsiSingkat">Deskripsi Singkat (Tampil di kartu, maks 150 karakter)</label>
            <textarea
              id="deskripsiSingkat"
              name="deskripsiSingkat"
              value={formData.deskripsiSingkat}
              onChange={handleChange}
              maxLength="150"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="kisahLengkap">Kisah Lengkap Bisnis (Tampil di halaman detail)</label>
            <textarea
              id="kisahLengkap"
              name="kisahLengkap"
              value={formData.kisahLengkap}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (Pisahkan dengan koma)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="holistic, experienced, peaceful"
            />
          </div>

          <div className="form-group">
            <label htmlFor="jamOperasional">Jam Operasional</label>
            <input
              type="text"
              id="jamOperasional"
              name="jamOperasional"
              value={formData.jamOperasional}
              onChange={handleChange}
              placeholder="08:00 AM - 05:00 PM"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Kirim Kisah
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitBusinessPage;