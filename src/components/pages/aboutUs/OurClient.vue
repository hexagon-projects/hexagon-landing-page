<template>
    <div class="relative w-full py-8 space-y-16 bg-white">
        <div class="flex flex-col items-center justify-center">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-1 bg-light-primary"></div>
                <h4 class="text-md">Our Business Philosophy</h4>
            </div>
            <p class="mt-2 text-2xl text-[#272D3E] text-center">
                More than 100 companies trust and <br /> choose Hexagon Inc.
            </p>
        </div>

        <div class="flex flex-col gap-12">
            <Marquee :fade="true" direction="left" :reverse="false" :pauseOnHover="false" :speed="40"
                class="overflow-hidden">
                <div class="flex gap-4">
                    <div v-for="(logo, index) in marqueeOneLogos" :key="'marquee1-' + index"
                        class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 transition-all duration-300">
                        <img :src="logo" alt="Client Logo" class="max-w-[120px] object-contain" />
                    </div>
                </div>
            </Marquee>

            <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40"
                class="overflow-hidden">
                <div class="flex gap-4">
                    <div v-for="(logo, index) in marqueeTwoLogos" :key="'marquee2-' + index"
                        class="flex items-center justify-center w-72 h-32 p-4 bg-white border rounded-[20px] border-[#2F84FF] hover:bg-light-primary/20 transition-all duration-300">
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
