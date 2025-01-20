<template>
    <div class="pb-24 space-y-12 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black">
        <!-- Section Header -->
        <div class="flex flex-col items-center justify-center pt-16">
            <div class="flex items-center gap-2.5 mb-4">
                <div class="w-8 h-0.5 bg-blue-500"></div>
                <h4 class="font-medium tracking-wider text-gray-600 text-md dark:text-gray-400">OUR TEAM</h4>
                <div class="w-8 h-0.5 bg-blue-500"></div>
            </div>
            <h1 class="mt-2 text-4xl font-bold leading-tight text-center text-gray-800 md:text-5xl dark:text-white font-raleway">
                Meet the Minds Behind <br/>
                <span class="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">the Innovation</span>
            </h1>
        </div>

        <div class="grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:px-16 max-w-7xl">
            <div v-for="(member, index) in teamMembers" :key="index"
                class="relative overflow-hidden transition-all duration-500 shadow-lg group rounded-2xl hover:scale-110 hover:shadow-2xl hover:-translate-y-2">
                <div class="aspect-w-3 aspect-h-4">
                    <img :src="member.image" :alt="`Image of ${member.name}`"
                        class="object-cover w-full h-full transition-transform duration-500" />
                    <!-- <img :src="member.image" :alt="`Image of ${member.name}`"
                        class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" /> -->
                    <!-- <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:opacity-100">
                        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0">
                            <h3 class="mb-1 text-xl font-bold">Team Member</h3>
                            <p class="text-sm text-gray-200">Position</p>
                            <div class="flex gap-4 mt-4">
                                <a href="#" class="text-white transition-colors hover:text-blue-400">
                                    <i class="text-lg fab fa-linkedin"></i>
                                </a>
                                <a href="#" class="text-white transition-colors hover:text-blue-400">
                                    <i class="text-lg fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const teamMembers = ref([
    {
        image: new URL('@/assets/about-us/OurTeam/PakTaufiq.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Endar.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Ghiar.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Ambu.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Dherri.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/sari.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Diar.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/fauzan.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/gina.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/salwa.png', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/yoyo.png', import.meta.url).href,
    },
]);
</script>