# Chapter 7: Vue Composition API (`<script setup>`)

Sebelumnya, kita telah menggunakan `ref`, `reactive`, `computed`, `watch`, `defineProps`, dan `defineEmits` tanpa membahas secara mendalam *mengapa* kita menggunakannya. Di bab ini, kita akan mengupas tuntas tentang Vue Composition API dan `<script setup>` — pendekatan modern yang direkomendasikan di Vue 3 untuk menulis logika komponen.

---

## Masalah: Logika Komponen yang Terpisah

Dengan **Options API** lama, satu fitur kecil tersebar di banyak bagian:

- `data` → menyimpan data
- `methods` → logika aksi
- `computed` → data turunan
- `watch` → pemantauan perubahan
- lifecycle (`created`, `mounted`, dll.)

Hal ini menyulitkan untuk membaca logika satu fitur secara utuh.

---

## Solusi: Composition API + `<script setup>`

Dengan **Composition API**, kita bisa menyatukan semua hal di satu tempat — dalam satu blok `<script setup>`.

Keunggulan `<script setup>`:

- Lebih ringkas (tanpa perlu `setup()` dan `return`)
- Semua variabel & fungsi langsung bisa dipakai di `<template>`
- Gunakan `defineProps` dan `defineEmits` tanpa `import`

---

## Konsep Kunci dalam Composition API

### 1. Reactive State: `ref()` dan `reactive()`

- `ref`: untuk nilai primitif atau mengganti seluruh objek
- `reactive`: untuk objek atau array yang propertinya akan dimodifikasi

```js
// JobTracker.vue
const dataLamaran = ref([]) // array reaktif

// JobForm.vue
const form = reactive({
  company: '',
  position: '',
  status: '',
})
````

> Di `<template>`, `.value` tidak perlu — Vue akan unwrap otomatis.

---

### 2. `computed()`

Properti yang otomatis menghitung ulang saat data reaktif berubah.

```js
// JobForm.vue
const isEdit = computed(() => !!props.editData)
```

---

### 3. `watch()`

Untuk menjalankan aksi ketika data berubah.

```js
// JobForm.vue
watch(
  () => props.editData,
  (newVal) => {
    if (newVal) Object.assign(form, newVal)
    else resetForm()
  },
  { immediate: true }
)
```

---

### 4. Lifecycle Hooks

Menjalankan aksi di tahap tertentu siklus hidup komponen.

```js
// JobTracker.vue
onMounted(() => {
  const stored = localStorage.getItem('job_applications')
  dataLamaran.value = stored ? JSON.parse(stored) : []
})
```

---

### 5. `defineProps()`

Menerima data dari komponen parent.

```js
const props = defineProps(['dataLamaran'])
```

---

### 6. `defineEmits()` dan `emit()`

Untuk mengirim sinyal/aksi ke komponen parent.

```js
const emit = defineEmits(['hapus'])

function hapus(index) {
  if (confirm('Yakin?')) emit('hapus', index)
}
```

---

## Cara Kerja `<script setup>`

Vue akan mengubah:

```vue
<script setup>
const count = ref(0)
</script>
```

Menjadi:

```js
setup() {
  const count = ref(0)
  return { count }
}
```

Tapi kamu tidak perlu menulis `setup()` dan `return` secara eksplisit!

---

## Kenapa Gunakan Composition API?

| Keunggulan                       | Penjelasan                                          |
| -------------------------------- | --------------------------------------------------- |
| Terbaca lebih jelas              | Logika fitur dikelompokkan di satu tempat           |
| Lebih mudah digunakan kembali    | Bisa diekstrak jadi composables                     |
| Lebih singkat                    | Tidak perlu `setup()` dan `return` secara eksplisit |
| Dukungan TypeScript              | Lebih kuat untuk proyek besar                       |

---

## Tabel Ringkasan Penggunaan Composition API

| Konsep          | Cara Penggunaan                  | Tujuan                                              | Contoh di Proyek |
| --------------- | -------------------------------- | --------------------------------------------------- | ---------------- |
| `ref()`         | `const x = ref(nilai)`           | Data reaktif primitif                               | `dataLamaran`    |
| `reactive()`    | `const obj = reactive({...})`    | Objek reaktif                                       | `form`           |
| `computed()`    | `const y = computed(() => ...)`  | Data turunan reaktif                                | `isEdit`         |
| `watch()`       | `watch(sumber, callback)`        | Efek samping saat data berubah                      | `editData`       |
| `onMounted()`   | `onMounted(() => ...)`           | Menjalankan aksi saat komponen terpasang            | `load data`      |
| `defineProps()` | `const props = defineProps(...)` | Mendeklarasikan props                               | Semua komponen   |
| `defineEmits()` | `const emit = defineEmits(...)`  | Mendeklarasikan dan mengirim event ke komponen atas | `hapus`, `edit`  |

---

## Kesimpulan

Bab ini mengulas konsep penting dari **Vue Composition API** dengan sintaks modern `<script setup>`, menjelaskan:

* Perbedaan antara `ref` dan `reactive`
* Peran `computed`, `watch`, dan lifecycle hooks
* Fungsi `defineProps` dan `defineEmits`
* Alasan kita menggunakan pendekatan ini untuk membuat komponen lebih terstruktur dan mudah dibaca

Kamu sekarang memiliki fondasi yang kuat untuk membaca dan menulis logika komponen modern di Vue 3.

➡️ Ayo lanjut ke [Chapter 8: Tailwind CSS](README/08_tailwind_css.md) untuk belajar bagaimana kita menata tampilan aplikasi menggunakan kelas-kelas utilitas!
