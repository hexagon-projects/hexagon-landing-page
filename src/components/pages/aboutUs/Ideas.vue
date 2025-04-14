<template>
  <!-- Container utama dengan layout flex, pengaturan margin dan padding -->
  <div class="flex flex-col items-center justify-between max-w-6xl p-8 mx-auto md:flex-row">
    <!-- Left Section: Menampilkan gambar -->
    <div class="w-full mb-8 md:w-1/2 md:mb-0">
      <!-- Gambar Superman 3D dengan sumber asset dan styling responsif -->
      <img src="@/assets/about-us/superman_3d.png" alt="Superman 3D" class="w-3/4 h-auto" />
    </div>

    <!-- Right Section: Teks dan tombol aksi -->
    <div class="w-full md:w-1/2 md:pl-8">
      <!-- Judul utama dengan styling teks -->
      <h1 class="mb-4 text-xl font-semibold text-blue-900 dark:text-blue-400 md:text-2xl">
        Transforming Ideas into Digital Excellence
      </h1>

      <!-- Deskripsi layanan dengan styling teks -->
      <p class="mb-6 text-gray-600 dark:text-gray-300 text-md">
        Explore our suite of tailored digital services—from IT consultation to branding and digital marketing—crafted to empower your business and maximize impact in a dynamic digital landscape.
      </p>

      <!-- Daftar layanan yang ditampilkan secara dinamis menggunakan v-for -->
      <ul class="mb-8 space-y-3">
        <li v-for="service in services" :key="service" class="flex items-center space-x-2">
          <!-- Ikon cek sebagai indikator layanan -->
          <span class="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full dark:bg-blue-400">
            <span class="text-sm text-white">✓</span>
          </span>
          <!-- Nama layanan -->
          <span class="text-gray-700 dark:text-gray-300">
            {{ service }}
          </span>
        </li>
      </ul>

      <!-- Tombol "See More" untuk perangkat mobile (ditampilkan hanya pada layar kecil) -->
      <div class="block md:hidden">
        <button @click="$router.push({ name: 'contact' })" class="flex items-center justify-center gap-2 px-5 py-3 md:rounded-full rounded-lg w-full border-[#0A58CA] dark:border-white border dark:border-2 text-light-primary hover:scale-105 transition-all duration-300">
          <div class="block w-2 h-2 rounded-full bg-light-secondary dark:bg-blue-400"></div>
          See More
        </button>
      </div>

      <!-- Tombol aksi untuk perangkat desktop (ditampilkan hanya pada layar sedang ke atas) -->
      <div class="hidden md:flex flex-wrap gap-4">
        <!-- Tombol "See More" dengan routing ke halaman contact dengan hash #navbar -->
        <Button @click="$router.push({ name: 'contact', hash: '#navbar' })">
          See More
        </Button>

        <!-- Tombol "Request Consultation" dengan tampilan outline dan routing ke halaman contact -->
        <ButtonOutline @click="$router.push({ name: 'contact' })">
          <div class="block w-2 h-2 rounded-full bg-light-secondary dark:bg-blue-400"></div>
          Request Consultation
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../../button/Button.vue"; // Mengimpor komponen Button kustom
import ButtonOutline from "../../button/ButtonOutline.vue"; // Mengimpor komponen ButtonOutline kustom

// Mendefinisikan daftar layanan yang akan ditampilkan menggunakan reactive reference
const services = ref(["IT Consultation", "Digital Marketing", "Branding", "Media Consultant"]);
</script>
