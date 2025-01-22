<script setup>
// import AboutUs from '@/components/pages/home/AboutUs.vue';
import Hero from '@/components/pages/news/Hero.vue';
import LatestPost from '@/components/pages/news/LatestPost.vue';
// import OurPartner from '@/components/pages/home/OurPartner.vue';
// import OurProject from '@/components/pages/home/OurProject.vue';
// import Review from '@/components/pages/home/Review.vue';
// import Career from '@/components/pages/home/Career.vue';
// import News from '@/components/pages/home/News.vue';
import BlogPage from '@/components/pages/news/BlogPage.vue';
import Cta from '@/components/pages/home/cta.vue';

</script>

<template>
    <div class=" dark:bg-black">
        <Hero />
        <LatestPost />
        <BlogPage />
        <Cta />
    </div>
</template>
