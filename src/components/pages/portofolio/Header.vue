<script setup>
import Button from "@/components/button/Button.vue";
import ButtonOutline from "@/components/button/ButtonOutline.vue";

const scrollToSection = () => {
  const element = document.querySelector("#portofolio");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Scroll halus ke elemen
  }
};
</script>

<template>
  <div class="px-[24px] md:px-[112px] dark:bg-black">
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Portofolio Kami</span>
      <h1 class="font-raleway text-[32px] md:text-[58px] break-all font-bold text-gradient ">Menampilkan Keunggulan <br class="hidden md:block"/>dan Keanekaragaman Proyek Kami.</h1>
      <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">Mengembangkan Bisnis, Satu Solusi pada Satu Waktu</p>
      <div class="flex flex-col sm:flex-row gap-[14px]">
        <Button @click="scrollToSection">
          <span class="block w-2 h-2 bg-white rounded-full"></span>
          <span>Explore Karya Kami</span>
        </Button>
        <ButtonOutline @click="$router.push({ name: 'contact' })">
          <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
          <span class="dark:text-white">Minta Konsultasi</span>
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>
