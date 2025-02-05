<template>
  <div class="relative w-full py-8 space-y-16 bg-white dark:bg-black">
    <!-- Header Section -->
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-1 bg-light-primary dark:bg-blue-400"></div>
        <h4 class="text-gray-700 text-md dark:text-gray-300">Our Client</h4>
      </div>
      <p class="mt-2 text-2xl text-center text-[#272D3E] dark:text-gray-100 md:text-4xl">
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
            <div v-for="(client, index) in ourClientData" :key="'marquee-desktop-' + index"
              class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
              <img :src="client.foto_client_url" alt="Client Logo" class="max-w-[120px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Marquee Pertama (Mobile) -->
      <div class="block md:hidden">
        <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40" class="overflow-hidden">
          <div class="flex gap-4">
            <div v-for="(client, index) in ourClientData" :key="'marquee-mobile-' + index"
              class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
              <img :src="client.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Media Section -->
      <div>
        <p class="text-2xl text-center text-[#272D3E] dark:text-gray-100 md:text-4xl">
          Integrated with over 100 mainstream <br class="hidden md:block" />
          media outlets
        </p>
      </div>

      <!-- Marquee Kedua (Desktop) -->
      <div class="hidden md:block">
        <Marquee :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="overflow-hidden">
          <div class="flex gap-4">
            <div v-for="(logo, index) in logos" :key="'marquee-desktop-' + index"
              class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
              <img :src="logo" alt="Client Logo" class="max-w-[120px] object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      <!-- Marquee Kedua (Mobile) -->
      <div class="block md:hidden">
        <div class="flex flex-col gap-4">
          <Marquee :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="overflow-hidden">
            <div class="flex gap-4">
              <div v-for="(logo, index) in logos.slice(0, Math.ceil(logos.length / 2))" :key="'marquee-mobile-1-' + index"
                class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
                <img :src="logo" alt="Client Logo" class="max-w-[80px] object-contain" />
              </div>
            </div>
          </Marquee>
          <Marquee :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40" class="overflow-hidden">
            <div class="flex gap-4">
              <div v-for="(logo, index) in logos.slice(Math.ceil(logos.length / 2))" :key="'marquee-mobile-2-' + index"
                class="flex items-center justify-center w-48 h-24 p-2 bg-white border rounded-[10px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
                <img :src="logo" alt="Client Logo" class="max-w-[80px] object-contain" />
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
import { fetchOurClient } from "@/service"; // Mengimpor fungsi dari service

const ourClientData = ref([]); // Menyimpan data klien

const getOurClient = async () => {
  const data = await fetchOurClient();
  console.log(data); // Menampilkan data yang diterima dari API
  if (data.error) {
    console.error(data.error); // Menampilkan error yang datang dari service
  } else {
    // Cek apakah data adalah array
    if (Array.isArray(data)) {
      // Jika data adalah array, lakukan pemetaan
      ourClientData.value = data.map((client) => ({
        ...client,
        foto_client_url: client.foto_client_url,
      }));
      console.log(ourClientData.value);
    } else {
      console.error("Data yang diterima bukan array:", data);
    }
  }
};

onMounted(() => {
  getOurClient(); // Panggil fungsi saat komponen dimuat
});

// Membuat array logos (19 logo)
const logos = [];
for (let i = 1; i <= 19; i++) {
  logos.push(new URL(`../../../assets/about-us/OurMedia/Frame(${i}).webp`, import.meta.url).href);
}
</script>