<script setup>
import { ref } from 'vue';

// Sample reviews data
const reviews = ref([
    {
        text: "“The Hexagon team understood our needs from day one and delivered tailored IT solutions that exceeded our expectations. They were highly professional, and the results speak for themselves!”",
        name: "Jonatan uhuy",
        position: "Ngarit",
        initials: "JD"
    },
    {
        text: "“Working with Hexagon was a game-changer for our business. Their innovative approach and dedication made all the difference.”",
        name: "Alice Smith",
        position: "CEO, TechCorp",
        initials: "AS"
    },
    {
        text: "“I highly recommend Hexagon for their exceptional service and commitment to client satisfaction. They truly care about their clients.”",
        name: "Michael Johnson",
        position: "Manager, Innovate Inc.",
        initials: "MJ"
    }
]);

const currentPage = ref(0);
const totalPages = reviews.value.length; // Total number of reviews

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
    <div class="px-[10px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
            <span class="bg-gray-100 px-4 py-2 rounded-lg text-xs font-medium inline">Review</span>
            <h1 class="font-raleway text-[30px] font-bold text-gray-800">What Our Clients Say</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div class="lg:max-w-[750px] w-full flex flex-col bg-[#2F54E8] rounded-[16px] shadow-lg relative"> <!-- Added relative positioning -->
                <div class="p-[56px] pt-[55px]">
                    <p class="text-[16px] text-white font-normal">{{ reviews[currentPage].text }}</p>
                </div>
                <div class="p-[56px] pt-0 flex items-center">  
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">
                        {{ reviews[currentPage].initials }}
                    </div> 
                    <div class="ml-4">
                        <h3 class="text-white">{{ reviews[currentPage].name }}</h3>
                        <p class="text-white font-normal">{{ reviews[currentPage].position }}</p>
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 flex gap-2">
                    <img src="@/assets/Large unit.svg" alt="Large Unit Icon" class="hidden md:w-[200px] h-[200]" />
                </div>
                <div class="absolute bottom-0 right-0 flex gap-2">
                    <img src="@/assets/Group 11.svg" alt="Group Icon" class="hidden md:w-15 h-15" />
                </div>
            </div>

            <div class="max-w-[450px] w-full flex flex-col md:flex-col items-center rounded-[16px] p-[5px]">
                <div class="flex flex-col items-center gap-2">
                    <img src="@/assets/Top arrow.svg" @click="prevPage" :disabled="currentPage === 0" alt="Previous" class="cursor-pointer" />
                    <div class="flex-col"> 
                        <img 
                            v-for="(review, index) in reviews" 
                            :key="index" 
                            src="@/assets/Dot.svg" 
                            @click="goToPage(index)" 
                            :class="{'active-dot': currentPage === index}" 
                            alt="Page Dot" 
                            class="cursor-pointer pt-2 pb-2"
                        />
                    </div>
                    <img src="@/assets/scroll.svg" @click="nextPage" :disabled="currentPage === totalPages - 1" alt="Next" class="cursor-pointer" />
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
