<template>
  <div class="relative w-full py-8 space-y-4 bg-white md:space-y-12 dark:bg-black">
    <!-- Our Client Section -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-0.5 bg-light-primary dark:bg-blue-400"></div>
        <h4 class="text-gray-700 text-md dark:text-gray-300">Our Client</h4>
      </div>
      <p class="mt-2 text-xl text-center text-[#272D3E] dark:text-gray-100 md:text-4xl">
        More than 100 companies trust and <br class="hidden md:block" />
        choose Hexagon Inc.
      </p>
    </div>

    <!-- Marquee Section -->
    <div class="flex flex-col gap-12">
      <!-- Marquee Pertama (Desktop) -->
      <div class="hidden md:block">
        <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40" class="overflow-hidden">
          <div class="flex gap-4">
            <div
              v-for="(client, index) in ourClientData"
              :key="'marquee-desktop-' + index"
              class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
            >
              <img :src="client.foto_client_url" alt="client.name" class="max-w-[140px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Marquee Pertama (Mobile) -->
      <div class="block md:hidden">
        <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40" class="overflow-hidden">
          <div class="flex gap-4">
            <div
              v-for="(client, index) in ourClientData"
              :key="'marquee-mobile-' + index"
              class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
            >
              <img :src="client.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <div>
        <p class="text-lg text-center text-[#272D3E] dark:text-gray-100 md:text-4xl">
          Integrated with over 100 mainstream <br class="hidden md:block" />
          media outlets
        </p>
      </div>

      <!-- Marquee Kedua (Desktop) -->
      <div class="hidden md:block">
        <Marquee v-for="(marquee, mIdx) in mediaMarquees" :key="'media-marquee-' + mIdx" :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="overflow-hidden">
          <div class="flex gap-4">
            <div
              v-for="(media, index) in marquee"
              :key="'media-' + index"
              class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
            >
              <img :src="media.foto_client_url" :alt="media.status_label" class="max-w-[160px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Marquee Kedua (Mobile) -->
      <div class="block md:hidden">
        <div class="flex flex-col gap-4">
          <!-- Marquee Bagian Pertama -->
          <Marquee v-for="(marquee, mIdx) in mediaMarquees" :key="'media-marquee-1-' + mIdx" :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="overflow-hidden">
            <div class="flex gap-4">
              <div
                v-for="(media, index) in marquee.slice(0, Math.ceil(marquee.length / 2))"
                :key="'media-1-' + index"
                class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
              >
                <img :src="media.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
              </div>
            </div>
          </Marquee>
          <!-- Marquee Bagian Kedua -->
          <Marquee v-for="(marquee, mIdx) in mediaMarquees" :key="'media-marquee-2-' + mIdx" :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40" class="overflow-hidden">
            <div class="flex gap-4">
              <div
                v-for="(media, index) in marquee.slice(Math.ceil(marquee.length / 2))"
                :key="'media-2-' + index"
                class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
              >
                <img :src="media.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import { fetchOurClient } from "@/service";

const ourClientData = ref([]);
const ourMediaData = ref([]);
const mediaMarquees = ref([]);

const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
};

const getData = async () => {
  try {
    // Fetch Our Clients (status = 1)
    const clients = await fetchOurClient(1);
    ourClientData.value = clients || [];

    // Fetch Media Partners (status = 0)
    const media = await fetchOurClient(0);
    ourMediaData.value = media || [];

    // Split media into chunks for multiple marquees
    mediaMarquees.value = chunkArray(ourMediaData.value, 7);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getData();
});
</script>
