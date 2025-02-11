<script setup>
import { ref } from 'vue';
import Button from '@/components/button/Button.vue';
import ButtonOutline from '@/components/button/ButtonOutline.vue';

// Form data
const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    summary: '',
    resume: null
});

const jobDetails = {
    experience: '1.5 tahun',
    workHours: '08:00 - 16:00 wib',
    workDays: 'Monday To Thursday',
    location: 'Cimahi Tengah, Cimahi, Jawab Barat',
    summary: [
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra'
    ],
    classifications: [
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra'
    ],
    jobDescription: [
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra'
    ],
    skillsets: [
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra',
        'Vivamus nec venenatis est. In elit lectus, maximus eget enim ut, pharetra'
    ]
};

const handleFileUpload = (event) => {
    formData.value.resume = event.target.files[0];
};

const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData.value);
};

</script>

<template>
    <!-- Rest of the template remains the same -->
    <div class="px-[56px] md:px-[112px] dark:bg-black mb-[150px] pt-20 md:pt-16">
        <!-- Header section -->
        <div class="flex flex-col gap-9 items-center text-center mb-[60px]">
            <h1 class="font-raleway text-[30px] md:text-[50px] font-bold text-gradient">Front-end Developer</h1>
            <div class="breadcrumbs">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
                    <li>
                        <router-link to="/career">Career</router-link>
                    </li>
                    <li class="breadcrumbs-separator rtl:-rotate-[40deg]">/</li>
                    <li aria-current="page">
                        <span class="bg-primary/20 !text-primary rounded-sm px-1.5 py-0.5">Front-end Developer</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Job Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Column - Job Details -->
            <div class="space-y-8">
                <!-- Ringkasan -->
                <div>
                    <h2 class="text-2xl font-bold text-primary mb-4">Ringkasan</h2>
                    <p class="text-gray-700" v-for="(item, index) in jobDetails.summary" :key="index">
                        {{ item }}
                    </p>
                    <!-- <div class="space-y-4">
                        <div class="flex gap-2">
                            <span class="font-bold">Pengalaman:</span>
                            <span>{{ jobDetails.experience }}</span>
                        </div>
                        <div class="flex gap-2">
                            <span class="font-bold">Jam Kerja:</span>
                            <span>{{ jobDetails.workHours }}</span>
                        </div>
                        <div class="flex gap-2">
                            <span class="font-bold">Hari Kerja:</span>
                            <span>{{ jobDetails.workDays }}</span>
                        </div>
                        <div class="flex gap-2">
                            <span class="font-bold">Lokasi:</span>
                            <span>{{ jobDetails.location }}</span>
                        </div>
                    </div> -->
                </div>

                <!-- Klasifikasi -->
                <div>
                    <h2 class="text-2xl font-bold text-primary mb-4">Klasifikasi</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li class="text-gray-700" v-for="(item, index) in jobDetails.classifications" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Deskripsi Pekerjaan -->
                <div>
                    <h2 class="text-2xl font-bold text-primary mb-4">Deskripsi Pekerjaan</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li class="text-gray-700" v-for="(item, index) in jobDetails.jobDescription" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Skillsets -->
                <div>
                    <h2 class="text-2xl font-bold text-primary mb-4">Skillsets</h2>
                    <ul class="list-disc pl-6 space-y-2">
                        <li class="text-gray-700" v-for="(item, index) in jobDetails.skillsets" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <Button class="w-full md:w-auto">Apply Now</Button>
            </div>

            <div class="flex flex-col gap-10">
                <div class="space-y-4 border border-gray-300 p-[20px] rounded-2xl">
                    <div class="flex gap-2">
                        <span class="font-bold">Pengalaman:</span>
                        <span class="text-gray-700">{{ jobDetails.experience }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span class="font-bold">Jam Kerja:</span>
                        <span class="text-gray-700">{{ jobDetails.workHours }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span class="font-bold">Hari Kerja:</span>
                        <span class="text-gray-700">{{ jobDetails.workDays }}</span>
                    </div>
                    <div class="flex gap-2">
                        <span class="font-bold">Lokasi:</span>
                        <span class="text-gray-700">{{ jobDetails.location }}</span>
                    </div>
                </div>

                <!-- Right Column - Application Form -->
                <div class="bg-white dark:bg-gray-800 border border-gray-300 p-6 rounded-2xl">
                    <h2 class="text-2xl font-bold text-primary mb-6">Lamar Sekarang!</h2>
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="space-y-2">
                            <label class="block">Nama Lengkap*</label>
                            <input v-model="formData.fullName" type="text" class="w-full p-2 border rounded" required>
                        </div>

                        <div class="space-y-2">
                            <label class="block">Email*</label>
                            <input v-model="formData.email" type="email" class="w-full p-2 border rounded" required>
                        </div>

                        <div class="space-y-2">
                            <label class="block">Nomor Telepon*</label>
                            <input v-model="formData.phone" type="tel" class="w-full p-2 border rounded" required>
                        </div>

                        <div class="space-y-2">
                            <label class="block">Job Position</label>
                            <select v-model="formData.position" class="w-full p-2 border rounded">
                                <option value="" disabled>Select position</option>
                                <option value="frontend">Front-end Developer</option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label class="block">Perkenalan Singkat</label>
                            <textarea v-model="formData.summary" class="w-full p-2 border rounded" rows="4"></textarea>
                        </div>

                        <div class="space-y-2">
                            <label class="block">Upload CV</label>
                            <input type="file" @change="handleFileUpload" accept=".pdf,.doc,.docx" class="w-full p-2">
                            <p class="text-sm text-gray-500">*Unggah CV Anda dalam format pdf, jpg, png, atau doc.</p>
                        </div>

                        <Button type="submit" class="w-full">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.router-link-active {
    font-weight: bold;
    color: #2F84FF; /* Warna untuk link aktif */
}
</style>