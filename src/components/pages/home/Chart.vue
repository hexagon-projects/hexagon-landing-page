<template>
  <div class="p-6">
    <canvas id="visitChart"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";
import axiosInstance from "../../../axios";

export default {
  setup() {
    const visitData = ref([]);

    onMounted(async () => {
      try {
        const response = await axiosInstance.get("/api/landing-visits");
        visitData.value = response.data;

        renderChart(visitData.value);
      } catch (error) {
        console.error("Gagal mengambil data kunjungan:", error);
      }
    });

    const renderChart = (data) => {
      const ctx = document.getElementById("visitChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels, // Tanggal kunjungan
          datasets: [
            {
              label: "Jumlah Kunjungan",
              data: data.data, // Jumlah kunjungan per hari
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 0, 0)", // Transparan
              borderWidth: 2,
              fill: true,
              tension: 0.3, // Membuat garis lebih halus
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Tanggal",
                font: { weight: "bold" },
              },
            },
            y: {
              title: {
                display: true,
                text: "Jumlah Kunjungan",
                font: { weight: "bold" },
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "black", // Warna teks legend
              },
            },
          },
        },
      });
    };

    return {};
  },
};
</script>

<style>
canvas {
  width: 100% !important;
  height: 400px !important;
}
</style>
