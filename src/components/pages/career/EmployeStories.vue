<script setup>
import { ref } from 'vue';
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

const employeeStories = [
    {
        name: 'Rifa Radwa Prasetya',
        position: 'Fullstack Developer',
        testimony: 'Intern at Hexagon has been an incredible journey. The collaborative environment and opportunities for growth have helped me develop both professionally and personally.',
        image: '/src/assets/testimoni/seys.jpg'
    },
    {
        name: 'Budi Imam Prasetyo',
        position: 'Full Stack Developer', 
        testimony: 'I love the innovative culture here. Were always encouraged to think outside the box and implement new technologies to solve complex problems.',
        image: '/src/assets/testimoni/bud.jpg'
    },
    {
        name: 'Emily Rodriguez',
        position: 'Project Manager',
        testimony: 'The supportive team and flexible work environment make Hexagon a great place to work. Ive grown so much in my role here.',
        image: '/src/assets/female.png'
    }
];

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % employeeStories.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + employeeStories.length) % employeeStories.length;
};
</script>

<template>
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">Employee Stories</span>
            <h1 class="font-raleway text-[30px] font-bold text-gray-800 dark:text-gradient">Whether you're an experienced professional or a passionate intern,<br>find a place to grow and make an impact with us.</h1>
        </div>
        <div class="relative">
            <div class="flex items-center justify-between">
                <button @click="prevSlide" class="absolute left-0 z-10 p-2 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div class="overflow-hidden mx-24">
                    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="(story, index) in employeeStories" :key="index" class="w-full flex-shrink-0">
                            <div class="bg-white dark:bg-black rounded-2xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                                <div class="flex flex-col items-center gap-6">
                                    <div class="relative">
                                        <img :src="story.image" :alt="story.name" class="w-28 h-28 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900"/>
                                        <div class="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-5-1a1 1 0 00-1.707-.707L8 11.586 6.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="text-center space-y-2">
                                        <h3 class="text-2xl font-bold text-gray-800 dark:text-white">{{ story.name }}</h3>
                                        <p class="text-sm font-medium text-blue-600 dark:text-blue-400">{{ story.position }}</p>
                                    </div>
                                    <div class="relative">
                                        <svg class="absolute -top-3 -left-2 w-6 h-6 text-blue-600 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                        </svg>
                                        <p class="text-gray-600 dark:text-gray-300 text-center text-lg italic leading-relaxed px-6">{{ story.testimony }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button @click="nextSlide" class="absolute right-0 z-10 p-2 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div class="flex justify-center mt-6 gap-2">
                <button v-for="(_, index) in employeeStories" 
                        :key="index"
                        @click="currentSlide = index"
                        class="w-3 h-3 rounded-full transition-all duration-300"
                        :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'">
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.active-dot {
    content: url('@/assets/Active dot.svg');
}
</style>