<script setup>
import { ref, computed } from "vue";
import BlogPost from "../../News/BlogPost.vue";
import Sidebar from "../../News/Sidebar.vue";
import Pagination from "../../News/Pagination.vue";
import debounce from "lodash/debounce";

// Dummy data (seperti sebelumnya)
const posts = ref([
    {
        id: 1,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        category: "Post",
        timeAgo: "337 days ago",
        title: "Meningkatkan Bisnis dengan Strategi Digital Marketing yang Efektif",
        description: "Pelajari strategi digital marketing yang dapat meningkatkan visibilitas dan pertumbuhan bisnis Anda secara signifikan.",
        author: "Admin Hexagon",
        comments: 24,
        views: "77k",
    },
    {
        id: 2,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        category: "NEWS",
        timeAgo: "336 days ago",
        title: "Pentingnya Branding dalam Membangun Identitas Bisnis",
        description: "Branding yang kuat dapat membuat bisnis Anda lebih dikenal dan dipercaya oleh pelanggan.",
        author: "Admin Hexagon",
        comments: 24,
        views: "77k",
    },
    {
        id: 3,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        category: "NEWS",
        timeAgo: "336 days ago",
        title: "Mengoptimalkan Website untuk Performa Maksimal",
        description: "Optimalkan website Anda untuk memastikan performa yang cepat dan responsif demi pengalaman pengguna yang lebih baik.",
        author: "Admin Hexagon",
        comments: 24,
        views: "77k",
    },
    {
        id: 4,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        category: "NEWS",
        timeAgo: "336 days ago",
        title: "Tentang Hexagon",
        description: "Ini Hexagon Inc, perusahaan di bidang branding...",
        author: "Admin Hexagon",
        comments: 24,
        views: "77k",
    },
]);

// State untuk kategori yang dipilih
const selectedCategory = ref("All");

// Search Query
const searchQuery = ref("");

// Hitung kategori dan jumlah datanya
const categories = computed(() => {
    const counts = posts.value.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    return [
        { name: "All", count: posts.value.length },
        ...Object.keys(counts).map((key) => ({ name: key, count: counts[key] })),
    ];
});

// Filtered Posts berdasarkan kategori dan search query
const filteredPosts = computed(() => {
    let result = posts.value;

    // Filter berdasarkan kategori
    if (selectedCategory.value !== "All") {
        result = result.filter((post) => post.category === selectedCategory.value);
    }

    // Filter berdasarkan search query
    if (searchQuery.value) {
        result = result.filter(
            (post) =>
                post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }

    return result;
});

// Pagination states
const currentPage = ref(1);
const postsPerPage = 5;

// Hitung total halaman
const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / postsPerPage)
);

// Filter data untuk halaman saat ini
const paginatedFilteredPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.value.slice(start, end);
});

// Pagination methods
const previousPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) currentPage.value = page;
};

// Debounce Search
const debouncedSearch = debounce((query) => {
    searchQuery.value = query;
}, 300);

// Metode untuk mengubah kategori
const selectCategory = (category) => {
    selectedCategory.value = category;
    currentPage.value = 1; // Reset ke halaman pertama
};
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
                        :category="post.category" :timeAgo="post.timeAgo" :title="post.title"
                        :description="post.description" :author="post.author" :comments="post.comments"
                        :views="post.views" :id="post.id" />
                </div>

                <!-- Pagination -->
                <Pagination :currentPage="currentPage" :totalPages="totalPages" @previous="previousPage"
                    @next="nextPage" @go-to-page="goToPage" />
            </div>

            <!-- Sidebar -->
            <div class="col-span-4">
                <Sidebar :categories="categories" :onSearch="debouncedSearch" @selectCategory="selectCategory" />
            </div>
        </div>
    </div>
</template>
