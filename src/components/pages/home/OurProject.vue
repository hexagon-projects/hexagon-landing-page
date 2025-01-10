<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { onMounted, ref } from 'vue';

const cardItems = [
    {
        tag: 'Digital Marketing',
        title: 'Universital Jendral Achmad Yani',
        description: 'We were able to increase awareness and traffic of registrants through the implementation of social media optimization, digital marketing, and advertising strategies, as well as press releases, which helped achieve up to 144% of the target registrants for the 2022 New Student Admissions.',
        image: '/src/assets/our-project/Unjani.png',
        alt: 'Project'
    },
    {
        tag: 'Web Development',
        title: 'Smartpol Application',
        description: 'Smartpol adalah layanan digital yang dirancang khusus untuk pelaksanaan kampanye politik',
        image: '/src/assets/our-project/SmartPol.png',
        alt: 'Project'
    },
    {
        tag: 'Web Development',
        title: 'Berseka Application',
        description: 'Aplikasi pengelolaan sampah',
        image: '/src/assets/our-project/Berseka.png',
        alt: 'Project'
    },
    {
        tag: 'Web Development',
        title: 'Jatidiri.app',
        description: 'Jatidiri adalah super aplikasi psikologi untuk mengetahui potensi diri, minat, bakat, serta layanan konsultasi psikologi online.',
        image: '/src/assets/our-project/JatiDiri.png',
        alt: 'Project'
    },
    {
        tag: 'Digital Marketing',
        title: 'ULBI',
        description: 'Mengoptimalkan aset digital dan kampanye pemasaran untuk meningkatkan pendaftaran mahasiswa baru melalui berbagai platform digital. Proyek ini melibatkan analisis aset digital, integrasi pixel untuk pelacakan iklan, pembuatan dan optimasi konten, peluncuran dan optimasi iklan di berbagai platform, serta evaluasi kampanye untuk mencapai target konversi yang ditentukan.',
        image: '/src/assets/our-project/ULBI.png',
        alt: 'Project'
    },
    {
        tag: 'web Development',
        title: 'Edutama - Aplikasi Sistem Keauangan Sekolah dan Pesantren',
        description: 'Edutama is a financial application designed to assist private schools, boarding schools, and other educational institutions in managing their finances more efficiently.',
        image: '/src/assets/our-project/Edutama.png',
        alt: 'Project'
    },
    {
        tag: 'Speaker',
        title: 'KEMENKOP',
        description: 'We delivered presentations for KEMENKOP, providing valuable insights and supporting their initiatives through in-depth education and comprehensive discussions.',
        image: '/src/assets/our-project/Kemenkop.png',
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
    <div class=" bg-gradient-to-t from-[#F3F8FF] to-white dark:bg-gradient-to-t dark:from-[#1c1c1d] dark:to-black">
        <div class="px-[56px] md:px-[112px]">
            <div class="mb-[56px]">
                <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">Our
                    Projects</span>
                <div class="flex items-center justify-between">
                    <h1 class="text-gray-800 dark:text-white font-semibold text-[32px] font-raleway tracking-[-0.64px]">
                        We provide
                        perfect
                        IT solutions for your business</h1>
                    <div class="block dark:hidden">
                        <ButtonOutline>
                            <font-awesome-icon icon="arrow-right" />
                        </ButtonOutline>
                    </div>
                    <div class="hidden dark:block">
                        <Button>
                            <span>Show All Portfolio</span>
                            <font-awesome-icon icon="arrow-right" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-start gap-[24px] py-[56px] overflow-x-auto project-container ">
            <div v-for="(card, index) in cardItems" class="p-[24px] w-[395px] rounded-2xl flex-shrink-0"
                :class="{ 'ml-[56px] md:ml-[112px]' : index == 0, 'shadow-2xl' : index + 1 == activeCard }">
                <img :src="card.image" :alt="card.alt" class="mb-[24px] rounded-lg">
                <div class="space-y-[16px]">
                    <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">{{
                        card.tag }}</span>
                    <h1 class="text-gray-800 font-raleway text-[32px] font-semibold dark:text-white">{{ card.title }}
                    </h1>
                    <p class="text-[16px] text-gray-600 dark:text-gray-400">{{ card.description }}</p>
                    <RouterLink class="inline-block">
                        <span>See Details</span>
                    </RouterLink>
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