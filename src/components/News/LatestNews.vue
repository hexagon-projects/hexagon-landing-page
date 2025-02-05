<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';
import { fetchNews } from '@/service'; // Import fungsi fetchNews

const cardItems = ref([]);
const activeCard = ref(1);

// Fungsi untuk mengambil data berita
const getLatestData = async () => {
    const data = await fetchNews();
    if (data.error) {
        console.error("Error fetching news:", data.error);
    } else {
        cardItems.value = data.data; // Sesuaikan dengan struktur API Laravel
        console.log(cardItems.value, "Latest data berhasil diambil");
    }
};

function handleScroll() {
    const container = document.querySelector('.project-container')
    const activeCardIndex = Math.ceil(container.scrollLeft / container.children[0].offsetWidth)
    activeCard.value = activeCardIndex == 0 ? 1 : activeCardIndex
}

onMounted(() => {
    const container = document.querySelector('.project-container')
    container.addEventListener('scroll', handleScroll)
    getLatestData(); // Panggil fungsi untuk mengambil data saat komponen dimuat
})
</script>

<template>
    <div class="md:pt-40">
        <div class="px-[16px] md:px-[112px] md:mt-[56px]">
            <div class="mb-0">
                <div class="flex items-center justify-between">
                    <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">NEWS AND
                        INSIGHT</span>
                        <ButtonOutline @click="$router.push({ name: 'news' })">
                            <Icon icon="heroicons-solid:arrow-sm-right" width="18" height="18" />
                            <span class="hidden md:block">
                                Show All Articles
                            </span>
                        </ButtonOutline>
                </div>
                <div class="z-20 flex items-center justify-center mt-[14px]">
                    <h1 class="font-semibold text-[16px] md:text-[32px] font-raleway tracking-[-0.64px] pt-[10px]">Get the latest
                        articles from our journal, writing, discuss and share</h1>
                </div>
            </div>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden md:block">
            <div class="flex justify-start gap-[24px] py-[56px] overflow-x-auto project-container">
                <div v-if="cardItems.length == 0" class="bg-white p-[24px] w-[395px] flex-shrink-0 border-r-2 dark:border-none dark:bg-[#0D0D0D] animate-pulse" aria-label="Loading latest">
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
                    v-for="(card, index) in cardItems.slice(0, 3)"
                    class="p-[24px] w-[395px] flex-shrink-0 border-r-2 dark:border-none dark:bg-[#0D0D0D]"
                    :class="{ 'ml-[56px] md:ml-[112px]': index == 0, '': index + 1 == activeCard }">
                    <img :src="card.images[0]" :alt="card.alt" class="mb-[24px] rounded-2xl w-full aspect-[3/2] object-cover" />
                    <div class="space-y-[16px]">
                        <span class="px-3 py-2 text-xs font-bold text-blue-500">{{ card.Kategori }}</span> | <span
                            class="px-3 py-2 text-xs text-black font-semibold dark:text-[#D6DADE]">{{ card.dibuat }}</span>
                        <h1 class="text-gray-800 dark:text-white font-raleway text-[25px] font-bold">{{ card.judul_news }}</h1>
                        <p class="text-[13px] text-gray-600 font-light dark:text-[#D6DADE]">{{ card.ket_news }}</p>
                        <div class="flex items-center gap-2">
                            <img src="@/assets/logoA.png" alt="">
                            <span class="inline-block text-gray-900 dark:text-white">Admin Hexagon</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Layout -->
        <div class="md:hidden block">
            <div class="flex flex-col divide-y divide-gray-300 px-4 py-6">
                <div v-if="cardItems.length == 0" class="py-6">
                    <div class="flex justify-between gap-4">
                        <!-- Konten Teks -->
                        <div class="flex flex-col gap-2 flex-1">
                            <!-- Judul -->
                            <h1 class="text-gray-800 dark:text-white font-raleway text-[16px] font-bold line-clamp-2 bg-gray-300 rounded-md h-[30px] w-3/4"></h1>

                            <!-- Deskripsi -->
                            <p class="text-sm text-gray-600 font-light dark:text-[#D6DADE] line-clamp-2 bg-gray-300 rounded-md h-[20px] w-full"></p>

                            <!-- Tombol Baca Selengkapnya -->
                            <div class="justify-between">
                                <button class="text-[12px] flex items-center gap-2 text-blue-500 font-semibold hover:underline mt-2 bg-gray-300 rounded-md h-[20px] w-1/2"></button>
                            </div>
                        </div>

                        <!-- Gambar -->
                        <div class="w-32 h-24 rounded-lg bg-gray-300"></div>
                    </div>
                </div>
                <div v-else v-for="(card, index) in cardItems" :key="index" class="py-6">
                    <div class="flex justify-between gap-4">
                        <!-- Konten Teks -->
                        <div class="flex flex-col gap-2 flex-1">
                            <!-- Judul -->
                            <h1 class="text-gray-800 dark:text-white font-raleway text-[16px] font-bold line-clamp-2">
                                {{ card.judul_news }}
                            </h1>

                            <!-- Deskripsi -->
                            <p class="text-sm text-gray-600 font-light dark:text-[#D6DADE] line-clamp-2">
                                {{ card.ket_news }}
                            </p>

                            <!-- Tombol Baca Selengkapnya -->
                            <div class="justify-between">
                                <button class="text-[12px] flex items-center gap-2 text-blue-500 font-semibold hover:underline mt-2">
                                    Baca selengkapnya <Icon icon="solar:map-arrow-right-bold-duotone" width="12" height="12" />
                                </button>
                            </div>
                        </div>

                        <!-- Gambar -->
                        <img :src="card.images[0]" :alt="card.alt" class="w-32 h-24 rounded-lg object-cover">
                    </div>
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