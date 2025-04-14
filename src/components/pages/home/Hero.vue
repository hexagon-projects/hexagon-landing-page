<script setup>
import { Application } from '@splinetool/runtime';
import { onMounted, reactive, ref, onUnmounted } from 'vue';

const canvas = ref(null);

const state = reactive({
    spline: {
        desktopScene: 'https://prod.spline.design/Ry9Xir03d7uzegml/scene.splinecode', // Link untuk desktop
        mobileScene: 'https://prod.spline.design/y22mr3XC-3wuEu5V/scene.splinecode', // Link untuk mobile
        app: null,
        isLoaded: false,
    }
});

// Fungsi untuk memilih scene berdasarkan ukuran layar
const getSceneUrl = () => {
    return window.innerWidth >= 768 ? state.spline.desktopScene : state.spline.mobileScene;
};

const handleResize = () => {
    if (state.spline.app && canvas.value) {
        // Update canvas dimensions
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;
        
        // Check if resize method exists before calling
        if (typeof state.spline.app.resize === 'function') {
            state.spline.app.resize();
        }
    }
};

onMounted(async () => {
    try {
        const app = new Application(canvas.value);
        const sceneUrl = getSceneUrl(); // Pilih scene berdasarkan ukuran layar
        await app.load(sceneUrl);
        state.spline.app = app;
        state.spline.isLoaded = true;

        // Set initial canvas size
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;

        // Add resize event listener
        window.addEventListener('resize', handleResize);
    } catch (error) {
        console.error('Error initializing Spline:', error);
    }
});

onUnmounted(() => {
    // Remove resize event listener when component is unmounted
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="relative h-[600px] mb-16 pt-24 md:pt-16">
        <div class="hero-section-bg absolute w-full h-full bg-no-repeat z-0 -mt-[48px]">
            <canvas ref="canvas" />
            <span class="bg-gradient-to-b absolute bottom-0 via-50% md:via-80% via-white dark:via-black/95 from-transparent w-full h-1/2 to-white dark:to-black z-[2]"></span>
        </div>
        <div class="absolute flex flex-col items-center -translate-x-1/2 left-1/2 -bottom-16 gap-9">
            <div class="scrolldown" style="--color: #136FF8">
                <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                </div>
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

@media (max-width: 768px) {
    .hero-section-bg {
        background-image: url(@/assets/home-bg-mobile.png);
        background-position-x: center;
        background-position-y: center;
    }
}

.scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
}

.scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
    0% {
        opacity: 0;
        height: 6px;
    }

    40% {
        opacity: 1;
        height: 10px;
    }

    80% {
        transform: translate(0, 20px);
        height: 10px;
        opacity: 0;
    }

    100% {
        height: 3px;
        opacity: 0;
    }
}

.chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}
</style>