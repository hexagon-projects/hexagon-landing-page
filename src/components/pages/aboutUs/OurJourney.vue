<template>
    <div class="h-[500px] flex flex-col pt-72 md:flex-row items-center justify-center gap-10 mx-4 md:mx-28">
        <div class="w-full md:w-1/2 space-y-2.5">
            <div class="flex items-center gap-2.5 mt-8">
                <div class="w-8 h-1 bg-light-primary"></div>
                <h4 class="text-sm">Our Journey</h4>
            </div>
            <div class="space-y-5">
                <h3 class="text-2xl md:text-4xl font-raleway text-[#272D3E]">A Legacy of Innovation and Growth</h3>
                <p class="text-[#272D3E]/80 text-sm md:text-base">Founded under the name PT. Hexagon Karyatama
                    Indonesia, Hexagon Inc. is a
                    company that operates in
                    the field of digital artwork and IT solutions. With a focus on education and a commitment to
                    providing high-quality services, we have established ourselves as a leading provider in our
                    industry.<br /><br />

                    Starting its business in 2017 as a Strategic Business Unit of PT. Mizab Nusantara Kemilau, Hexagon
                    Inc. has now grown into an independent company that thrives as a digital services provider. The
                    company was reestablished in response to the growing demand in the digital industry while empowering
                    potential and professional individuals during the pandemic situation.</p>
            </div>
        </div>
        <div class="flex flex-col items-center justify-between h-auto">
            <div class="flex justify-center w-full gap-4">
                <div class="relative">
                    <img :class="selectedImage === 1 ? 'w-72 h-100' : 'w-25 h-100'" src="https://picsum.photos/id/237/200/300"
                        alt="Image 1"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(1)" />
                    <div v-if="selectedImage === 1"
                        class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
                        <h3 class="text-lg font-bold text-black">Workshop 1</h3>
                        <p class="text-sm text-black">
                            Jl. Abdul Halim No.128, Cimahi Tengah, Kota Cimahi 40522
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <img :class="selectedImage === 2 ? 'w-72 h-100' : 'w-25 h-100'" src="https://picsum.photos/id/237/200/300"
                        alt="Image 2"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(2)" />
                    <div v-if="selectedImage === 2"
                        class="absolute inset-x-3.5 p-4 rounded-lg w-[90%] bottom-3.5 bg-white/30 backdrop-blur-md border border-white/50">
                        <h3 class="text-lg font-bold text-black">Workshop 2</h3>
                        <p class="text-sm text-black">
                            Jl. Example Address 2, Bandung, Jawa Barat 40553
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <img :class="selectedImage === 3 ? 'w-72 h-100' : 'w-25 h-100'" src="https://picsum.photos/id/237/200/300"
                        alt="Image 3"
                        class="object-cover transition-all duration-300 rounded-lg shadow-md cursor-pointer"
                        @click="selectImage(3)" />
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

<script setup>
import { ref } from "vue";

const selectedImage = ref(1);

const selectImage = (imageIndex) => {
    selectedImage.value = imageIndex;
};
</script>
