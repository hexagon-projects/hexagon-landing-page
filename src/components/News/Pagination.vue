<template>
    <div class="flex items-center justify-between mt-8">
        <button @click="handlePreviousPage" class="flex items-center gap-2 text-black dark:text-white disabled:text-gray-400 dark:disabled:text-gray-600"
            :disabled="currentPage === 1">
            <font-awesome-icon icon="arrow-right" :class="[
                'px-4 py-2 rotate-180 border-2 rounded-full',
                currentPage === 1 ? 'border-gray-400 dark:border-gray-600' : 'border-black dark:border-white'
            ]" />
            Previous
        </button>
        <div class="space-x-2">
            <button v-for="page in totalPages" :key="page" @click="handleGoToPage(page)" :class="[
                'px-3 py-1 rounded-full text-black dark:text-white',
                currentPage === page ? 'bg-gray-100 dark:bg-gray-700' : '',
            ]">
                {{ page }}
            </button>
        </div>
        <button @click="handleNextPage" class="flex items-center gap-2 text-black dark:text-white disabled:text-gray-400 dark:disabled:text-gray-600" :disabled="currentPage === totalPages">
            Next
            <font-awesome-icon icon="arrow-right" :class="[
                'px-4 py-2 border-2 rounded-full',
                currentPage === totalPages ? 'border-gray-400 dark:border-gray-600' : 'border-black dark:border-white'
            ]" />
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    currentPage: Number,
    totalPages: Number,
});

const emits = defineEmits(["previous", "next", "go-to-page"]);

const scrollToBlogPage = () => {
    const blogPageElement = document.getElementById('blogpage');
    if (blogPageElement) {
        blogPageElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const handlePreviousPage = () => {
    emits("previous");
    scrollToBlogPage();
};

const handleNextPage = () => {
    emits("next");
    scrollToBlogPage();
};

const handleGoToPage = (page) => {
    emits("go-to-page", page);
    scrollToBlogPage();
};
</script>
