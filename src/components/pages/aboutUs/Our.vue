<template>
  <!-- Kontainer utama untuk tampilan Desktop (hidden pada mobile) -->
  <div class="hidden md:block">
    <!-- Wrapper dengan padding untuk konten Desktop -->
    <div class="hidden md:block md:px-32 ">
      <!-- Judul utama Desktop -->
      <h1 class="text-[#063B86] dark:text-[#2F84FF] text-2xl md:text-3xl font-bold font-raleway text-center">
        Empowering Growth with Purpose and Integrity
      </h1>
      <!-- Deskripsi singkat tentang visi/misi -->
      <h4 class="text-[#697B98] dark:text-gray-400 mt-4">
        Guided by a commitment to excellence and innovation, we envision a future where digital solutions drive positive impact. Our mission is to create sustainable growth by aligning business success with values that benefit both clients
        and communities.
      </h4>
    </div>
    <!-- Tampilan Desktop: Grid konten dengan dua kolom -->
    <div class="relative items-center grid-cols-2 gap-8 grid md:px-32 pt-10" id="our">
      <!-- Dekorasi: Gambar bentuk samping -->
      <img src="@/assets/about-us/side-shape.png" alt="" class="absolute top-0 right-0" />

      <!-- Bagian Kiri: Tombol-tombol pilihan konten -->
      <div class="mt-8 space-y-4">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="selected = index"
          :class="[
            'w-full text-left px-6 py-4 rounded-lg flex items-center justify-between transition-all duration-300 ease-out',
            selected === index ? 'bg-gradient-to-r from-[#0C57C3] to-[#2F84FF] text-white shadow-md dark:shadow-lg' : 'hover:border hover:border-[#0C57C3] dark:hover:border-[#2F84FF] dark:text-gray-300',
          ]"
        >
          <!-- Menampilkan judul item -->
          {{ item.title }}
          <!-- Ikon panah yang berotasi saat item terpilih -->
          <font-awesome-icon icon="arrow-right" class="transition-transform duration-300 ease-out" :class="{ 'rotate-90': selected === index }" />
        </button>
      </div>

      <!-- Bagian Kanan: Konten yang ditampilkan berdasarkan pilihan item -->
      <Transition name="content-fade" mode="out-in">
        <div :key="selected" class="z-10 p-6 space-y-4 rounded-lg bg-white/50 border border-gray-200 backdrop-blur-md dark:bg-gray-800/50 transition-all duration-300">
          <!-- Jika konten item bukan array, tampilkan judul dan deskripsi -->
          <div v-if="!Array.isArray(items[selected].content)" class="flex flex-col justify-center">
            <h2 class="text-2xl font-bold text-[#063B86] dark:text-[#2F84FF]">
              {{ items[selected].title }}
            </h2>
            <p class="mt-4 text-[#697B98] dark:text-gray-400 flex-1">
              {{ items[selected].content }}
            </p>
          </div>

          <!-- Jika konten item adalah array, gunakan TransitionGroup untuk animasi list -->
          <TransitionGroup v-else name="list" tag="div" class="space-y-4">
            <div
              v-for="(content, index) in items[selected].content"
              :key="index"
              class="flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm bg-white/50 border border-gray-200 dark:bg-gray-800/50 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-800/70"
            >
              <!-- Ikon dekoratif untuk setiap konten -->
              <div class="bg-[#E9F3FF] p-2 rounded-full">
                <Icon icon="cuida:sun-outline" width="24" height="24" />
              </div>
              <!-- Kontainer teks untuk judul dan subtitle -->
              <div class="flex flex-col justify-center">
                <h3 class="text-lg font-bold text-[#063B86] dark:text-[#2F84FF]">
                  {{ content.title }}
                </h3>
                <p class="mt-2 text-sm text-[#697B98] dark:text-gray-400">
                  {{ content.subtitle }}
                </p>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </Transition>
    </div>
  </div>

  <!-- Tampilan Mobile: Accordion untuk menampilkan konten -->
  <div class="relative block px-4 md:hidden" id="our-mobile">
    <!-- Judul utama Mobile -->
    <h1 class="text-center text-[#063B86] dark:text-[#2F84FF] text-2xl md:text-3xl font-bold font-raleway mt-8">
      Empowering Growth with Purpose and Integrity
    </h1>
    <!-- Deskripsi untuk Mobile -->
    <h4 class="text-center text-[#697B98] dark:text-gray-400 mt-4">
      Guided by a commitment to excellence and innovation, we envision a future where digital solutions drive positive impact. Our mission is to create sustainable growth by aligning business success with values that benefit both clients
      and communities.
    </h4>
    <!-- Accordion untuk menampilkan masing-masing item konten -->
    <div class="mt-8 space-y-4">
      <TransitionGroup name="accordion">
        <div v-for="(item, index) in items" :key="index" class="space-y-4 border-b border-gray-200 dark:border-gray-700">
          <!-- Tombol accordion untuk setiap item -->
          <button
            @click="toggleAccordion(index)"
            class="flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 ease-out"
            :class="selectedMobile === index ? 'rounded-xl bg-gradient-to-r from-[#0C57C3] to-[#2F84FF] text-white' : 'text-gray-700 dark:text-gray-300'"
          >
            <span>
              {{ item.title }}
            </span>
            <!-- Ikon chevron yang berotasi saat item terbuka -->
            <font-awesome-icon icon="chevron-down" class="transform transition-transform duration-300" :class="{ 'rotate-180': selectedMobile === index }" />
          </button>

          <!-- Transisi untuk konten accordion -->
          <Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
            <div v-show="selectedMobile === index" class="px-6 pb-4 overflow-hidden">
              <!-- Jika konten berupa array, tampilkan setiap sub-item -->
              <template v-if="Array.isArray(item.content)">
                <div v-for="(content, cIndex) in item.content" :key="cIndex" class="mb-4">
                  <h3 class="font-bold text-lg text-[#063B86] dark:text-[#2F84FF]">
                    {{ content.title }}
                  </h3>
                  <p class="text-sm text-[#697B98] dark:text-gray-400">
                    {{ content.subtitle }}
                  </p>
                </div>
              </template>
              <!-- Jika konten bukan array, tampilkan deskripsi dan gambar (jika ada) -->
              <template v-else>
                <p class="text-sm text-[#697B98] dark:text-gray-400">
                  {{ item.content }}
                </p>
                <div v-if="item.image" class="flex justify-center mt-4">
                  <img :src="item.image" alt="Content Image" class="rounded-lg max-h-[150px] w-auto object-contain" />
                </div>
              </template>
            </div>
          </Transition>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style>
