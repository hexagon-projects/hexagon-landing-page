<script setup>
/* ------------------------------ */
/* Import Komponen dan Modul      */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline untuk tombol interaktif
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
// Mengimpor fungsi reactive dan lifecycle hook dari Vue
import { ref, onMounted, nextTick } from 'vue';
// Mengimpor instance axios yang sudah dikonfigurasi
import axiosInstance from '@/axios';

/* ------------------------------ */
/* Inisialisasi State dan Variabel */
/* ------------------------------ */
// State untuk menyimpan data kartu proyek
const cardItems = ref([]);
// State untuk menyimpan indeks kartu aktif (yang sedang terlihat)
const activeCard = ref(1);
// Ref untuk container proyek yang akan menangani scroll
const projectContainer = ref(null);

/* ------------------------------ */
/* Fungsi Pengambilan Data Proyek  */
/* ------------------------------ */
async function fetchProjectData() {
    try {
        // Mengambil data portofolio dari API
        const response = await axiosInstance.get('/api/Portofolio');
        if (response.data && response.data.data) {
            // Memetakan data untuk setiap item dan menyimpan informasi yang diperlukan
            cardItems.value = response.data.data.map((item) => ({
                tag: item.Kategori,
                title: item.judul_porto,
                description: item.ket_porto,
                image: item.images.length ? item.images[0] : '',
                alt: item.judul_porto
            }));
        }
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
}

/* ------------------------------ */
/* Fungsi Penanganan Scroll       */
/* ------------------------------ */
// Fungsi untuk menentukan kartu aktif berdasarkan scroll posisi
function handleScroll() {
    if (projectContainer.value) {
        // Menghitung indeks kartu aktif berdasarkan scrollLeft dan lebar kartu pertama
        const activeCardIndex = Math.ceil(projectContainer.value.scrollLeft / projectContainer.value.children[0].offsetWidth);
        activeCard.value = activeCardIndex === 0 ? 1 : activeCardIndex;
    }
}

/* ------------------------------ */
/* Lifecycle Hook: onMounted      */
/* ------------------------------ */
onMounted(() => {
    // Mengambil data proyek saat komponen dimuat
    fetchProjectData();

    // Pastikan DOM telah dirender penuh sebelum menambahkan event listener scroll
    nextTick(() => {
        if (projectContainer.value) {
            projectContainer.value.addEventListener('scroll', handleScroll);
        }
    });
});
</script>

<template>
    <div class="bg-gradient-to-t from-[#F3F8FF] to-white dark:bg-gradient-to-t dark:from-black dark:to-black">
        <!-- Header Section -->
        <div class="px-[16px] md:px-[112px] mt-4 md:mt-[56px]">
            <div class="md:mb-[56px]">
                <div class="flex items-center justify-between">
                    <!-- Label untuk Our Projects -->
                    <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                        Our Projects
                    </span>
                    <!-- Tombol untuk menampilkan seluruh portofolio -->
                    <ButtonOutline @click="$router.push({ name: 'portfolio' })">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="hidden md:block">
                            Show All Portfolio
                        </span>
                    </ButtonOutline>
                </div>
                <!-- Judul dan subjudul -->
                <div class="flex items-center justify-center mt-[14px]">
                    <h1 class="font-semibold text-[20px] md:text-[32px] font-raleway tracking-[-0.64px] pt-[10px] dark:text-white">
                        We provide perfect IT solutions for your business
                    </h1>
                </div>
            </div>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden md:block">
            <div class="relative overflow-hidden px-4">
                <!-- Container Proyek dengan scroll horizontal -->
                <div class="flex justify-start gap-[24px] md:py-[56px] overflow-x-auto project-container" ref="projectContainer">
                    <!-- Looping setiap kartu proyek untuk desktop -->
                    <div v-for="(card, index) in cardItems" :key="index"
                        class="px-[24px] w-[395px] rounded-2xl flex-shrink-0 hover:shadow-2xl transition-all duration-1000 mb-6"
                        :class="{ 'ml-[56px] md:ml-[112px]': index == 0, '': index + 1 == activeCard }">
                        <img v-if="card.image" :src="card.image" :alt="card.alt" class="mb-[24px] w-full aspect-[3/2] object-cover rounded-lg">
                        <div class="space-y-[16px]">
                            <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                                {{ card.tag }}
                            </span>
                            <h1 class="text-gray-800 font-raleway text-[22px] font-semibold dark:text-white line-clamp-2">
                                {{ card.title }}
                            </h1>
                            <p class="text-[14px] text-gray-600 dark:text-gray-400 line-clamp-4">
                                {{ card.description }}
                            </p>
                            <RouterLink class="inline-block">
                                <span>See Details</span>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Layout -->
        <div class="md:hidden block mx-4">
            <div class="relative overflow-hidden px-4">
                <div class="flex justify-start gap-4 py-4 overflow-x-auto project-container">
                    <!-- Looping setiap kartu proyek untuk mobile -->
                    <div v-for="(card, index) in cardItems" :key="index"
                        class="p-4 w-[80vw] rounded-2xl flex-shrink-0 hover:shadow-2xl transition-all duration-1000 mb-6">
                        <img v-if="card.image" :src="card.image" :alt="card.alt" class="mb-4 rounded-lg">
                        <div class="space-y-3">
                            <span class="inline px-3 py-1 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                                {{ card.tag }}
                            </span>
                            <h1 class="text-gray-800 font-raleway text-xl font-semibold dark:text-white line-clamp-2">
                                {{ card.title }}
                            </h1>
                            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                                {{ card.description }}
                            </p>
                            <RouterLink class="inline-block text-blue-500 hover:underline">
                                <span>See Details</span>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error State (jika terjadi error) -->
        <div v-if="error" class="text-red-500 text-center p-4">
            {{ error }}
        </div>

        <!-- Static Apply Card untuk Desktop -->
        <!-- <div class="hidden md:flex flex-col items-center bg-[#F5F6FA] rounded-[16px] p-[45px] pt-[35px] relative transition-all duration-300 hover:bg-blue-500 dark:bg-gray-950 hover:text-white hover:shadow-lg hover:scale-105">
            <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-2 text-center dark:text-white">
                Can't find the position <br> you are looking for?
            </h1>
            <Button class="rounded-lg mt-3">
                <span class="text-xs">Apply Now</span>
            </Button>
        </div> -->

        <!-- Static Apply Card untuk Mobile -->
        <!-- <div class="md:hidden flex flex-col items-center bg-[#F5F6FA] rounded-[16px] p-6 mt-4 relative transition-all duration-300 hover:bg-blue-500 dark:bg-gray-950 hover:text-white hover:shadow-lg hover:scale-105">
            <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-2 text-center dark:text-white">
                Can't find the position you are looking for?
            </h1>
            <Button class="rounded-lg mt-3">
                <span class="text-xs">Apply Now</span>
                <font-awesome-icon icon="arrow-right" />
            </Button>
        </div> -->
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
