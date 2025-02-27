<script setup>
import Image1 from "@/assets/testimoni/seys.jpg";
import Image2 from "@/assets/testimoni/bud.png";
import Image3 from "@/assets/female.png";
import { ref, onMounted, onUnmounted } from "vue";
import Button from "@/components/button/Button.vue";
import ButtonOutline from "@/components/button/ButtonOutline.vue";

const employeeStories = [
  {
    name: "Rifa Radwa Prasetya",
    position: "Fullstack Developer",
    testimony: "Intern at Hexagon has been an incredible journey. The collaborative environment and opportunities for growth have helped me develop both professionally and personally.",
    image: Image1,
    type: "Full Time",
  },
  {
    name: "Budi Imam Prasetyo",
    position: "Full Stack Developer",
    testimony: "I love the innovative culture here. Were always encouraged to think outside the box and implement new technologies to solve complex problems.",
    image: Image2,
    type: "Full Time",
  },
  {
    name: "Emily Rodriguez",
    position: "Project Manager",
    testimony: "The supportive team and flexible work environment make Hexagon a great place to work. Ive grown so much in my role here.",
    image: Image3,
    type: "Full Time",
  },
];

const currentSlide = ref(0);
let autoSlideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % employeeStories.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + employeeStories.length) % employeeStories.length;
};

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});
</script>

<template>
  <div class="px-4 md:px-[112px]">
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">Employee Stories</span>
      <h1 class="font-raleway text-[18px] font-bold text-gray-800 dark:text-white">
        Whether you're an experienced professional or a passionate intern,<br />find a place to grow and make an impact with us.
      </h1>
    </div>
    <div class="relative">
      <div class="flex items-center justify-between">
        <button @click="prevSlide" class="absolute left-0 z-10 hidden p-6 transition-all duration-300 rounded-full md:block bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="md:mx-24 overflow-hidden shadow-2xl shadow-[#4C567314]/10 rounded-2xl">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(story, index) in employeeStories" :key="index" class="flex-shrink-0 w-full">
              <div class="p-6 transition-all duration-300 bg-white md:p-8 dark:bg-black rounded-2xl dark:border-gray-800">
                <!-- Flex container untuk responsif -->
                <div class="flex flex-col items-center gap-6 md:flex-row">
                  <!-- Gambar profil -->
                  <img :src="story.image" :alt="story.name" class="object-cover w-32 h-32 rounded-full aspect-square md:w-48 md:h-48 ring-4 ring-blue-100 dark:ring-blue-900" />
                  
                  <!-- Konten teks -->
                  <div class="text-left">
                    <div class="relative px-4 space-y-2 md:px-6">
                      <!-- Icon double quotes -->
                      <img src="@/assets/career/double-quotes.svg" alt="" class="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10" />
                      
                      <!-- Nama dan posisi -->
                      <h3 class="text-xl font-bold text-gray-800 md:text-2xl dark:text-white">
                        {{ story.name }}
                      </h3>
                      <p class="text-sm text-black dark:text-white">{{ story.position }} | {{ story.type }}</p>
                      
                      <!-- Testimoni -->
                      <p class="text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">"{{ story.testimony }}"</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button @click="nextSlide" class="absolute right-0 z-10 hidden p-6 transition-all duration-300 rounded-full md:block bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div class="flex justify-center gap-2 mt-6">
        <button v-for="(_, index) in employeeStories" :key="index" @click="currentSlide = index" class="w-3 h-3 transition-all duration-300 rounded-full" :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'"></button>
      </div>
    </div>
  </div>
</template>

<style>
.active-dot {
  content: url("@/assets/Active dot.svg");
}
</style>
