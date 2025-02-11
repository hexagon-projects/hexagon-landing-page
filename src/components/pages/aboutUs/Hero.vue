<template>
  <div class="relative">
    <div class="">
      <div class="relative min-h-[800px] sm:min-h-[1000px]">
        <!-- Menggunakan LampEffect sebagai background -->
        <LampEffect class="absolute z-10 -top-60 object-cover w-full h-full" />

        <div class="absolute bottom-60 z-20 w-full h-1/4 bg-gradient-to-t from-white dark:from-black via-white/20 dark:black/20 to-transparent"></div>

        <div class="relative z-20 flex justify-center w-full pt-40">
          <div class="mb-16 max-w-[1000px] space-y-8 z-20">
            <h1 class="text-3xl font-bold text-center text-white md:text-6xl font-raleway">
              Be the best partner to create solutions together
            </h1>
            <h3 class="text-center text-white">
              Come on,<br />
              to see our other world of ideas & we will work as a great team
            </h3>
            <div class="flex justify-center w-full gap-3.5">
              <Button @click="scrollToSection">
                <div class="block w-2 h-2 bg-white rounded-full"></div>
                Read More
              </Button>
              <ButtonOutline @click="$router.push({ name: 'services' })">
                <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                Services Detail
              </ButtonOutline>
            </div>
            <!-- <div class="rounded-xl p-px bg-gradient-to-b from-[#7c8dfe] to-transparent h-full w-full"> -->
              <div
                class="w-full z-30 p-4 sm:p-6 md:p-8 space-y-4  rounded-xl absolute bg-gradient-to-b from-[#0D1B75] border border-light-primary to-transparent backdrop-blur max-w-[1000px] transition-transform duration-1000 ease-out delay-300 translate-y-[100%] animate-slide-up"
              >
                <!-- Konten tetap sama -->
                <div class="flex items-center gap-4 sm:gap-6">
                  <div class="flex gap-1 sm:gap-2">
                    <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                    <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                    <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                  </div>
                  <div class="w-full px-2 sm:px-4 py-2 sm:py-3 bg-white/75 rounded-md font-raleway text-[#707070]">
                    Hexagon inc
                  </div>
                </div>
                <!-- <div class="p-4 bg-white sm:p-6 rounded-xl"> -->
                  <iframe
                    :src="aboutData?.youtube_url"
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    class="w-full rounded-lg aspect-video"
                  ></iframe>
                <!-- </div> -->
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchAboutData } from "@/service"; // Mengimpor fungsi dari service
import Button from "@/components/button/Button.vue";
import ButtonOutline from "@/components/button/ButtonOutline.vue";
import LampEffect from "../../inspiraUI/LampEffect.vue";

const aboutData = ref(null);

// Fungsi untuk mengambil data tentang perusahaan
const getAboutData = async () => {
  const data = await fetchAboutData();
  if (data.error) {
    console.error(data.error);
  } else {
    aboutData.value = data;
  }
};

const scrollToSection = () => {
  const element = document.querySelector("#our-journey");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  getAboutData();
});
</script>

<style>
@keyframes slide-up {
  0% {
    transform: translateY(100%) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 1.2s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  animation-delay: 0.5s;
}

@media (prefers-reduced-motion: no-preference) {
  .animate-slide-up {
    will-change: transform, opacity;
  }
}
</style>
