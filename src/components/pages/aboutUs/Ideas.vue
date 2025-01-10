<template>
    <div class="flex flex-col items-center justify-between max-w-6xl p-8 mx-auto md:flex-row">
        <div class="w-full mb-8 md:w-1/2 md:mb-0">
            <img src="@/assets/about-us/superman_3d.png" alt="">
        </div>
        
        <div class="w-full md:w-1/2 md:pl-8">
            <h1 class="mb-4 text-xl font-semibold text-blue-900 md:text-2xl">
                Transforming Ideas into Digital Excellence
            </h1>

            <p class="mb-6 text-gray-600 text-md">
                Explore our suite of tailored digital services—from IT consultation to branding
                and digital marketing—crafted to empower your business and maximize impact
                in a dynamic digital landscape.
            </p>
            
            <ul class="mb-8 space-y-3">
                <li v-for="service in services" :key="service" class="flex items-center space-x-2">
                    <span class="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                        <span class="text-sm text-white">✓</span>
                    </span>
                    <span class="text-gray-700">{{ service }}</span>
                </li>
            </ul>
            
            <div class="flex flex-wrap gap-4">
                <button
                    class="flex items-center gap-3 py-3 text-white transition-colors bg-blue-600 rounded-full px-7 hover:bg-blue-700">
                    <div class="block w-2 h-2 bg-white rounded-full"></div>
                    See More
                </button>
                <button
                    class="flex items-center gap-3 py-3 text-blue-600 transition-colors border rounded-full border-[#07439A] px-7 hover:bg-blue-50">
                    <div class="block w-2 h-2 rounded-full bg-light-secondary"></div>
                    Request Consultation
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const services = ref([
    'IT Consultation',
    'Digital Marketing',
    'Branding',
    'Media Consultant'
])
</script>
