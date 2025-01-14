<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-[56px] md:px-[112px]">
        <!-- Email Contact -->
        <div class="bg-white dark:bg-black rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative">
            <div class="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-col items-center gap-6">
                <div class="w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="@/assets/mailcon.jpg" alt="">
                </div>
                <a href="mailto:contact@hexagon.co.id" class="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-xl">
                    contact@hexagon.co.id
                </a>
                <p class="text-gray-500 dark:text-gray-400 text-center text-base">Send us an email for general inquiries and support</p>
            </div>
        </div>

        <!-- Phone Contact -->
        <div class="bg-white dark:bg-black rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative">
            <div class="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-col items-center gap-6">
                <div class="w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="@/assets/phonecon.jpg" alt="">
                </div>
                <a href="tel:(+62) 812 2218 1823" class="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-xl">
                    (+62) 812 2218 1823
                </a>
                <p class="text-gray-500 dark:text-gray-400 text-center text-base">Call us for immediate assistance</p>
            </div>
        </div>

        <!-- Social Media Links -->
        <div class="bg-white dark:bg-black rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative">
            <div class="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-col items-center gap-6">
                <div class="w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="@/assets/hexacon.jpg" alt="">
                </div>
                <div class="flex flex-col md:flex-row gap-4 md:gap-6">
                    <a href="https://instagram.com" target="_blank" class="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 font-medium">Instagram</a>
                    <span class="hidden md:inline text-gray-300">•</span>
                    <a href="https://linkedin.com" target="_blank" class="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 font-medium">LinkedIn</a>
                    <span class="hidden md:inline text-gray-300">•</span>
                    <a href="https://facebook.com" target="_blank" class="text-blue-600 dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300 font-medium">Facebook</a>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-center text-base">Follow us on social media for updates</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
/* Component styles here if needed */
</style>