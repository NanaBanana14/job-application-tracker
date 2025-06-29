<template>
  <div class="landing-page">
    <HeroSection @startApplication="handleStart" />
    <FeaturesSection />
    <AboutSection />
    <FinalCTA />
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import FinalCTA from '@/components/FinalCTA.vue'
import Footer from '@/components/Footer.vue'

function handleStart() {
  window.location.href = '/app'
}
</script>

<style scoped>
.landing-page {
  @apply bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white min-h-screen space-y-12;
}
</style>
