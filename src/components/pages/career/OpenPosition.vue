<script setup>
/* ------------------------------ */
/* Import Modul dan Komponen      */
/* ------------------------------ */
// Mengimpor modul reactive dan lifecycle dari Vue serta fungsi fetchCareer dari service
import { ref, onMounted, watch } from 'vue';
import { fetchCareer } from '@/service';

// Mengimpor state dan variabel untuk menyimpan data posisi
const positions = ref([]);
const loading = ref(false);

/* ------------------------------ */
/* Fungsi Pengambilan Data Career */
/* ------------------------------ */
const getCareerData = async () => {
  // Set state loading menjadi true saat pengambilan data dimulai
  loading.value = true;

  try {
    // Memanggil fungsi fetchCareer untuk mendapatkan data posisi
    const response = await fetchCareer();
    if (response.error) throw response.error;
    
    // Pastikan setiap posisi memiliki properti ket_lowong dalam bentuk objek
    positions.value = response.map(position => {
      if (typeof position.ket_lowong === 'string') {
        try {
          // Parsing ket_lowong jika berupa string JSON
          position.ket_lowong = JSON.parse(position.ket_lowong);
        } catch (e) {
          // Jika parsing gagal, tetapkan objek default untuk ket_lowong
          position.ket_lowong = {
            ringkasan: '',
            klasifikasi: [],
            deskripsi: [],
            skillsets: [],
            pengalaman: '',
            jam_kerja: '',
            hari_kerja: '',
            lokasi: '',
          };
        }
      }
      return position;
    });
  } catch (err) {
    // Tangani error dengan menampilkan pesan error di konsol
    error.value = err.message;
    console.error('Error fetching career data:', err);
  } finally {
    // Set loading menjadi false setelah pengambilan data selesai
    loading.value = false;
  }
};

/* ------------------------------ */
/* Lifecycle Hook: onMounted      */
/* ------------------------------ */
// Memanggil getCareerData saat komponen dimuat
onMounted(() => {
  getCareerData();
});
</script>

<template>
  <!-- Container Utama dengan padding responsif -->
  <div class="px-[56px] md:px-[112px]">
    <!-- Header Section untuk Open Position -->
    <div class="flex flex-col gap-9 items-center mb-[60px]">
      <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline mt-[50px]">
        Open Position
      </span>
      <!-- Judul Section dengan styling teks gradient -->
      <h1 class="font-raleway text-[25px] md:text-[45px] font-bold text-gray-800 dark:text-gradient text-center">
        Explore Opportunities, <span class="text-gradient">Shape your Career</span>
      </h1>
      <!-- Deskripsi singkat mengenai posisi yang tersedia -->
      <p class="font-raleway text-[13px] md:text-[16px] font-semibold text-gray-600 dark:text-white">
        See available positions and find a role where your skills and passions align with our mission.<br />
        Start your journey with us today.
      </p>
    </div>
    <!-- Grid untuk menampilkan daftar posisi -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[18px]">
      <!-- Looping data posisi menggunakan router-link untuk navigasi ke detail posisi -->
      <router-link
        v-for="(position, index) in positions"
        :key="index"
        :to="{ name: 'position-detail', params: { id: position.id } }"
        class="block"
      >
        <!-- Card posisi dengan background dan efek hover -->
        <div class="bg-[#F5F6FA] dark:bg-black rounded-[16px] hover:shadow-lg transition-all duration-300 dark:shadow-gray-600">
          <!-- Konten posisi dengan padding dan efek hover -->
          <div
            class="flex flex-col flex-wrap items-start bg-[#F5F6FA] rounded-[16px] p-[45px] pt-[35px] relative transition-all duration-300 hover:bg-blue-500 dark:bg-gray-800 hover:text-white hover:shadow-lg hover:scale-105"
          >
            <!-- Tipe posisi -->
            <p class="mb-2 text-xs text-gray-600 dark:text-gray-400">
              {{ position.tipe }}
            </p>
            <!-- Nama posisi -->
            <h1 class="text-xl font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 dark:text-white mb-2">
              {{ position.lowong_krj }}
            </h1>
            <!-- Ringkasan posisi dari ket_lowong -->
            <p class="text-xs text-justify text-gray-600 break-all dark:text-gray-400">
              {{ position.ket_lowong.ringkasan }}
            </p>
            <!-- Icon dekoratif di pojok kanan bawah -->
            <div class="absolute bottom-0 flex items-center justify-center -right-1">
              <img src="@/assets/Group 11.svg" alt="Icon" class="w-13 h-13" />
            </div>
            <!-- Icon besar dengan efek transisi saat hover -->
            <div
              class="absolute bottom-0 right-0 flex gap-2 transition-opacity duration-300 opacity-0 hover:opacity-100"
            >
              <img src="@/assets/Large unit.svg" alt="Large Unit Icon" class="w-[150px] h-[150]" />
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- Section tambahan: Ajakan untuk bekerja sama -->
    <div
      class="frame-section-bg text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center mt-[50px] shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div class="mb-6 space-y-4 text-left md:mb-0">
        <h1 class="text-3xl font-bold font-raleway">
          Work Together with Hexagon Inc.
        </h1>
        <!-- Deskripsi untuk tampilan desktop -->
        <div class="hidden md:block">
          <p class="max-w-xl text-white/90">
            Join our innovative team where professionalism meets creativity. Experience a modern work environment with friendly colleagues and flexible payment options.
          </p>
        </div>
        <!-- Deskripsi untuk tampilan mobile -->
        <div class="block md:hidden">
          <p class="max-w-xl text-white/90">
            Our company is a professional company, with friendly service, modern homes and interest-free payments
          </p>
        </div>
      </div>
      <!-- Tombol ajakan untuk kontak -->
      <Button class="text-white border-white" @click="$router.push({ name: 'contact' })">
        <div class="flex gap-2 items-center justify-center">
          <span>Let's Chat</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </Button>
    </div>
  </div>
</template>

<style scoped>
/* ------------------------------ */
/* Styling Background Section     */
/* ------------------------------ */
.frame-section-bg {
  background-image: url(@/assets/frameworktogether.png), linear-gradient(to bottom, #2f84ff, #0c57c3);
  background-position: center;
  background-size: cover;
}

/* Menonaktifkan dekorasi teks untuk router-link aktif */
.router-link-active {
  text-decoration: none;
}

/* Styling tambahan untuk active dot (jika digunakan) */
.active-dot {
  content: url("@/assets/Active dot.svg");
}
</style>
