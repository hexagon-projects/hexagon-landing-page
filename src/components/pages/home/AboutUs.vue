<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
            <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">ABOUT US</span>
            <h1 class="font-raleway text-[30px] font-semibold text-gray-800 dark:text-white">Digital Artwork & IT
                Solution<br>Be the
                best partner to create solution together</h1>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button @click="$router.push({ name: 'about-us' })">
                    <span class="block w-2 h-2 bg-white rounded-full"></span>
                    <span>More About Us</span>
                </Button>
                <ButtonOutline @click="$router.push({ name: 'services' })">
                    <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                    <span>Services Detail</span>
                </ButtonOutline>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px] justify-center">
            <div
                class="lg:max-w-[650px] w-full flex flex-col bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] items-center overflow-hidden card-bg">
                <div class="flex flex-col p-[28px] pt-[28px] justify-center items-center">
                    <ButtonOutline @click="$router.push({ name: 'contact' })">
                        <!-- <span class="block w-2 h-2 rounded-full bg-light-secondary"><Icon icon="meteocons:star-fill" /></span> -->
                        <Icon icon="meteocons:star-fill" class="w-6 h-6"/>
                        <span class="dark:text-white">IT Solution</span>
                    </ButtonOutline>
                    <h1 class="text-[40px] font-raleway font-semibold text-gradient-dark mt-5">Digital Solutions
                        <br> For Your Business
                    </h1>
                </div>
                <div class="">
                    <img src="@/assets/services/3d1.png" alt="IT Consultation"
                        class="rounded-xl object-cover w-full h-auto" />
                </div>
            </div>

            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] card-bg">
                <div class="flex h-full">
                    <div class="flex items-end  w-1/2">
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
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[90px] justify-center">
            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] card-bg ">
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
            <div
                class="lg:max-w-[650px] w-full flex flex-col items-center  bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] overflow-hidden card-bg">
                <div class="p-[38px]">
                    <img src="@/assets/services/3d2.png" alt="Media Consultant" class="object-cover w-full h-auto">
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
    </div>
</template>

<style scoped>
.active-dot {
    content: url('@/assets/Active dot.svg');
}

.dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}

</style>