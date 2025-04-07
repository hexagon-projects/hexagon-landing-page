<script setup>
/* ------------------------------ */
/* Import Modul dan Komponen      */
/* ------------------------------ */
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
// Pastikan Anda sudah membuat fungsi fetchJobDetail pada file service
import { fetchJobDetail } from '@/service';

/* ------------------------------ */
/* Mengambil Parameter URL        */
/* ------------------------------ */
// Menggunakan useRoute untuk mengambil parameter id dari URL
const route = useRoute();
const jobId = route.params.id; // Misalnya: "10"

/* ------------------------------ */
/* Inisialisasi State Reaktif     */
/* ------------------------------ */
// Variabel reaktif untuk data pekerjaan, status loading, dan error
const jobDetail = ref(null);
const loading = ref(true);
const error = ref(null);

/* ------------------------------ */
/* Fungsi Pengambilan Data Job    */
/* ------------------------------ */
const fetchData = async () => {
  try {
    // Panggil API untuk mengambil data job berdasarkan id
    const response = await fetchJobDetail(jobId);
    // Jika field ket_lowong berupa string JSON, parsing terlebih dahulu
    if (response && typeof response.ket_lowong === 'string') {
      try {
        response.ket_lowong = JSON.parse(response.ket_lowong);
      } catch (err) {
        console.error('Error parsing ket_lowong:', err);
        response.ket_lowong = {};
      }
    }
    // Simpan response ke jobDetail
    jobDetail.value = response;
  } catch (e) {
    // Simpan pesan error jika terjadi masalah
    error.value = e.message || 'Gagal memuat data pekerjaan';
  } finally {
    // Set loading menjadi false setelah pengambilan data selesai
    loading.value = false;
  }
};

// Panggil fetchData saat komponen dimuat
onMounted(fetchData);

/* ------------------------------ */
/* Inisialisasi Form Lamaran      */
/* ------------------------------ */
// Form data untuk pengajuan lamaran
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  position: '',
  summary: '',
  resume: null
});

/* ------------------------------ */
/* Fungsi Penanganan File Upload  */
/* ------------------------------ */
const handleFileUpload = (event) => {
  formData.value.resume = event.target.files[0];
};

/* ------------------------------ */
/* Fungsi Penanganan Submit Form  */
/* ------------------------------ */
const handleSubmit = () => {
  // Logika pengiriman form atau panggilan API untuk mengirim lamaran
  console.log('Form submitted:', formData.value);
};
</script>

