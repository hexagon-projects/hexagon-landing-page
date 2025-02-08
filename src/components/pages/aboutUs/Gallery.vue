<template>
  <div class="relative w-full pb-24 overflow-hidden bg-white rounded-xl dark:bg-black">
    <div ref="scrollContainer" class="flex gap-4 p-4 overflow-x-auto hide-scrollbar scroll-snap-x">
      <div
        v-for="(gallery, index) in galleries"
        :key="gallery.id"
        class="flex-shrink-0 w-[calc(100%-2rem)] sm:w-1/2 md:w-1/3 h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden scroll-snap-align hover:scale-105 transition-all duration-300"
      >
        <img :src="gallery.image" :alt="`Gallery image ${index + 1}`" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { fetchGallery } from "@/service"; // Mengimpor fungsi dari service

const galleries = ref([]); // Menyimpan data klien

const getGallery = async () => {
  const data = await fetchGallery();
  console.log(data); // Menampilkan data yang diterima dari API
  if (data.error) {
    console.error(data.error); // Menampilkan error yang datang dari service
  } else {
    // Cek apakah data adalah array
    if (Array.isArray(data)) {
      // Jika data adalah array, lakukan pemetaan
      galleries.value = data.map((client) => ({
        ...client,
        image: `${client.image}`, // Menambahkan URL
      }));
      console.log(galleries.value);
    } else {
      console.error("Data yang diterima bukan array:", data);
    }
  }
};

onMounted(() => {
  getGallery(); // Panggil fungsi saat komponen dimuat
});

const scrollContainer = ref(null);

let scrollInterval;
const scrollSpeed = 3000;

const startScroll = () => {
  const container = scrollContainer.value;
  const slides = container.children;
  let currentIndex = 0;

  scrollInterval = setInterval(() => {
    if (!container || !slides || slides.length === 0) return;

    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
      container.scrollTo({
        left: 0,
        behavior: "auto",
      });
    } else {
      const nextSlide = slides[currentIndex];
      container.scrollTo({
        left: nextSlide.offsetLeft,
        behavior: "smooth",
      });
    }
  }, scrollSpeed);
};

// const pauseScroll = () => {
//   clearInterval(scrollInterval);
// };

const resumeScroll = () => {
  startScroll();
};

onMounted(() => {
  startScroll();
});

// onUnmounted(() => {
//   pauseScroll();
// });
</script>

<style scoped>
/* Scrollbar Hiding */
.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}

/* Scroll Snap Styling */
.scroll-snap-x {
  scroll-snap-type: x mandatory;
}

.scroll-snap-align {
  scroll-snap-align: center;
}

/* Optional smooth scroll for user interaction */
.scroll-snap-x {
  scroll-behavior: smooth;
}
</style>
