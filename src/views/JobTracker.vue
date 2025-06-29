<script setup>
import { ref, onMounted } from 'vue'
import JobForm from '../components/JobForm.vue'
import ListLamaran from '../components/ListLamaran.vue'

const dataLamaran = ref([])
const editData = ref(null)

onMounted(() => {
  const stored = localStorage.getItem('job_applications')
  dataLamaran.value = stored ? JSON.parse(stored) : []
})

function tambahJobBaru(job) {
  dataLamaran.value.push(job)
  localStorage.setItem('job_applications', JSON.stringify(dataLamaran.value))
}

function hapusJob(index) {
  dataLamaran.value.splice(index, 1)
  localStorage.setItem('job_applications', JSON.stringify(dataLamaran.value))
}

function editJob(index) {
  editData.value = { ...dataLamaran.value[index], index }
}

function updateJob(updated) {
  const i = updated.index
  if (i !== undefined) {
    dataLamaran.value[i] = { ...updated }
    localStorage.setItem('job_applications', JSON.stringify(dataLamaran.value))
    editData.value = null
  }
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white py-8 px-4"
  >
    <div class="max-w-6xl mx-auto space-y-8">
      <header class="text-center space-y-2">
        <h1 class="text-3xl md:text-4xl font-bold tracking-wide">Job Application Tracker</h1>
        <p class="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          Kelola dan pantau semua lamaran pekerjaanmu dengan mudah. Tambahkan, edit, dan kelola
          status setiap aplikasi secara efisien.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Form -->
        <div class="shadow-lg">
          <JobForm
            @job-submitted="tambahJobBaru"
            :editData="editData"
            @update="updateJob"
            @cancel="editData = null"
          />
        </div>

        <div class="shadow-lg">
          <ListLamaran :dataLamaran="dataLamaran" @hapus="hapusJob" @edit="editJob" />
        </div>
      </div>
    </div>
  </div>
</template>
