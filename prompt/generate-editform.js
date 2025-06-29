import Replicate from "replicate";
import fs from "fs";
import "dotenv/config";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

const input = {
    prompt: `
Buatkan satu file komponen Vue 3 (<script setup>) dengan fitur berikut:
- Tambah dan Edit lamaran kerja: perusahaan, posisi, status, tanggal apply, catatan
- Pakai localStorage
- Validasi form sederhana
- Emit event 'save' dan 'update' untuk parent
- Tombol Simpan dan Update tampil sesuai mode
- Tailwind CSS
- Mode edit bisa dibatalkan
`,
};

const run = async () => {
    const output = await replicate.run(
        "ibm-granite/granite-3.3-8b-instruct",
        { input }
    );

    let result = "";
    for await (const chunk of output) {
        result += chunk;
    }

    fs.writeFileSync("EditJobForm.vue", result);
    console.log("EditJobForm.vue berhasil dibuat!");
};

run();
