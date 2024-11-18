<script setup>
import Navbar from './components/Navbar/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="pt-[96px] px-[56px] md:px-[112px]">
    <RouterView />
  </div>
</template>