/* ------------------------------ */
/* Style untuk Transisi Desktop   */
/* ------------------------------ */
/* Transisi saat konten masuk/keluar */
.content-fade-enter-active,
.content-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.content-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Transisi untuk list item di Desktop */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* ------------------------------ */
/* Style untuk Transisi Accordion (Mobile) */
/* ------------------------------ */
.accordion-move {
  transition: all 0.6s ease-in-out;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Animasi untuk tombol gradient */
button {
  transition: background 0.3s ease, transform 0.2s ease-out;
}

button:hover {
  transform: translateY(-2px);
}

/* Animasi rotasi untuk ikon */
.rotate-90 {
  transform: rotate(90deg);
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Style untuk konten accordion */
.accordion-content {
  max-height: 0;
}

.accordion-content[style*="height"] {
  max-height: none;
}

@media (max-width: 768px) {
  .accordion-item {
    border-bottom: 1px solid #e2e8f0;
  }
}
</style>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Icon } from "@iconify/vue";
import { fetchVisionMission, fetchValue } from "@/service";

// -------------------------------
// Bagian Data dan Pengambilan API
// -------------------------------

// Reactive reference untuk menyimpan data vision, mission, ourValue, dan workValue
const data = ref({ vision: null, mission: null, ourValue: null, workValue: null });

// Fungsi asynchronous untuk mengambil data vision, mission, dan values dari service
const getVisionMission = async () => {
  const visionResponse = await fetchVisionMission(1);
  const missionResponse = await fetchVisionMission(2);
  const ourValue = await fetchValue(1);
  const workValue = await fetchValue(2);

  if (visionResponse.error || missionResponse.error || ourValue.error || workValue.error) {
    console.error(visionResponse.error || missionResponse.error || ourValue.error || workValue.error);
  } else {
    // Fungsi untuk memproses data values dengan memisahkan title dan subtitle
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
  }
};

// ---------------------------------
// Computed Property untuk List Konten
// ---------------------------------
// Membuat daftar item untuk tampilan Desktop dan Mobile berdasarkan data yang diterima
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

// -------------------------------
// Reactive Reference untuk State Tampilan
// -------------------------------
// Untuk tampilan Desktop: item yang terpilih
const selected = ref(0);

// Untuk tampilan Mobile (Accordion): item yang terbuka
const selectedMobile = ref(null);

// Fungsi toggle untuk membuka/tutup accordion di mobile
const toggleAccordion = (index) => {
  selectedMobile.value = selectedMobile.value === index ? null : index;
};

// -------------------------------
// Fungsi Transition untuk Accordion (Mobile)
// -------------------------------
// Fungsi transition saat accordion masuk (enter)
const enter = (el) => {
  el.style.height = "0";
  el.offsetHeight; // Trigger reflow untuk memulai transisi
  el.style.height = el.scrollHeight + "px";
};

// Fungsi transition yang dijalankan setelah enter selesai
const afterEnter = (el) => {
  el.style.height = "auto";
};

// Fungsi transition saat accordion keluar (leave)
const leave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.offsetHeight; // Trigger reflow
  el.style.height = "0";
};

// -------------------------------
// Lifecycle Hook: Memanggil Pengambilan Data saat Komponen Dimuat
// -------------------------------
onMounted(() => {
  getVisionMission();
});
</script>
