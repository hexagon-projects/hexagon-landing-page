<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { onMounted, ref } from 'vue';
import axiosInstance from '@/axios'; // Pastikan path sesuai

// State untuk menyimpan data dari API
const cardItems = ref([]);
const activeCard = ref(1);

// Fungsi untuk mengambil data dari API
async function fetchProjectData() {
    try {
        const response = await axiosInstance.get('/api/Portofolio'); // Endpoint Laravel Anda
        console.log(response.data);
        if (response.data && response.data.data) {
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

// Mengatur scroll untuk container
function handleScroll() {
    const container = document.querySelector('.project-container');
    const activeCardIndex = Math.ceil(container.scrollLeft / container.children[0].offsetWidth);
    activeCard.value = activeCardIndex === 0 ? 1 : activeCardIndex;
}

// Panggil data saat komponen dimuat
onMounted(() => {
    fetchProjectData();

    const container = document.querySelector('.project-container');
    container.addEventListener('scroll', handleScroll);
});
</script>


<template>
    <div class="bg-gradient-to-t from-[#F3F8FF] to-white dark:bg-gradient-to-t dark:from-black dark:to-black">
        <div class="px-[56px] md:px-[112px] mt-[56px]">
            <div class="mb-[56px]">
                <div class="flex justify-between">
                    <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                        Our Projects
                    </span>
                    <div class="block dark:hidden">
                        <ButtonOutline @click="$router.push({ name: 'portfolio' })">
                            <font-awesome-icon icon="arrow-right" />
                        </ButtonOutline>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-[24px]">
                    <h1
                        class="text-gray-800 dark:text-white font-semibold text-[18px] md:text-[32px] font-raleway tracking-[-0.64px]">
                        We provide perfect IT solutions for your business
                    </h1>
                    <div class="hidden dark:block">
                        <Button @click="$router.push({ name: 'portfolio' })">
                            <span class="hidden md:block">Show All Portfolio</span>
                            <font-awesome-icon icon="arrow-right" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden md:block">
            <div class="flex justify-start gap-[24px] md:py-[56px] overflow-x-auto project-container">
                <div v-for="(card, index) in cardItems" :key="index"
                    class="p-[24px] w-[395px] rounded-2xl flex-shrink-0 hover:shadow-2xl transition-all duration-300"
                    :class="{ 'ml-[56px] md:ml-[112px]': index == 0, '': index + 1 == activeCard }">
                    <img v-if="card.image" :src="card.image" :alt="card.alt" class="mb-[24px] rounded-lg">
                    <div class="space-y-[16px]">
                        <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                            {{ card.tag }}
                        </span>
                        <h1 class="text-gray-800 font-raleway text-[32px] font-semibold dark:text-white">
                            {{ card.title }}
                        </h1>
                        <p class="text-[16px] text-gray-600 dark:text-gray-400">
                            {{ card.description }}
                        </p>
                        <RouterLink class="inline-block">
                            <span>See Details</span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Layout -->
        <div class="md:hidden block">
            <div class="flex justify-start gap-4 py-4 overflow-x-auto project-container">
                <div v-for="(card, index) in cardItems" :key="index"
                    class="p-4 w-[80vw] rounded-2xl flex-shrink-0 hover:shadow-2xl transition-all duration-300">
                    <img v-if="card.image" :src="card.image" :alt="card.alt" class="mb-4 rounded-lg">
                    <div class="space-y-3">
                        <span class="inline px-3 py-1 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">
                            {{ card.tag }}
                        </span>
                        <h1 class="text-gray-800 font-raleway text-xl font-semibold dark:text-white">
                            {{ card.title }}
                        </h1>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
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