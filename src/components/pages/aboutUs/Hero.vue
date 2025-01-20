
<template>
    <div class="relative">
        <div class="">
            <div class="relative h-[1000px]">
                <video  src="@/assets/about-us/output.mp4" autoplay loop muted
                    class="absolute z-10 object-cover w-full h-full">
                </video>
                
                <div class="absolute bottom-0 z-20 w-full h-full bg-gradient-to-t from-white dark:from-black via-white/20 dark:black/20 to-transparent">
                </div>
                
                <div class="z-20 flex justify-center w-full h-full pt-40">
                    <div class="mb-16 max-w-[1000px] space-y-8 z-20">
                        <h1 class="text-6xl font-bold text-center text-white font-raleway">
                            Be the best partner to create solutions together
                        </h1>
                        <h3 class="text-center text-white">Come on,<br /> to see our other world of ideas & we will work
                            as a great team</h3>
                        <div class="flex justify-center w-full gap-3.5">
                            <button class="flex items-center gap-2 px-5 py-3 text-white rounded-full bg-light-primary">
                                <div class="block w-2 h-2 bg-white rounded-full"></div>
                                Read More
                            </button>
                            <button class="flex items-center gap-2 px-5 py-3 text-white border-2 rounded-full ">
                                <div class="block w-2 h-2 rounded-full bg-tertiary"></div>
                                Services Detail
                            </button>
                        </div>
                    </div>
                    <div
                        class="w-full z-30 p-4 sm:p-6 md:p-8 space-y-4 border-2 border-white/30 rounded-xl absolute bg-white/20 backdrop-blur max-w-[1000px] -bottom-20 md:-bottom-40">
                        <div class="flex items-center gap-4 sm:gap-6">
                            <div class="flex gap-1 sm:gap-2">
                                <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                                <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                                <div class="block w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full"></div>
                            </div>
                            <div
                                class="w-full px-2 sm:px-4 py-2 sm:py-3 bg-white rounded-md font-raleway text-[#667085]">
                                Hexagon Karyatama Indonesia
                            </div>
                        </div>
                        <div class="p-4 bg-white sm:p-6 rounded-xl">
                            <iframe
                                :src=" aboutData?.youtube_url"
                                title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media"
                                allowfullscreen class="w-full rounded-lg aspect-video">
                            </iframe>

                        </div>
                    </div>

                </div>
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