<template>
  <!-- Container Utama dengan padding dan background responsif -->
  <div class="px-[56px] md:px-[112px] dark:bg-black mb-[150px] pt-20 md:pt-16">
    <!-- Header Section dengan Breadcrumbs -->
    <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
      <!-- Tampilkan judul pekerjaan jika data sudah tersedia -->
      <h1 v-if="jobDetail" class="font-raleway text-[30px] md:text-[50px] font-bold text-gradient">
        {{ jobDetail.lowong_krj }}
      </h1>
      <!-- Breadcrumbs navigasi -->
      <div class="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
          <li>
            <router-link to="/career">Career</router-link>
          </li>
          <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
          <li aria-current="page">
            <!-- Tampilkan nama posisi di breadcrumbs jika data tersedia -->
            <span
              class="bg-primary/20 !text-primary rounded-sm px-1.5 py-0.5"
              v-if="jobDetail"
            >{{ jobDetail.lowong_krj }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Tampilan status loading dan error -->
    <div v-if="loading" class="text-center">
      Loading...
    </div>
    <div v-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>

    <!-- Main Content: Menampilkan detail pekerjaan jika data tersedia dan loading selesai -->
    <div v-if="jobDetail && !loading" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column - Detail Pekerjaan -->
      <div class="space-y-8">
        <!-- Ringkasan Pekerjaan -->
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">Ringkasan</h2>
          <p class="text-gray-700">
            {{ jobDetail.ket_lowong.ringkasan }}
          </p>
        </div>

        <!-- Klasifikasi Pekerjaan -->
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">Klasifikasi</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li class="text-gray-700" v-for="(item, index) in jobDetail.ket_lowong.klasifikasi" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Deskripsi Pekerjaan -->
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">Deskripsi Pekerjaan</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li class="text-gray-700" v-for="(item, index) in jobDetail.ket_lowong.deskripsi" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Skillsets yang Dibutuhkan -->
        <div>
          <h2 class="text-2xl font-bold text-primary mb-4">Skillsets</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li class="text-gray-700" v-for="(item, index) in jobDetail.ket_lowong.skillsets" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Tombol Apply Now -->
        <Button class="w-full md:w-auto">Apply Now</Button>
      </div>

      <!-- Right Column - Informasi Pekerjaan & Form Lamaran -->
      <div class="flex flex-col gap-10">
        <!-- Informasi Pekerjaan Detail -->
        <div class="space-y-4 border border-gray-300 p-[20px] rounded-2xl">
          <div class="flex gap-2">
            <span class="font-bold">Pengalaman:</span>
            <span class="text-gray-700">{{ jobDetail.ket_lowong.pengalaman }}</span>
          </div>
          <div class="flex gap-2">
            <span class="font-bold">Jam Kerja:</span>
            <span class="text-gray-700">{{ jobDetail.ket_lowong.jam_kerja }}</span>
          </div>
          <div class="flex gap-2">
            <span class="font-bold">Hari Kerja:</span>
            <span class="text-gray-700">{{ jobDetail.ket_lowong.hari_kerja }}</span>
          </div>
          <div class="flex gap-2">
            <span class="font-bold">Lokasi:</span>
            <span class="text-gray-700">{{ jobDetail.ket_lowong.lokasi }}</span>
          </div>
        </div>

        <!-- Form Lamaran Pekerjaan -->
        <div class="bg-white dark:bg-gray-800 border border-gray-300 p-6 rounded-2xl">
          <h2 class="text-2xl font-bold text-primary mb-6">Lamar Sekarang!</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Input Nama Lengkap -->
            <div class="space-y-2">
              <label class="block">Nama Lengkap*</label>
              <input v-model="formData.fullName" type="text" class="w-full p-2 border rounded" required>
            </div>

            <!-- Input Email -->
            <div class="space-y-2">
              <label class="block">Email*</label>
              <input v-model="formData.email" type="email" class="w-full p-2 border rounded" required>
            </div>

            <!-- Input Nomor Telepon -->
            <div class="space-y-2">
              <label class="block">Nomor Telepon*</label>
              <input v-model="formData.phone" type="tel" class="w-full p-2 border rounded" required>
            </div>

            <!-- Select Job Position -->
            <div class="space-y-2">
              <label class="block">Job Position</label>
              <select v-model="formData.position" class="w-full p-2 border rounded">
                <option value="" disabled>Select position</option>
                <!-- Set nilai posisi sesuai data yang ada -->
                <option :value="jobDetail.lowong_krj">{{ jobDetail.lowong_krj }}</option>
              </select>
            </div>

            <!-- Input Perkenalan Singkat -->
            <div class="space-y-2">
              <label class="block">Perkenalan Singkat</label>
              <textarea v-model="formData.summary" class="w-full p-2 border rounded" rows="4"></textarea>
            </div>

            <!-- Input Upload CV -->
            <div class="space-y-2">
              <label class="block">Upload CV</label>
              <input type="file" @change="handleFileUpload" accept=".pdf,.doc,.docx" class="w-full p-2">
              <p class="text-sm text-gray-500">*Unggah CV Anda dalam format pdf, jpg, png, atau doc.</p>
            </div>

            <!-- Tombol Submit Form -->
            <Button type="submit" class="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling untuk link aktif pada router */
.router-link-active {
  font-weight: bold;
  color: #2F84FF;
}
</style>
