<script setup>
import Button from '@/components/button/Button.vue';
</script>

<template>
    <div class="flex flex-col gap-9 mb-[78px] px-[56px] md:px-[112px]">
        <span class="text-sm font-semibold px-[10px]">CAREER OPPORTUNITIES</span>
        <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
            <div class="mb-6 lg:w-1/2">
                <h1 class="text-[30px] md:text-[45px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-4">
                    Would you like to join our team</h1>
                <p class="text-xs text-gray-600 text-justify">Join Hexagon Inc. and grow with a team that values innovation and excellence. We offer a collaborative environment, exciting projects, and the chance to make a real impact in digital services. Ready to shape the future with us? Explore our open roles today!</p>
                <div class="mt-4">
                    <Button>
                        <span class="text-xs">See All Job Offer</span>
                        <font-awesome-icon icon="arrow-right" />
                    </Button>
                </div>
            </div>
            <div class="flex flex-col lg:max-w-[450px] w-full">
                <div class="flex flex-col items-start bg-[#F5F6FA] rounded-[16px] mb-4 p-[45px] pt-[35px] relative transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
                    <p class="text-xs text-gray-600 mb-2">Intern</p>
                    <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-2">
                        Front End Developer</h1>
                    <p class="text-xs text-gray-600 text-justify">Proficiency in HTML, CSS, JavaScript (React, Vue, or Angular experience is a plus), knowledge of responsive design principles, and familiarity with version control (Git).</p>
                    <div class="absolute bottom-0 right-0 flex items-center justify-center">
                        <img src="@/assets/Group 11.svg" alt="Icon" class="w-13 h-13" />
                    </div>
                    <div class="absolute bottom-0 right-0 flex gap-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <img src="@/assets/Large unit.svg" alt="Large Unit Icon" class="w-[150px] h-[150]" />
                    </div>
                </div>
                <div class="flex flex-col items-start bg-[#F5F6FA] rounded-[16px] mb-4 p-[45px] pt-[35px] relative transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
                    <p class="text-xs text-gray-600 mb-2">Intern</p>
                    <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold mb-2 text-gray-800">
                        Front End Developer</h1>
                    <p class="text-xs text-gray-600 text-justify">Proficiency in HTML, CSS, JavaScript (React, Vue, or Angular experience is a plus), knowledge of responsive design principles, and familiarity with version control (Git).</p>
                    <div class="absolute bottom-0 right-0 flex items-center justify-center">
                        <img src="@/assets/Group 11.svg" alt="Icon" class="w-13 h-13" /> 
                    </div>
                    <div class="absolute bottom-0 right-0 flex gap-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <img src="@/assets/Large unit.svg" alt="Large Unit Icon" class="w-[150px] h-[150]" />
                    </div>
                </div>
                <div class="flex flex-col items-start items-center bg-[#F5F6FA] rounded-[16px] mb-4 p-[45px] pt-[35px] relative transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
                    <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-2 text-center text-[#053273]">
                        Can't find the position you are looking for?</h1>
                    <p class="text-xs text-gray-600 text-center">Don't worry, get in touch with us anyways, we are always looking for great team members to join us.</p>
                    <div class="mt-3"> 
                        <Button>
                            <span class="text-xs">Apply Now</span>
                            <font-awesome-icon icon="arrow-right" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hover\:bg-blue-500:hover {
    background-color: #3b82f6;
}

.hover\:text-white:hover {
    color: white;
}

.hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:scale-105:hover {
    transform: scale(1.05);
}

.hover\:text-white:hover p,
.hover\:text-white:hover h1 {
    color: white; 
}

.opacity-0 {
    opacity: 0;
}

.opacity-100 {
    opacity: 1;
}
</style>
