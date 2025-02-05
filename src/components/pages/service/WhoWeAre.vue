<template>
    <div class="bg-gradient-to-b from-white to-[#F3F8FF] dark:bg-gradient-to-b dark:from-black dark:to-black">
      <div class="flex flex-col gap-9 mt-[36px]">
        <div class="flex flex-col lg:flex-row gap-1 md:gap-[50px]">
          <!-- Bagian Teks (Tetap Sama) -->
          <div class="px-[36px] md:px-[112px]  flex flex-col justify-center mb-6 lg:w-1/2">
            <div>
              <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Who We Are</span>
            </div>
            <h1 class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-4 mt-[36px] dark:text-white">
              More Than 100 Companies<br> Trust and Choose <span class="text-gradient">Hexagon inc</span>
            </h1>
            <p class="text-xs text-justify text-gray-600 dark:text-white">
              Over 100 companies trust us for reliable, tailored digital solutions that enhance their business presence.
            </p>
            <div class="mt-4">
              <Button @click="$router.push({ name: 'contact' })">
                <span class="text-xs">Let's Work</span>
                <font-awesome-icon icon="arrow-right" />
              </Button>
            </div>
          </div>
  
          <!-- Bagian Orbit (Responsive) -->
          <div class="px-[36px] md:px-[112px] flex flex-col lg:w-1/2">
            <div class="relative flex h-[300px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
              <!-- Gambar Utama -->
              <img src="@/assets/services/100+ Client Choose Us.png" alt="services"
                class="font-semibold leading-none text-center pointer-events-none text-8xl w-[150px] md:w-auto" />
  
              <!-- Inner Circles (Mobile: 40px, Desktop: 70px) -->
              <Orbit class="size-[40px] md:size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                :delay="0" :radius="50" md:radius="80" path :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883479.webp" alt="Client 1"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[40px] md:size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                :delay="6" :radius="50" md:radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883480.webp" alt="Client 2"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[40px] md:size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                :delay="12" :radius="50" md:radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883490.webp" alt="Client 3"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[40px] md:size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                :delay="18" :radius="50" md:radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883495.webp" alt="Client 4"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <!-- Middle Circles (Mobile: 60px, Desktop: 90px) -->
              <Orbit class="size-[60px] md:size-[90px] items-center justify-center border-none bg-transparent" :radius="90" md:radius="140"
                :delay="0" :duration="30" path :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883496.webp" alt="Client 5"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[60px] md:size-[90px] items-center justify-center border-none bg-transparent" :radius="90" md:radius="140"
                :delay="10" :duration="30" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/kartika.webp" alt="Client 6"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[60px] md:size-[90px] items-center justify-center border-none bg-transparent" :radius="90" md:radius="140"
                :delay="20" :duration="30" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/ulbi.webp" alt="Client 7"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <!-- Outer Circles (Mobile: 80px, Desktop: 110px) -->
              <Orbit class="size-[80px] md:size-[110px] items-center justify-center border-none bg-transparent" :radius="120" md:radius="190"
                :duration="35" :delay="0" path :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883481.webp" alt="Client 8"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[80px] md:size-[110px] items-center justify-center border-none bg-transparent" :radius="120" md:radius="190"
                :duration="35" :delay="7" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883497.webp" alt="Client 9"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[80px] md:size-[110px] items-center justify-center border-none bg-transparent" :radius="120" md:radius="190"
                :duration="35" :delay="14" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883490.webp" alt="Client 10"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[80px] md:size-[110px] items-center justify-center border-none bg-transparent" :radius="120" md:radius="190"
                :duration="35" :delay="21" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883475.webp" alt="Client 11"
                  class="object-contain w-full h-full" />
              </Orbit>
  
              <Orbit class="size-[80px] md:size-[110px] items-center justify-center border-none bg-transparent" :radius="120" md:radius="190"
                :duration="35" :delay="28" :direction="ORBIT_DIRECTION.CounterClockwise">
                <img src="@/assets/about-us/OurClient/Frame 1597883494.webp" alt="Client 12"
                  class="object-contain w-full h-full" />
              </Orbit>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ORBIT_DIRECTION } from "../../../utils";
  import Orbit from "../../inspiraUI/Orbit.vue";
  import Button from '../../../components/button/Button.vue';
  </script>
  
  <style scoped>
  .active-dot {
    content: url('@/assets/Active dot.svg');
  }
  
  .dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
  }
  </style>