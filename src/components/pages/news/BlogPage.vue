<script setup>
import { ref, computed } from "vue";
import BlogPost from "../../News/BlogPost.vue";
import Sidebar from "../../News/Sidebar.vue";
import Pagination from "../../News/Pagination.vue";
import debounce from "lodash/debounce";
import axiosInstance from "@/axios";

const cardItems = ref([]);
const currentPage = ref(1);
const postsPerPage = 5;

const selectedCategory = ref("All");
const searchQuery = ref("");

const totalPages = ref(0);

async function fetchProjectData(page = 1) {
  try {
    const response = await axiosInstance.get(`/api/News?page=${page}`);
    console.log("Response:", response.data);

    if (response.data && response.data.data) {
      cardItems.value = response.data.data.map((item) => ({
        id: item.id,
        category: item.Kategori,
        title: item.judul_news,
        description: item.ket_news,
        image: item.images?.length ? item.images[0] : "",
        urlYoutube: item.url_youtube,
        alt: item.judul_news,
        timeAgo: "1 day ago",
      }));

      currentPage.value = response.data.meta.current_page;
      totalPages.value = response.data.meta.last_page;
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
}

const categories = computed(() => {
  const counts = cardItems.value.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  return [
    { name: "All", count: cardItems.value.length },
    ...Object.keys(counts).map((key) => ({ name: key, count: counts[key] })),
  ];
});

const filteredPosts = computed(() => {
  let result = cardItems.value;

  if (selectedCategory.value !== "All") {
    result = result.filter(
      (item) => item.category === selectedCategory.value
    );
  }

  if (searchQuery.value) {
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  return result;
});

const paginatedFilteredPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filteredPosts.value.slice(start, end);
});

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};

const debouncedSearch = debounce((query) => {
  searchQuery.value = query;
}, 300);

const selectCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1;
};

fetchProjectData();
</script>


<template>
  <div id="blogpage" class="container min-h-screen px-4 pb-20 mx-auto dark:bg-black">
    <!-- Header -->
    <div class="py-10 text-center">
      <h1 class="text-4xl font-bold text-blue-600 ">Our Blog and Highlight</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Get the latest articles from our journal, writing, discuss, and share
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-12 gap-8">
      <!-- Articles -->
      <div class="col-span-8">
        <div class="space-y-8">
          <BlogPost v-for="(post, index) in paginatedFilteredPosts" :key="index" :image="post.image"
            :category="post.category" :timeAgo="post.timeAgo" :title="post.title" :description="post.description"
            :id="post.id" />
        </div>

        <!-- Pagination -->
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @previous="previousPage" @next="nextPage"
          @go-to-page="goToPage" />
      </div>

      <!-- Sidebar -->
      <div class="col-span-4">
        <Sidebar :categories="categories" :onSearch="debouncedSearch" @selectCategory="selectCategory" />
      </div>
    </div>
  </div>
</template>
