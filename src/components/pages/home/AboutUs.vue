<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
            <span class="bg-gray-100 px-4 py-2 rounded-lg text-xs font-medium inline">ABOUT US</span>
            <h1 class="font-raleway text-[30px] font-semibold text-gray-800">Digital Artwork & IT Solution<br>Be the
                best partner to create solution together</h1>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button>
                    <span class="h-2 w-2 bg-white block rounded-full"></span>
                    <span>More About Us</span>
                </Button>
                <ButtonOutline>
                    <span class="h-2 w-2 bg-light-secondary block rounded-full"></span>
                    <span>Services Detail</span>
                </ButtonOutline>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div
                class="lg:max-w-[750px] w-full flex flex-col bg-[#F5F6FA] bg-opacity-[55%] rounded-[16px] items-center">
                <div class="p-[56px] pt-[55px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 mb-4">
                        IT Consultation: Digital Solutions For
                        Your Business</h1>
                    <p class="text-[16px] text-gray-600">Collaborate with us to create a responsive,
                        high-performance website tailored to your business needs.</p>
                </div>
                <div class="px-[32px]">
                    <img src="@/assets/about-us/it-consultation.png" alt="IT Consultation" />
                </div>
            </div>

            <div
                class="lg:max-w-[450px] w-full flex flex-col lg:flex-col-reverse items-center bg-[#F5F6FA] bg-opacity-[55%] rounded-[16px]">
                <div class="p-[56px] pt-0">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 mb-4">
                        Digital Marketing: Boost Your Brand's
                        Online Presence</h1>
                    <p class="text-[16px] text-gray-600">Boost your digital reach with targeted strategies, audience
                        engagement, and measurable growth for your brand.</p>
                </div>
                <div class="px-[56px] pt-[40px]">
                    <img src="@/assets/about-us/digital-marketing.png" alt="Digital Marketing">
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px]">
            <div
                class="lg:max-w-[450px] w-full flex flex-col items-center bg-[#F5F6FA] bg-opacity-[55%] rounded-[16px]">
                <div class="px-[56px] pt-[40px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 mb-4">
                        Branding: Create a Distinct and Impactful Brand</h1>
                    <p class="text-[16px] text-gray-600">Craft a powerful brand identity to stand out, attract
                        customers, and build lasting industry impact.</p>
                </div>
                <div class="">
                    <img src="@/assets/about-us/branding.png" alt="Branding">
                </div>
            </div>
            <div
                class="lg:max-w-[750px] w-full flex flex-col lg:flex-row-reverse items-center lg:items-start bg-[#F5F6FA] bg-opacity-[55%] rounded-[16px]">
                <div class="flex-initial px-[48px] pt-[55px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 mb-4">
                        Media Consultant: Strategic Guide for Media Excellence</h1>
                    <p class="text-[16px] text-gray-600">Expert guidance to enhance media strategies, increase
                        visibility, and strengthen your brand's market position.</p>
                </div>
                <div class="lg:max-w-[382px] lg:w-full">
                    <img src="@/assets/about-us/media-consultant.png" alt="Media Consultant" class="rounded-tl-2xl">
                </div>
            </div>
        </div>
    </div>
</template>