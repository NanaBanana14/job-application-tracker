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

1. [Struktur Aplikasi Vue](README/01_vue_application_structure.md)
2. [Vue Router](README/02_vue_router.md)
3. [Komponen Vue (Single File Component)](README/03_vue_components_single_file_components.md)
4. [Manajemen Data Lamaran (LocalStorage)](README/04_job_data_management_localstorage.md)
5. [Komponen Form Lamaran (`JobForm.vue`)](README/05_job_form_component_jobform_vue.md)
6. [Komponen Daftar Lamaran (`ListLamaran.vue`)](README/06_job_list_component_listlamaran_vue.md)
7. [Vue Composition API (`<script setup>`)](README/07_vue_composition_api_script_setup.md)
8. [Tailwind CSS](README/08_tailwind_css.md)


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
