<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Loading from "@/components/Footer/Loading.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  isLoading.value = false;
});
</script>

<template>
  <div>
      <Loading :isVisible="isLoading" v-if="isLoading"/>
    
    <Transition name="page-transition" mode="out-in">
      <div v-if="!isLoading" class="mx-auto dark:bg-black">
        <Navbar/>
        <div class="pt-16"></div>
        <Transition name="route-transition" mode="out-in">
          <RouterView />
        </Transition>
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<style>
/* Main Content Transition */
.page-transition-enter-active {
  animation: page-in 1.6s cubic-bezier(0.25, 0.1, 0.25, 1); /* Durasi diperpanjang 2x */
}

.page-transition-leave-active {
  animation: page-out 1.2s cubic-bezier(0.25, 0.1, 0.25, 1); /* Durasi diperpanjang 2x */
}

@keyframes page-in {
  0% {
    opacity: 0;
    transform: translateY(15px); /* Jarak dikurangi untuk gerakan lebih halus */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes page-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-15px); /* Jarak dikurangi */
  }
}

/* Route Transition */
.route-transition-enter-active {
  transition: all 0.8s ease-in-out; /* Durasi diperpanjang 2x */
  transition-delay: 0.4s; /* Delay diperpanjang */
}

.route-transition-leave-active {
  transition: all 0.8s ease-in-out; /* Durasi diperpanjang 2x */
}

.route-transition-enter-from {
  opacity: 0;
  transform: translateY(5px); /* Jarak dikurangi */
}

.route-transition-leave-to {
  opacity: 0;
  transform: translateY(-5px); /* Jarak dikurangi */
}

/* Smooth dark mode transition */
html {
  @apply transition-colors duration-500; /* Durasi diperpanjang */
}
</style>