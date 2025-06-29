import Replicate from "replicate";
import fs from "fs";
import path from "path";
import "dotenv/config";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

const prompt = `
Buatkan satu file komponen Vue 3 (<script setup>) dengan fitur dan konten berikut:

1. Halaman Landing Page yang menarik:
  - Hero section dengan gambar, judul, deskripsi, tombol CTA (Mulai Sekarang)
  - Section fitur (3 fitur, icon + judul + deskripsi)
  - Section tentang (gambar dan teks di samping)
  - Section CTA terakhir
  - Footer

2. Ketika klik tombol "Mulai Sekarang", tampilkan halaman aplikasi:

3. Halaman Aplikasi Pelacak Lamaran Kerja:
  - Form tambah/edit lamaran kerja: perusahaan, posisi, status, tanggal apply, catatan
  - Validasi sederhana agar field tidak kosong
  - List semua lamaran kerja dengan tampilan card
  - Fitur edit dan hapus (edit di kiri, hapus di kanan)
  - Tombol simpan dan update, serta tombol batal jika sedang edit
  - Gunakan localStorage untuk simpan data
  - Data langsung berubah tanpa reload

4. Gunakan Tailwind CSS untuk styling modern dan responsif
5. Tulis dalam satu file .vue menggunakan <template> dan <script setup>

Gunakan data dummy untuk gambar (misal: source.unsplash.com), dan semua teks dalam bahasa Indonesia.
`;

console.log("⏳ Mengirim prompt ke IBM Granite...");

try {
    const output = await replicate.run(
        "ibm-granite/granite-3.3-8b-instruct",
        {
            input: { prompt },
        }
    );

    const vueCode = output.join("\n");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const logsDir = path.resolve("logs");

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    const filePath = path.join(logsDir, `LandingApp-${timestamp}.vue`);
    fs.writeFileSync(filePath, vueCode);

    console.log("Output disimpan di:", filePath);
} catch (err) {
    console.error("Gagal menjalankan prompt:", err.message);
}
