<script setup>
/* ------------------------------ */
/* Import Modul, Komponen, dan Fungsi */
/* ------------------------------ */
// Mengimpor lifecycle hooks dan fungsi reactive dari Vue
import { ref, computed, onMounted, onUnmounted } from "vue";
// Mengimpor instance axios yang telah dikonfigurasi untuk API call
import axiosInstance from "@/axios";
// Mengimpor komponen Icon dari Iconify untuk ikon
import { Icon } from '@iconify/vue';

/* ------------------------------ */
/* Inisialisasi State dan Variabel  */
/* ------------------------------ */
// Menyimpan data kartu portofolio
const cardItems = ref([]);
// Menyimpan halaman saat ini untuk pagination
const currentPage = ref(1);
// Menyimpan total halaman yang akan dihitung dari data API
const totalPages = ref(1);
// Menyimpan total item portofolio yang tersedia
const totalItems = ref(0);
// Menyimpan tag aktif untuk filter; default "All"
const activeTag = ref("All");
// Menyimpan daftar tag unik yang diekstrak dari data portofolio
const tags = ref([]);
// Menyimpan status apakah tampilan mobile (untuk menentukan jumlah item per halaman)
const isMobile = ref(false);
// Menyimpan status loading data
const isLoading = ref(false);

/* ------------------------------ */
/* Fungsi Pengecekan Ukuran Layar   */
/* ------------------------------ */
// Fungsi untuk mengecek apakah perangkat yang digunakan adalah mobile atau tidak
function checkScreenSize() {
  isMobile.value = window.innerWidth < 768;
  // Jika berada di halaman pertama, ambil data portofolio
  if (currentPage.value === 1) {
    fetchProjectData();
  }
}

/* ------------------------------ */
/* Fungsi Pengambilan Data Portofolio */
/* ------------------------------ */
async function fetchProjectData(page = 1) {
  try {
    isLoading.value = true;
    // Jumlah postingan per halaman disesuaikan dengan perangkat
    const perPage = isMobile.value ? 3 : 6;
    // Menyiapkan parameter query untuk API
    const params = new URLSearchParams({
      page: page,
      perpage: perPage,
      ...(activeTag.value !== 'All' && { tag: activeTag.value })
    });

    const response = await axiosInstance.get(`/api/Portofolio?${params}`);
    
    if (response.data) {
      // Update state pagination berdasarkan respons API
      totalPages.value = Math.ceil(response.data.total / response.data.per_page);
      currentPage.value = response.data.current_page;
      totalItems.value = response.data.total;
      
      // Memetakan data API ke format yang digunakan untuk kartu portofolio
      cardItems.value = response.data.data.map((item) => ({
        id: item.portofolio_id,
        tag: item.Kategori,
        title: item.judul_porto,
        description: item.ket_porto,
        image: item.images.length ? item.images[0] : "",
        urlYoutube: item.url_youtube,
        alt: item.judul_porto,
      }));

      // Jika tag belum diekstrak, ambil tag unik dari data
      if (!tags.value.length) {
        extractTags(response.data.data);
      }
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
  } finally {
    isLoading.value = false;
  }
}

/* ------------------------------ */
/* Fungsi Ekstraksi Tag            */
/* ------------------------------ */
// Fungsi untuk mengekstrak tag unik dari data portofolio
function extractTags(items) {
  const allTags = items.map(item => item.Kategori).filter(Boolean);
  const uniqueTags = [...new Set(allTags)];
  tags.value = uniqueTags;
}

/* ------------------------------ */
/* Computed Properties: Pagination */
/* ------------------------------ */
// Menghitung halaman yang akan ditampilkan sebagai tombol navigasi
const visiblePages = computed(() => {
  const delta = 1;
  let range = [];
  range.push(1);
  for (let i = currentPage.value - delta; i <= currentPage.value + delta; i++) {
    if (i > 1 && i < totalPages.value) {
      range.push(i);
    }
  }
  if (totalPages.value > 1) {
    range.push(totalPages.value);
  }
  let result = [];
  let last = 0;
  for (const n of range) {
    if (last + 1 < n) {
      result.push(-1); // Indikator elipsis
    }
    result.push(n);
    last = n;
  }
  return result;
});

/* ------------------------------ */
/* Fungsi Navigasi Pagination      */
/* ------------------------------ */
// Fungsi untuk berpindah ke halaman berikutnya
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchProjectData(currentPage.value);
  }
}

