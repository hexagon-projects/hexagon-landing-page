<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

const reviews = ref([
    {
        text: "“Hexagons media strategy was highly effective. We successfully increased our presence across various media platforms, which directly impacted the boost in trust and brand awareness.",
        name: "Rudi Santoso",
        position: "Head of Communication",
        initials: new URL('@/assets/male.png', import.meta.url).href,
    },
    {
        text: "“Hexagon helped us create a strong and unique brand identity. With modern design and the right strategy, our brand is now more recognized in the market and has attracted more customers.”",
        name: "Rina Kurniawan",
        position: "Founder",
        initials: new URL('@/assets/female.png', import.meta.url).href,
    },
    {
        text: "“Hexagon provided IT solutions that not only met our business needs but also exceeded our expectations. They are a reliable partner in technology development.”",
        name: "Dewi Lestari",
        position: "Creative Director",
        initials: new URL('@/assets/female2.png', import.meta.url).href,
    }
]);

const currentPage = ref(0);
const totalPages = reviews.value.length;

const nextPage = () => {
    if (currentPage.value < totalPages - 1) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};
</script>

<template>
    <div
        class="px-[10px] md:px-[112px] relative bg-gradient-to-b z-0 pb-[78px] pt-[78px] from-[#F3F8FF] to-white dark:bg-gradient-to-b dark:from-black dark:to-black">
        <img src="../../../assets/about-us/hexsideshapelight.png" alt="" class="absolute right-0 -z-10 block dark:hidden">
        <img src="../../../assets/about-us/hexsideshape.png" alt="" class="absolute right-0 z-0 hidden dark:block">
        <div class="flex flex-col z-0 gap-9 items-center text-center mb-[78px]">
            <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">Review</span>
            <h1 class="font-raleway text-[30px] font-bold text-gray-800 dark:text-white">What Our Clients Say</h1>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden md:block">
            <div class="md:flex flex-col lg:flex-row gap-[18px] mb-[18px] z-10">
                <div class="lg:max-w-[750px] w-full flex flex-col bg-[#2C7EF9] rounded-[20px] shadow-lg relative">
                    <div class="p-[56px] pt-[55px]">
                        <p class="text-[16px] text-white font-normal">{{ reviews[currentPage].text }}</p>
                    </div>
                    <div class="p-[56px] pt-0 flex items-center">
                        <div class="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                            <img :src="`${reviews[currentPage].initials}`" alt="Profile Picture"
                                class="object-cover w-full h-full" />
                        </div>
                        <div class="ml-4">
                            <h3 class="text-white">{{ reviews[currentPage].name }}</h3>
                            <p class="font-normal text-white">{{ reviews[currentPage].position }}</p>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 flex items-center justify-center">
                        <img src="@/assets/Group 11.svg" alt="Icon" class="w-13 h-13" />
                    </div>
                    <div
                        class="absolute bottom-0 right-0 flex gap-2 transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <img src="@/assets/Large unit.svg" alt="Large Unit Icon" class="w-[200px] h-[200px]" />
                    </div>
                </div>
            
                <div class="max-w-[450px] w-full flex flex-col md:flex-col items-center rounded-[16px] p-[5px] relative">
                    <div class="z-20 flex flex-col items-center gap-2">
                        <!-- Top scroll button -->
                        <img src="@/assets/Top arrow.svg" @click="prevPage" :disabled="currentPage === 0" alt="Previous"
                            class="z-30 cursor-pointer" />
                        <div class="flex-col">
                            <img v-for="(review, index) in reviews" :key="index" src="@/assets/Dot.svg"
                                @click="goToPage(index)" :class="{ 'active-dot': currentPage === index }" alt="Page Dot"
                                class="z-30 pt-2 pb-2 cursor-pointer" />
                        </div>
                        <!-- Scroll button -->
                        <img src="@/assets/scroll.svg" @click="nextPage" :disabled="currentPage === totalPages - 1"
                            alt="Next" class="z-30 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Layout (Carousel) -->
        <div class="md:hidden block">
            <div class="flex flex-col items-center">
                <div class="w-full max-w-[350px] bg-[#2C7EF9] rounded-[20px] shadow-lg relative p-6">
                    <p class="text-[16px] text-white font-normal">{{ reviews[currentPage].text }}</p>
                    <div class="flex items-center mt-4">
                        <div class="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                            <img :src="`${reviews[currentPage].initials}`" alt="Profile Picture"
                                class="object-cover w-full h-full" />
                        </div>
                        <div class="ml-4">
                            <h3 class="text-white">{{ reviews[currentPage].name }}</h3>
                            <p class="font-normal text-white">{{ reviews[currentPage].position }}</p>
                        </div>
                    </div>
                </div>
            
                <!-- Carousel Navigation -->
                <div class="flex items-center justify-center gap-4 mt-6">
                    <button @click="prevPage" :disabled="currentPage === 0"
                        class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                        <Icon icon="line-md:arrow-left" class="w-4 h-4" />
                    </button>
                    <div class="flex gap-2">
                        <button v-for="(review, index) in reviews" :key="index" @click="goToPage(index)"
                            :class="{ 'bg-blue-500': currentPage === index, 'bg-gray-300': currentPage !== index }"
                            class="w-3 h-3 rounded-full transition-colors duration-200"></button>
                    </div>
                    <button @click="nextPage" :disabled="currentPage === totalPages - 1"
                        class="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                        <Icon icon="line-md:arrow-right" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.active-dot {
    content: url('@/assets/Active dot.svg');
}
</style>