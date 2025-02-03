<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';

const cardItems = [
    {
        tag: 'News',
        Posted: 'Posted on 337 days ago',
        title: 'Industrial Visit of SMK NU Haurgeulis Kab. Indramayu: Building Strong Friendship..',
        description: 'On June 21, 2023, SMK NU Haurgeulis made a memorable industrial visit to PT. Hexagon Karyatama Indonesia. This visit is one of the school efforts in... ',
        image: '/src/assets/home/artikel1.png',
        alt: 'Project'
    },
    {
        tag: 'News',
        Posted: 'Posted on 338 days ago',
        title: 'Tentang Hexagon',
        description: 'Ini Hexagon Inc., perusahaan di bidang branding dan pemasaran digital, telah mengumumkan kolaborasi strategis dengan tiga perusahaan terkemuka lainnya... ',
        image: '/src/assets/home/artikel2.png',
        alt: 'Project'
    },
    {
        tag: 'News',
        Posted: 'Posted on 339 days ago',
        title: 'Hexagon Inc. Collaborates with 3 Well-Known Companies in Bandung City',
        description: 'Hexagon Inc., a company in the field of branding and digital marketing, has announced strategic collaborations with three other leading companies in B... ',
        image: '/src/assets/home/artikel3.png',
        alt: 'Project'
    },
]

const activeCard = ref(1)

function handleScroll() {
    const container = document.querySelector('.project-container')
    const activeCardIndex = Math.ceil(container.scrollLeft / container.children[0].offsetWidth)
    activeCard.value = activeCardIndex == 0 ? 1 : activeCardIndex
}

onMounted(() => {
    const container = document.querySelector('.project-container')
    container.addEventListener('scroll', handleScroll)
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
                <div v-for="(card, index) in cardItems"
                    class="p-[24px] w-[395px] flex-shrink-0 border-r-2 dark:border-none dark:bg-[#0D0D0D]"
                    :class="{ 'ml-[56px] md:ml-[112px]': index == 0, '': index + 1 == activeCard }">
                    <img :src="card.image" :alt="card.alt" class="mb-[24px] rounded-2xl">
                    <div class="space-y-[16px]">
                        <span class="px-3 py-2 text-xs font-bold text-blue-500">{{ card.tag }}</span> | <span
                            class="px-3 py-2 text-xs text-black font-semibold dark:text-[#D6DADE]">{{ card.Posted }}</span>
                        <h1 class="text-gray-800 dark:text-white font-raleway text-[25px] font-bold">{{ card.title }}</h1>
                        <p class="text-[13px] text-gray-600 font-light dark:text-[#D6DADE]">{{ card.description }}</p>
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
                <div v-for="(card, index) in cardItems" :key="index" class="py-6">
                    <div class="flex justify-between gap-4">
                        <!-- Konten Teks -->
                        <div class="flex flex-col gap-2 flex-1">
                            <!-- Judul -->
                            <h1 class="text-gray-800 dark:text-white font-raleway text-[16px] font-bold line-clamp-2">
                                {{ card.title }}
                            </h1>

                            <!-- Deskripsi -->
                            <p class="text-sm text-gray-600 font-light dark:text-[#D6DADE] line-clamp-2">
                                {{ card.description }}
                            </p>

                            <!-- Tombol Baca Selengkapnya -->
                            <div class="justify-between">
                                <button class="text-[12px] flex items-center gap-2 text-blue-500 font-semibold hover:underline mt-2">
                                    Baca selengkapnya <Icon icon="solar:map-arrow-right-bold-duotone" width="12" height="12" />
                                </button>
                            </div>
                        </div>

                        <!-- Gambar -->
                        <img :src="card.image" :alt="card.alt" class="w-32 h-24 rounded-lg object-cover">
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