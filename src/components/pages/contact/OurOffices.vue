<script setup>
import { ref } from "vue";

const selectedImage = ref(1);

const selectImage = (imageIndex) => {
    selectedImage.value = imageIndex;
};
</script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 mx-4 md:mx-28 py-0 md:py-[70px]">
        <div class="w-full md:w-1/2 space-y-2.5">
            <div class="flex items-center gap-2.5 mt-8">
                <div class="w-8 h-0.5 bg-light-primary"></div>
                <h4 class="text-sm">Our Offices</h4>
            </div>
            <div class="space-y-5">
                <h3 class="text-2xl font-semibold md:text-4xl font-raleway text-gradient">Our Offices Across the World</h3>
                <p class="text-[#272D3E]/80 dark:text-white text-sm md:text-base">Our offices are strategically located worldwide to serve you better. Find us<br>near you and experience our exceptional services.</p>
            </div>
        </div>
        <div class="flex flex-col items-center justify-between h-auto">
      <div class="flex justify-center w-full gap-2">
        <div class="relative">
          <img
            :class="selectedImage === 1 ? 'w-72 h-80 dark:filter dark:brightness-75' : 'w-14 h-80'"
            src="@/assets/gallery/1.webp"
            alt="Image 1"
            class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
            @click="selectImage(1)"
          />
          <transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="selectedImage === 1" class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 dark:bg-gray-700/50 backdrop-blur-md border border-white/50">
              <h3 class="text-lg font-bold text-black transition-all duration-300 dark:text-white">Workshop 1</h3>
              <p class="text-xs text-black transition-all duration-300 md:text-sm dark:text-gray-300">Jl. Abdul Halim No.128, Cimahi Tengah, Kota Cimahi 40522</p>
            </div>
          </transition>
        </div>

        <div class="relative">
          <img :class="selectedImage === 2 ? 'w-72 h-80' : 'w-14 h-80'" src="@/assets/gallery/2.webp" alt="Image 2" class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer" @click="selectImage(2)" />
          <transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="selectedImage === 2" class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
              <h3 class="text-lg font-bold text-black transition-all duration-300 dark:text-white">Workshop 2</h3>
              <p class="text-xs text-black transition-all duration-300 md:text-sm dark:text-gray-300">Jl. Terusan Jakarta No. 175, Antapani Kulon, Kec Antapani, Kota Bandung</p>
            </div>
          </transition>
        </div>

        <div class="relative">
          <img :class="selectedImage === 3 ? 'w-72 h-80' : 'w-14 h-80'" src="@/assets/gallery/3.webp" alt="Image 3" class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer" @click="selectImage(3)" />
          <transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="selectedImage === 3" class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
              <h3 class="text-lg font-bold text-black transition-all duration-300 dark:text-white">Workshop 3</h3>
              <p class="text-xs text-black transition-all duration-300 md:text-sm dark:text-gray-300">BTC (Baros Information, Technology & Creative Center)</p>
            </div>
          </transition>
        </div>
      </div>
    </div>

    </div>
</template>

<style>
.active-dot {
    content: url('@/assets/Active dot.svg');
}
</style>