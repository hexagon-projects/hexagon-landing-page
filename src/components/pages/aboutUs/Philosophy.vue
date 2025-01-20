<template>
    <div class=" pt-52">
        <img src="@/assets/about-us/ser_shape.png" class="absolute right-0" />
        <img src="@/assets/about-us/ser_shape_r.png" class="absolute" />
        <div class="max-w-[1000px] flex justifty-center mx-auto pb-32 pt-20">
            <div class="flex flex-col items-center justify-center gap-2.5 mt-8">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-1 bg-light-secondary"></div>
                    <h4 class="text-md dark:text-light-secondary">Our Business Philosophy</h4>
                </div>
                <h1 class="text-4xl font-normal font-raleway text-[#272D3E] dark:text-white">Guided by the Wisdom of the
                    Bee</h1>
                <img src="@/assets/about-us/bee.png" class="" />
                <p class="text-gray-600 md:text-base dark:text-gray-400">{{ aboutData?.philosophy || "Loading..." }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchAboutData } from "@/service"; // Mengimpor fungsi dari service

const aboutData = ref(null);

// Fungsi untuk mengambil data tentang perusahaan
const getAboutData = async () => {
    const data = await fetchAboutData();
    // Cek apakah data yang diterima mengandung error
    if (data.error) {
        console.error(data.error); // Menampilkan error yang datang dari service
    } else {
        aboutData.value = data; // Menyimpan data jika berhasil
    }
};

onMounted(() => {
    getAboutData(); // Panggil fungsi saat komponen dimuat
});
</script>