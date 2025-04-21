<script setup>
/* ------------------------------ */
/* Import dan Inisialisasi State  */
/* ------------------------------ */
// Mengimpor fungsi reactive dari Vue
import { ref } from "vue";

// Membuat state reaktif untuk menyimpan indeks gambar yang terpilih
const selectedImage = ref(1);

/* ------------------------------ */
/* Fungsi untuk Mengubah Gambar   */
/* ------------------------------ */
// Fungsi yang mengubah nilai selectedImage sesuai gambar yang diklik
const selectImage = (imageIndex) => {
    selectedImage.value = imageIndex;
};
</script>

<template>
    <!-- Container Utama: Mengatur layout responsif untuk tampilan kantor -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 mx-4 md:mx-28 py-0 md:py-[70px]">
        <!-- Bagian Kiri: Informasi teks mengenai kantor -->
        <div class="w-full md:w-1/2 space-y-2.5">
            <!-- Header kecil dengan garis dekoratif -->
            <div class="flex items-center gap-2.5 mt-8">
                <div class="w-8 h-0.5 bg-light-primary"></div>
                <h4 class="text-sm">Our Offices</h4>
            </div>
            <!-- Judul dan deskripsi -->
            <div class="space-y-5">
                <h3 class="text-2xl md:text-4xl font-raleway text-gradient font-semibold">
                    Our Offices Across the World
                </h3>
                <p class="text-[#272D3E]/80 dark:text-white text-sm md:text-base">
                    Our offices are strategically located worldwide to serve you better. Find us<br>near you and experience our exceptional services.
                </p>
            </div>
        </div>

        <!-- Bagian Kanan: Galeri gambar kantor dengan deskripsi overlay -->
        <div class="flex flex-col items-center justify-between h-auto">
            <div class="flex justify-center w-full gap-4">
                <!-- Gambar 1 -->
                <div class="relative">
                    <img 
                        :class="selectedImage === 1 ? 'w-72 h-100' : 'w-25 h-100'" 
                        src="@/assets/office2.png"
                        alt="Image 1"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(1)" 
                    />
                    <!-- Overlay deskripsi untuk gambar 1, ditampilkan jika gambar 1 dipilih -->
                    <div v-if="selectedImage === 1"
                        class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
                        <h3 class="text-lg font-bold text-black">Workshop 1</h3>
                        <p class="text-sm text-black">
                            Jl. Abdul Halim No.128, Cimahi Tengah, Kota Cimahi 40522
                        </p>
                    </div>
                </div>

                <!-- Gambar 2 -->
                <div class="relative">
                    <img 
                        :class="selectedImage === 2 ? 'w-72 h-100' : 'w-25 h-100'" 
                        src="@/assets/office1.png"
                        alt="Image 2"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(2)" 
                    />
                    <!-- Overlay deskripsi untuk gambar 2, ditampilkan jika gambar 2 dipilih -->
                    <div v-if="selectedImage === 2"
                        class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
                        <h3 class="text-lg font-bold text-black">Workshop 2</h3>
                        <p class="text-sm text-black">
                            Jl. Example Address 2, Bandung, Jawa Barat 40553
                        </p>
                    </div>
                </div>

                <!-- Gambar 3 -->
                <div class="relative">
                    <img 
                        :class="selectedImage === 3 ? 'w-72 h-100' : 'w-25 h-100'" 
                        src="@/assets/office3.png"
                        alt="Image 3"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(3)" 
                    />
                    <!-- Overlay deskripsi untuk gambar 3, ditampilkan jika gambar 3 dipilih -->
                    <div v-if="selectedImage === 3"
                        class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
                        <h3 class="text-lg font-bold text-black">Workshop 3</h3>
                        <p class="text-sm text-black">
                            Jl. Example Address 3, Jakarta, DKI Jakarta 40562
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Styling untuk active dot, jika diperlukan */
.active-dot {
    content: url('@/assets/Active dot.svg');
}
</style>
