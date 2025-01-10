<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex items-center gap-2.5">
            <div class="w-8 h-1 bg-light-primary"></div>
            <h4 class="text-md">Our Team</h4>
        </div>
        <h1 class="mt-2 text-2xl font-bold text-[#272D3E]">Meet the Minds Behind the Innovation</h1>
    </div>
    <div class="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
        <div v-for="(member, index) in teamMembers" :key="index"
            class="border-4 border-[#0066FF] rounded-[47px] p-1 hover:scale-105 transition-all duration-300">
            <div
                class="relative transition transform shadow-lg bg-gradient-to-b from-blue-500 to-indigo-500 rounded-[42px] overflow-hidden h-[500px]">
                <div
                    class="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-t from-black dark:from-black via-white/20 dark:black/20 to-transparent">
                </div>
                <img :src="member.image" :alt="`Image of ${member.name}`"
                    class="absolute object-cover w-full h-full rounded-lg" />
                <div class="absolute px-2 py-1 text-xs font-semibold text-white bg-blue-700 rounded-md top-4 left-4">
                    {{ member.position }}
                </div>
                <div class="absolute text-white bottom-7 left-7 z-[2]">
                    <h3 class="text-lg font-bold text-white">{{ member.name }}</h3>
                    <p class="text-sm text-[#0066ff]">{{ member.role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const teamMembers = ref([
    {
        name: "Maulis Taufiq K Purwadinata",
        position: "CEO Marketing Inc.",
        role: "Execution Expert",
        image: new URL('@/assets/about-us/OurTeam/PakTaufiq.png', import.meta.url).href,
    },
    {
        name: "John Doe",
        position: "Developer",
        role: "Frontend Specialist",
        image: new URL('@/assets/about-us/OurTeam/PakTaufiq.png', import.meta.url).href,
    },
    {
        name: "Jane Smith",
        position: "Designer",
        role: "UI/UX Designer",
        image: new URL('@/assets/about-us/OurTeam/PakTaufiq.png', import.meta.url).href,
    },
]);
</script>