<template>
    <section class="relative py-16 dark:bg-black">
        <img src="../../../assets/news/Background.png" alt="Background"
            class="absolute inset-0 object-cover w-full h-full" />

        <!-- Header Section -->
        <div class="mb-12 text-center">
            <p class="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-800 dark:text-blue-200 rounded-md">Blog</p>
            <h1 class="mt-4 text-3xl font-semibold text-light-primary dark:text-white font-raleway">Our Blog and Highlight</h1>
            <p class="mt-2 text-gray-400 dark:text-gray-300">Get the latest articles from our journal, writing, discuss and share</p>
        </div>

        <!-- Blog Card Section -->
        <div class="relative max-w-6xl mx-auto">
            <!-- Navigation Buttons -->

            <!-- Carousel Container -->
            <div class="relative overflow-hidden rounded-[30px]">
                <button @click="prevSlide"
                    class="absolute z-10 w-12 h-12 transition-all rotate-45 -translate-y-1/2 rounded-xl -left-6 top-1/2 bg-white dark:bg-black hover:bg-[#0C3DF4] dark:hover:bg-[#0C3DF4]">

                </button>

                <button @click="nextSlide"
                    class="absolute z-10 w-12 h-12 transition-all rotate-45 -translate-y-1/2 rounded-xl -right-6 top-1/2 bg-white dark:bg-black hover:bg-[#0C3DF4] dark:hover:bg-[#0C3DF4]">
                </button>
                <div class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(blog, index) in blogs" :key="index" class="flex-shrink-0 w-full">
                        <!-- Blog Card -->
                        <div class="relative">
                            <img :src="blog.image" :alt="blog.title" class="object-cover w-full h-auto max-h-96" />
                            <div
                                class="absolute inset-0 flex flex-col justify-end w-full p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                                <div class="mb-3 space-x-6 text-xs font-medium text-gray-200">
                                    <span class="uppercase">{{ blog.category }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        class="inline-block w-3 h-3">
                                        <path fill="white"
                                            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                    </svg>
                                    <span>Posted on {{ blog.postedDays }} days ago</span>
                                </div>
                                <h2 class="text-xl font-semibold text-white">{{ blog.title }}</h2>
                                <div class="sm:max-w-[400px] max-w-full">
                                    <p class="mt-1 text-xs text-white sm:text-sm">{{ blog.excerpt }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination Dots -->
                <div class="absolute flex gap-2 right-20 bottom-4">
                    <button v-for="(_, index) in blogs" :key="index" @click="goToSlide(index)"
                        class="w-2 h-2 transition-all rounded-full"
                        :class="currentIndex === index ? 'bg-[#157EFB] w-4' : 'bg-white'"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const blogs = ref([
    {
        title: 'Tentang Hexagon',
        category: 'News',
        postedDays: 336,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        excerpt: 'Ini Hexagon Inc., perusahaan di bidang branding dan pemasaran digital, telah mengumumkan kolaborasi strategis dengan tiga perusahaan terkemuka lainnya...'
    },
    {
        title: 'Tentang Hexagon',
        category: 'News',
        postedDays: 336,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        excerpt: 'Ini Hexagon Inc., perusahaan di bidang branding dan pemasaran digital, telah mengumumkan kolaborasi strategis dengan tiga perusahaan terkemuka lainnya...'
    },
    {
        title: 'Tentang Hexagon',
        category: 'News',
        postedDays: 336,
        image: new URL('@/assets/news/Hero.png', import.meta.url).href,
        excerpt: 'Ini Hexagon Inc., perusahaan di bidang branding dan pemasaran digital, telah mengumumkan kolaborasi strategis dengan tiga perusahaan terkemuka lainnya...'
    },
    // Add more blog posts here
])

const currentIndex = ref(0)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % blogs.value.length
}

const prevSlide = () => {
    currentIndex.value = currentIndex.value === 0
        ? blogs.value.length - 1
        : currentIndex.value - 1
}

const goToSlide = (index) => {
    currentIndex.value = index
}

// Optional: Auto-play functionality
let autoplayInterval
const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
    clearInterval(autoplayInterval)
}

// Uncomment to enable autoplay
// onMounted(() => {
//   startAutoplay()
// })

// onUnmounted(() => {
//   stopAutoplay()
// })
</script>

<style scoped>
/* Optional: Add smooth scrolling behavior */
.carousel-slide {
    transition: transform 0.5s ease-in-out;
}
</style>