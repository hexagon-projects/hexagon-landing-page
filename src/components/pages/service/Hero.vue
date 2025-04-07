<script setup lang="ts">
/* ------------------------------ */
/* Import Komponen dan Fungsi     */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline untuk digunakan pada tombol interaktif
import Button from '../../../components/button/Button.vue';
import ButtonOutline from '../../../components/button/ButtonOutline.vue';

/* ------------------------------ */
/* Fungsi Scroll ke Section       */
/* ------------------------------ */
// Fungsi untuk melakukan scroll halus ke elemen dengan ID "service"
const scrollToSection = () => {
    const element = document.querySelector('#service');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll halus ke elemen
    }
};
</script>

<template>
    <!-- Background Image: Ditampilkan sebagai latar belakang penuh -->
    <img src="@/assets/news/Background.png" alt="Background"
         class="absolute inset-0 object-cover w-full h-full -z-10"/>
    <!-- Container Utama: Mengatur padding, latar belakang untuk mode light dan dark, serta padding atas -->
    <div class="px-[36px] md:px-[112px] bg-white dark:bg-gradient-to-b dark:from-black dark:to-black pt-20 md:pt-16">
        <!-- Header Section: Menampilkan label, judul, deskripsi, dan tombol aksi -->
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <!-- Label untuk section "Our Service" -->
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">
                Our Service
            </span>
            <!-- Judul utama dengan teks gradient -->
            <h1 class="font-raleway text-[24px] md:text-[60px] font-bold text-gradient">
                Empowering your business<br>with smart solutions
            </h1>
            <!-- Deskripsi singkat mengenai layanan -->
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white">
                We Provide Perfect IT Solutions For Your Business
            </p>
            <!-- Tombol Aksi: Tombol untuk mengeksplorasi layanan dan konsultasi -->
            <div class="flex flex-col sm:flex-row gap-[14px]">
                <!-- Tombol "Explore Our Service" yang memanggil fungsi scrollToSection -->
                <Button @click="scrollToSection">
                    <span>Explore Our Service</span>
                </Button>
                <!-- Tombol Outline "Request A Consultation" yang mengarahkan ke halaman kontak -->
                <ButtonOutline @click="$router.push({ name: 'contact' })">
                    <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                    <span class="dark:text-white">Request A Consultation</span>
                </ButtonOutline>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* ------------------------------ */
/* Style Tambahan                 */
/* ------------------------------ */
.active-dot {
    content: url('@/assets/Active dot.svg');
}

/* Styling untuk background pada card jika diperlukan di mode dark */
.dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}
</style>
