<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="pl-4 md:px-[112px] pt-12">
        <!-- Bagian About Us (Tetap Sama) -->
        <div class="flex flex-col gap-9 items-start md:items-center md:text-center mb-[36px] md:mb-[78px]">
            <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">Services</span>
            <h1 class="font-raleway md:text-[30px] text-[20px] font-semibold text-gray-800 dark:text-white">Discover
                solutions crafted for your business growth.</h1>
            <div class="hidden md:block">
                <div class="flex gap-[14px]">
                    <Button @click="$router.push({ name: 'about-us' })">
                        <span>More About Us</span>
                    </Button>
                    <ButtonOutline @click="$router.push({ name: 'services' })">
                        <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                        <span>Services Detail</span>
                    </ButtonOutline>
                </div>
            </div>
        </div>

        <!-- Container untuk Desktop (Tanpa Scroll Horizontal) -->
        <div class="hidden md:flex flex-col lg:flex-row gap-[18px] mb-[18px] justify-center">
            <!-- Card 1 -->
            <div
                class="lg:max-w-[650px] w-full flex flex-col bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] items-center overflow-hidden card-bg md:hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900">
                <div class="flex flex-col p-[28px] pt-[28px] justify-center items-center">
                    <ButtonOutline @click="$router.push({ name: 'contact' })">
                        <Icon icon="meteocons:star-fill" class="w-6 h-6" />
                        <span class="dark:text-white">IT Solution</span>
                    </ButtonOutline>
                    <h1 class="text-[40px] md:text-[32px] font-raleway font-semibold text-gradient-dark mt-5">Digital
                        Solutions
                        <br> For Your Business
                    </h1>
                </div>
                <div class="">
                    <img src="@/assets/services/3d1.png" alt="IT Consultation"
                        class="rounded-xl object-cover w-36 h-auto" />
                </div>
            </div>

            <!-- Card 2 -->
            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA]  dark:bg-[#191D34] rounded-[16px] card-bg md:hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900">
                <div class="flex h-full">
                    <div class="flex items-end w-1/2">
                        <img src="@/assets/services/Union5.png" alt="Digital Marketing" class="">
                    </div>
                    <div class="flex justify-end w-1/2">
                        <div>
                            <img src="@/assets/services/Union1.png" alt="Digital Marketing" class="">
                        </div>
                    </div>
                </div>
                <div class="px-8 pb-10 pt-2">
                    <h1
                        class="text-[24px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-4">
                        Digital Marketing</h1>
                    <p class="text-[16px] text-gray-600 dark:text-[#A0ABE9]">Boost your brand's online presence</p>
                </div>
            </div>
        </div>
        <div class="hidden md:flex flex-col lg:flex-row gap-[18px] mb-[18px] justify-center">
            <!-- Card 1 -->
            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] card-bg md:hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900">
                <div class="flex h-full">
                    <div class="flex justify-between flex-col">
                        <div>
                            <img src="@/assets/services/Union7.png" alt="Digital Marketing" class="">
                        </div>
                        <div class="">
                            <img src="@/assets/services/Union6.png" alt="Digital Marketing" class="">
                        </div>
                    </div>
                </div>
                <div class="px-8 pb-10 pt-2">
                    <h1
                        class="text-[24px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-4">
                        Media Consultant</h1>
                    <p class="text-[16px] text-gray-600 dark:text-[#A0ABE9]">Create a Distinct and <br> Impactful Brand
                    </p>
                </div>
            </div>

            <!-- Card 2 -->
            <div
                class="lg:max-w-[650px] w-full flex flex-col items-center  bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] overflow-hidden card-bg md:hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900">
                <div class="p-[38px]">
                    <img src="@/assets/services/3d2.png" alt="Media Consultant" class="object-cover w-36 h-auto">
                </div>
                <div class="flex flex-col items-center">
                    <div>
                        <h1
                            class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gradient-dark">
                            Strategic Guide for Media Excellence</h1>
                    </div>
                    <ButtonOutline @click="$router.push({ name: 'contact' })" class="mt-5 mb-8">
                        <!-- <span class="block w-2 h-2 rounded-full bg-light-secondary"></span> -->
                        <Icon icon="meteocons:star-fill" class="w-6 h-6" />
                        <span class="dark:text-white">Digital Artwork</span>
                    </ButtonOutline>
                </div>
            </div>
        </div>

        <!-- Container untuk Mobile (Dengan Scroll Horizontal) -->
        <div class="md:hidden mobile-scroll-container">
            <div class="mobile-scroll-content">
                <!-- Card 1 -->
                <div
                    class="mobile-card md:hover:scale-105 transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-900">
                    <div
                        class="flex flex-col bg-[#F5F6FA] dark:bg-[#191D34] rounded-3xl items-center overflow-hidden card-bg">
                        <div class="flex flex-col p-[8px] pt-[28px] justify-center items-center">
                            <ButtonOutline @click="$router.push({ name: 'contact' })">
                                <Icon icon="meteocons:star-fill" class="w-6 h-6" />
                                <span class="dark:text-white">IT Solution</span>
                            </ButtonOutline>
                            <h1 class="text-[40px] font-raleway font-semibold text-gradient-dark mt-5">Digital Solutions
                                <br> For Your Business
                            </h1>
                        </div>
                        <div class="py-8">
                            <img src="@/assets/services/3d1.png" alt="IT Consultation" class="object-cover w-32 h-32" />
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div
                    class="mobile-card md:hover:scale-105 transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-900">
                    <div
                        class="flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] card-bg h-full">
                        <div class="flex h-full">
                            <div class="flex items-end w-1/2">
                                <img src="@/assets/services/Union5.png" alt="Digital Marketing" class="w-full h-auto">
                            </div>
                            <div class="flex justify-end w-1/2">
                                <div>
                                    <img src="@/assets/services/Union1.png" alt="Digital Marketing"
                                        class="w-full h-auto">
                                </div>
                            </div>
                        </div>
                        <div class="px-4 pb-6 pt-2">
                            <h1
                                class="text-[20px] font-raleway tracking-[-0.64px] leading-7 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-2">
                                Digital Marketing
                            </h1>
                            <p class="text-[14px] text-gray-600 dark:text-[#A0ABE9]">
                                Boost your brand's online presence
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div
                    class="mobile-card md:hover:scale-105 transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-900">
                    <div
                        class="flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] card-bg h-full">
                        <div class="flex h-full">
                            <div class="flex justify-between flex-col w-full">
                                <div>
                                    <img src="@/assets/services/Union7.png" alt="Digital Marketing" class="">
                                </div>
                                <div class="flex w-1/2">
                                    <img src="@/assets/services/Union6.png" alt="Digital Marketing" class="">
                                </div>
                            </div>
                        </div>
                        <div class="px-4 pb-6 pt-2">
                            <h1
                                class="text-[20px] font-raleway tracking-[-0.64px] leading-7 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-2">
                                Media Consultant
                            </h1>
                            <p class="text-[14px] text-gray-600 dark:text-[#A0ABE9]">
                                Create a Distinct and Impactful Brand
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div
                    class="mobile-card md:hover:scale-105 transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-900">
                    <div
                        class="flex flex-col items-center bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] overflow-hidden card-bg">
                        <div class="p-[18px]">
                            <img src="@/assets/services/3d2.png" alt="Media Consultant" class="object-cover w-28 h-28">
                        </div>
                        <div class="flex flex-col items-center w-full px-4">
                            <!-- Tambahkan padding horizontal di sini -->
                            <div class="w-full px-4"> <!-- Tambahkan padding horizontal untuk h1 -->
                                <h1
                                    class="text-[32px] font-raleway tracking-[-0.64px] leading-9 text-center font-semibold text-gradient-dark">
                                    Strategic Guide for Media Excellence
                                </h1>
                            </div>
                            <ButtonOutline @click="$router.push({ name: 'contact' })" class="mt-5 mb-8">
                                <Icon icon="meteocons:star-fill" class="w-6 h-6" />
                                <span class="dark:text-white">Digital Artwork</span>
                            </ButtonOutline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Style untuk Scroll Horizontal pada Mobile */
