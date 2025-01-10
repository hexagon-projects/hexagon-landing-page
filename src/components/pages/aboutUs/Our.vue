<template>
    <div class="relative grid grid-cols-2 gap-8 px-32">
        <img src="@/assets/about-us/side shape.svg" alt="" class="absolute top-0 right-0">
        <div>
            <h1 class="text-[#063B86] text-3xl font-bold font-raleway">
                Empowering Growth with Purpose and Integrity
            </h1>
            <h4 class="text-[#697B98] mt-4">
                Guided by a commitment to excellence and innovation, we envision a future where digital solutions drive
                positive impact. Our mission is to create sustainable growth by aligning business success with values
                that benefit both clients and communities.
            </h4>
            <div class="mt-8 space-y-4">
                <button v-for="(item, index) in items" :key="index" @click="selected = index"
                    :class="['w-full text-left px-9 py-6 rounded-lg flex items-center justify-between ', selected === index ? 'bg-gradient-to-r from-[#0C57C3] to-[#2F84FF] text-white shadow-[0_30px_60px_0_rgba(59,130,246,0.25)]' : 'hover:border hover:border-[#0C57C3']">
                    {{ item.title }}
                    <font-awesome-icon icon="arrow-right" />
                </button>
            </div>
        </div>
        
        <div class="z-10 p-6 space-y-4 rounded-lg shadow bg-white/50 backdrop-blur-md">
            <h2 class="text-2xl font-bold text-[#063B86]">
                {{ items[selected].title }}
            </h2>
            <p class="mt-4 text-[#697B98]">
                {{ items[selected].content }}
            </p>
            <div class="mt-4">
                <img :src="items[selected].image" alt="Content Image" class="w-full" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const items = [
    {
        title: "Our Vision",
        content:
            "Our vision is to be the leading provider of digital artwork and IT solutions in the industry. We strive to be at the forefront of innovation and to consistently exceed our clients' expectations.",
        image: new URL('@/assets/about-us/ourVision.png', import.meta.url).href,
    },
    {
        title: "Our Mission",
        content:
            "Our mission is to create sustainable growth by aligning business success with values that benefit both clients and communities.",
        image: new URL('@/assets/about-us/ourVision.png', import.meta.url).href,
    },
    {
        title: "Work Values",
        content:
            "We value teamwork, integrity, and a commitment to excellence in everything we do.",
        image: new URL('@/assets/about-us/ourVision.png', import.meta.url).href,
    },
    {
        title: "Our Values",
        content:
            "Our values are rooted in innovation, responsibility, and a dedication to our clients' success.",
        image: new URL('@/assets/about-us/ourVision.png', import.meta.url).href,
    },
];

const selected = ref(0);
</script>
