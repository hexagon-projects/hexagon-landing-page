<script setup>
/* ------------------------------ */
/* Import Modul dan Inisialisasi  */
/* ------------------------------ */
// Mengimpor Application dari Spline Tool untuk rendering 3D scene
import { Application } from '@splinetool/runtime';
// Mengimpor lifecycle hooks dan fungsi reactive dari Vue
import { onMounted, reactive, ref, onUnmounted } from 'vue';

// Membuat ref untuk canvas yang akan digunakan oleh Spline
const canvas = ref(null);

// Membuat state reaktif untuk menyimpan informasi spline, termasuk URL scene untuk desktop dan mobile,
// instance aplikasi Spline, dan status apakah scene sudah dimuat.
const state = reactive({
    spline: {
        desktopScene: 'https://prod.spline.design/Ry9Xir03d7uzegml/scene.splinecode', // Link untuk desktop
        mobileScene: 'https://prod.spline.design/y22mr3XC-3wuEu5V/scene.splinecode', // Link untuk mobile
        app: null,
        isLoaded: false,
    }
});

/* ------------------------------ */
/* Fungsi Pemilihan Scene         */
/* ------------------------------ */
// Fungsi untuk menentukan URL scene berdasarkan ukuran layar
const getSceneUrl = () => {
    return window.innerWidth >= 768 ? state.spline.desktopScene : state.spline.mobileScene;
};

/* ------------------------------ */
/* Fungsi Penanganan Resize       */
/* ------------------------------ */
// Fungsi yang akan dipanggil ketika jendela diresize untuk mengubah ukuran canvas dan mereset aplikasi Spline
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

/* ------------------------------ */
/* Lifecycle: onMounted           */
/* ------------------------------ */
// Saat komponen dimuat, inisialisasi aplikasi Spline dan load scene yang sesuai
onMounted(async () => {

    try {
        // Membuat instance Spline Application dengan canvas yang disediakan
    const app = new Application(canvas.value);
    // Menentukan scene URL berdasarkan ukuran layar
    const sceneUrl = getSceneUrl();
    // Memuat scene dari URL yang telah dipilih
    await app.load(sceneUrl);
    // Menyimpan instance aplikasi ke state dan menandai bahwa scene sudah dimuat
    state.spline.app = app;
    state.spline.isLoaded = true;

    // Set ukuran awal canvas sesuai ukuran jendela
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    // Menambahkan event listener untuk menangani resize pada jendela
    window.addEventListener('resize', handleResize);
    } catch (error) {
        console.error('Error initializing Spline:', error);
    }
});

/* ------------------------------ */
/* Lifecycle: onUnmounted         */
/* ------------------------------ */
// Saat komponen di-unmount, hapus event listener resize untuk mencegah memory leak
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <!-- Container Utama: Mengatur layout relatif, tinggi layar penuh dengan batas maksimum, margin bawah, dan padding atas -->
    <div class="relative h-screen max-h-[900px] mb-16 pt-24 md:pt-16">
        <!-- Background Hero Section: Posisi absolut dengan background image dan canvas Spline -->
        <div class="hero-section-bg absolute w-full h-full bg-no-repeat z-0 -mt-[48px]">
            <!-- Canvas untuk rendering 3D scene oleh Spline -->
            <canvas ref="canvas" class="w-full h-full" />
            <!-- Overlay Gradient: Elemen span untuk memberikan efek gradient di bagian bawah -->
            <span class="bg-gradient-to-b absolute bottom-0 via-50% md:via-80% via-white dark:via-black/95 from-transparent w-full h-1/2 to-white dark:to-black z-[2]"></span>
        </div>
        <!-- Scroll Down Indicator: Posisi absolute untuk menunjukkan scroll ke bawah -->
        <div class="absolute flex flex-col items-center -translate-x-1/2 left-1/2 via -bottom-16 gap-9">
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
/* ------------------------------ */
/* Styling Hero Section Background */
/* ------------------------------ */
.hero-section-bg {
    background-image: url(@/assets/Ornament.png);
    background-position-x: center;
    background-position-y: center;
}

/* Background untuk perangkat mobile */
@media (max-width: 768px) {
    .hero-section-bg {
        background-image: url(@/assets/home-bg-mobile.png);
        background-position-x: center;
        background-position-y: center;
    }
}

/* ------------------------------ */
/* Styling Scroll Down Indicator  */
/* ------------------------------ */
.scrolldown {
    --color: white;
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: calc(var(--sizeX) / 2);
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
