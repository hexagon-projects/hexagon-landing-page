<template>
  <div v-if="loading" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    Loading...
  </div>
  <div v-else-if="error" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    {{ error }}
  </div>
  <div v-else-if="portofolio" class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    <div class="breadcrumbs">
      <ul>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li class="breadcrumbs-separator rtl:rotate-180">
          <span class="icon-[tabler--chevron-right] text-light-primary"></span>
        </li>
        <li>
          <a href="#" class="text-light-primary">{{ portofolio.judul_porto }}</a>
        </li>
      </ul>
    </div>
    <img 
      :src="portofolio.images[0]" 
      :alt="portofolio.judul_porto" 
      class="w-full mt-10 aspect-video rounded-2xl" 
    />
    <div class="grid grid-cols-1 gap-6 mt-10 md:grid-cols-12">
      <div class="flex flex-col col-span-4 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Project :</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ portofolio.judul_porto }}</h4>
        </div>
        <div v-if="portofolio.url_youtube" class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Link :</h4>
          <a :href="portofolio.url_youtube" class="text-light-primary hover:underline">
            Visit Website
          </a>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Category :</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ portofolio.Kategori }}</h4>
        </div>
      </div>
      <div class="flex flex-col col-span-8 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div v-html="portofolio.ket_porto" class="max-w-4xl mx-auto prose prose-lg dark:prose-invert"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosInstance from '@/axios';

const portofolio = ref(null);
const loading = ref(true);
const error = ref(null);
const route = useRoute();

const fetchPortofolio = async () => {
    const id = route.params.id;
    try {
        loading.value = true;
        error.value = null;
        const response = await axiosInstance.get(`/api/Portofolio/${id}`);
        portofolio.value = response.data;
    } catch (err) {
        error.value = 'Error loading portfolio: ' + err.message;
        console.error('Error fetching project:', err);
    } finally {
        loading.value = false;
    }
};

fetchPortofolio();
</script>