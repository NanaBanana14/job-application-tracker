# Chapter 1: Struktur Aplikasi Vue

Ini adalah bab pertama dari tutorial **Job Application Tracker**. Di sini kamu akan memahami struktur dasar aplikasi sebelum fitur-fitur dikembangkan lebih lanjut.

---

## Apa Itu Struktur Aplikasi?

Struktur aplikasi menentukan bagaimana file dan komponen saling terhubung. Tujuannya agar kode rapi, mudah dipahami, dan terorganisir. Dalam aplikasi Vue, kita biasanya memiliki:

- `index.html`: Tempat aplikasi dirender.
- `main.js`: Titik masuk yang membuat instance Vue.
- `App.vue`: Komponen root, tempat `<router-view />` berada.
- `router/index.js`: Mengatur halaman (routing) berdasarkan URL.

---

## Alur Awal Aplikasi

1. Browser memuat `index.html`.
2. `main.js` dijalankan, membuat instance Vue.
3. `main.js` memasang router dan menampilkan `App.vue`.
4. `App.vue` menampilkan komponen berdasarkan URL lewat `<router-view />`.
5. `router/index.js` menentukan apakah `LandingApp` atau `JobTracker` yang ditampilkan.

---

## Ringkasan File

| File                | Fungsi                                 |
|---------------------|-----------------------------------------|
| `index.html`        | Tempat aplikasi ditampilkan (`#app`)    |
| `main.js`           | Membuat dan memasang Vue instance       |
| `App.vue`           | Komponen utama dengan `<router-view />` |
| `router/index.js`   | Atur navigasi (routing) berdasarkan URL |

---

## Kesimpulan

Bab ini membahas fondasi aplikasi Vue: bagaimana aplikasi dimulai, dan bagaimana struktur file saling terhubung.  
Selanjutnya, kita akan membahas lebih dalam soal [Vue Router](README/02_vue_router.md) untuk navigasi antar halaman.
