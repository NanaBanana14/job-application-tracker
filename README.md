# Tutorial: **Pelacak Lamaran Kerja (Job Application Tracker)**

Proyek ini adalah aplikasi sederhana **Pelacak Lamaran Kerja**.  
Aplikasi ini membantu pengguna untuk **mencatat**, **mengorganisir**, dan *memantau* status lamaran kerja mereka langsung di browser.  
Seluruh data disimpan secara aman di *LocalStorage* milik pengguna, tanpa memerlukan server backend.

---

## Tampilan Visual Struktur

```mermaid
flowchart TD
    A0["Struktur Aplikasi Vue"]
    A1["Komponen Vue (Single File Component)"]
    A2["Vue Router"]
    A3["Manajemen Data Lamaran (LocalStorage)"]
    A4["Komponen Form Lamaran (JobForm.vue)"]
    A5["Komponen Daftar Lamaran (ListLamaran.vue)"]
    A6["Tailwind CSS"]
    A7["Vue Composition API (<script setup>)"]
    
    A0 -- "Menggunakan" --> A2
    A0 -- "Terdiri dari" --> A1
    A2 -- "Menuju ke" --> A1
    A1 -- "Menggunakan Logika" --> A7
    A1 -- "Diberi Gaya Oleh" --> A6
    A1 -- "Mengelola Data" --> A3
    A4 -- "Mengirim Data ke" --> A3
    A5 -- "Menampilkan Data dari" --> A3
    A5 -- "Memicu Aksi pada" --> A3
````

---

## Daftar Bab

1. [Struktur Aplikasi Vue](01_vue_application_structure_.md)
2. [Vue Router](02_vue_router_.md)
3. [Komponen Vue (Single File Component)](03_vue_components__single_file_components__.md)
4. [Manajemen Data Lamaran (LocalStorage)](04_job_data_management__localstorage__.md)
5. [Komponen Form Lamaran (`JobForm.vue`)](05_job_form_component___jobform_vue___.md)
6. [Komponen Daftar Lamaran (`ListLamaran.vue`)](06_job_list_component___listlamaran_vue___.md)
7. [Vue Composition API (`<script setup>`)](07_vue_composition_api____script_setup____.md)
8. [Tailwind CSS](08_tailwind_css_.md)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
