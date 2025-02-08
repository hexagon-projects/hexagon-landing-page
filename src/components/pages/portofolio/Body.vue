// PortfolioComponent.vue
<script setup>
import { onMounted, ref, computed, onUnmounted } from "vue";
import axiosInstance from "@/axios";
import { Icon } from '@iconify/vue';

// State management
const cardItems = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const totalItems = ref(0);
const activeTag = ref("All");
const tags = ref([]);
const isMobile = ref(false);
const isLoading = ref(false);

// Screen size checker
function checkScreenSize() {
  isMobile.value = window.innerWidth < 768;
  if (currentPage.value === 1) {
    fetchProjectData();
  }
}

// Main data fetching function
async function fetchProjectData(page = 1) {
  try {
    isLoading.value = true;
    const perPage = isMobile.value ? 3 : 6;
    const params = new URLSearchParams({
      page: page,
      perpage: perPage,
      ...(activeTag.value !== 'All' && { tag: activeTag.value })
    });

    const response = await axiosInstance.get(`/api/Portofolio?${params}`);
    
    if (response.data) {
      // Update pagination state
      totalPages.value = Math.ceil(response.data.total / response.data.per_page);
      currentPage.value = response.data.current_page;
      totalItems.value = response.data.total;
      
      // Map the data to cardItems
      cardItems.value = response.data.data.map((item) => ({
        id: item.id,
        tag: item.Kategori,
        title: item.judul_porto,
        description: item.ket_porto,
        image: item.images.length ? item.images[0] : "",
        urlYoutube: item.url_youtube,
        alt: item.judul_porto,
      }));

      // Extract unique tags if not already populated
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

// Extract unique tags from data
function extractTags(items) {
  const allTags = items.map(item => item.Kategori).filter(Boolean);
  const uniqueTags = [...new Set(allTags)];
  tags.value = uniqueTags;
}

// Pagination controls
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
      result.push(-1); // Ellipsis indicator
    }
    result.push(n);
    last = n;
  }

  return result;
});

// Navigation functions
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchProjectData(currentPage.value);
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchProjectData(currentPage.value);
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchProjectData(page);
  }
}

function setActiveTag(tag) {
  activeTag.value = tag;
  currentPage.value = 1;
  fetchProjectData(1);
}

// Lifecycle hooks
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <!-- Tag Navigation -->
  <div class="flex items-center justify-center w-full py-5">
    <div class="flex flex-wrap justify-center w-full md:w-1/2 gap-4 px-4 md:px-0">
      <!-- All button -->
      <div 
        class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer"
        :class="activeTag === 'All' ? 'bg-blue-50 dark:bg-light-primary dark:text-white' : ''"
        @click="setActiveTag('All')"
      >
        All
      </div>

      <!-- Tag buttons -->
      <div
        v-for="tag in tags"
        :key="tag"
        class="flex items-center justify-center gap-2 px-4.5 py-3 rounded-md cursor-pointer"
        :class="activeTag === tag ? 'bg-blue-50 dark:bg-light-primary dark:text-white font-semibold' : ''"
        @click="setActiveTag(tag)"
      >
        {{ tag }}
        <Icon
          v-if="activeTag === tag"
          icon="maki:cross"
          width="15"
          height="15"
          @click.stop="setActiveTag('All')"
        />
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-if="isLoading" class="flex justify-center items-center min-h-[200px]">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>

  <!-- Portfolio Grid -->
  <div v-else class="flex flex-col items-center px-4 md:px-[112px] dark:bg-black" id="portofolio">
    <!-- No Results Message -->
    <div v-if="cardItems.length === 0" class="text-center py-8">
      <p class="text-gray-600 dark:text-gray-400">No portfolios found for the selected category.</p>
    </div>

    <!-- Portfolio Grid -->
    <div v-else class="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div
        v-for="card in cardItems"
        :key="card.id"
        class="bg-white dark:bg-black dark:hover:shadow-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200 overflow-hidden p-[24px] max-w-full md:max-w-[395px] rounded-2xl flex-shrink-0"
      >
        <img
          :src="card.image"
          :alt="card.alt"
          class="w-full h-48 md:h-64 object-cover mb-[24px] rounded-lg"
        />
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
          <router-link
            :to="{ name: 'portfolio-detail', params: { id: card.id } }"
            class="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            See Details
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8 flex-wrap">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 border rounded-lg dark:bg-transparent"
        :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'"
      >
        Previous
      </button>

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