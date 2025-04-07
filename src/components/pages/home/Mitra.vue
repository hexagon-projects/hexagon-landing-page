<template>
  <!-- Container Utama: Mengatur layout dengan padding vertikal dan latar belakang untuk mode light dan dark -->
  <div class="relative w-full py-15 space-y-[68px] bg-white dark:bg-black">
    <!-- ============================== -->
    <!-- Our Client Section            -->
    <!-- ============================== -->
    <div class="flex flex-col gap-9 items-center text-center px-[30px]">
      <!-- Label Section -->
      <span class="inline px-4 py-2 text-xs font-medium bg-gray-100 rounded-lg dark:bg-gray-800">Mitra</span>
      <!-- Judul Section dengan deskripsi panjang -->
      <h1 class="font-raleway text-[24px] md:text-[30px] font-semibold text-gray-800 dark:text-white">
        Sebagai mitra Direktorat Jendral Pendidikan Vokasi <br />
        Kementerian Pendidikan Dasar dan Menengah Republik Indonesia
      </h1>
      <!-- Grid logo: Menampilkan 3 logo dalam 1 baris -->
      <div class="grid grid-cols-3 md:w-2/5 px-[30px]">
        <div>
          <img src="@/assets/about-us/OurClient/Frame 1597883494.webp" alt="" class="object-cover w-full" />
        </div>
        <div>
          <img src="@/assets/about-us/OurClient/Frame 1597883481.webp" alt="" class="object-cover w-full" />
        </div>
        <div>
          <img src="@/assets/about-us/OurClient/vokasi.webp" alt="" class="object-cover w-full" />
        </div>
      </div>
    </div>

    <!-- Mobile Judul Khusus -->
    <div class="md:hidden justify-center flex text-center">
      <h1 class="font-raleway text-[20px] font-semibold text-gray-800 dark:text-white max-w-[300px]">
        Membina 50+ SMK<br />
        di seluruh Indonesia
      </h1>
    </div>

    <!-- ============================== -->
    <!-- Marquee Section               -->
    <!-- ============================== -->
    <div class="px-[16px] md:px-[60px]">
      <div class="flex flex-col gap-12 overflow-hidden border border-gray-200 dark:border-gray-700 py-8 px-8 rounded-xl">
        <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
          <!-- Judul Marquee: Hanya muncul di Desktop -->
          <div class="hidden md:block">
            <h1 class="font-raleway text-[16px] md:text-[20px] font-semibold text-gray-800 dark:text-white max-w-[300px]">
              Membina 50+ SMK<br />
              di seluruh Indonesia
            </h1>
          </div>

          <!-- Marquee Section (Kolom Kanan) -->
          <div class="w-full overflow-hidden">
            <!-- Desktop Marquee -->
            <div class="hidden md:block">
              <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40">
                <div class="flex gap-4 pl-4">
                  <!-- Looping data ourClientData untuk menampilkan logo secara horizontal -->
                  <div v-for="(client, index) in ourClientData" :key="'marquee-desktop-' + index"
                    class="flex items-center justify-center w-36 h-22">
                    <img :src="client.foto_client_url" alt="client.name" class="max-w-[150px] object-contain" />
                  </div>
                </div>
              </Marquee>
            </div>

            <!-- Mobile Marquee -->
            <div class="block md:hidden">
              <Marquee :fade="true" direction="left" :reverse="true" :pauseOnHover="false" :speed="40">
                <div class="flex gap-4">
                  <!-- Looping data ourClientData dengan ukuran gambar disesuaikan untuk mobile -->
                  <div v-for="(client, index) in ourClientData" :key="'marquee-mobile-' + index"
                    class="flex items-center justify-center w-36 h-22">
                    <img :src="client.foto_client_url" alt="Client Logo" class="max-w-[80px] object-contain" />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* ------------------------------ */
/* Import Modul dan Komponen      */
/* ------------------------------ */
// Mengimpor reactive function dan lifecycle hook onMounted dari Vue
import { ref, onMounted } from "vue";
// Mengimpor komponen Marquee dan style-nya untuk animasi marquee
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
// Mengimpor fungsi fetchOurClient dari service
import { fetchOurClient } from "@/service";

// ------------------------------
// Inisialisasi State Reaktif
// ------------------------------
// Menyimpan data client yang diambil untuk marquee
const ourClientData = ref([]);
// Menyimpan data media (tidak digunakan langsung di template marquee ini, tapi bisa dipakai untuk keperluan lain)
const ourMediaData = ref([]);
// Menyimpan data media yang telah dipecah menjadi beberapa bagian untuk marquee (chunking)
const mediaMarquees = ref([]);

// ------------------------------
// Fungsi Utility: chunkArray
// ------------------------------
// Fungsi untuk membagi array menjadi beberapa sub-array dengan ukuran tertentu
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
};

// ------------------------------
// Fungsi Pengambilan Data
// ------------------------------
// Mengambil data client dan media dari API
const getData = async () => {
  try {
    // Mengambil data Our Clients dengan status = 2 (sesuai kebutuhan)
    const clients = await fetchOurClient(2);
    ourClientData.value = clients || [];

    // Mengambil data Media Partners dengan status = 0
    const media = await fetchOurClient(0);
    ourMediaData.value = media || [];

    // Membagi data media menjadi beberapa bagian untuk marquee
    mediaMarquees.value = chunkArray(ourMediaData.value, 7);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Memanggil fungsi getData saat komponen dimuat
onMounted(() => {
  getData();
});
</script>
