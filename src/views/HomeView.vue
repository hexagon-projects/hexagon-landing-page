<script setup>
import AboutUs from '@/components/pages/home/AboutUs.vue';
import Hero from '@/components/pages/home/Hero.vue';
import OurPartner from '@/components/pages/home/OurPartner.vue';
import OurProject from '@/components/pages/home/OurProject.vue';
import Review from '@/components/pages/home/Review.vue';
import Career from '@/components/pages/home/Career.vue';
import News from '@/components/pages/home/News.vue';
import Cta from '@/components/pages/home/cta.vue';
import OurClient from '@/components/pages/aboutUs/OurClient.vue';

</script>

<template>
    <div class=" dark:bg-black">
        <Hero />
        <OurClient/>
        <AboutUs />
        <OurProject />
        <Review />
        <News />
        <Career />
        <Cta />
    </div>
</template>
