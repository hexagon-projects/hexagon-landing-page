<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

const scrollToSection = () => {
  const element = document.querySelector('#portofolio');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // Scroll halus ke elemen
  }
};
</script>

<template>
    <div class="px-[56px] md:px-[112px] dark:bg-black">
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Our Portofolio</span>
            <h1 class="font-raleway text-[60px] font-bold text-gradient">Showcasing the excellence<br>and diversity of our projects.</h1>
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">Empowering businesses, one solution at a time</p>
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <Button  @click="scrollToSection">
                    <span class="block w-2 h-2 bg-white rounded-full"></span>
                    <span>Explore Our Works</span>
                </Button>
                <ButtonOutline @click="$router.push({ name: 'contact' })">
                    <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                    <span class="dark:text-white">Request a Consultation</span>
                </ButtonOutline>
            </div>
        </div>
    </div>
</template>