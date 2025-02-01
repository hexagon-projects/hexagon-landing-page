<template>
  <div class="hexagon-loader">
    <div class="hexagon">
      <div class="hexagon-inner">
        <div class="hexagon-progress">{{ progress }}%</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hexagon-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a; /* Dark background for contrast */
}

.hexagon {
  width: 150px;
  height: 150px;
  position: relative;
  background: linear-gradient(45deg, #6a11cb, #2575fc, #6a11cb);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  /* animation: rotate 4s linear infinite, glow 2s ease-in-out infinite alternate; */
}

.hexagon-inner {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: #1a1a1a; /* Dark background to match the container */
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-progress {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes glow {
  0% {
    filter: brightness(1);
    box-shadow: 0 0 10px rgba(106, 17, 203, 0.6), 0 0 20px rgba(37, 117, 252, 0.6);
  }
  100% {
    filter: brightness(1.2);
    box-shadow: 0 0 20px rgba(106, 17, 203, 0.8), 0 0 40px rgba(37, 117, 252, 0.8);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const progress = ref(0);

    onMounted(() => {
      const interval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 1; // Increase progress by 1% every 50ms
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed here
    });

    return {
      progress,
    };
  },
};
</script>