<script setup>
/* ------------------------------ */
/* Import Komponen                */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline untuk membuat tombol interaktif
import Button from "@/components/button/Button.vue";
import ButtonOutline from "@/components/button/ButtonOutline.vue";

/* ------------------------------ */
/* Fungsi Scroll ke Section       */
/* ------------------------------ */
// Fungsi untuk melakukan scroll halus ke elemen dengan ID "portofolio"
const scrollToSection = () => {
  const element = document.querySelector("#portofolio");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Scroll halus ke elemen
  }
};
</script>

<template>
  <!-- Background Image -->
  <img src="@/assets/news/Background.png" alt="Background"
       class="absolute inset-0 object-cover w-full h-full -z-10"/>
  
  <!-- Container Utama: Mengatur padding dan latar belakang untuk mode gelap -->
  <div class="px-[32px] md:px-[112px] dark:bg-black pt-20">
    <!-- Header Section -->
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <!-- Label Section -->
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">
        Our Portfolio
      </span>
      <!-- Judul Utama -->
      <h1 class="font-raleway text-[24.5px] md:text-[58px] break-all font-bold text-gradient">
        Showcasing the excellence<br class="hidden md:block"/> and diversity of our projects.
      </h1>
      <!-- Deskripsi -->
      <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">
        Mengembangkan Bisnis, Satu Solusi pada Satu Waktu
      </p>
      <!-- Tombol Aksi -->
      <div class="flex flex-col sm:flex-row gap-[14px]">
        <!-- Tombol untuk eksplorasi karya, memanggil fungsi scrollToSection -->
        <Button @click="scrollToSection">
          <span>Explore Our Works</span>
        </Button>
        <!-- Tombol Outline untuk konsultasi, mengarahkan ke halaman kontak -->
        <ButtonOutline @click="$router.push({ name: 'contact' })">
          <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
          <span class="dark:text-white">Request a Consultation</span>
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>
