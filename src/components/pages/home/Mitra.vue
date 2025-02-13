<template>
  <div class="relative w-full py-8 space-y-4 md:space-y-12 bg-white dark:bg-black">
    <!-- Our Client Section -->
    <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
      <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">Mitra</span>
      <h1 class="font-raleway text-[30px] font-semibold text-gray-800 dark:text-white">
        Sebagai mitra Direktorat Jendral Pendidikan Vokasi <br />
        Kementerian Pendidikan Dasar dan Menengah Republik Indonesia
      </h1>
      <div class="flex flex-col sm:flex-row">
        <img src="@/assets/about-us/OurClient/Frame 1597883494.webp" alt="" class="w-full h-20 object-cover w-1/3" />
        <img src="@/assets/about-us/OurClient/Frame 1597883481.webp" alt="" class="w-full h-20 object-cover w-1/3" />
        <img src="@/assets/about-us/OurClient/vokasi.webp" alt="" class="w-full h-20 object-cover w-1/3" />
      </div>
    </div>

    <!-- Marquee Section -->
    <div class="px-[60px]">
      <div
        class="flex flex-col gap-12 overflow-hidden border border-gray-200 dark:border-gray-700 py-8 px-8 rounded-xl">
        <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
          <!-- Judul (Kolom Kiri) -->
          <h1 class="font-raleway text-[30px] md:text-[20px] font-semibold text-gray-800 dark:text-white max-w-[300px]">
            Membina 50+ SMK<br />
            di seluruh Indonesia
          </h1>

          <!-- Marquee Section (Kolom Kanan) -->
          <div class="w-full overflow-hidden">
            <!-- Desktop -->
            <div class="hidden md:block">
              <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40">
                <div class="flex gap-4 pl-4">
                  <div v-for="(client, index) in ourClientData" :key="'marquee-desktop-' + index"
                    class="flex items-center justify-center w-36 h-22 bg-white">
                    <img :src="client.foto_client_url" alt="client.name" class="max-w-[150px] object-contain" />
                  </div>
                </div>
              </Marquee>
            </div>

            <!-- Mobile -->
            <div class="block md:hidden">
              <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40">
                <div class="flex gap-4">
                  <div v-for="(client, index) in ourClientData" :key="'marquee-mobile-' + index"
                    class="flex items-center justify-center w-36 h-22 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
                    <img :src="client.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
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
    const clients = await fetchOurClient(2);
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