.mobile-scroll-container {
    overflow-x: auto;
    /* Scroll horizontal */
    overflow-y: hidden;
    /* Hilangkan scroll vertikal */
    -webkit-overflow-scrolling: touch;
    /* Smooth scroll pada mobile */
    padding-bottom: 10px;
    /* Ruang untuk scrollbar */
}

.mobile-scroll-content {
    display: flex;
    flex-direction: row;
    /* Layout horizontal */
    gap: 18px;
    /* Jarak antar card */
    padding: 10px 0;
    /* Padding untuk konten */
}

.mobile-card {
    flex: 0 0 auto;
    /* Mencegah card menyusut */
    width: 250px;
    /* Lebar card yang sama */
    height: 350px;
    /* Tinggi card yang sama */
    border-radius: 24px;
    /* Sudut card */
    overflow: hidden;
    /* Hindari overflow */
}

@media (max-width: 767px) {
    /* .mobile-card {
        min-height: 100px;
    } */

    .mobile-card h1 {
        font-size: 24px;
        /* Sesuaikan ukuran font pada mobile */
    }

    .mobile-card p {
        font-size: 14px;
        /* Sesuaikan ukuran font pada mobile */
    }

    .mobile-card img {
        max-height: 150px;
        /* Sesuaikan tinggi gambar pada mobile */
    }
}

/* Style Lainnya */
.active-dot {
    content: url('@/assets/Active dot.svg');
}

.dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}
</style>