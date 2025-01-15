<template>
  <div class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    <div class="breadcrumbs">
      <ul>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li class="breadcrumbs-separator rtl:rotate-180"><span class="icon-[tabler--chevron-right] text-light-primary"></span></li>
        <li>
          <a href="#" class="text-light-primary">{{ portofolio.project }}</a>
        </li>
      </ul>
    </div>
    <img :src="portofolio.image" alt="News Image" class="w-full mt-10 aspect-video" />
    <div class="grid grid-cols-1 mt-10 md:grid-cols-12 gap-6">
      <div class="flex flex-col col-span-4 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Project :</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ portofolio.project }}</h4>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Link :</h4>
          <a :href="portofolio.link" class="text-light-primary hover:underline">Visit Website</a>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-semibold text-black dark:text-white">Tags :</h4>
          <div class="flex gap-3 items-center flex-wrap">
            <button v-for="tag in portofolio.tags" :key="tag" class="border-light-primary-2 border text-light-primary-2 hover:scale-105 transition-all duration-300 px-4 py-2 rounded">
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col col-span-8 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div v-html="portofolio.content" class="prose prose-lg dark:prose-invert max-w-4xl mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const portofolio = ref({});

const fetchPortofolio = () => {
  const route = useRoute();
  const id = route.params.id; // Ambil ID dari URL
  const mockData = {
    1: {
      project: "Universital Jendral Achmad Yani",
      image: "/src/assets/portofolio/Unjani.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p>We successfully increased awareness and registration traffic by implementing social media optimization, digital marketing strategies, advertising, and press releases. As a result, we achieved up to <strong>144% of the target registrations</strong> for the 2022 New Student Admissions.</p>`,
    },
    2: {
      project: "Smartpol Application",
      image: "/src/assets/portofolio/Smartpol.png",

      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p><strong>Smartpol</strong> is a digital service specifically designed for political campaigns, helping clients effectively manage their campaign strategies with advanced technological solutions.</p>`,
    },
    3: {
      project: "Berseka Application",
      image: "/src/assets/portofolio/Berseka.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p><strong>Berseka</strong> is a waste management application designed to support efficient and eco-friendly waste management practices.</p>`,
    },
    4: {
      project: "Jatidiri.app",
      image: "/src/assets/portofolio/Jatidiri.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p><strong>Jatidiri</strong> is a super app focused on psychology, helping users discover their potential, interests, and talents, along with providing online psychological consultation services.</p>`,
    },
    5: {
      project: "ULBI",
      image: "/src/assets/portofolio/Ulbi.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p>We optimized digital assets and marketing campaigns to boost student registrations at <strong>ULBI</strong> through various digital platforms. This project involved digital asset analysis, pixel integration for ad tracking, content creation and optimization, ad campaign launches, and campaign evaluations to meet conversion targets.</p>`,
    },
    6: {
      project: "Edutama - Aplikasi Sistem Keauangan Sekolah dan Pesantren",
      image: "/src/assets/portofolio/Edutama.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p><strong>Edutama</strong> is a financial application designed to assist private schools, boarding schools, and other educational institutions in managing their finances more efficiently.</p>`,
    },
    7: {
      project: "KEMENKOP",
      image: "/src/assets/portofolio/Kemenkop.png",
      link: "",
      tags: ["Marketing", "Analysis", "Product"],
      content: `<p>We delivered presentations for <strong>KEMENKOP</strong>, providing valuable insights and supporting their initiatives through in-depth education and comprehensive discussions.</p>`,
    },
  };

  // Ambil data berdasarkan id
  portofolio.value = mockData[id] || {
    project: "Portofolio not found",
    link: "",
    tags: [],
    content: "",
  };
};

onMounted(() => {
  fetchPortofolio();
});
</script>
