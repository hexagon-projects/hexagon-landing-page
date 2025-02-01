<script setup>
import { onMounted, ref, computed } from "vue";
import axiosInstance from "@/axios"; // Pastikan path sesuai
import { Icon } from '@iconify/vue'

// State untuk menyimpan data dan pagination
const cardItems = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const itemsPerPage = ref(10); // Default items per page dari API
const activeTag = ref("All"); // State untuk menyimpan tag yang aktif
const tags = ref([]); // State untuk menyimpan daftar tag yang diekstrak dari data portofolio

// Fungsi untuk mengambil data dari API
async function fetchProjectData(page = 1) {
  try {
    const response = await axiosInstance.get(`/api/Portofolio?page=${page}`);
    console.log(response.data);

    if (response.data && response.data.data) {
      cardItems.value = response.data.data.map((item) => ({
        id: item.id,
        tag: item.Kategori,
        title: item.judul_porto,
        description: item.ket_porto,
        image: item.images.length ? item.images[0] : "",
        urlYoutube: item.url_youtube,
        alt: item.judul_porto,
      }));

      // Update pagination data
      currentPage.value = response.data.current_page;
      totalPages.value = response.data.last_page;
      itemsPerPage.value = response.data.per_page;

      // Ekstrak tag dari data portofolio
      extractTags(cardItems.value);
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
}

// Fungsi untuk mengekstrak tag dari data portofolio
function extractTags(items) {
  const allTags = items.map(item => item.tag); // Ambil semua tag
  const uniqueTags = [...new Set(allTags)]; // Buat daftar tag yang unik
  tags.value = uniqueTags; // Simpan daftar tag
}

// Fungsi navigasi
function nextPage() {
  if (currentPage.value < totalPages.value) {
    fetchProjectData(currentPage.value + 1);
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    fetchProjectData(currentPage.value - 1);
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    fetchProjectData(page);
  }
}

// Fungsi untuk mengubah tag yang aktif
function setActiveTag(tag) {
  activeTag.value = tag;
  currentPage.value = 1; // Reset ke halaman 1 saat mengubah tag
}

// Computed property untuk memfilter data berdasarkan tag yang aktif
const filteredItems = computed(() => {
  if (activeTag.value === "All") {
    return cardItems.value;
  }
  return cardItems.value.filter(item => item.tag === activeTag.value);
});

// Panggil data saat komponen dimuat
onMounted(() => {
  fetchProjectData();
});
</script>

<template>
  <div class="flex items-center justify-center w-full py-5">
    <div class="flex flex-wrap justify-center w-1/2 gap-4">
      <!-- Tombol "All" -->
      <div 
        class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer" 
        :class="activeTag === 'All' ? 'bg-blue-50' : ''" 
        @click="setActiveTag('All')"
      >
        All
      </div>

      <!-- Tombol untuk setiap tag yang diekstrak dari data portofolio -->
      <div 
        v-for="tag in tags" 
        :key="tag" 
        class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer" 
        :class="activeTag === tag ? 'bg-blue-50 font-semibold' : ''" 
        @click="setActiveTag(tag)"
      >
        {{ tag }}
        <Icon v-if="activeTag === tag" icon="maki:cross" width="15" height="15" @click.stop="setActiveTag('All')" />
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center md:px-[112px] dark:bg-black" id="portofolio">
    <div class="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(card, index) in filteredItems"
        :key="card.id"
        class="bg-white dark:bg-black dark:hover:shadow-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200 overflow-hidden p-[24px] max-w-[395px] rounded-2xl flex-shrink-0"
      >
        <img :src="card.image" :alt="card.alt" class="w-full h-64 object-cover mb-[24px] rounded-lg" />
        <div class="space-y-[16px]">
          <span class="px-3 py-2 text-xs rounded bg-blue-50 dark:bg-gray-800 ">{{ card.tag }}</span>
          <h1 class="text-gray-800 font-raleway text-[32px] font-semibold dark:text-white line-clamp-1">{{ card.title }}</h1>
          <p class="text-[16px] text-gray-600 dark:text-gray-400 line-clamp-3">{{ card.description }}</p>
          <router-link :to="{ name: 'portfolio-detail', params: { id: card.id } }" class="inline-block">
            <span>See Details</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-2 mt-8">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 border rounded-lg dark:bg-transparent" :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">Previous</button>

      <button v-for="page in totalPages" :key="page" @click="goToPage(page)" class="px-3 py-1 border rounded-lg dark:bg-transparent" :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'">
        {{ page }}
      </button>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 border rounded-lg dark:bg-transparent" :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">
        Next
      </button>
    </div>
  </div>
</template>