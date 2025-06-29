<template>
  <section class="relative text-center py-16 px-4">
    <img
      :src="heroImage"
      alt="Hero Image"
      class="w-full h-64 md:h-96 object-cover rounded-xl opacity-40"
    />
    <div class="absolute inset-0 flex flex-col items-center justify-center space-y-4">
      <h1 class="text-4xl md:text-6xl font-bold">Job Application Tracker</h1>
      <p class="text-lg md:text-xl">Sederhanakan pelacakan lamaran kerjamu.</p>
      <button
        @click="$router.push('/app')"
        class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Mulai Sekarang
      </button>
    </div>
  </section>
</template>

<script setup>
import heroImage from '../img/hero.png'
</script>
