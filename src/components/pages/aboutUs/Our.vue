<template>
  <div class="relative grid items-center gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 md:px-32">
    <!-- Decorative Shape -->
    <img src="@/assets/about-us/side shape.svg" alt="" class="absolute top-0 right-0 dark:opacity-30" />

    <!-- Left Section -->
    <div>
      <h1 class="text-[#063B86] dark:text-[#2F84FF] text-2xl md:text-3xl font-bold font-raleway">Empowering Growth with Purpose and Integrity</h1>
      <h4 class="text-[#697B98] dark:text-gray-400 mt-4">
        Guided by a commitment to excellence and innovation, we envision a future where digital solutions drive positive impact. Our mission is to create sustainable growth by aligning business success with values that benefit both clients
        and communities.
      </h4>
      <div class="mt-8 space-y-4">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="selected = index"
          :class="[
            'w-full text-left px-6 py-4 rounded-lg flex items-center justify-between transition-all',
            selected === index ? 'bg-gradient-to-r from-[#0C57C3] to-[#2F84FF] text-white shadow-md dark:shadow-lg' : 'hover:border hover:border-[#0C57C3] dark:hover:border-[#2F84FF] dark:text-gray-300',
          ]"
        >
          {{ item.title }}
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>

    <div v-if="Array.isArray(items[selected].content)" class="z-10 p-6 space-y-4">
      <!-- Loop untuk konten array -->
      <div v-for="(content, index) in items[selected].content" :key="index" class="flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
        <!-- Tampilkan Title -->
         <div class="bg-[#E9F3FF] p-2 rounded-full">
            <Icon icon="cuida:sun-outline" width="24" height="24"/>
         </div>
        <div class="flex flex-col justify-center">
            <h3 class="text-lg font-bold text-[#063B86] dark:text-[#2F84FF]">
              {{ content.title }}
            </h3>
            <!-- Tampilkan Subtitle -->
            <p class="mt-2 text-sm text-[#697B98] dark:text-gray-400">
              {{ content.subtitle }}
            </p>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div v-else class="z-10 p-6 space-y-4 rounded-lg bg-white/50 backdrop-blur-md dark:bg-gray-800/50">
      <h2 class="text-2xl font-bold text-[#063B86] dark:text-[#2F84FF]">
        {{ items[selected].title }}
      </h2>

      <!-- Konten Tunggal -->
      <p class="mt-4 text-[#697B98] dark:text-gray-400">
        {{ items[selected].content }}
      </p>

      <!-- Gambar (jika ada) -->
      <div class="flex justify-center">
        <img :src="items[selected].image" alt="Content Image" class="rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted, computed } from "vue";
import { fetchVisionMission, fetchValue } from "@/service";

const data = ref({ vision: null, mission: null });

const getVisionMission = async () => {
  const visionResponse = await fetchVisionMission(1);
  const missionResponse = await fetchVisionMission(2);
  const ourValue = await fetchValue(1);
  const workValue = await fetchValue(2);

  if (visionResponse.error || missionResponse.error || ourValue.error || workValue.error) {
    console.error(visionResponse.error || missionResponse.error || ourValue.error || workValue.error);
  } else {
    const processValue = (values) =>
      values.map((item) => {
        const [title, subtitle] = item.value.split("|");
        return { title: title?.trim() || "", subtitle: subtitle?.trim() || "" };
      });
    
    data.value = {
      vision: visionResponse.value,
      mission: missionResponse.value,
      ourValue: processValue(ourValue),
      workValue: processValue(workValue),
    };

    console.log(data.value);
  }
};

const items = computed(() => [
  {
    title: "Our Vision",
    content: data.value.vision || "Vision data is loading...",
    image: new URL("@/assets/about-us/ourVision.png", import.meta.url).href,
  },
  {
    title: "Our Mission",
    content: data.value.mission || "Mission data is loading...",
    image: new URL("@/assets/about-us/ourMission.png", import.meta.url).href,
  },
  {
    title: "Work Values",
    content: data.value.workValue || "Work Values data is loading...",
  },
  {
    title: "Our Values",
    content: data.value.ourValue || "Our Values data is loading...",
  },
]);

const selected = ref(0);

onMounted(() => {
  getVisionMission();
});
</script>
