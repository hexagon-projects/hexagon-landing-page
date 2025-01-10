<script setup>
import Button from '@/components/button/Button.vue';
</script>

<template>
  <div class="relative h-screen max-h-[500px] mb-16 md:relative">
    <div
      class="flex flex-col items-center justify-center hero-section-bg absolute w-full h-full bg-no-repeat z-0 -mt-[48px]">
      <span class="bg-gradient-to-b absolute bottom-0 h-1/2 to-white z-[2]"></span>
      <p class="mt-4 mb-2 text-white">
        <a href="#" class="text-white bg-[#02B5FF] rounded-3xl px-3 py-2">Subscribe</a> Free for basic Plan
      </p>
      <h1 class="mt-5 mb-10 text-5xl font-bold text-center text-white">
        Build the Future with <br>Us! Start Your <br> Partnership Now!
      </h1>
      <div class="flex flex-col items-center mb-5 space-x-4 md:flex">
        <Button class="px-4 py-2 mb-5 text-white rounded md:bg-blue-600 hover:bg-blue-700">
          <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
          <span class="text-white">Let’s Chat!</span>
        </Button>
        <Button class="px-4 py-2 text-gray-800 bg-transparent border border-white rounded hover:bg-blue-600 ">
          <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
          <span class="text-white">Request Consultation</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section-bg {
    background-image: url(@/assets/Ornament.png), linear-gradient(to bottom, #2F84FF, #0C57C3);
    background-position: center;
    background-size: cover;
}
</style>