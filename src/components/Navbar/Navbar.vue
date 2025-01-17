<script setup>
import { ref, onMounted, watch } from "vue";

const isLightMode = ref(false);

const toggleNavbar = ref(false);
const toggleDropdown = ref(false);

const toggleTheme = () => {
    isLightMode.value = !isLightMode.value;
    if (isLightMode.value) {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }
};

onMounted(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        isLightMode.value = true;
        document.documentElement.classList.remove("dark");
    } else {
        isLightMode.value = false;
        document.documentElement.classList.add("dark");
    }
});

watch(isLightMode, (newValue) => {
    localStorage.setItem("theme", newValue ? "light" : "dark");
});
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
</script>

<template>
    <nav class="bg-white h-[96px] w-full relative z-20 dark:bg-black">
        <div class="px-[56px] md:px-[112px] h-full">
            <div class="flex items-center justify-between h-full">
                <div class="flex items-center gap-[40px]">
                    <img v-if="!isLightMode" class="flex-initial" src="@/assets/darkHexa.png" alt="Hexagon Inc.">
                    <img v-else class="flex-initial" src="@/assets/hexagon.svg" alt="Hexagon Inc.">
                    <div class="flex-none hidden gap-8 lg:flex">
                        <RouterLink v-for="item in navItems" :key="item.route" :to="{ name: item.route }" class="relative dark:text-white"
                            active-class="font-medium mb-1 after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-light-primary dark:after:bg-white after:mt-4">
                            <span>{{ item.text }}</span>
                        </RouterLink>
                    </div>
                </div>

                <div class="hidden gap-2 xl:flex">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" class="hidden peer" :checked="!isLightMode" @change="toggleTheme" />
                        <div
                            class="relative w-[42px] h-[24px] rounded-full outline outline-[2px] outline-light-primary peer-checked:after:translate-x-[18px] after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-light-secondary after:rounded-full after:h-4 after:w-4 after:transition-all dark:bg-[#04224D] dark:after:bg-white dark:outline-none">
                        </div>
                    </label>
                    <span>{{ isLightMode ? "Light Mode" : "Dark Mode" }}</span>
                </div>


                <div class="flex items-center gap-2">
                    <div class="lg:hidden">
                        <font-awesome-icon :icon="toggleNavbar ? 'xmark' : 'bars'" class="w-4 h-4 cursor-pointer"
                            @click="() => toggleNavbar = !toggleNavbar" />
                    </div>

                    <div class="relative xl:hidden">
                        <font-awesome-icon icon="ellipsis-vertical" class="w-4 h-4 cursor-pointer"
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
    <div v-if="toggleNavbar" class="z-10 w-full h-full bg-white lg:hidden">
        <div class="flex flex-col items-center">
            <RouterLink v-for="item in navItems" :key="item.route" :to="{ name: item.route }" class="relative w-full py-6 text-center"
                active-class="after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:rounded-full after:bg-light-primary after:mt-1">
                <span>{{ item.text }}</span>
            </RouterLink>
        </div>
    </div>
</template>
