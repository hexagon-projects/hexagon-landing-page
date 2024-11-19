<script setup>
import { ref } from 'vue';


const navItems = [
    {
        text: 'Home',
        route: 'home'
    },
    {
        text: 'About Us',
        route: 'about-us'
    },
    {
        text: 'Services',
        route: 'services'
    },
    {
        text: 'Portfolio',
        route: 'portfolio'
    },
    {
        text: 'News',
        route: 'news'
    },
    {
        text: 'Career',
        route: 'career'
    },
    {
        text: 'Contact',
        route: 'contact'
    },
]

const toggleNavbar = ref(false)
const toggleDropdown = ref(false)
</script>

<template>
    <nav class="bg-white h-[96px] w-full relative z-20">
        <div class="px-[56px] md:px-[112px] h-full">
            <div class="flex items-center justify-between h-full">
                <div class="flex items-center gap-[40px]">
                    <img class="flex-initial" src="../../assets/hexagon.svg" alt="Hexagon Inc.">
                    <div class="hidden lg:flex flex-none gap-8">
                        <RouterLink v-for="item in navItems" :to="{ name: item.route }" class="relative"
                            active-class="font-medium mb-1 after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-light-primary after:mt-4">
                            <span>{{ item.text }}</span>
                        </RouterLink>
                    </div>
                </div>

                <div class="hidden xl:flex gap-2">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="hidden peer">
                        <div
                            class="relative w-[42px] h-[24px] rounded-full outline outline-[2px] outline-light-primary peer-checked:after:translate-x-[18px] after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-light-secondary after:rounded-full after:h-4 after:w-4 after:transition-all">
                        </div>
                    </label>
                    <span>Light Mode</span>
                </div>

                <div class="flex items-center gap-2">
                    <div class="lg:hidden">
                        <font-awesome-icon :icon="toggleNavbar ? 'xmark' : 'bars'" class="cursor-pointer w-4 h-4"
                            @click="() => toggleNavbar = !toggleNavbar" />
                    </div>

                    <div class="relative xl:hidden">
                        <font-awesome-icon icon="ellipsis-vertical" class="cursor-pointer w-4 h-4"
                            @click="() => toggleDropdown = !toggleDropdown" />

                        <div v-if="toggleDropdown" class="absolute right-0 z-30">
                            <div class="outline outline-1 outline-gray-200 shadow-md rounded-md w-[180px]">
                                <div class="p-4 mt-2">
                                    <div class="flex gap-2">
                                        <label class="flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="hidden peer">
                                            <div
                                                class="relative w-[42px] h-[24px] rounded-full outline outline-[2px] outline-light-primary peer-checked:after:translate-x-[18px] after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-light-secondary after:rounded-full after:h-4 after:w-4 after:transition-all">
                                            </div>
                                        </label>
                                        <span>Light Mode</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div v-if="toggleNavbar" class="lg:hidden w-full h-full bg-white z-10">
        <div class="flex flex-col items-center">
            <RouterLink v-for="item in navItems" :to="{ name: item.route }" class="relative py-6 w-full text-center"
                active-class="after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:rounded-full after:bg-light-primary after:mt-1">
                <span>{{ item.text }}</span>
            </RouterLink>
        </div>
    </div>
</template>