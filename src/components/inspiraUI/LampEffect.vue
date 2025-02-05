<template>
  <div
    :class="
      cn(
        'relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 pt-[10vh]',
        $props.class,
      )
    "
  >
    <div class="relative z-0 flex items-center justify-center flex-1 w-full scale-y-125 isolate -mt-[24vh]">
      <!-- Conic Gradient -->
      <div
        :style="{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto right-1/2 h-[14vh] w-[15vw] overflow-visible from-cyan-500 via-transparent to-transparent text-white opacity-50 [--conic-position:from_70deg_at_center_top]"
      >
        <div
          class="absolute bottom-0 left-0 z-20 h-[10vh] w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"
        />
        <div
          class="absolute bottom-0 left-0 z-20 h-full w-[10vw] bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"
        />
      </div>

      <div
        :style="{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto left-1/2 h-[14vh] w-[15vw] from-transparent via-transparent to-cyan-500 text-white opacity-50 [--conic-position:from_290deg_at_center_top]"
      >
        <div
          class="absolute bottom-0 right-0 z-20 h-full w-[10vw] bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"
        />
        <div
          class="absolute bottom-0 right-0 z-20 h-[10vh] w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"
        />
      </div>

      <div
        class="absolute w-full h-[12vh] scale-x-150 translate-y-[3vh] top-1/2 bg-slate-950 blur-2xl"
      ></div>

      <div
        class="absolute z-50 w-full h-[12vh] bg-transparent top-1/2 opacity-10 backdrop-blur-md"
      ></div>

      <div
        class="absolute inset-auto z-50 h-[9vh] w-[28vw] -translate-y-[0.5vh] rounded-full bg-cyan-500 opacity-50 blur-3xl"
      ></div>

      <!-- Spotlight -->
      <div
        class="absolute inset-auto z-30 w-[8vw] -translate-y-[6vh] rounded-full animate-spotlight h-[9vh] bg-cyan-400 blur-2xl"
      ></div>

      <!-- Glowing Line -->
      <div
        class="animate-glowing-line absolute inset-auto z-50 h-0.5 w-[15vw] -translate-y-[7vh] bg-cyan-400"
      ></div>

      <div class="absolute inset-auto z-40 h-[11vh] w-full translate-y-[-12.5vh] bg-slate-950"></div>
    </div>

    <div class="">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface LampEffectProps {
  delay?: number;
  duration?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<LampEffectProps>(), {
  delay: 0.5,
  duration: 0.8,
});

const durationInSeconds = computed(() => `${props.duration}s`);
const delayInSeconds = computed(() => `${props.delay}s`);
</script>

<style scoped>
/* Spotlight Animation */
.animate-spotlight {
  animation: spotlight-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

/* Glowing Line Animation */
.animate-glowing-line {
  animation: glowing-line-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

/* Conic Gradient Animation */
.animate-conic-gradient {
  animation: conic-gradient-anim ease-in-out v-bind(durationInSeconds) forwards;
  animation-delay: v-bind(delayInSeconds);
}

@keyframes spotlight-anim {
  from {
    width: 8vw;
  }
  to {
    width: 16vw;
  }
}

@keyframes glowing-line-anim {
  from {
    width: 15vw;
  }
  to {
    width: 30vw;
  }
}

@keyframes conic-gradient-anim {
  from {
    opacity: 0.5;
    width: 15vw;
  }
  to {
    opacity: 1;
    width: 30vw;
  }
}
</style>