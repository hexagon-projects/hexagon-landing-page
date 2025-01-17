<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <div class="px-[56px] md:px-[112px] py-40">
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
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div class="lg:max-w-[750px] w-full flex flex-col bg-[#F5F6FA] dark:bg-black rounded-[16px] items-center overflow-hidden dark:shadow-lg dark:shadow-gray-600">
                <div class="p-[56px] pt-[55px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        IT Consultation: Digital Solutions For
                        Your Business</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Collaborate with us to create a responsive,
                        high-performance website tailored to your business needs.</p>
                </div>
                <div class="w-full h-full">
                    <img src="@/assets/about-us/itc.png" alt="IT Consultation"
                        class="w-full h-full object-cover rounded-xl" />
                </div>
            </div>

            <div
                class="lg:max-w-[450px] w-full flex flex-col lg:flex-col-reverse items-center bg-[#F5F6FA] dark:bg-black rounded-[16px] dark:shadow-lg dark:shadow-gray-600">
                <div class="p-[56px] pt-0 lg:pt-[56px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Digital Marketing: Boost Your Brand's
                        Online Presence</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Boost your digital reach with targeted strategies, audience
                        engagement, and measurable growth for your brand.</p>
                </div>
                <div class="w-full px-[56px] pt-[40px]">
                    <img src="@/assets/about-us/newDigitalMarketing.png" alt="Digital Marketing"
                        class="w-full h-auto object-cover rounded-xl">
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[90px]">
            <div class="lg:max-w-[450px] w-full flex flex-col items-center bg-[#F5F6FA] dark:bg-black rounded-[16px] dark:shadow-lg dark:shadow-gray-600">
                <div class="px-[56px] pt-[40px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Branding: Create a Distinct and Impactful Brand</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Craft a powerful brand identity to stand out, attract
                        customers, and build lasting industry impact.</p>
                </div>
                <div class="w-full px-[56px] pb-[32px]">
                    <img src="@/assets/about-us/newBranding.png" alt="Branding"
                        class="w-full h-auto object-cover rounded-xl">
                </div>
            </div>
            <div
                class="lg:max-w-[750px] w-full flex flex-col lg:flex-row-reverse items-center lg:items-start bg-[#F5F6FA] dark:bg-black rounded-[16px] overflow-hidden dark:shadow-lg dark:shadow-gray-600">
                <div class="flex-1 px-[48px] pt-[55px] pb-[32px] lg:pb-0">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Media Consultant: Strategic Guide for Media Excellence</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Expert guidance to enhance media strategies, increase
                        visibility, and strengthen your brand's market position.</p>
                </div>
                <div class="lg:max-w-[420px] w-full">
                    <img src="@/assets/about-us/newMediaConsultant.png" alt="Media Consultant"
                        class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
</template>