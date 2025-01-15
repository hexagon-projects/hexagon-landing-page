<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

const formData = ref({
    fullName: '',
    email: '',
    subject: '',
    message: ''
});

const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData.value);
    // Reset form after submission
    formData.value = {
        fullName: '',
        email: '',
        subject: '',
        message: ''
    };
};
</script>

<template>
    <div
        class="flex flex-col md:flex-row items-start justify-between gap-10 px-[56px] md:px-[112px] py-16 bg-gradient">
        <!-- Left Section -->
        <div class="w-full md:w-1/2 space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white">Have a project idea?<br>Drop me a
                line.</h2>
            <p class="text-gray-600 dark:text-gray-400">Got a project? Drop me a line if you want to work together on
                something exciting. Even the smallest seed can grow into something beautiful.</p>

            <div class="gap-3 flex items-center">
                <div class="flex w-16 h-16 bg-gray-100 rounded-full items-center justify-center">
                    <Icon icon="fluent-color:mail-48" class="text-white w-8 h-8" />
                </div>
                <div>
                    <p class="text-gray-600 dark:text-gray-400">Email us</p>
                    <a href="mailto:contact@hexagon.com"
                        class="text-blue-600 dark:text-blue-400 font-medium">contact@hexagon.com</a>
                </div>
            </div>

            <div class="space-y-3">
                <div class="flex items-center gap-2.5 mt-8">
                    <div class="w-8 h-0.5 bg-light-primary"></div>
                    <h4 class="text-sm">Connect With Us</h4>
                </div>
                <div class="flex gap-4">
                    <a href="#" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:youtube-icon" />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:linkedin-icon" />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:facebook" />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="skill-icons:instagram" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Right Section - Contact Form -->
        <div class="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Request A Quote – let's work together.
            </h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input type="text" v-model="formData.fullName" placeholder="Full name"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <input type="email" v-model="formData.email" placeholder="Email address"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>

                <div>
                    <input type="text" v-model="formData.subject" placeholder="Subject"
                        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <textarea v-model="formData.message" placeholder="Your message" rows="4"
                        class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <button
                    class="w-full btn-gradient font-medium py-3 px-6 rounded-full transition-all duration-300 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center gap-2">
                    Send Message
                    <font-awesome-icon icon="arrow-right" class="text-sm" />
                </button>
            </form>
        </div>
    </div>
</template>
