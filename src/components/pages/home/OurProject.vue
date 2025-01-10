<script setup>
import Button from '@/components/button/Button.vue';
import { onMounted, ref } from 'vue';

const cardItems = [
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
    {
        tag: 'Website Development',
        title: 'Vinland',
        description: 'Vinland, a brand with a vision for excellence and innovation, has partnered with Hexagon Inc., a leading website development agency, to create a remarkable online presence.',
        image: '/src/assets/our-project/project.png',
        alt: 'Project'
    },
]

const activeCard = ref(1)

function handleScroll() {
    const container = document.querySelector('.project-container')
    const activeCardIndex = Math.ceil(container.scrollLeft / container.children[0].offsetWidth)
    activeCard.value = activeCardIndex == 0 ? 1 : activeCardIndex
}

onMounted(() => {
    const container = document.querySelector('.project-container')
    container.addEventListener('scroll', handleScroll)
})
</script>

<template>
    <div>
        <div class="px-[56px] md:px-[112px]">
            <div class="mb-[56px]">
                <span class="text-sm font-semibold">Our Project</span>
                <div class="flex items-center justify-between">
                    <h1 class="text-gray-800 font-semibold text-[32px] font-raleway tracking-[-0.64px]">We provide
                        perfect
                        IT solutions for your business</h1>
                    <Button>
                        <span>Show All Portfolio</span>
                        <font-awesome-icon icon="arrow-right" />
                    </Button>
                </div>
            </div>
        </div>
        <div class="flex justify-start gap-[24px] py-[56px] overflow-x-auto project-container">
            <div v-for="(card, index) in cardItems" 
                 :key="index"
                 class="p-[24px] w-[395px] rounded-2xl flex-shrink-0" 
                 :class="{ 'ml-[56px] md:ml-[112px]' : index == 0, 'shadow-2xl' : index + 1 == activeCard }">
                <img :src="card.image" :alt="card.alt" class="mb-[24px]">
                <div class="space-y-[16px]">
                    <span class="px-3 py-2 bg-gray-100 rounded text-xs">{{ card.tag }}</span>
                    <h1 class="text-gray-800 font-raleway text-[32px] font-semibold">{{ card.title }}</h1>
                    <p class="text-[16px] text-gray-600">{{ card.description }}</p>
                    <RouterLink class="inline-block underline">
                        <span>See Details</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container::-webkit-scrollbar {
  display: none;
}

.project-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>