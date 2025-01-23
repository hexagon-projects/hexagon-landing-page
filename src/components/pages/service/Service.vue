<script setup lang="ts">

import { ORBIT_DIRECTION } from "../../../utils";
import Orbit from "../../inspiraUI/Orbit.vue";
import Button from '../../../components/button/Button.vue';
import ButtonOutline from '../../../components/button/ButtonOutline.vue';
import { Icon } from "@iconify/vue";

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

const goToPage = (page: number) => {
    currentPage.value = page;
};

const scrollToSection = () => {
    const element = document.querySelector('#service');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll halus ke elemen
    }
};
</script>

<template>
    <div
        class="px-[56px] md:px-[112px] bg-gradient-to-b from-white to-[#F3F8FF] dark:bg-gradient-to-b dark:from-black dark:to-black">
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Our
                Service</span>
            <h1 class="font-raleway text-[60px] font-bold text-gradient">Empowering your business<br>with smart
                solutions</h1>
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">We Provide Perfect IT
                Solutions For Your
                Business</p>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button @click="scrollToSection">
                    <span class="block w-2 h-2 bg-white rounded-full"></span>
                    <span>Explore Our Service</span>
                </Button>
                <ButtonOutline @click="$router.push({ name: 'contact' })">
                    <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                    <span class="dark:text-white">Request A Consultation</span>
                </ButtonOutline>
            </div>
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]"
                id="service">Service</span>
            <h1 class="font-raleway text-[30px] font-semibold text-gray-800 dark:text-gradient">Discover Solutions
                Crafted For Your
                Business Growth<br>Effeciency, and Brand Impact</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px] justify-center">
            <div
                class="lg:max-w-[650px] w-full flex flex-col bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] items-center overflow-hidden dark:card-bg">
                <div class="flex flex-col p-[28px] pt-[28px] justify-center items-center">
                    <ButtonOutline @click="$router.push({ name: 'contact' })">
                        <!-- <span class="block w-2 h-2 rounded-full bg-light-secondary"><Icon icon="meteocons:star-fill" /></span> -->
                        <Icon icon="meteocons:star-fill" class="w-6 h-6"/>
                        <span class="dark:text-white">IT Solution</span>
                    </ButtonOutline>
                    <h1 class="text-[40px] font-raleway font-semibold text-gradient-dark mt-5">Digital Solutions
                        <br> For Your Business
                    </h1>
                </div>
                <div class="">
                    <img src="@/assets/services/3d1.png" alt="IT Consultation"
                        class="rounded-xl object-cover w-full h-auto" />
                </div>
            </div>

            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] dark:card-bg">
                <div class="flex h-full">
                    <div class="flex items-end  w-1/2">
                        <img src="@/assets/services/Union5.png" alt="Digital Marketing" class="">
                    </div>
                    <div class="flex justify-end w-1/2">
                        <div>
                            <img src="@/assets/services/Union1.png" alt="Digital Marketing" class="">
                        </div>
                    </div>
                </div>
                <div class="px-8 pb-10 pt-2">
                    <h1
                        class="text-[24px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-4">
                        Digital Marketing</h1>
                    <p class="text-[16px] text-gray-600 dark:text-[#A0ABE9]">Boost your brand's online presence</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[90px] justify-center">
            <div
                class="lg:max-w-[350px] w-full flex flex-col justify-between bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] dark:card-bg ">
                <div class="flex h-full">
                    <div class="flex justify-between flex-col">
                        <div>
                            <img src="@/assets/services/Union7.png" alt="Digital Marketing" class="">
                        </div>
                        <div class="">
                            <img src="@/assets/services/Union6.png" alt="Digital Marketing" class="">
                        </div>
                    </div>
                </div>
                <div class="px-8 pb-10 pt-2">
                    <h1
                        class="text-[24px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gray-800 dark:text-[#E3E9ff] mb-4">
                        Media Consultant</h1>
                    <p class="text-[16px] text-gray-600 dark:text-[#A0ABE9]">Create a Distinct and <br> Impactful Brand
                    </p>
                </div>
            </div>
            <div
                class="lg:max-w-[650px] w-full flex flex-col items-center  bg-[#F5F6FA] dark:bg-[#191D34] rounded-[16px] overflow-hidden dark:card-bg">
                <div class="p-[38px]">
                    <img src="@/assets/services/3d2.png" alt="Media Consultant" class="object-cover w-full h-auto">
                </div>
                <div class="flex flex-col items-center">
                    <div>
                        <h1
                            class="text-[32px] font-raleway tracking-[-0.64px] leading-9 font-semibold text-gradient-dark">
                            Strategic Guide for Media Excellence</h1>
                    </div>
                    <ButtonOutline @click="$router.push({ name: 'contact' })" class="mt-5 mb-8">
                        <!-- <span class="block w-2 h-2 rounded-full bg-light-secondary"></span> -->
                        <Icon icon="meteocons:star-fill" class="w-6 h-6" />
                        <span class="dark:text-white">Digital Artwork</span>
                    </ButtonOutline>
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
                    <p class="text-xs text-justify text-gray-600 dark:text-white">Discover the advantages of partnering
                        with us—tailored
                        solutions, dedicated support, and proven results that set us apart.</p>
                    <div class="mt-4">
                        <div class="divide-y accordion divide-neutral/20">
                            <div class="accordion-item active" id="payment-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="payment-arrow-collapse" aria-expanded="true">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    The Right Solution for Your Business
                                </button>
                                <div id="payment-arrow-collapse"
                                    class="accordion-content w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="payment-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            We understand that every business has unique needs. That's why our services
                                            are flexible and tailored to align with your specific business goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="delivery-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="delivery-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Latest Technology, Best Solutions
                                </button>
                                <div id="delivery-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="delivery-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            Stay ahead of the curve with our cutting-edge technology. We provide the
                                            best solutions that leverage the latest advancements to enhance your
                                            business operations, ensuring seamless integration and maximum efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="cancel-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Always Ahead Approach
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            Our proactive strategies keep you ahead of market trends. By continuously
                                            innovating and anticipating changes, we help your business thrive in a
                                            competitive landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" id="cancel-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span
                                        class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Efficient and Affordable
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
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
                <div class="flex flex-col justify-center mb-6 lg:w-1/2">
                    <div>
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Why
                            Choose Us</span>
                    </div>
                    <h1
                        class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gradient mb-4 mt-[36px]">
                        Experienced <span class="text-gradient-switch">, Dedicated Team</span></h1>
                    <p class="text-xs text-justify text-gray-600 dark:text-white">Our professionals are not only skilled
                        but passionate
                        about helping you achieve your goals.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-9 mt-[36px]">
            <div class="flex flex-col lg:flex-row gap-[50px]">
                <div class="flex flex-col justify-center mb-6 lg:w-1/2">
                    <div>
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Who
                            We Are</span>
                    </div>
                    <h1
                        class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 mb-4 mt-[36px] dark:text-white">
                        More Than 100 Companies<br> Trust and Choose <span class="text-gradient">Hexagon inc</span></h1>
                    <p class="text-xs text-justify text-gray-600 dark:text-white">Over 100 companies trust us for
                        reliable, tailored
                        digital solutions that enhance their business presence.</p>
                    <div class="mt-4">
                        <Button @click="$router.push({ name: 'contact' })">
                            <span class="text-xs">Let's Work</span>
                            <font-awesome-icon icon="arrow-right" />
                        </Button>
                    </div>
                </div>
                <div class="flex flex-col lg:w-1/2">
                    <div
                        class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
                        <img src="@/assets/services/100+ Client Choose Us.png" alt="services"
                            class="pointer-events-none text-center text-8xl font-semibold leading-none" />

                        <!-- Inner Circles 70px -->
                        <!-- Inner Circle (70px) - Radius 80 -->
                        <Orbit class="size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                            :delay="0" :radius="80" path :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883479.png" alt="Client 1"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                            :delay="6" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883480.png" alt="Client 2"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                            :delay="12" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883490.png" alt="Client 3"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[70px] items-center justify-center border-none bg-transparent" :duration="25"
                            :delay="18" :radius="80" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883495.png" alt="Client 4"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <!-- Middle Circle (90px) - Radius 140 -->
                        <Orbit class="size-[90px] items-center justify-center border-none bg-transparent" :radius="140"
                            :delay="0" :duration="30" path :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883496.png" alt="Client 5"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[90px] items-center justify-center border-none bg-transparent" :radius="140"
                            :delay="10" :duration="30" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/kartika.png" alt="Client 6"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[90px] items-center justify-center border-none bg-transparent" :radius="140"
                            :delay="20" :duration="30" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/ulbi.png" alt="Client 7"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <!-- Outer Circle (110px) - Radius 190 -->
                        <Orbit class="size-[110px] items-center justify-center border-none bg-transparent" :radius="190"
                            :duration="35" :delay="0" path :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883481.png" alt="Client 8"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[110px] items-center justify-center border-none bg-transparent" :radius="190"
                            :duration="35" :delay="7" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883497.png" alt="Client 9"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[110px] items-center justify-center border-none bg-transparent" :radius="190"
                            :duration="35" :delay="14" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883490.png" alt="Client 10"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[110px] items-center justify-center border-none bg-transparent" :radius="190"
                            :duration="35" :delay="21" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883475.png" alt="Client 11"
                                class="w-full h-full object-contain" />
                        </Orbit>

                        <Orbit class="size-[110px] items-center justify-center border-none bg-transparent" :radius="190"
                            :duration="35" :delay="28" :direction="ORBIT_DIRECTION.CounterClockwise">
                            <img src="@/assets/about-us/OurClient/Frame 1597883494.png" alt="Client 12"
                                class="w-full h-full object-contain" />
                        </Orbit>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active-dot {
    content: url('@/assets/Active dot.svg');
}

.card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}

</style>