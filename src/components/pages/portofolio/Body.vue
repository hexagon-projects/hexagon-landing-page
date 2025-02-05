<script setup>
import { onMounted, ref, computed } from "vue";
import axiosInstance from "@/axios";
import { Icon } from '@iconify/vue'

// State untuk menyimpan data dan pagination
const cardItems = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const itemsPerPage = ref(10);
const activeTag = ref("All");
const tags = ref([]);
const isMobile = ref(false);
const allData = ref([]); // Menyimpan semua data untuk handling mobile

// Fungsi untuk mengecek ukuran layar
function checkScreenSize() {
  isMobile.value = window.innerWidth < 768;
  // Rekalkulasi pages ketika ukuran layar berubah
  if (allData.value.length > 0) {
    recalculatePagination();
  }
}

// Fungsi untuk mengambil data dari API
async function fetchProjectData(page = 1) {
  try {
    // Selalu ambil semua data
    const response = await axiosInstance.get(`/api/Portofolio`);
    console.log(response.data);

    if (response.data && response.data.data) {
      allData.value = response.data.data.map((item) => ({
        id: item.id,
        tag: item.Kategori,
        title: item.judul_porto,
        description: item.ket_porto,
        image: item.images.length ? item.images[0] : "",
        urlYoutube: item.url_youtube,
        alt: item.judul_porto,
      }));

      extractTags(allData.value);
      recalculatePagination();
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
}

// Fungsi untuk menghitung ulang pagination berdasarkan ukuran layar
function recalculatePagination() {
  const filteredData = activeTag.value === "All"
    ? allData.value
    : allData.value.filter(item => item.tag === activeTag.value);

  const perPage = isMobile.value ? 3 : 6;
  itemsPerPage.value = perPage;
  totalPages.value = Math.ceil(filteredData.length / perPage);
  currentPage.value = Math.min(currentPage.value, totalPages.value);

  // Update cardItems berdasarkan halaman saat ini
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  cardItems.value = filteredData.slice(startIndex, endIndex);
}

function extractTags(items) {
  const allTags = items.map(item => item.tag);
  const uniqueTags = [...new Set(allTags)];
  tags.value = uniqueTags;
}

const visiblePages = computed(() => {
  const delta = 1; // Jumlah halaman di sekitar halaman saat ini
  let range = [];

  // Selalu tampilkan halaman pertama
  range.push(1);

  // Tentukan range halaman yang akan ditampilkan
  for (let i = currentPage.value - delta; i <= currentPage.value + delta; i++) {
    if (i > 1 && i < totalPages.value) {
      range.push(i);
    }
  }

  // Selalu tampilkan halaman terakhir jika ada
  if (totalPages.value > 1) {
    range.push(totalPages.value);
  }

  // Tambahkan ellipsis jika ada gap
  let result = [];
  let last = 0;

  for (const n of range) {
    if (last + 1 < n) {
      result.push(-1); // -1 sebagai penanda ellipsis
    }
    result.push(n);
    last = n;
  }

  return result;
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    recalculatePagination();
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    recalculatePagination();
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    recalculatePagination();
  }
}

function setActiveTag(tag) {
  activeTag.value = tag;
  currentPage.value = 1;
  recalculatePagination();
}

// Computed property untuk memfilter dan membatasi item yang ditampilkan
const filteredItems = computed(() => {
  return cardItems.value;
});

onMounted(() => {
  checkScreenSize();
  fetchProjectData();
  window.addEventListener('resize', checkScreenSize);
});
</script>

<template>
  <!-- Tag Navigation -->
  <div class="flex items-center justify-center w-full py-5">
    <div class="flex flex-wrap justify-center w-full md:w-1/2 gap-4 px-4 md:px-0">
      <!-- All button -->
      <div class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer"
        :class="activeTag === 'All' ? 'bg-blue-50' : ''" @click="setActiveTag('All')">
        All
      </div>

      <!-- Tag buttons -->
      <div v-for="tag in tags" :key="tag"
        class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer"
        :class="activeTag === tag ? 'bg-blue-50 font-semibold' : ''" @click="setActiveTag(tag)">
        {{ tag }}
        <Icon v-if="activeTag === tag" icon="maki:cross" width="15" height="15" @click.stop="setActiveTag('All')" />
      </div>
    </div>
  </div>

  <!-- Portfolio Grid -->
  <div class="flex flex-col items-center px-4 md:px-[112px] dark:bg-black" id="portofolio">
    <div class="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div v-for="(card, index) in filteredItems" :key="card.id"
        class="bg-white dark:bg-black dark:hover:shadow-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200 overflow-hidden p-[24px] max-w-full md:max-w-[395px] rounded-2xl flex-shrink-0">
        <img :src="card.image" :alt="card.alt" class="w-full h-48 md:h-64 object-cover mb-[24px] rounded-lg" />
        <div class="space-y-[16px]">
          <span class="px-3 py-2 text-xs rounded bg-blue-50 dark:bg-gray-800">
            {{ card.tag }}
          </span>
          <h1 class="text-gray-800 font-raleway text-2xl md:text-[32px] font-semibold dark:text-white line-clamp-1">
            {{ card.title }}
          </h1>
          <p class="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 line-clamp-3">
            {{ card.description }}
          </p>
          <router-link :to="{ name: 'portfolio-detail', params: { id: card.id } }" class="inline-block">
            <span>See Details</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center gap-2 mt-8 flex-wrap">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 border rounded-lg dark:bg-transparent"
        :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">
        Previous
      </button>

      <template v-for="page in visiblePages" :key="page">
        <span v-if="page === -1" class="px-3 py-1">
          ...
        </span>
        <button v-else @click="goToPage(page)" class="px-3 py-1 border rounded-lg dark:bg-transparent"
          :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'">
          {{ page }}
        </button>
      </template>

      <button @click="nextPage" :disabled="currentPage === totalPages"
        class="px-3 py-1 border rounded-lg dark:bg-transparent"
        :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">
        Next
      </button>
    </div>
  </div>
</template>