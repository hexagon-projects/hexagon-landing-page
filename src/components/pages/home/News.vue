<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
import LatestNews from '@/components/News/LatestNews.vue';
</script>

<template>
    <div class="pt-40">
        <div class="px-[56px] md:px-[112px] mt-[56px]">
            <div class="mb-0">
                <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">NEWS AND
                    INSIGHT</span>
                <div class="z-20 flex items-center justify-between mt-[14px]">
                    <h1 class="font-semibold text-[32px] font-raleway tracking-[-0.64px] pt-[10px]">Get the latest
                        articles from our journal, writing, discuss and share</h1>
                    <Button @click="$router.push({ name: 'news' })">
                        <font-awesome-icon icon="arrow-right" />
                        <span  class="hidden md:block">
                            Show All Articles
                        </span>
                    </Button>
                </div>
            </div>
        </div>
        <div class="flex justify-start gap-[24px] py-[56px] overflow-x-auto project-container">
            <LatestNews></LatestNews>
        </div>
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