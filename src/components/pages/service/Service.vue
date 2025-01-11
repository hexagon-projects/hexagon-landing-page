<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

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
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Our Service</span>
            <h1 class="font-raleway text-[60px] font-bold text-gradient">Empowering your business<br>with smart
                solutions</h1>
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">We Provide Perfect IT Solutions For Your
                Business</p>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button>
                    <span class="h-2 w-2 bg-white block rounded-full"></span>
                    <span>More About Us</span>
                </Button>
                <ButtonOutline>
                    <span class="h-2 w-2 bg-light-secondary block rounded-full"></span>
                    <span class="dark:text-white">Services Detail</span>
                </ButtonOutline>
            </div>
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">Service</span>
            <h1 class="font-raleway text-[30px] font-semibold text-gray-800 dark:text-gradient">Discover Solutions Crafted For Your
                Business Growth<br>Effeciency, and Brand Impact</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div class="lg:max-w-[750px] w-full flex flex-col bg-[#F5F6FA] dark:bg-black rounded-[16px] items-center overflow-hidden dark:shadow-lg dark:shadow-gray-600">
                <div class="p-[56px] pt-[55px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        IT Consultation: Digital Solutions For
                        Your Business</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Collaborate with us to create a responsive,
                        high-performance website tailored to your business needs.</p>
                </div>
                <div class="w-full h-full">
                    <img src="@/assets/about-us/it-consultation.png" alt="IT Consultation"
                        class="w-full h-full object-cover" />
                </div>
            </div>

            <div
                class="lg:max-w-[450px] w-full flex flex-col lg:flex-col-reverse items-center bg-[#F5F6FA] dark:bg-black rounded-[16px] dark:shadow-lg dark:shadow-gray-600">
                <div class="p-[56px] pt-0 lg:pt-[56px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Digital Marketing: Boost Your Brand's
                        Online Presence</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Boost your digital reach with targeted strategies, audience
                        engagement, and measurable growth for your brand.</p>
                </div>
                <div class="w-full px-[56px] pt-[40px]">
                    <img src="@/assets/about-us/digital-marketing.png" alt="Digital Marketing"
                        class="w-full h-auto object-cover rounded-xl">
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[90px]">
            <div class="lg:max-w-[450px] w-full flex flex-col items-center bg-[#F5F6FA] dark:bg-black rounded-[16px] dark:shadow-lg dark:shadow-gray-600">
                <div class="px-[56px] pt-[40px]">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Branding: Create a Distinct and Impactful Brand</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Craft a powerful brand identity to stand out, attract
                        customers, and build lasting industry impact.</p>
                </div>
                <div class="w-full px-[56px] pb-[32px]">
                    <img src="@/assets/about-us/branding.png" alt="Branding"
                        class="w-full h-auto object-cover rounded-xl">
                </div>
            </div>
            <div
                class="lg:max-w-[750px] w-full flex flex-col lg:flex-row-reverse items-center lg:items-start bg-[#F5F6FA] dark:bg-black rounded-[16px] overflow-hidden dark:shadow-lg dark:shadow-gray-600">
                <div class="flex-1 px-[48px] pt-[55px] pb-[32px] lg:pb-0">
                    <h1 class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-white mb-4">
                        Media Consultant: Strategic Guide for Media Excellence</h1>
                    <p class="text-[16px] text-gray-600 dark:text-white">Expert guidance to enhance media strategies, increase
                        visibility, and strengthen your brand's market position.</p>
                </div>
                <div class="lg:max-w-[420px] w-full">
                    <img src="@/assets/about-us/media-consultant.png" alt="Media Consultant"
                        class="w-full h-full object-cover">
                </div>
            </div>
        </div>
        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Benefits</span>
        <div class="flex flex-col gap-9 mb-[78px] mt-[36px]">
            <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
                <div class="mb-6 lg:w-1/2">
                    <h1
                        class="text-[30px] md:text-[45px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 dark:text-white mb-4">
                        Why Choose <span class="text-gradient">Hexagon inc</span> ?</h1>
                    <p class="text-xs text-gray-600 dark:text-white text-justify">Discover the advantages of partnering with us—tailored
                        solutions, dedicated support, and proven results that set us apart.</p>
                    <div class="mt-4">
                        <div class="accordion divide-neutral/20 divide-y">
                            <div class="accordion-item active" id="payment-arrow">
                                <button class="accordion-toggle inline-flex items-center gap-x-4 text-start dark:text-white"
                                    aria-controls="payment-arrow-collapse" aria-expanded="true">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    The Right Solution for Your Business
                                </button>
                                <div id="payment-arrow-collapse"
                                    class="accordion-content w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="payment-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="text-base-content/80 font-normal dark:text-white">
                                            We understand that every business has unique needs. That's why our services
                                            are flexible and tailored to align with your specific business goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="delivery-arrow">
                                <button class="accordion-toggle inline-flex items-center gap-x-4 text-start dark:text-white"
                                    aria-controls="delivery-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Latest Technology, Best Solutions
                                </button>
                                <div id="delivery-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="delivery-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="text-base-content/80 font-normal dark:text-white">
                                            Stay ahead of the curve with our cutting-edge technology. We provide the
                                            best solutions that leverage the latest advancements to enhance your
                                            business operations, ensuring seamless integration and maximum efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="cancel-arrow">
                                <button class="accordion-toggle inline-flex items-center gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Always Ahead Approach
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="text-base-content/80 font-normal dark:text-white">
                                            Our proactive strategies keep you ahead of market trends. By continuously
                                            innovating and anticipating changes, we help your business thrive in a
                                            competitive landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="cancel-arrow">
                                <button class="accordion-toggle inline-flex items-center gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Efficient and Affordable
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="text-base-content/80 font-normal dark:text-white">
                                            Experience cost-effective solutions without compromising quality. Our
                                            services are designed to deliver exceptional value, balancing affordability
                                            with outstanding performance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:w-1/2">
                    <img src="@/assets/services/service.png" alt="services">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-9 mb-[78px] mt-[36px] justify-center items-center">
            <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
                <div class="flex flex-col lg:w-1/2">
                    <img src="@/assets/services/timeline.png" alt="services">
                </div>
                <div class="flex flex-col mb-6 lg:w-1/2 justify-center">
                    <div>
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Why Choose Us</span>
                    </div>
                    <h1
                        class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gradient mb-4 mt-[36px]">
                        Experienced <span class="text-gradient-switch">, Dedicated Team</span></h1>
                    <p class="text-xs text-gray-600 dark:text-white text-justify">Our professionals are not only skilled but passionate
                        about helping you achieve your goals.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-9 mb-[78px] mt-[36px]">
            <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
                <div class="flex flex-col mb-6 lg:w-1/2 justify-center">
                    <div>
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Who We Are</span>
                    </div>
                    <h1
                        class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-4 mt-[36px] dark:text-white">
                        More Than 100 Companies<br> Trust and Choose <span class="text-gradient">Hexagon inc</span></h1>
                    <p class="text-xs text-gray-600 text-justify dark:text-white">Over 100 companies trust us for reliable, tailored
                        digital solutions that enhance their business presence.</p>
                    <div class="mt-4">
                        <Button>
                            <span class="text-xs">See All Job Offer</span>
                            <font-awesome-icon icon="arrow-right" />
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col lg:w-1/2">
                    <img src="@/assets/services/100+client.png" alt="100client">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
            <span class="bg-gray-100 px-4 py-2 rounded-lg text-xs font-medium inline dark:bg-[#121212]">Review</span>
            <h1 class="font-raleway text-[45px] font-bold text-gray-800 dark:text-gradient-switch">What Our Clients Say</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div class="lg:max-w-[750px] w-full flex flex-col bg-[#2F54E8] rounded-[16px] shadow-lg relative">
                <!-- Added relative positioning -->
                <div class="p-[56px] pt-[55px]">
                    <p class="text-[16px] text-white font-normal">{{ reviews[currentPage].text }}</p>
                </div>
                <div class="p-[56px] pt-0 flex items-center">
                    <div
                        class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">
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
                    <img src="@/assets/Top arrow.svg" @click="prevPage" :disabled="currentPage === 0" alt="Previous"
                        class="cursor-pointer" />
                    <div class="flex-col">
                        <img v-for="(review, index) in reviews" :key="index" src="@/assets/Dot.svg"
                            @click="goToPage(index)" :class="{ 'active-dot': currentPage === index }" alt="Page Dot"
                            class="cursor-pointer pt-2 pb-2" />
                    </div>
                    <img src="@/assets/scroll.svg" @click="nextPage" :disabled="currentPage === totalPages - 1"
                        alt="Next" class="cursor-pointer" />
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