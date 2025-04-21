<script setup>
/* ------------------------------ */
/* Import Komponen                */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline untuk digunakan pada tampilan
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <!-- Container Utama: Mengatur padding horizontal, background untuk mode gelap, dan background image khusus hero section -->
    <div class="px-[56px] md:px-[112px] dark:bg-black hero-section-bg py-28 md:py-16">
        <!-- Kontainer untuk konten teks yang ditampilkan secara terpusat -->
        <div class="flex flex-col gap-9 items-center text-center">
            <!-- Label kecil untuk menunjukkan section "Contact" -->
            <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">Contact</span>
            <!-- Judul utama dengan teks gradient -->
            <h1 class="font-raleway text-[40px] md:text-[60px] font-bold">
                Get in Touch <span class="text-gradient">With Us!</span>
            </h1>
            <!-- Deskripsi singkat mengenai kontak -->
            <p class="font-raleway text-[16px] font-semibold text-gray-600 dark:text-white pb-16 md:pb-0">
                Reach out for inquiries, support, or collaborations.
            </p>
            <!-- Bagian tombol, hanya ditampilkan pada desktop (hidden pada mobile) -->
            <div class="hidden md:block">
                <div class="flex flex-col sm:flex-row gap-[14px]">
                    <!-- Tombol untuk "Contact Us" -->
                    <Button>
                        <span>Contact Us</span>
                    </Button>
                    <!-- Tombol dengan outline untuk "Request a Consultation" dengan navigasi ke halaman kontak -->
                    <ButtonOutline @click="$router.push({ name: 'contact' })">
                        <span class="h-2 w-2 bg-light-secondary block rounded-full"></span>
                        <span class="dark:text-white">Request a Consultation</span>
                    </ButtonOutline>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* ------------------------------ */
/* Styling Hero Section Background*/
/* ------------------------------ */
/* Background untuk hero section pada tampilan desktop */
.hero-section-bg {
    background-image: url(@/assets/HeroContact.png);
    background-position: center;
    background-size: cover;
}

/* Background khusus untuk mode gelap pada desktop */
.dark .hero-section-bg {
    background-image: url(@/assets/DarkHeroContact.png);
}

/* ------------------------------ */
/* Styling Responsive untuk Mobile */
/* ------------------------------ */
/* Mengganti background image untuk perangkat mobile */
@media (max-width: 768px) {
    .hero-section-bg {
        background-image: url(@/assets/bg-contact-mbl.png);
    }

    /* Background untuk mode gelap pada mobile */
    .dark .hero-section-bg {
        background-image: url(@/assets/darkbg-contact-mbl.png);
    }
}
</style>
