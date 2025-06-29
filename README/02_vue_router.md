# Chapter 2: Vue Router

Di bab sebelumnya, kita sudah bahas struktur dasar aplikasi. Sekarang kita pelajari **Vue Router**, sistem navigasi yang memungkinkan aplikasi punya banyak tampilan (halaman) tanpa perlu reload penuh.

---

## Apa Itu Vue Router?

Vue Router adalah alat untuk:
- Menentukan komponen apa yang tampil berdasarkan URL (misal `/` atau `/app`)
- Menyisipkan komponen tersebut ke dalam `<router-view />` di `App.vue`

---

## Konsep Inti Vue Router

| Konsep           | Penjelasan                                      |
|------------------|--------------------------------------------------|
| `routes`         | Daftar aturan URL → Komponen                     |
| View Component   | Komponen yang tampil per halaman (`LandingApp`, `JobTracker`) |
| `<router-view>`  | Tempat menampilkan komponen yang dipilih router  |

---

## Contoh Kode Routing (`src/router/index.js`)

```js
import { createRouter, createWebHistory } from 'vue-router'
import LandingApp from '../views/LandingApp.vue'
import JobTracker from '../views/JobTracker.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingApp },
  { path: '/app', name: 'JobTracker', component: JobTracker }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
````

---

## Penempatan Komponen: `App.vue`

```vue
<template>
  <router-view /> <!-- Komponen aktif akan muncul di sini -->
</template>
```

---

## Navigasi Antar Halaman

* Ketik URL di browser: `/app` → tampilkan `JobTracker.vue`
* Klik tombol/link → bisa pakai `window.location.href = '/app'` (saat ini) atau `router.push('/app')` (lebih baik)

---

## Alur Navigasi (Singkat)

1. User buka `/app`
2. Router cocokkan URL → pilih `JobTracker.vue`
3. `App.vue` tampilkan komponen ini lewat `<router-view />`
4. Konten berganti tanpa reload penuh

---

## Kesimpulan

Vue Router menghubungkan URL dengan komponen. Dengan bantuan `<router-view />`, kita bisa membuat aplikasi SPA yang terasa seperti multi-page.

Selanjutnya, kita akan bahas bagaimana **Vue Components** dibangun dan digunakan. Yuk lanjut ke [Chapter 3: Komponen Vue (Single File Components)](README/03_vue_components_single_file_components.md)