// Fungsi untuk berpindah ke halaman sebelumnya
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchProjectData(currentPage.value);
  }
}

// Fungsi untuk langsung menuju halaman tertentu
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchProjectData(page);
  }
}

/* ------------------------------ */
/* Fungsi Pemilihan Tag            */
/* ------------------------------ */
// Fungsi untuk mengubah tag aktif dan mereset halaman ke 1
function setActiveTag(tag) {
  activeTag.value = tag;
  currentPage.value = 1;
  fetchProjectData(1);
}

/* ------------------------------ */
/* Pengecekan Ukuran Layar dan Event Listener */
/* ------------------------------ */
window.addEventListener('resize', checkScreenSize);

/* ------------------------------ */
/* Lifecycle Hook: onMounted       */
/* ------------------------------ */
// Saat komponen dimuat, cek ukuran layar dan ambil data portofolio
onMounted(() => {
  checkScreenSize();
  fetchProjectData();
});
</script>

<template>
  <!-- Container Utama untuk Portfolio Page -->
  <div id="portofolio" class="flex flex-col items-center px-4 md:px-[112px] dark:bg-black">
    <!-- No Results Message jika tidak ada data -->
    <div v-if="cardItems.length === 0" class="text-center py-8">
      <p class="text-gray-600 dark:text-gray-400">No portfolios found for the selected category.</p>
    </div>

    <!-- Portfolio Grid -->
    <div v-else class="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 w-full">
      <!-- Looping setiap kartu portofolio -->
      <div
        v-for="card in cardItems"
        :key="card.id"
        class="bg-white dark:bg-black dark:hover:shadow-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200 overflow-hidden p-[24px] max-w-full md:max-w-[395px] rounded-2xl flex-shrink-0"
      >
        <!-- Gambar Kartu -->
        <img
          :src="card.image"
          :alt="card.alt"
          class="w-full h-48 md:h-64 object-cover mb-[24px] rounded-lg"
        />
        <div class="space-y-[16px]">
          <!-- Tag Kategori -->
          <span class="px-3 py-2 text-xs rounded bg-blue-50 dark:bg-gray-800">
            {{ card.tag }}
          </span>
          <!-- Judul Portofolio -->
          <h1 class="text-gray-800 font-raleway text-2xl md:text-[32px] font-semibold dark:text-white line-clamp-1">
            {{ card.title }}
          </h1>
          <!-- Deskripsi Singkat -->
          <p class="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 line-clamp-3">
            {{ card.description }}
          </p>
          <!-- Link untuk melihat detail portofolio -->
          <router-link
            :to="{ name: 'portfolio-detail', params: { id: card.id } }"
            class="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            See Details
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8 flex-wrap">
      <!-- Tombol Previous -->
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 border rounded-lg dark:bg-transparent"
        :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'"
      >
        Previous
      </button>

      <!-- Tombol Halaman (dengan elipsis jika diperlukan) -->
      <template v-for="page in visiblePages" :key="page">
        <span v-if="page === -1" class="px-3 py-1">...</span>
        <button
          v-else
          @click="goToPage(page)"
          class="px-3 py-1 border rounded-lg dark:bg-transparent"
          :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'"
        >
          {{ page }}
        </button>
      </template>

      <!-- Tombol Next -->
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 border rounded-lg dark:bg-transparent"
        :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style>
/* ------------------------------ */
/* Style Tambahan untuk Hover     */
/* ------------------------------ */
.hover\:bg-blue-500:hover { background-color: #3b82f6; }
.hover\:text-white:hover { color: white; }
.hover\:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.hover\:scale-105:hover { transform: scale(1.05); }
.hover\:text-white:hover p, .hover\:text-white:hover h1 { color: white; }
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }

/* ------------------------------ */
/* Mobile Text Truncation         */
/* ------------------------------ */
.line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>
