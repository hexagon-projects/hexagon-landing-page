<template>
  <!-- Container utama -->
  <div class="relative">
    <!-- Pembungkus tambahan (kosong) -->
    <div class="">
      <!-- Container dengan tinggi minimum untuk tampilan responsif -->
      <div class="relative min-h-[800px] md:min-h-[1000px]">
        <!-- LampEffect sebagai background dengan posisi absolute -->
        <LampEffect class="absolute z-10 -top-60 object-cover w-full h-full" />
        <!-- Overlay gradient sebagai background tambahan -->
        <div
          class="absolute bottom-60 z-20 w-full h-full bg-gradient-to-t from-white to-20% dark:from-black via-transparent dark:black/20 to-transparent">
        </div>

        <!-- Konten utama yang tampil di atas background -->
        <div class="relative z-20 flex justify-center w-full pt-40">
          <!-- Container untuk konten utama dengan max-width dan spacing antar elemen -->
          <div class="mb-16 max-w-[1000px] space-y-8 z-20">
            <!-- Judul utama -->
            <h1 class="text-3xl font-bold text-center text-white md:text-6xl font-raleway">
              Be the best partner to create solutions together
            </h1>
            <!-- Subjudul -->
            <h3 class="text-center text-white">
              Come on,<br />
              to see our other world of ideas & we will work as a great team
            </h3>
            <!-- Tombol aksi untuk navigasi -->
            <div class="flex justify-center w-full gap-3.5">
              <Button @click="scrollToSection">
                Read More
              </Button>
              <ButtonOutline @click="$router.push({ name: 'services' })">
                <span class="block w-2 h-2 rounded-full bg-light-secondary"></span>
                <span class="text-white">Serviceess Detail</span>
              </ButtonOutline>
            </div>
            <!-- Konten tambahan dengan animasi slide-up -->
            <div
              class="w-full z-30 p-4 sm:p-6 md:p-8 space-y-4  rounded-xl absolute bg-gradient-to-b from-[#0D1B75] to-black backdrop-blur max-w-[1000px] transition-transform duration-1000 ease-out delay-300 translate-y-[100%] animate-slide-up">
              <!-- Bagian indikator dan label perusahaan -->
              <div class="flex items-center gap-4 sm:gap-6">
                <!-- Indikator visual berupa titik-titik -->
                <div class="flex gap-1 sm:gap-2">
                  <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                  <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                  <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                </div>
                <!-- Label nama perusahaan -->
                <div class="w-full px-2 sm:px-4 py-2 sm:py-3 bg-white/75 rounded-md font-raleway text-[#707070]">
                  Hexagon inc
                </div>
              </div>
              <!-- Iframe untuk menampilkan video YouTube -->
              <iframe :src="aboutData?.youtube_url" title="YouTube video player" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen class="w-full rounded-lg aspect-video"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchAboutData } from "@/service"; // Mengimpor fungsi dari service untuk mengambil data tentang perusahaan
import Button from "@/components/button/Button.vue"; // Komponen tombol kustom
import ButtonOutline from "@/components/button/ButtonOutline.vue"; // Komponen tombol outline kustom
import LampEffect from "../../inspiraUI/LampEffect.vue"; // Komponen efek lamp sebagai background

// Reactive reference untuk menyimpan data tentang perusahaan
const aboutData = ref(null);

// Fungsi untuk mengambil data tentang perusahaan menggunakan service
const getAboutData = async () => {
  const data = await fetchAboutData();
  if (data.error) {
    console.error(data.error); // Menampilkan error jika terjadi masalah saat pengambilan data
  } else {
    aboutData.value = data; // Menyimpan data yang diterima ke dalam reactive reference
  }
};

// Fungsi untuk melakukan scroll ke section dengan ID "our-journey" secara smooth
const scrollToSection = () => {
  const element = document.querySelector("#our-journey");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Mengambil data tentang perusahaan saat komponen dimuat
onMounted(() => {
  getAboutData();
});
</script>

<style>
/* Keyframes untuk animasi slide-up */
@keyframes slide-up {
  0% {
    transform: translateY(100%) scale(0.95);
    opacity: 0;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* Kelas untuk menerapkan animasi slide-up pada elemen */
.animate-slide-up {
  animation: slide-up 1.2s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  animation-delay: 0.5s;
}

/* Optimasi performa animasi bila pengguna tidak mengurangi motion */
@media (prefers-reduced-motion: no-preference) {
  .animate-slide-up {
    will-change: transform, opacity;
  }
}
</style>
