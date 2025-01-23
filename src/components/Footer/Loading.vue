<template>
<div class="body">
  <div class="hud-loader">
          <div class="hexagon"></div>
          <div class="hexagon"></div>
          <div class="hexagon"></div>
        </div>
</div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000428, #004e92);
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.hud-loader {
  position: relative;
  width: 150px;
  height: 150px;
  animation: rotateHUD 3s linear infinite;
}

.hexagon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: transparent;
  border: 3px solid #00ffcc;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: pulseHUD 2s infinite ease-in-out;
}

.hexagon:nth-child(1) {
  animation-delay: 0s;
}

.hexagon:nth-child(2) {
  width: 80px;
  height: 80px;
  border: 2px dashed #00ffcc;
  animation-delay: 0.5s;
}

.hexagon:nth-child(3) {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 255, 204, 0.5);
  animation-delay: 1s;
}

@keyframes rotateHUD {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulseHUD {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}

</style>
