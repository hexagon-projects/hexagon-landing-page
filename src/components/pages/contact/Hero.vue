<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <div class="px-[56px] md:px-[112px] dark:bg-black hero-section-bg py-8">
        <div class="flex flex-col gap-9 items-center text-center">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Contact</span>
            <h1 class="font-raleway text-[60px] font-bold">Get in Touch <span class="text-gradient">With Us!</span></h1>
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">Reach out for inquiries, support, or collaborations.</p>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button>
                    <span class="h-2 w-2 bg-white block rounded-full"></span>
                    <span>Contact Us</span>
                </Button>
                <ButtonOutline @click="$router.push({ name: 'contact' })">
                    <span class="h-2 w-2 bg-light-secondary block rounded-full"></span>
                    <span class="dark:text-white">Request a Consultation</span>
                </ButtonOutline>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section-bg {
    background-image: url(@/assets/HeroContact.png);
    background-position: center;
    background-size: cover;
}

.dark .hero-section-bg {
    background-image: url(@/assets/DarkHeroContact.png);
}
</style>