<template>
  <div class="px-[56px] md:px-[112px] pt-20 dark:bg-black">
    <div>
      <h1 class="text-4xl font-semibold text-black dark:text-white">{{ news.title }}</h1>
      <img src="@/assets/news/Photo.png" alt="News Image" class="w-full mt-10" />
    </div>
    <div class="grid grid-cols-1 mt-10 md:grid-cols-12 gap-6">
      <div class="flex flex-col col-span-4 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div class="flex gap-4">
          <h4 class="font-semibold text-black dark:text-white">Post :</h4>
          <h4 class="text-[#797979] dark:text-gray-400">{{ news.date }}</h4>
        </div>
        <div class="flex gap-4 items-center">
          <div class="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          <h4 class="font-semibold text-black dark:text-white">{{ news.author }}</h4>
        </div>
        <div class="flex gap-3 items-center flex-wrap">
          <button v-for="tag in news.tags" :key="tag" class="bg-light-primary-2 text-white px-4 py-2 rounded-full">
            {{ tag }}
          </button>
        </div>
      </div>
      <div class="flex flex-col col-span-8 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
        <div v-html="news.content" class="prose prose-lg dark:prose-invert max-w-4xl mx-auto"></div>
        <img src="@/assets/news/Photo.png" alt="News Image" class="w-full mt-10 aspect-video object-cover rounded-[48px]" />
        <h2 class="text-black text-4xl font-extrabold font-nunito dark:text-white">{{ news.subTitle }}</h2>
        <div v-html="news.details" class="prose prose-lg dark:prose-invert max-w-4xl mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<!-- Start of Selection -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const news = ref({});
const route = useRoute();

const fetchNews = () => {
  const id = route.params.id; // Ambil ID dari URL
  const mockData = {
    1: {
      title: "Meningkatkan Bisnis dengan Strategi Digital Marketing yang Efektif",
      date: "January 14, 2025",
      author: "Admin Hexagon",
      tags: ["Marketing", "Analysis", "Product"],
      content: `
        <p>Dalam dunia bisnis yang semakin kompetitif, digital marketing telah menjadi elemen penting dalam strategi pertumbuhan perusahaan. Digital marketing memungkinkan bisnis untuk menjangkau audiens yang lebih luas dengan cara yang lebih efisien dan terukur. Artikel ini membahas berbagai strategi digital marketing seperti:</p>
        <ul>
          <li>SEO (Search Engine Optimization)</li>
          <li>Content Marketing</li>
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
        </ul>
      `,
      subTitle: "",
      details: `
        <h2>SEO</h2>
        <p>Meningkatkan peringkat website Anda di mesin pencari sehingga lebih mudah ditemukan oleh calon pelanggan.</p>
        <h2>Content Marketing</h2>
        <p>Membuat konten yang relevan dan bernilai untuk menarik dan mempertahankan audiens.</p>
        <h2>Social Media Marketing</h2>
        <p>Menggunakan platform media sosial untuk membangun hubungan dengan pelanggan dan meningkatkan brand awareness.</p>
        <h2>Email Marketing</h2>
        <p>Mengirimkan pesan yang dipersonalisasi kepada pelanggan untuk membangun loyalitas dan meningkatkan konversi.</p>
        <p>Kami juga menyertakan studi kasus dari klien kami yang telah berhasil meningkatkan traffic dan konversi melalui strategi-strategi ini, memberikan gambaran nyata tentang bagaimana digital marketing dapat mengubah bisnis Anda.</p>
      `,
    },
    2: {
      title: "Branding: Elemen Penting dan Strategi yang Efektif",
      date: "January 14, 2025",
      author: "Admin Hexagon",
      tags: ["Branding", "Strategy", "Business"],
      content: `
        <p>Branding adalah salah satu aset terpenting bagi bisnis, karena mencerminkan identitas, nilai, dan misi perusahaan. Dalam artikel ini, kita akan membahas elemen-elemen penting dari branding, seperti:</p>
        <ul>
          <li>
            <strong>Identitas Visual:</strong> Logo, warna, tipografi, dan elemen visual lainnya yang menciptakan kesan pertama yang kuat.
          </li>
          <li>
            <strong>Pesan Merek:</strong> Bagaimana cara menyampaikan nilai dan misi perusahaan kepada audiens dengan cara yang menarik dan relevan.
          </li>
          <li>
            <strong>Pengalaman Pelanggan:</strong> Konsistensi dalam setiap interaksi dengan pelanggan, mulai dari pelayanan hingga komunikasi di media sosial.
          </li>
        </ul>
      `,
      subTitle: "",
      details: `
        <p>Kami juga akan berbagi tips tentang cara mengembangkan strategi branding yang efektif, termasuk bagaimana memposisikan brand Anda di pasar yang kompetitif dan membangun loyalitas pelanggan jangka panjang.</p>
      `,
    },
    3: {
      title: "Mengoptimalkan Website untuk Performa Maksimal",
      date: "February 10, 2025",
      author: "Admin Hexagon",
      tags: ["Website", "Optimization", "Performance"],
      content: `
        <p>Website yang lambat dan tidak responsif dapat berdampak negatif pada pengalaman pengguna dan konversi. Artikel ini membahas cara-cara untuk mengoptimalkan performa website Anda:</p>
        <ul>
          <li>
            <strong>Pengoptimalan Gambar:</strong> Menggunakan format gambar yang lebih efisien dan mengompresi ukuran file untuk mengurangi waktu loading.
          </li>
          <li>
            <strong>Caching:</strong> Menyimpan data sementara di browser pengguna untuk mempercepat loading halaman berikutnya.
          </li>
          <li>
            <strong>Kode Pemrograman yang Efisien:</strong> Memastikan kode website Anda bersih dan terstruktur dengan baik untuk meningkatkan kecepatan.
          </li>
          <li>
            <strong>Responsivitas:</strong> Mengoptimalkan desain website agar dapat diakses dengan baik di berbagai perangkat, mulai dari desktop hingga mobile.
          </li>
        </ul>
      `,
      subTitle: "",
      details: `
        <p>Dengan langkah-langkah ini, Anda tidak hanya meningkatkan kecepatan dan efisiensi website, tetapi juga memberikan pengalaman pengguna yang lebih baik, yang pada akhirnya akan meningkatkan retensi dan konversi.</p>
      `,
    },
  };

  // Ambil data berdasarkan id
  news.value = mockData[id] || {
    title: "News not found",
    date: "",
    author: "",
    tags: [],
    content: "",
    subTitle: "",
    details: "",
  };
};

onMounted(() => {
  fetchNews();
});
</script>
<!-- End of Selection -->
