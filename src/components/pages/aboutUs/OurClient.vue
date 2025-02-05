<template>
  <div class="relative w-full py-8 space-y-4 md:space-y-12  bg-white dark:bg-black">
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

    <!-- Client Marquee -->
    <div class="flex flex-col gap-6 md:gap-12">
      <Marquee :fade="false" direction="left" :reverse="true" :pauseOnHover="false" :speed="40" class="overflow-hidden">
        <div class="flex gap-2 md:gap-4">
          <div
            v-for="(client, index) in ourClientData"
            :key="'client-' + index"
            class="flex items-center justify-center w-25 h-14 md:w-72 md:h-32 md:p-4 py-2 bg-white border rounded-[10px] md:rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
          >
            <img :src="client.foto_client_url" :alt="client.name" class="w-3/4 " />
          </div>
        </div>
      </Marquee>

      <!-- Our Media Section -->
      
      <!-- Media Marquees -->
      <div>
        <p class="text-lg text-center text-[#272D3E] dark:text-gray-100 md:text-4xl">
          Integrated with over 100 mainstream <br class="hidden md:block" />
          media outlets
        </p>
      </div>
      <div class="flex flex-col gap-4 md:flex-row">
        <Marquee v-for="(marquee, mIdx) in mediaMarquees" :key="'media-marquee-' + mIdx" :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="flex-1 overflow-hidden">
          <div class="flex gap-4">
            <div
              v-for="(media, index) in marquee"
              :key="'media-' + index"
              class="flex items-center justify-center w-25 h-14 md:w-72 md:h-32 md:p-4 py-2 bg-white border rounded-[10px] md:rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300"
            >
              <img :src="media.foto_client_url" :alt="media.status_label" class="w-auto h-full object-contain" />
            </div>
          </div>
        </Marquee>
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
