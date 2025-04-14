<template>
    <!-- Container Utama: Mengatur background untuk mode light dan dark -->
    <div class="bg-white dark:bg-gradient-to-b dark:from-black dark:to-black">
        <!-- Wrapper Konten: Mengatur layout konten dengan margin atas dan bawah -->
        <div class="flex flex-col gap-9 mb-2 md:mb-[78px] mt-[36px] justify-center items-center">
            <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
                <!-- Kolom Kiri: Menampilkan gambar timeline -->
                <div class="px-[36px] md:px-[112px] flex flex-col lg:w-1/2">
                    <img src="@/assets/services/timeline.png" alt="services">
                </div>
                <!-- Kolom Kanan: Menampilkan teks dan deskripsi "Why Choose Us" -->
                <div class="px-[36px] md:px-[112px] flex flex-col justify-center mb-6 lg:w-1/2">
                    <div>
                        <!-- Label "Why Choose Us" -->
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">
                            Why Choose Us
                        </span>
                    </div>
                    <!-- Judul utama dengan efek teks gradient -->
                    <h1 class="text-[30px] md:text-[40px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gradient mb-4 mt-[36px]">
                        Experienced <span class="text-gradient-switch">, Dedicated Team</span>
                    </h1>
                    <!-- Deskripsi singkat mengenai keunggulan tim -->
                    <p class="text-xs text-justify text-gray-600 dark:text-white">
                        Our professionals are not only skilled but passionate about helping you achieve your goals.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Styling untuk active dot jika digunakan */
.active-dot {
    content: url('@/assets/Active dot.svg');
}

/* Styling khusus untuk background pada card di mode dark */
.dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}
</style>
