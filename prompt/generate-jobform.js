import Replicate from "replicate";
import fs from "fs";
import "dotenv/config";

// Inisialisasi Replicate SDK
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});


const prompt = `
Buatkan komponen Vue 3 (Single File Component) bernama JobForm.vue menggunakan Composition API dan Tailwind CSS.

Form ini terdiri dari:
- Perusahaan (input text)
- Posisi (input text)
- Status (select dropdown: Pending, Interview, Diterima, Ditolak)
- Tanggal Apply (input date)
- Catatan (textarea opsional)

Gunakan reactive() untuk form state.
Terapkan validasi sederhana: semua field wajib diisi kecuali catatan.
Saat form disubmit:
- Simpan data sebagai objek JSON ke localStorage (key: 'job_applications')
- Tambahkan ke array yang sudah ada
- Reset form setelah submit

Tambahkan class Tailwind agar form terlihat rapi dan responsif.
Form harus bisa digunakan langsung dalam <script setup> Vue 3.
Tampilkan alert 'Data berhasil disimpan!' setelah submit berhasil.
`;

async function runPrompt() {
  try {
    const output = await replicate.run(
      "ibm-granite/granite-3.3-8b-instruct",
      {
        input: { prompt }
      }
    );

    const result = Array.isArray(output) ? output.join("\n") : String(output);

    if (!fs.existsSync("./logs")) fs.mkdirSync("./logs");

    fs.writeFileSync("./logs/JobForm-from-AI.vue", result);
    console.log("✅ Output disimpan di logs/JobForm-from-AI.vue");
  } catch (err) {
    console.error("❌ Terjadi error:", err.message);
  }
}

runPrompt();
