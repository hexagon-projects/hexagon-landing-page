<script setup>
// Import ref dari Vue untuk membuat reaktifitas pada data
import { ref } from 'vue';
// Import Icon dari @iconify/vue untuk penggunaan ikon
import { Icon } from "@iconify/vue";
// Import komponen Button dari path yang ditentukan
import Button from '@/components/button/Button.vue';
// Import axios untuk melakukan HTTP request
import axios from 'axios'; // Tambahan axios

// Inisialisasi formData sebagai objek reaktif dengan properti yang dibutuhkan
const formData = ref({
  fullName: '', // Nama lengkap
  email: '',    // Alamat email
  subject: '',  // Subjek pesan
  message: ''   // Isi pesan
});

// Fungsi untuk menangani pengiriman form
const handleSubmit = async () => {
  try {
    // Mengirim data form ke endpoint API menggunakan POST request
    const response = await axios.post('https://api.hexagon.com/api/communication', formData.value); // Ganti URL sesuai back end
    // Menampilkan pesan sukses dari response atau pesan default
    alert(response.data.message || 'Pesan berhasil dikirim!');
    // Mengosongkan kembali formData setelah pengiriman berhasil
    formData.value = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (err) {
    // Menampilkan error di console jika pengiriman gagal
    console.error('Gagal mengirim:', err);
    // Menampilkan pesan error dari response atau pesan default
    alert(err.response?.data?.message || 'Terjadi kesalahan saat mengirim pesan.');
  }
};
</script>

<template>
    <!-- Container utama dengan layout responsif, background, dan padding -->
    <div class="flex flex-col md:flex-row items-start justify-between gap-10 px-[16px] md:px-[112px] py-0 md:py-16 bg-gradient">
        <!-- Left Section: Informasi Kontak dan Social Media -->
        <div class="w-full space-y-6 md:w-1/2">
            <!-- Judul dan deskripsi utama -->
            <h2 class="text-3xl font-bold text-blue-900 md:text-4xl dark:text-white">
                Have a project idea?<br>Drop me a line.
            </h2>
            <p class="text-[14px] md:text-[18px] text-gray-600 dark:text-gray-400">
                Got a project? Drop me a line if you want to work together on something exciting. Even the smallest seed can grow into something beautiful.
            </p>

            <!-- Informasi Kontak: Email -->
            <div class="flex items-center gap-3">
                <!-- Ikon email di dalam lingkaran -->
                <div class="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                    <Icon icon="fluent-color:mail-48" class="w-8 h-8 text-white" />
                </div>
                <!-- Detail kontak berupa email -->
                <div>
                    <p class="text-gray-600 dark:text-gray-400">Email us</p>
                    <a href="mailto:contact@hexagon.com" class="font-medium text-blue-600 dark:text-blue-400">
                        contact@hexagon.com
                    </a>
                </div>
            </div>

            <!-- Social Media Section -->
            <div class="space-y-3">
                <!-- Judul kecil untuk koneksi sosial -->
                <div class="flex items-center gap-2.5 mt-8">
                    <div class="w-8 h-0.5 bg-light-primary"></div>
                    <h4 class="text-sm">Connect With Us</h4>
                </div>
                <!-- Daftar tautan media sosial -->
                <div class="flex gap-4">
                    <a href="https://www.youtube.com/@Hexagon-Inc" target="blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:youtube-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/hexagon-inc" target="blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:linkedin-icon" />
                    </a>
                    <a href="#" target="blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="logos:facebook" />
                    </a>
                    <a href="https://www.instagram.com/hexagoninc_" target="blank" class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                        <Icon icon="skill-icons:instagram" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Right Section: Form Kontak -->
        <div class="w-full p-8 bg-white shadow-lg md:w-1/2 dark:bg-gray-800 rounded-xl">
            <!-- Judul form -->
            <h3 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                Request A Quote – let's work together.
            </h3>

            <!-- Form kontak -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Grid dua kolom untuk input nama dan email -->
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <input type="text" v-model="formData.fullName" placeholder="Full name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>
                    <div>
                        <input type="email" v-model="formData.email" placeholder="Email address"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>
                </div>

                <!-- Input Subject -->
                <div>
                    <input type="text" v-model="formData.subject" placeholder="Subject"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <!-- Input Message -->
                <div>
                    <textarea v-model="formData.message" placeholder="Your message" rows="4"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                
                <!-- Tombol Kirim Message -->
                <button
                    class="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-all duration-500 bg-blue-500 rounded-full hover:bg-blue-700">
                    Send Message
                    <!-- Menggunakan font-awesome-icon untuk ikon panah -->
                    <font-awesome-icon icon="arrow-right" class="text-sm" />
                </button>
            </form>
        </div>
    </div>
</template>
