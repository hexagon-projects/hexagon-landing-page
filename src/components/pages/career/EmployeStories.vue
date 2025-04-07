<script setup>
/* ------------------------------ */
/* Import dan Deklarasi Modul     */
/* ------------------------------ */
import Image1 from "@/assets/testimoni/seys.jpg";
import Image2 from "@/assets/testimoni/bud.png";
import Image3 from "@/assets/female.png";
import { ref, onMounted, onUnmounted } from "vue";
import Button from "@/components/button/Button.vue";
import ButtonOutline from "@/components/button/ButtonOutline.vue";

/* ------------------------------ */
/* Data Stories Karyawan          */
/* ------------------------------ */
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

/* ------------------------------ */
/* Reactive State dan Interval    */
/* ------------------------------ */
// Indeks slide saat ini
const currentSlide = ref(0);
// Menyimpan interval auto-slide
let autoSlideInterval = null;

/* ------------------------------ */
/* Fungsi Navigasi Slide          */
/* ------------------------------ */
// Fungsi untuk berpindah ke slide berikutnya
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % employeeStories.length;
};

// Fungsi untuk berpindah ke slide sebelumnya
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + employeeStories.length) % employeeStories.length;
};

/* ------------------------------ */
/* Lifecycle Hooks                */
/* ------------------------------ */
// Set auto-slide saat komponen dimuat
onMounted(() => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

// Bersihkan interval saat komponen di-unmount
onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});
</script>

<template>
  <!-- Container utama dengan padding responsif -->
  <div class="px-4 md:px-[112px]">
    <!-- Header Section -->
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">
        Employee Stories
      </span>
      <h1 class="font-raleway text-[24px] md:text-[30px] font-bold text-gray-800 dark:text-gradient">
        Whether you're an experienced professional or a passionate intern,<br />
        find a place to grow and make an impact with us.
      </h1>
    </div>

    <!-- Carousel Container -->
    <div class="relative">
      <!-- Navigasi Tombol Prev dan Next (hanya untuk desktop) -->
      <div class="flex items-center justify-between">
        <!-- Tombol Previous -->
        <button 
          @click="prevSlide" 
          class="absolute hidden md:block left-0 z-10 p-6 transition-all duration-300 bg-gray-50 rounded-full dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Slider Wrapper -->
        <div class="md:mx-24 overflow-hidden shadow-2xl shadow-[#4C567314]/10 rounded-2xl">
          <!-- Container untuk slide, menggunakan transform untuk perpindahan slide -->
          <div 
            class="flex transition-transform duration-500 ease-in-out" 
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Looping tiap cerita karyawan -->
            <div v-for="(story, index) in employeeStories" :key="index" class="flex-shrink-0 w-full">
              <div class="p-6 md:p-8 transition-all duration-300 bg-white dark:bg-black rounded-2xl dark:border-gray-800">
                <!-- Flex container untuk mengatur layout gambar dan konten teks -->
                <div class="flex flex-col items-center gap-6 md:flex-row">
                  <!-- Gambar Profil Karyawan -->
                  <img 
                    :src="story.image" 
                    :alt="story.name" 
                    class="object-cover rounded-full aspect-square w-32 h-32 md:w-48 md:h-48 ring-4 ring-blue-100 dark:ring-blue-900" 
                  />
                  
                  <!-- Konten Teks Testimoni -->
                  <div class="text-left">
                    <div class="space-y-2 px-4 md:px-6 relative">
                      <!-- Icon Double Quotes sebagai dekorasi -->
                      <img 
                        src="@/assets/career/double-quotes.svg" 
                        alt="" 
                        class="absolute right-0 top-0 w-8 h-8 md:w-10 md:h-10" 
                      />
                      <!-- Nama dan Posisi Karyawan -->
                      <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                        {{ story.name }}
                      </h3>
                      <p class="text-sm text-black dark:text-white">
                        {{ story.position }} | {{ story.type }}
                      </p>
                      <!-- Testimoni Karyawan -->
                      <p class="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        "{{ story.testimony }}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Next -->
        <button 
          @click="nextSlide" 
          class="absolute hidden md:block right-0 z-10 p-6 transition-all duration-300 bg-gray-50 rounded-full dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Dot Navigation -->
      <div class="flex justify-center gap-2 mt-6">
        <button 
          v-for="(_, index) in employeeStories" 
          :key="index" 
          @click="currentSlide = index" 
          class="w-3 h-3 transition-all duration-300 rounded-full" 
          :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'"
        ></button>
      </div>
    </div>
  </div>
</template>

<style>
/* Kelas tambahan untuk styling active dot (jika diperlukan) */
.active-dot {
  content: url("@/assets/Active dot.svg");
}
</style>
