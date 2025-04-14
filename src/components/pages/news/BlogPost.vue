<template>
  <!-- Container Utama: Menampilkan detail berita jika data 'news' tersedia -->
  <div v-if="news" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    <!-- Section Judul Berita dan Gambar Utama -->
    <div>
      <!-- Judul Berita -->
      <h1 class="text-4xl font-semibold text-black dark:text-white">{{ news.judul_news }}</h1>
      <!-- Gambar utama berita -->
      <img :src="news.images[0]" alt="News Image" class="w-full mt-10 rounded-2xl" />
    </div>
    <!-- Grid Layout: Membagi konten menjadi 2 kolom pada desktop -->
    <div class="grid grid-cols-1 gap-6 mt-10 md:grid-cols-12">
      <!-- Sidebar Informasi: Menampilkan informasi posting, admin, dan kategori -->
      <div class="flex flex-col col-span-4 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <!-- Informasi tanggal posting -->
        <div class="flex gap-4">
          <h4 class="font-semibold text-black dark:text-white">Post :</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ news.dibuat }}</h4>
        </div>
        <!-- Informasi Admin -->
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-gray-400 rounded-full dark:bg-gray-600"></div>
          <h4 class="font-semibold text-black dark:text-white">Admin Hexagon</h4>
        </div>
        <!-- Kategori Berita: Menampilkan tombol untuk setiap kategori -->
        <div class="flex flex-wrap items-center gap-3">
          <button v-for="tag in news.Kategori" :key="tag" class="px-4 py-2 text-white rounded-full bg-light-primary-2">
            {{ tag }}
          </button>
        </div>
      </div>
      <!-- Konten Utama Berita: Menampilkan konten berita, gambar tambahan, dan subjudul -->
      <div class="flex flex-col col-span-8 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <!-- Konten Berita (HTML) -->
        <div v-html="news.content" class="max-w-4xl mx-auto prose prose-lg dark:prose-invert"></div>
        <!-- Gambar tambahan jika tersedia -->
        <img v-if="news.images[1]" :src="news.images[1]" alt="News Image" class="w-full mt-10 aspect-video object-cover rounded-[48px]" />
        <!-- Subjudul Berita -->
        <h2 class="text-4xl font-extrabold text-black font-nunito dark:text-white">{{ news.subTitle }}</h2>
        <!-- Deskripsi tambahan (HTML) -->
        <div v-html="news.ket_news" class="max-w-4xl mx-auto prose prose-lg dark:prose-invert"></div>
      </div>
    </div>
  </div>
</template>

<!-- Start of Selection -->
<script setup>
/* ------------------------------ */
/* Import Modul dan Inisialisasi  */
/* ------------------------------ */
// Mengimpor fungsi reactive 'ref' dari Vue untuk membuat state reaktif
import { ref } from 'vue';
// Mengimpor useRoute untuk mengambil parameter dari URL
import { useRoute } from 'vue-router';
// Mengimpor instance axios yang sudah dikonfigurasi
import axiosInstance from '@/axios';

// ------------------------------
// Inisialisasi State
// ------------------------------
// State untuk menyimpan data berita
const news = ref(null);
// State untuk status loading data
const loading = ref(true);
// State untuk menyimpan pesan error jika terjadi kesalahan
const error = ref(null);
// Mengambil parameter id dari URL menggunakan useRoute
const route = useRoute();

/* ------------------------------ */
/* Fungsi Pengambilan Data Berita */
/* ------------------------------ */
const fetchPortofolio = async () => {
    // Mengambil id berita dari parameter URL
    const id = route.params.id;
    try {
        // Set loading true dan reset error sebelum pengambilan data
        loading.value = true;
        error.value = null;
        // Mengambil data berita dari API menggunakan axios
        const response = await axiosInstance.get(`/api/News/${id}`);
        
        // Jika data kategori tersedia, ubah string kategori menjadi array
        if (response.data.Kategori) {
            // Memisahkan string berdasarkan koma dan menghapus spasi ekstra
            response.data.Kategori = response.data.Kategori.split(',').map(tag => tag.trim());
        }
        
        // Menyimpan data berita ke state 'news'
        news.value = response.data;
    } catch (err) {
        // Jika terjadi error, simpan pesan error ke state 'error' dan tampilkan pesan ke konsol
        error.value = 'Error loading portfolio: ' + err.message;
        console.error('Error fetching project:', err);
    } finally {
        // Set loading false setelah proses selesai
        loading.value = false;
    }
};

// Memanggil fungsi fetchPortofolio untuk mengambil data berita saat komponen dimuat
fetchPortofolio();
</script>
