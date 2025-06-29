# Chapter 8: Tailwind CSS

Selamat datang kembali! Setelah mempelajari struktur aplikasi, router, komponen, manajemen data dengan LocalStorage, dan logika komponen dengan Composition API, sekarang kita akan bahas bagaimana cara aplikasi kita **terlihat menarik** — yaitu dengan **Tailwind CSS**.

---

## Masalah: Styling Tradisional Merepotkan

Dalam pendekatan tradisional:

```html
<!-- HTML -->
<button class="primary-button">Click Me</button>

<!-- CSS -->
.primary-button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
}
````

Tapi ini sering menyebabkan:

* Sulit memberi nama class
* File CSS menjadi besar dan kompleks
* Konflik antar style
* Harus bolak-balik HTML dan CSS

---

## Solusi: Tailwind CSS - Utility-First Framework

Dengan Tailwind, kamu **tidak perlu bikin class sendiri**, cukup gunakan utility class:

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded">Click Me</button>
```

Penjelasan class:

* `bg-blue-500`: latar biru
* `text-white`: teks putih
* `py-2` dan `px-4`: padding vertikal dan horizontal
* `rounded`: sudut membulat

---

## Cara Tailwind Digunakan di Proyek Kita

### 1. Utility Class di Template Vue

Tailwind digunakan langsung di tag HTML dalam file `.vue`, contohnya:

```vue
<div class="min-h-screen bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white py-8 px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- komponen lainnya -->
  </div>
</div>
```

Beberapa class yang sering dipakai:

| Kategori      | Contoh Class                       |
| ------------- | ---------------------------------- |
| Layout        | `grid`, `flex`, `gap-6`, `w-full`  |
| Spasi         | `py-8`, `px-4`, `mt-2`, `mb-4`     |
| Warna         | `bg-blue-900`, `text-white`        |
| Tipografi     | `text-xl`, `font-bold`             |
| Border/Shadow | `rounded-xl`, `shadow-xl`          |
| Responsive    | `md:grid-cols-2`, `lg:grid-cols-3` |

---

### 2. `@apply` untuk Kelas Khusus

Jika class terlalu panjang atau berulang, kamu bisa ekstrak dengan `@apply`:

```vue
<style scoped>
.input {
  @apply w-full px-3 py-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300;
}
</style>
```

Lalu di HTML cukup pakai:

```html
<input class="input" />
```

Di `src/assets/main.css` juga bisa ditulis:

```css
.select-input {
  @apply w-full px-3 py-2 rounded bg-white text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-blue-300;
}
```

---

### 3. Konfigurasi: `tailwind.config.js`

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Fungsi utama `content`: hanya generate class yang **dipakai**, sehingga CSS akhir tetap ramping.

---

### 4. Integrasi: `main.css`

Tailwind diaktifkan lewat:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Dan custom class bisa ditambahkan di bawahnya.

---

## Proses Build Tailwind (Sederhana)

```mermaid
sequenceDiagram
  participant HTML+Vue
  participant Tailwind
  participant CSS Final
  participant Browser

  HTML+Vue->>Tailwind: Scan file yang dipakai
  Tailwind->>CSS Final: Generate hanya class yang digunakan
  Browser->>CSS Final: Load hasil akhir
  Browser->>HTML: Terapkan style berdasarkan class
```

---

## Kenapa Tailwind?

| Alasan          | Penjelasan                                      |
| --------------- | ----------------------------------------------- |
| Cepat           | Tanpa bolak-balik HTML-CSS                      |
| Konsisten       | Warna, spasi, ukuran berdasarkan skala Tailwind |
| Maintainable    | Komponen tetap ringkas dan modular              |
| Responsif       | Gunakan `sm:`, `md:`, `lg:` langsung di class   |

---

## Perbandingan Singkat

| Aspek          | CSS Tradisional             | Tailwind CSS                      |
| -------------- | --------------------------- | --------------------------------- |
| Cara Styling   | `.card { ... }` di file CSS | `class="bg-white p-4"` di HTML    |
| Struktur File  | HTML + CSS terpisah         | HTML langsung pakai class         |
| Reusabilitas   | Harus bikin class baru      | Bisa pakai `@apply`               |
| Ukuran CSS     | Sering besar                | Tailwind purge yang tidak dipakai |
| Penamaan Class | Harus kreatif               | Sudah disediakan Tailwind         |
| Ubah Style     | Edit file CSS               | Tambah/hapus class langsung       |

---

## Penutup

Kita telah mempelajari:

* Apa itu Tailwind dan mengapa kita menggunakannya
* Contoh penggunaannya di project
* Cara membuat class khusus dengan `@apply`
* Bagaimana konfigurasi dan proses build-nya
