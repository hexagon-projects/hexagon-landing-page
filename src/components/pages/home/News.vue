<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import LatestNews from '@/components/News/LatestNews.vue';
</script>

<template>
        <!-- <div class="px-[16px] md:px-[112px] md:mt-[56px]">
            <div class="mb-0">
                <div class="flex items-center justify-between">
                    <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">NEWS AND
                        INSIGHT</span>
                        <ButtonOutline @click="$router.push({ name: 'news' })">
                            <Icon icon="heroicons-solid:arrow-sm-right" width="18" height="18" />
                            <span class="hidden md:block">
                                Show All Articles
                            </span>
                        </ButtonOutline>
                </div>
                <div class="z-20 flex items-center justify-center mt-[14px]">
                    <h1 class="font-semibold text-[16px] md:text-[32px] font-raleway tracking-[-0.64px] pt-[10px]">Get the latest
                        articles from our journal, writing, discuss and share</h1>
                </div>
            </div>
        </div> -->
        <div class="flex justify-start gap-[24px] pb-[56px] overflow-x-auto project-container">
            <LatestNews></LatestNews>
        </div>
</template>

<style scoped>
.project-container::-webkit-scrollbar {
    display: none;
}

.project-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>