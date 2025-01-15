<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

const positions = [
    {
        type: 'Full Time',
        title: 'Front End Developer',
        description: 'Proficiency in HTML, CSS, JavaScript (React, Vue, or Angular) experience is a plus), knowledge of responsive design principles, and familiarity with version control (Git).',
        postedDays: 2
    },
    {
        type: 'Full Time', 
        title: 'UI/UX Designer',
        description: 'Strong proficiency in design tools (Figma, Adobe XD), understanding of user-centered design principles, and ability to create engaging user interfaces and experiences.',
        postedDays: 3
    },
    {
        type: 'Part Time',
        title: 'Backend Developer',
        description: 'Experience with Node.js, Python or Java, knowledge of database systems, API development skills, and understanding of server architecture and cloud services.',
        postedDays: 1
    },
    {
        type: 'Contract',
        title: 'Project Manager',
        description: 'Strong leadership and communication skills, experience with agile methodologies, ability to manage multiple projects, and track record of successful project delivery.',
        postedDays: 4
    }
]
</script>

<template>
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">Open Position</span>
            <h1 class="font-raleway text-[45px] font-bold text-gray-800 dark:text-gradient">Explore Opportunities, <span class="text-gradient">Shape your Career</span></h1>
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">See available positions and find a role where your skills and passions align with our mission.<br>Start your journey with us today.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[18px]">
            <div v-for="(position, index) in positions" :key="index" class="bg-[#F5F6FA] dark:bg-black rounded-[16px] p-6 hover:shadow-lg transition-all duration-300 dark:shadow-gray-600">
                <div class="flex flex-col gap-4">
                    <span class="text-sm text-blue-600 font-medium">{{ position.type }}</span>
                    <h2 class="text-xl font-raleway font-semibold text-gray-800 dark:text-white">{{ position.title }}</h2>
                    <p class="text-gray-600 dark:text-white text-sm">{{ position.description }}</p>
                    <div class="flex justify-between items-center mt-4">
                        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Apply Now
                        </button>
                        <span class="text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                            </svg>
                            Posted {{ position.postedDays }} days ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-blue-gradient-1 to-blue-gradient-2 text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center mt-[50px] shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="space-y-4 text-center md:text-left mb-6 md:mb-0">
                <h1 class="text-3xl font-bold font-raleway">Work Together with Hexagon Inc.</h1>
                <p class="text-white/90 max-w-xl">Join our innovative team where professionalism meets creativity. Experience a modern work environment with friendly colleagues and flexible payment options.</p>
            </div>
            <Button class="bg-white text-blue-700 px-8 py-3 rounded-xl hover:bg-light-secondary hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center gap-2">
                <span>Let's Chat</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </Button>
        </div>
    </div>
</template>

<style>
.active-dot {
    content: url('@/assets/Active dot.svg');
}
</style>