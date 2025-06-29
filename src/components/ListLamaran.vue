<template>
  <div class="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl">
    <h2 class="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
      <DocumentTextIcon class="w-6 h-6" />
      Daftar Lamaran Kerja
    </h2>

    <div v-if="dataLamaran.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div
        v-for="(lamaran, index) in dataLamaran"
        :key="index"
        class="bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg text-white space-y-2 relative"
      >
        <div class="absolute top-2 right-2 text-xs text-white/70">#{{ index + 1 }}</div>

        <h3 class="text-lg font-bold">{{ lamaran.company }}</h3>
        <p class="text-sm"><span class="font-semibold">Posisi:</span> {{ lamaran.position }}</p>
        <p class="text-sm flex items-center gap-1">
          <CalendarDaysIcon class="w-4 h-4 text-white/80" />
          {{ formatTanggal(lamaran.tanggal_apply) }}
        </p>
        <p class="text-sm">
          <span class="font-semibold">Status:</span>
          <span
            :class="[
              'px-2 py-1 rounded-full text-xs font-semibold',
              lamaran.status === 'Pending'
                ? 'bg-yellow-400 text-black'
                : lamaran.status === 'Interview'
                  ? 'bg-blue-400 text-white'
                  : lamaran.status === 'Diterima'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white',
            ]"
          >
            {{ lamaran.status }}
          </span>
        </p>

        <p class="text-sm">
          <span class="font-semibold">Catatan:</span> {{ lamaran.catatan || '-' }}
        </p>

        <div class="flex justify-between mt-2">
          <button
            @click="edit(index)"
            class="flex items-center gap-1 bg-yellow-400 text-black py-1 px-3 rounded text-xs hover:bg-yellow-500"
          >
            <PencilSquareIcon class="w-4 h-4" />
            Edit
          </button>
          <button
            @click="hapus(index)"
            class="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-xs"
          >
            <TrashIcon class="w-4 h-4" />
            Hapus
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-white/80 text-center py-6">Belum ada data lamaran.</div>
  </div>
</template>

<script setup>
import {
  PencilSquareIcon,
  TrashIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps(['dataLamaran'])
const emit = defineEmits(['hapus', 'edit'])

function hapus(index) {
  if (confirm('Yakin ingin menghapus lamaran ini?')) {
    emit('hapus', index)
  }
}

function edit(index) {
  emit('edit', index)
}

function formatTanggal(tgl) {
  if (!tgl) return '-'
  const date = new Date(tgl)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
