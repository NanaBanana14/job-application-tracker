<template>
  <div class="bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-6 w-full max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
      <component :is="isEdit ? PencilSquareIcon : PlusCircleIcon" class="w-6 h-6" />
      {{ isEdit ? 'Edit Lamaran' : 'Tambah Lamaran' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block mb-1">Perusahaan</label>
        <input v-model="form.company" type="text" required class="input" />
      </div>

      <div>
        <label class="block mb-1">Posisi</label>
        <input v-model="form.position" type="text" required class="input" />
      </div>

      <div>
        <label class="block mb-1">Status</label>
        <select v-model="form.status" required class="select-input">
          <option value="">Pilih Status</option>
          <option value="Pending">Pending</option>
          <option value="Interview">Interview</option>
          <option value="Diterima">Diterima</option>
          <option value="Ditolak">Ditolak</option>
        </select>
      </div>

      <div>
        <label class="block mb-1">Tanggal Apply</label>
        <input v-model="form.tanggal_apply" type="date" required class="input" />
      </div>

      <div>
        <label class="block mb-1">Catatan (Opsional)</label>
        <textarea v-model="form.catatan" rows="3" class="input"></textarea>
      </div>

      <div class="flex justify-between items-center pt-2">
        <button
          type="button"
          @click="handleCancel"
          v-if="isEdit"
          class="text-sm text-gray-300 hover:underline"
        >
          Batal
        </button>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-semibold transition disabled:opacity-50"
          :disabled="!validateForm()"
        >
          {{ isEdit ? 'Update' : 'Simpan' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'
import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/vue/24/solid'

const props = defineProps({ editData: Object })
const emit = defineEmits(['job-submitted', 'update', 'cancel'])

const isEdit = computed(() => !!props.editData)

const form = reactive({
  company: '',
  position: '',
  status: '',
  tanggal_apply: '',
  catatan: '',
  index: null,
})

watch(
  () => props.editData,
  (newVal) => {
    if (newVal) {
      Object.assign(form, newVal)
    } else {
      resetForm()
    }
  },
  { immediate: true },
)

function validateForm() {
  return form.company && form.position && form.status && form.tanggal_apply
}

function handleSubmit() {
  if (!validateForm()) return

  if (isEdit.value) {
    emit('update', { ...form })
  } else {
    emit('job-submitted', { ...form })
  }

  resetForm()
}

function handleCancel() {
  emit('cancel')
  resetForm()
}

function resetForm() {
  form.company = ''
  form.position = ''
  form.status = ''
  form.tanggal_apply = ''
  form.catatan = ''
  form.index = null
}
</script>

<style scoped>
.input {
  @apply w-full px-3 py-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300;
}
</style>
