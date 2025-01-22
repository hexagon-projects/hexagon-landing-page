<script setup>
import { Application } from '@splinetool/runtime';
import { onMounted, reactive, ref } from 'vue';


const canvas = ref(null)

const state = reactive({
    spline: {
        scene: 'https://prod.spline.design/qpjuRBJ6jl7KmNG2/scene.splinecode',
        app: null,
        isLoaded: false,
    }
})

onMounted(async () => {
    const app = new Application(canvas.value)
    await app.load(state.spline.scene)
    state.spline.app = app
    state.spline.isLoaded = true
})
</script>

<template>
    <div class="relative h-screen max-h-[900px] mb-16 py-40">
        <div class="hero-section-bg absolute w-full h-full bg-no-repeat z-0 -mt-[48px]">
            <canvas ref="canvas" />
            <span class="bg-gradient-to-b absolute bottom-0 from-transparent w-full h-1/2 to-white dark:to-black z-[2]"></span>
        </div>
        <div class="absolute flex flex-col items-center -translate-x-1/2 left-1/2 -bottom-16 gap-9">
            <img src="@/assets/line.svg" alt="">
            <div class="animate-wiggle">
                <img src="@/assets/scroll.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section-bg {
    background-image: url(@/assets/Ornament.png);
    background-position-x: center;
    background-position-y: center;
}
</style>