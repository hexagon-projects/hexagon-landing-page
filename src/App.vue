<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <div class="mx-auto max-w-screen-2xl dark:bg-black">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>