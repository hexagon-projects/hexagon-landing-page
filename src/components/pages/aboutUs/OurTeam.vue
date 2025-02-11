<template>
    <div class="space-y-12 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black">
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

        <div class="grid gap-8 px-4 mx-auto grid-cols-2 lg:grid-cols-4 lg:px-16 max-w-7xl">
            <div v-for="(member, index) in displayedMembers" :key="index"
                class="relative overflow-hidden transition-all duration-500 shadow-lg group rounded-2xl hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div class="aspect-w-3 aspect-h-4">
                    <img :src="member.image" :alt="`Image of ${member.name}`"
                        class="object-cover w-full h-full transition-transform duration-500" />
                </div>
            </div>
        </div>

        <!-- See More Button (Mobile Only) -->
        <div class=" md:hidden block">
            <div v-if="teamMembers.length > 4" class="flex justify-center mt-8">
                <button 
                    @click="showAll = !showAll"
                    class="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                >
                    {{ showAll ? 'See Less' : 'See More' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const teamMembers = ref([
    {
        image: new URL('@/assets/about-us/OurTeam/PakTaufiq.webp', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Ghiar.webp', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Endar.webp', import.meta.url).href,
    },
    {
        image: new URL('@/assets/about-us/OurTeam/Dherri.webp', import.meta.url).href,
    },
]);

const showAll = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768; // Breakpoint untuk mobile
};

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile);
});

const displayedMembers = computed(() => {
    if (isMobile.value && !showAll.value) {
        return teamMembers.value.slice(0, 4);
    }
    return teamMembers.value;
});
</script>