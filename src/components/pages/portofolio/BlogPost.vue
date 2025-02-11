<template>
  <div v-if="loading" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">Loading...</div>
  <div v-else-if="error" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    {{ error }}
  </div>
  <div v-else-if="portofolio" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    <div class="breadcrumbs">
      <ul>
        <li><a href="#">Portfolio</a></li>
        <li class="breadcrumbs-separator rtl:rotate-180">
          <span class="icon-[tabler--chevron-right] text-light-primary"></span>
        </li>
        <li>
          <a href="#" class="text-light-primary">{{ portofolio.judul_porto }}</a>
        </li>
      </ul>
    </div>

    <!-- Carousel Section -->
    <div v-if="!portofolio.youtube" class="relative w-full mt-10 overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in portofolio.images" :key="index" :src="image" :alt="`Image ${index + 1}`" class="w-full flex-shrink-0 aspect-video object-cover rounded-2xl" />
      </div>

      <button @click="prevSlide" class="absolute left-4 top-1/2 hover:top-1/2 transform -translate-y-1/2 hover:-translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80">❮</button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 hover:top-1/2 transform -translate-y-1/2 hover:-translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80">❯</button>

      <div class="flex justify-center mt-4 space-x-2">
        <span
          v-for="(image, index) in portofolio.images"
          :key="index"
          @click="goToSlide(index)"
          :class="{
            'w-9 h-3 bg-blue-500': currentIndex === index,
            'w-3 h-3 bg-gray-400': currentIndex !== index,
          }"
          class="rounded-full cursor-pointer transition-all duration-300"
        ></span>
      </div>
    </div>

    <div v-else class="relative w-full mt-10 overflow-hidden">
      <iframe :src="portofolio.youtube" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="w-full flex-shrink-0 aspect-video object-cover rounded-2xl"></iframe>
    </div>

    <!-- Project Info Section -->
    <div class="grid grid-cols-1 gap-6 mt-10 md:grid-cols-12">
      <div class="flex flex-col col-span-4 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div>
          <h4 class="font-semibold text-black dark:text-white">Project:</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ portofolio.judul_porto }}</h4>
        </div>
        <div v-if="portofolio.url_youtube">
          <h4 class="font-semibold text-black dark:text-white">Link:</h4>
          <a :href="portofolio.url_youtube" class="text-light-primary hover:underline">Visit Website</a>
        </div>
        <div>
          <h4 class="font-semibold text-black dark:text-white">Category:</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ portofolio.Kategori }}</h4>
        </div>
      </div>

      <div class="flex flex-col col-span-8 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div v-html="portofolio.ket_porto" class="prose prose-lg dark:prose-invert max-w-4xl mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axiosInstance from "@/axios";

const portofolio = ref(null);
const loading = ref(true);
const error = ref(null);
const currentIndex = ref(0);
const route = useRoute();

const fetchPortofolio = async () => {
  const id = route.params.id;
  try {
    loading.value = true;
    error.value = null;
    const response = await axiosInstance.get(`/api/Portofolio/${id}`);
    portofolio.value = response.data;
  } catch (err) {
    error.value = "Error loading portfolio: " + err.message;
    console.error("Error fetching project:", err);
  } finally {
    loading.value = false;
  }
};

fetchPortofolio();

// Carousel Functions
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % portofolio.value.images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + portofolio.value.images.length) % portofolio.value.images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>
