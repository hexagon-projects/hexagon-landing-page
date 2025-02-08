<script setup>
import WhoWeAre from '@/components/pages/service/WhoWeAre.vue';
import CTA from '@/components/pages/home/cta.vue';
import Review from '@/components/pages/home/Review.vue';
import Hero from '@/components/pages/service/Hero.vue';
import Benefits from '../components/pages/service/Benefits.vue';
import Why from '../components/pages/service/Why.vue';

</script>

<template>
    <div class="dark:bg-black">
        <Hero />
        <Benefits />
        <Why />
        <WhoWeAre />
        <Review />
        <CTA />
    </div>
</template>
