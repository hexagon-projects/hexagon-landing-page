<script setup>
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';
</script>

<template>
    <div class="px-[56px] md:px-[112px]">
        <div class="flex flex-col gap-9 items-center text-center mb-[78px]">
            <span class="bg-gray-100 px-4 py-2 rounded-lg text-xs font-medium inline">Review</span>
            <h1 class="font-raleway text-[30px] font-bold text-gray-800">What Our Clients Say</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-[18px] mb-[18px]">
            <div class="lg:max-w-[750px] w-full flex flex-col bg-[#2F54E8] rounded-[16px] shadow-lg">
                <div class="p-[56px] pt-[55px]">
                    <p class="text-[16px] text-white font-normal">“The Hexagon team understood our needs from day one and delivered tailored IT solutions that exceeded our expectations. They were highly professional, and the results speak for themselves! “</p>
                </div>
                <div class="p-[56px] pt-0 flex items-center">  
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold">
                        JD
                    </div> 
                    <div class="ml-4">
                        <h3 class="text-white">Jonatan uhuy</h3>
                        <p class="text-white font-normal">Ngarit</p>
                    </div>
                </div>
            </div>

            <div class="lg:max-w-[450px] w-full flex flex-col items-center bg-[#F5F6FA] rounded-[16px] p-[5px]">
                <div class="flex flex-col items-center gap-2">
                    <img src="@/assets/Top arrow.svg" alt="">
                    <img src="@/assets/Active dot.svg" alt="">
                    <img src="@/assets/Dot.svg" alt="">
                    <img src="@/assets/Dot.svg" alt="">
                    <img src="@/assets/scroll.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>