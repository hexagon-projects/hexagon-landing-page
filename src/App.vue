<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Loading from "./components/Footer/Loading.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

// Simulasi loading selama 3 detik
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Matikan loading setelah 3 detik
  }, 5000);
});
</script>

<template>
  <Loading :isVisible="isLoading" v-if="isLoading"/>
  <div class="mx-auto dark:bg-black" v-else>
    <div>
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>
