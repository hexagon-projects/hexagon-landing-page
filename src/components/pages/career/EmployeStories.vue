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
    <div class="px-4 md:px-[112px]">
        <!-- Header Section -->
        <div class="flex flex-col gap-4 md:gap-9 items-center text-center mb-6 md:mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-3 md:px-4 py-2 rounded-lg text-xs font-medium inline mt-6 md:mt-[50px]">
                Employee Stories
            </span>
            <h1 class="font-raleway text-xl md:text-[30px] font-bold text-gray-800 dark:text-gradient px-2 md:px-0">
                <span class="block md:hidden">Whether you're an experienced professional or a passionate intern,<br>find a place to grow and make an impact with us.</span>
            </h1>
        </div>

        <!-- Slider Section -->
        <div class="relative">
            <div class="flex items-center justify-between">
                <!-- Previous Button -->
                <button @click="prevSlide" 
                        class="absolute left-0 z-10 p-1 md:p-2 transition-all duration-300 bg-white rounded-full shadow-md dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <!-- Slider Container -->
                <div class="mx-6 md:mx-24 overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" 
                         :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <!-- Testimonial Cards -->
                        <div v-for="(story, index) in employeeStories" 
                             :key="index" 
                             class="flex-shrink-0 w-full">
                            <div class="p-4 md:p-8 px-6 md:px-0 mx-3 md:mx-0 transition-all duration-300 bg-white border border-gray-100 dark:bg-black rounded-xl md:rounded-2xl dark:border-gray-800">
                                <div class="flex flex-col items-center gap-3 md:gap-6">
                                    <!-- Profile Image -->
                                    <div class="relative">
                                        <img :src="story.image" 
                                             :alt="story.name" 
                                             class="object-cover rounded-full w-16 h-16 md:w-28 md:h-28 ring-2 md:ring-4 ring-blue-100 dark:ring-blue-900"/>
                                        <div class="absolute p-1 md:p-2 text-white bg-blue-600 rounded-full -bottom-1 -right-1 md:-bottom-2 md:-right-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                 class="w-3 h-3 md:w-4 md:h-4" 
                                                 viewBox="0 0 20 20" 
                                                 fill="currentColor">
                                                <path fill-rule="evenodd" 
                                                      d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-5-1a1 1 0 00-1.707-.707L8 11.586 6.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                                      clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- Name and Position -->
                                    <div class="space-y-1 md:space-y-2 text-center">
                                        <h3 class="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
                                            {{ story.name }}
                                        </h3>
                                        <p class="text-xs md:text-md font-medium text-blue-600 dark:text-blue-400">
                                            {{ story.position }}
                                        </p>
                                    </div>

                                    <!-- Testimony -->
                                    <div class="relative">
                                        <svg class="absolute w-4 h-4 md:w-6 md:h-6 text-blue-600 -top-2 -left-1 md:-top-3 md:-left-2 dark:text-gray-600" 
                                             fill="currentColor" 
                                             viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                        </svg>
                                        <p class="px-3 md:px-6 text-md md:text-lg italic leading-relaxed text-center text-gray-600 dark:text-gray-300">
                                            {{ story.testimony }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Next Button -->
                <button @click="nextSlide" 
                        class="absolute right-0 z-10 p-1 md:p-2 transition-all duration-300 bg-white rounded-full shadow-md dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Dot Indicators -->
            <div class="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
                <button v-for="(_, index) in employeeStories" 
                        :key="index"
                        @click="currentSlide = index"
                        class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300"
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