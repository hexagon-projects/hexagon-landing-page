<script setup>
/* ------------------------------ */
/* Import Komponen dan Modul     */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline untuk digunakan pada tampilan
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

/* ------------------------------ */
/* Fungsi Scroll ke Section      */
/* ------------------------------ */
// Fungsi untuk melakukan scroll halus ke elemen dengan ID "our"
const scrollToSection = () => {
  const element = document.querySelector('#our'); // Cari elemen dengan ID "our"
  if (element) {
    // Jika elemen ditemukan, lakukan scroll dengan perilaku halus
    element.scrollIntoView({ behavior: 'smooth' }); // Scroll halus ke elemen
  }
};
</script>

<template>
  <!-- Container Utama dengan padding, background, dan margin yang responsif -->
  <div class="px-[56px] md:px-[112px] dark:bg-black mb-[150px] pt-20 md:pt-16">
    <!-- Header Section untuk Career Opportunities -->
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <!-- Label kecil sebagai penanda section -->
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">
        Career Opportunities
      </span>
      <!-- Judul Utama -->
      <h1 class="font-raleway text-[40px] md:text-[60px] font-bold text-gradient">
        Join With Us!
      </h1>
      <!-- Deskripsi singkat mengenai peluang karir -->
      <p class="font-raleway text-[13px] md:text-[16px] font-semibold text-gray-600 dark:text-white">
        Be part of a dynamic team that values innovation, growth, and collaboration.
      </p>
      <!-- Container Tombol aksi -->
      <div class="flex flex-col sm:flex-row gap-[14px]">
        <!-- Tombol Explore Position, saat diklik memanggil fungsi scrollToSection -->
        <Button @click="scrollToSection">
          <span>Explore Position</span>
        </Button>
        <!-- Tombol Request a Consultation, saat diklik mengarahkan ke halaman kontak -->
        <ButtonOutline @click="$router.push({ name: 'contact' })">
          <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
          <span class="dark:text-white">Request a Consultation</span>
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>
