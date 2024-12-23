<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <div class="max-w-screen-2xl mx-auto">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>