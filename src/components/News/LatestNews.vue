<script setup>
import { ref, onMounted } from "vue";
import { fetchNews } from "@/service"; // Import fungsi fetchNews

const newsLatestData = ref([]);

// Fungsi untuk mengambil data berita
const getLatestData = async () => {
    const data = await fetchNews();
    if (data.error) {
        console.error("Error fetching news:", data.error);
    } else {
        newsLatestData.value = data.data; // Sesuaikan dengan struktur API Laravel
        console.log(newsLatestData.value, "Latest data berhasil diambil");
    }
};

// Panggil saat komponen dimuat
onMounted(() => {
    getLatestData();
});
</script>

<template>
    <div class="flex justify-start gap-[24px] py-[56px] overflow-x-auto project-container">
      <div v-if="newsLatestData.length == 0" class="bg-white p-[24px] w-[395px] flex-shrink-0 border-r-2 dark:border-none dark:bg-[#0D0D0D] animate-pulse" aria-label="Loading latest">
        <div class="mb-[24px] rounded-2xl bg-gray-300 h-[150px] w-full"></div>
        <div class="space-y-[16px]">
          <span class="w-1/4 px-3 py-2 text-xs font-bold bg-gray-300 rounded-md"></span>
          <span class="w-1/4 px-3 py-2 text-xs bg-gray-300 rounded-md"></span>
          <h1 class="bg-gray-300 rounded-md h-[30px] w-3/4"></h1>
          <p class="bg-gray-300 rounded-md h-[20px] w-full"></p>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span class="inline-block bg-gray-300 rounded-md h-[20px] w-1/2"></span>
          </div>
        </div>
      </div>
      <div v-else
        v-for="(latest, index) in newsLatestData.slice(0, 3)"
        class="p-[24px] w-[395px] flex-shrink-0 border-r-2 dark:border-none dark:bg-[#0D0D0D]"
        :class="{
          'ml-[56px] md:ml-[112px]': index == 0,
          '': index + 1 == activeCard,
        }"
      >
        <img :src="latest.images[0]" :alt="latest.alt" class="mb-[24px] rounded-2xl w-full aspect-[3/2] object-cover" />
        <div class="space-y-[16px]">
          <span class="px-3 py-2 text-xs font-bold text-blue-500">{{ latest.Kategori }}</span>
          |
          <span class="px-3 py-2 text-xs text-black font-semibold dark:text-[#D6DADE]">{{ latest.dibuat }}</span>
          <h1 class="text-gray-800 dark:text-white font-raleway text-[25px] font-bold">
            {{ latest.judul_news }}
          </h1>
          <p class="text-[13px] text-gray-600 font-light dark:text-[#D6DADE]">
            {{ latest.ket_news }}
          </p>
          <div class="flex items-center gap-2">
            <img src="@/assets/logoA.png" alt="" />
            <span class="inline-block text-gray-900 dark:text-white">Admin Hexagon</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.project-container::-webkit-scrollbar {
  display: none;
}

.project-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
