<script setup>
/* ------------------------------ */
/* Import Komponen              */
/* ------------------------------ */
// Mengimpor komponen Button dan ButtonOutline yang akan digunakan untuk membuat tombol interaktif
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
  <!-- Container Utama: Mengatur layout relatif, tinggi layar penuh dengan batas maksimum, dan margin bawah -->
  <div class="relative h-screen max-h-[500px] mb-16">
    <!-- Wrapper Hero Section: Menggunakan background image dan gradient, serta mengatur posisi absolut agar menutupi seluruh container -->
    <div class="flex flex-col items-center justify-center hero-section-bg absolute w-full h-full bg-no-repeat z-0">
      <!-- Overlay Gradient: Elemen span untuk memberikan efek gradient dari bawah -->
      <span class="bg-gradient-to-b absolute bottom-0 h-1/2 to-white z-[2]"></span>

      <!-- ======================= -->
      <!-- Desktop Layout Section  -->
      <!-- ======================= -->
      <div class="hidden md:block mx-auto">
        <!-- Teks subscribe dan informasi plan, ditampilkan hanya pada desktop -->
        <p class="mt-15 text-white text-center">
          <a href="#" class="text-white bg-light-secondary rounded-3xl px-3 py-2">Subscribe</a> Free for basic Plan
        </p>
        <!-- Judul utama hero section dengan teks besar dan berani -->
        <h1 class="mt-10 text-5xl font-bold text-center text-white mb-15">
          Build the Future with <br>Us! Start Your <br> Partnership Now!
        </h1>
        <!-- Tombol aksi: Tombol untuk mengarahkan ke halaman kontak -->
        <div class="flex items-center justify-center mt-15 space-x-4">
          <!-- Tombol "Let's Chat!" -->
          <Button @click="$router.push({ name: 'contact' })">
            <span class="text-white">Let's Chat!</span>
          </Button>
          <!-- Tombol Outline "Request a Consultation" -->
          <ButtonOutline @click="$router.push({ name: 'contact' })">
            <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
            <span class="text-white ">Request a Consultation</span>
          </ButtonOutline>
        </div>
      </div>

      <!-- ======================= -->
      <!-- Mobile Layout Section   -->
      <!-- ======================= -->
      <div class="md:hidden block">
        <!-- Teks subscribe dan informasi plan, ditampilkan hanya pada mobile -->
        <p class="mt-8 text-white text-center">
          <a href="#" class="text-white bg-light-secondary rounded-3xl px-3 py-2">Subscribe</a> Free for basic Plan
        </p>
        <!-- Judul utama untuk mobile dengan ukuran teks yang lebih kecil -->
        <h1 class="mt-6 text-2xl font-bold text-center text-white mb-8">
          Build the Future with Us!<br>Start Your Partnership Now!
        </h1>
        <!-- Tombol aksi dalam layout mobile dengan tampilan kolom -->
        <div class="flex flex-col items-center mt-8 space-y-4">
          <!-- Tombol "Let's Chat!" -->
          <Button @click="$router.push({ name: 'contact' })">
            <span class="text-white">Let's Chat!</span>
          </Button>
          <!-- Tombol Outline "Request a Consultation" dengan styling tambahan untuk mobile -->
          <ButtonOutline @click="$router.push({ name: 'contact' })" class="px-4 py-2 text-white rounded bg-white dark:bg-gray-400 dark:bg-opacity-50 border border-white hover-gradient group ">
            <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
            <span class="text-black dark:text-white group-hover:text-white">Request a Consultation</span>
          </ButtonOutline>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ------------------------------ */
/* Styling Hero Section Background */
/* ------------------------------ */
/* Background image dan gradient untuk hero section pada tampilan default */
.hero-section-bg {
  background-image: url(@/assets/NewOrnament.png), linear-gradient(to bottom, #2F84FF, #0C57C3);
  background-position: center;
  background-size: cover;
}

/* Background khusus untuk mode gelap pada hero section */
.dark .hero-section-bg {
  background-image: url(@/assets/DarkNewOrnament.png);
}
</style>
