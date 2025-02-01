<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Loading from "@/components/Footer/Loading.vue"; // Pastikan path ini sesuai
import { ref, onMounted } from "vue";

const isLoading = ref(true);

// Simulasi loading selama 3 detik secara asynchronous
onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  isLoading.value = false; // Matikan loading setelah 3 detik
});
</script>

<template>
  <div>
    <Loading :isVisible="isLoading" v-if="isLoading"/>
    <div class="mx-auto dark:bg-black" v-else>
      <Navbar/>
      <div class="pt-16"></div>
      <RouterView />
      <Footer />
    </div>
  </div>
</template>