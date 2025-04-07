<template>
    <!-- Container Utama Benefits Section dengan latar belakang untuk mode light dan dark -->
    <div class="bg-white dark:bg-gradient-to-b dark:from-black dark:to-black pt-3 md:pt-[78px]">
        <!-- Wrapper konten utama dengan margin atas dan bawah yang disesuaikan -->
        <div class="flex flex-col gap-9 mb-3 md:mb-[78px] mt-[36px]">
            <div class="flex flex-col lg:flex-row gap-[50px] mb-[18px]">
                <!-- Kolom Kiri: Teks Benefits -->
                <div class="px-[36px] md:px-[112px] mb-6 lg:w-1/2">
                    <div>
                        <!-- Label "Benefits" -->
                        <span class="bg-gray-100 dark:bg-[#121212] px-4 py-2 rounded-lg text-xs font-medium inline">
                            Benefits
                        </span>
                    </div>
                    <!-- Judul utama Benefits dengan teks gradient -->
                    <h1 class="text-[30px] md:text-[38px] font-raleway tracking-[-0.64px] leading-9 font-bold text-gray-800 dark:text-white mb-4 mt-[36px]">
                        Why Choose <br class="md:hidden"> <span class="text-gradient">Hexagon inc</span> ?
                    </h1>
                    <!-- Deskripsi Benefits -->
                    <p class="text-xs text-justify text-gray-600 dark:text-white">
                        Discover the advantages of partnering with us—tailored solutions, dedicated support, and proven results that set us apart.
                    </p>
                    <!-- Accordion Section untuk Benefits Detail -->
                    <div class="mt-4">
                        <div class="divide-y accordion divide-neutral/20">
                            <!-- Accordion Item 1 -->
                            <div class="accordion-item active" id="payment-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="payment-arrow-collapse" aria-expanded="true">
                                    <span class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    The Right Solution for Your Business
                                </button>
                                <div id="payment-arrow-collapse"
                                    class="accordion-content w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="payment-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            We understand that every business has unique needs. That's why our services are flexible and tailored to align with your specific business goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion Item 2 -->
                            <div class="accordion-item" id="delivery-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="delivery-arrow-collapse" aria-expanded="false">
                                    <span class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Latest Technology, Best Solutions
                                </button>
                                <div id="delivery-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="delivery-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            Stay ahead of the curve with our cutting-edge technology. We provide the best solutions that leverage the latest advancements to enhance your business operations, ensuring seamless integration and maximum efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion Item 3 -->
                            <div class="accordion-item" id="cancel-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Always Ahead Approach
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            Our proactive strategies keep you ahead of market trends. By continuously innovating and anticipating changes, we help your business thrive in a competitive landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Accordion Item 4 -->
                            <div class="accordion-item" id="cancel-arrow">
                                <button
                                    class="inline-flex items-center accordion-toggle gap-x-4 text-start dark:text-white"
                                    aria-controls="cancel-arrow-collapse" aria-expanded="false">
                                    <span class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180 dark:text-white"></span>
                                    Efficient and Affordable
                                </button>
                                <div id="cancel-arrow-collapse"
                                    class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="cancel-arrow" role="region">
                                    <div class="px-5 pb-4">
                                        <p class="font-normal text-blue-500 text-base-content/80 dark:text-white">
                                            Experience cost-effective solutions without compromising quality. Our services are designed to deliver exceptional value, balancing affordability with outstanding performance
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Kolom Kanan: Menampilkan gambar ilustrasi layanan -->
                <div class="px-[36px] md:px-[112px] flex flex-col lg:w-1/2">
                    <img src="@/assets/services/service.png" alt="services">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active-dot {
    content: url('@/assets/Active dot.svg');
}

.dark .card-bg {
    background-image: url(@/assets/services/bg.png);
    background-position: center;
    background-size: cover;
}
</style>
