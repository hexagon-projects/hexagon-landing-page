<template>
    <div class="relative w-full py-8 space-y-16 bg-white dark:bg-black">
        <!-- Header Section -->
        <div class="flex flex-col items-center justify-center">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-0.5 bg-light-primary dark:bg-blue-400"></div>
                <h4 class="text-gray-700 text-md dark:text-gray-300">Our Client</h4>
            </div>
            <p class="mt-2 text-2xl text-center text-[#272D3E] dark:text-gray-100">
                More than 100 companies trust and <br /> choose Hexagon Inc.
            </p>
        </div>

        <!-- Marquee Section -->
        <div class="flex flex-col gap-12">
            <!-- First Marquee -->
            <Marquee :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40"
                class="overflow-hidden">
                <div class="flex gap-4">
                    <div v-for="(logo, index) in marqueeOneLogos" :key="'marquee1-' + index"
                        class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
                        <img :src="logo" alt="Client Logo" class="max-w-[120px] object-contain" />
                    </div>
                </div>
            </Marquee>

            <!-- Second Marquee -->
            <div class="flex items-center justify-center gap-2.5">
                <div class="w-8 h-0.5 bg-light-primary dark:bg-blue-400"></div>
                <h4 class="text-gray-700 text-md dark:text-gray-300">Our Media</h4>
            </div>
            <p class="mt-2 text-2xl text-center text-[#272D3E] dark:text-gray-100">
                Integrated with over 100 mainstream media outlets
            </p>
            <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40"
                class="overflow-hidden">
                <div class="flex gap-4">
                    <div v-for="(logo, index) in marqueeTwoLogos" :key="'marquee2-' + index"
                        class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 dark:hover:bg-gray-800 dark:border-blue-400 dark:bg-blue-900/20 transition-all duration-300">
                        <img :src="logo" alt="Client Logo" class="max-w-[120px] object-contain" />
                    </div>
                </div>
            </Marquee>
        </div>
    </div>
</template>

<script setup>
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

const logos = [];
for (let i = 1597883474; i <= 1597883499; i++) {
    logos.push(new URL(`../../../assets/about-us/OurClient/Frame ${i}.png`, import.meta.url).href);
}

const halfLength = Math.ceil(logos.length / 2);
const marqueeOneLogos = logos.slice(0, halfLength);
const marqueeTwoLogos = logos.slice(halfLength);
</script>
