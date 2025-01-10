<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { onMounted, ref, computed } from 'vue';

const cardItems = 
[
    {
        tag: 'Digital Marketing',
        title: 'Universitas Jendral Achmad Yani',
        description: 'We successfully increased awareness and registration traffic by implementing social media optimization, digital marketing strategies, advertising, and press releases. As a result, we achieved up to 144% of the target registrations for the 2022 New Student Admissions.',
        image: '/src/assets/portofolio/Unjani.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Smartpol Application',
        description: 'Smartpol is a digital service specifically designed for political campaigns, helping clients effectively manage their campaign strategies with advanced technological solutions.',
        image: '/src/assets/portofolio/Smartpol.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Berseka Application',
        description: 'Berseka is a waste management application designed to support efficient and eco-friendly waste management practices..',
        image: '/src/assets/portofolio/Berseka.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Jatidiri.app',
        description: 'Jatidiri is a super app focused on psychology, helping users discover their potential, interests, and talents, along with providing online psychological consultation services..',
        image: '/src/assets/portofolio/Jatidiri.png',
        alt: 'Project'
    },
    {
        tag: 'Digital Marketing',
        title: 'ULBI',
        description: 'We optimized digital assets and marketing campaigns to boost student registrations at ULBI through various digital platforms. This project involved digital asset analysis, pixel integration for ad tracking, content creation and optimization, ad campaign launches, and campaign evaluations to meet conversion targets.',
        image: '/src/assets/portofolio/Ulbi.png',
        alt: 'Project'
    },
    {
        tag: 'web Development',
        title: 'Edutama - Aplikasi Sistem Keauangan Sekolah dan Pesantren',
        description: 'Edutama is a financial application designed to assist private schools, boarding schools, and other educational institutions in managing their finances more efficiently.',
        image: '/src/assets/portofolio/Edutama.png',
        alt: 'Project'
    },
    {
        tag: 'Speaker',
        title: 'KEMENKOP',
        description: 'We delivered presentations for KEMENKOP, providing valuable insights and supporting their initiatives through in-depth education and comprehensive discussions.',
        image: '/src/assets/portofolio/Kemenkop.png',
        alt: 'Project'
    }
]


const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = Math.ceil(cardItems.length / itemsPerPage)

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return cardItems.slice(start, end)
})

function nextPage() {
    if (currentPage.value < totalPages) {
        currentPage.value++
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

function goToPage(page) {
    currentPage.value = page
}
</script>

<template>
    <div class="px-[56px] md:px-[112px] dark:bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(card, index) in paginatedItems" :key="index" class="bg-white dark:bg-black dark:shadow-gray-600 shadow-lg overflow-hidden p-[24px] w-[395px] rounded-2xl flex-shrink-0">
                <img :src="card.image" :alt="card.alt" class="w-full h-48 object-cover mb-[24px] rounded-lg">
                <div class="space-y-[16px]">
                    <span class="px-3 py-2 bg-gray-100 rounded text-xs dark:bg-gray-800">{{ card.tag }}</span>
                    <h1 class="text-gray-800 font-raleway text-[32px] font-semibold dark:text-white">{{ card.title }}</h1>
                    <p class="text-[16px] text-gray-600 dark:text-gray-400">{{ card.description }}</p>
                    <RouterLink class="inline-block">
                        <span>See Details</span>
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="mt-8 flex justify-center gap-2">
            <button @click="prevPage" 
                    :disabled="currentPage === 1"
                    class="px-3 py-1 border dark:bg-transparent rounded-lg"
                    :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">
                Previous
            </button>
            
            <button v-for="page in totalPages" 
                    :key="page"
                    @click="goToPage(page)"
                    class="px-3 py-1 border dark:bg-transparent rounded-lg"
                    :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'">
                {{ page }}
            </button>
            
            <button @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="px-3 py-1 border dark:bg-transparent rounded-lg"
                    :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400 dark:text-white' : 'bg-white hover:bg-gray-50'">
                Next
            </button>
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