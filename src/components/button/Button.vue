
    <!-- <button
        class="bg-[#146DF3] hover:bg-light-primary-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white">
        <slot></slot>
    </button> -->

<style scoped>
  button {
   border: none;
   color: #fff;
   background-image: linear-gradient(30deg, #0400ff, #4ce3f7);
   border-radius: 999px;
   background-size: 100% auto;
   font-family: inherit;
   font-size: 17px;
   padding: 0.6em 1.5em;
  }

  button:hover {
   background-position: right center;
   background-size: 200% auto;
   -webkit-animation: pulse 2s infinite;
   animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
   0% {
    box-shadow: 0 0 0 0 #05bada66;
   }

   70% {
    box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
   }

   100% {
    box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
   }
  }
</style>

<template>
  <button>
  <slot></slot>
  </button>
</template>
