<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <p class="mt-4 text-gray-900 mb-2">
        <a href="#" class="text-gray-800 bg-blue-300 rounded-3xl px-3 py-2">Subscribe</a> Free for basic Plan
      </p>
      <h1 class="text-5xl font-bold text-center mb-4 text-gray-900">
        Build the Future with Us! Start Your Partnership Now!
      </h1>
      <div class="flex space-x-4 mb-5">
        <Button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Let’s Chat!
        </Button>
        <Button class="bg-white text-gray-800 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 ">
            <span class="h-2 w-2 bg-light-secondary block rounded-full"></span>
            <span class="text-gray-800 hover:text-white">Request Consultation</span>
        </Button>
      </div>
    </div>
  </template>