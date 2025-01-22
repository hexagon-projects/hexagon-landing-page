<script setup>
import Cta from '@/components/pages/home/cta.vue';
import BlogPost from '@/components/pages/news/BlogPost.vue';
import LatestPost from '@/components/pages/news/LatestPost.vue';

</script>

<template>
    <div class=" dark:bg-black">
        <BlogPost />
        <LatestPost />
        <Cta />
    </div>
</template>
