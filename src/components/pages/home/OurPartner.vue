<script setup>
import { ref } from 'vue';

const logos = ref([
  {
    alt: "logo 1",
    path: "/src/assets/our-partner/logo-1.png",
  },
  {
    alt: "logo 2",
    path: "/src/assets/our-partner/image 4.png",
  },
  {
    alt: "logo 3",
    path: "/src/assets/our-partner/logo-3.png",
  },
  {
    alt: "logo 4",
    path: "/src/assets/our-partner/logo-4.png",
  },
  {
    alt: "logo 5",
    path: "/src/assets/our-partner/logo-5.png",
  }
])
</script>

<template>
  <div class="px-[56px] md:px-[112px] dark:bg-black">
    <p class="mb-6 font-medium text-center text-gray-700 font-raleway dark:text-[#F0EFF5]">Integrated with over 100
      mainstream media outlets
    </p>
    <div class="flex items-center justify-center gap-[98px]">
      <img v-for="logo in logos" :key="logo.path" :src="logo.path" :alt="logo.alt">
    </div>
  </div>
</template>