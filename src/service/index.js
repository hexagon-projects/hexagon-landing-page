import { defineStore } from 'pinia';
import axiosInstance from "@/axios"; // Path sesuai dengan letak file axios.js

export const fetchAboutData = async () => {
  try {
    const response = await axiosInstance.get("/api/main");
    // Cek apakah response memiliki data yang valid
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchContact = async () => {
  try {
    const response = await axiosInstance.get("/api/contact");
    // Cek apakah response memiliki data yang valid
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchBenefits = async () => {
  try {
    const response = await axiosInstance.get("/api/benefits");
    // Cek apakah response memiliki data yang valid
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchNews = async () => {
  try {
    const response = await axiosInstance.get("/api/News");
    // Cek apakah response memiliki data yang valid
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchReview = async () => {
  try {
    const response = await axiosInstance.get("/api/review");
    // Cek apakah response memiliki data yang valid
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchVisionMission = async (type) => {
  try {
    const response = await axiosInstance.get("/api/vision_mission", {
        params: { type },
    });
    // Cek apakah response memiliki data yang valid
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchCareer = async (type) => {
  try {
    const response = await axiosInstance.get("/api/Career", {
      params: { type },
    });

    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};

export const fetchValue = async (type) => {
  try {
    const response = await axiosInstance.get("/api/values", {
        params: { type },
    });
    // Cek apakah response memiliki data yang valid
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchOurClient = async (status = null) => {
  try {
    const response = await axiosInstance.get("/api/abt_client", {
      params: {
        status: status,
      },
    });
    // Cek apakah response memiliki data yang valid
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};
export const fetchGallery = async (type) => {
  try {
    const response = await axiosInstance.get("/api/gallery");
    // Cek apakah response memiliki data yang valid
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    // Mengembalikan pesan error yang dapat dipakai di komponen
    return { error: "Failed to fetch about data. Please try again later." };
  }
};

export const usePortofolioStore = defineStore("portofolio", {
  state: () => ({
    projects: [], // Menyimpan semua data proyek
    projectDetails: null, // Menyimpan detail proyek tertentu
  }),
  actions: {
    async fetchProjects() {
      try {
        const response = await axiosInstance.get("/api/Portofolio");
        this.projects = response.data.data.map((item) => ({
          id: item.id,
          tag: item.Kategori,
          title: item.judul_porto,
          description: item.ket_porto,
          image: item.images.length ? item.images[0] : "",
          urlYoutube: item.url_youtube,
          alt: item.judul_porto,
        }));
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    async fetchProjectById(id) {
      try {
        const response = await axiosInstance.get(`/api/Portofolio/${id}`);
        this.projectDetails = {
          project: response.data.judul_porto,
          image: response.data.images.length ? response.data.images[0] : "",
          link: response.data.url_youtube,
          tags: response.data.Kategori.split(","),
          content: response.data.ket_porto,
        };
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    },
  },
});

