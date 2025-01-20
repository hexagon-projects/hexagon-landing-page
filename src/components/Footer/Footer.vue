<template>
  <footer class="bg-white text-gray-800 dark:bg-black dark:text-gray-200 px-[50px] md:px-[112px] md:mt-10">
    <div class="container py-8 mx-auto">
      <div class="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col w-full mb-6 md:mb-0 md:w-1/3">
          <div class="flex items-center">
            <img src="@/assets/footer/logohexagon.svg" alt="Hexagon Logo" class="h-15" />
          </div>
          <p class="text-sm font-normal text-justify text-gray-900 dark:text-gray-300">
            Founded under the name PT. Hexagon Karyatama Indonesia, Hexagon Inc. is a company that operates in the field
            of digital artwork and IT solutions. With a focus on education and a commitment to providing high-quality
            services, we have established ourselves as a leading provider in our industry.
          </p>
          <div class="flex mt-4 space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/footer/fb.svg" alt="Facebook Icon" class="h-8" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/footer/twit.svg" alt="Twitter Icon" class="h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/footer/ig.svg" alt="Instagram Icon" class="h-8" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/footer/yt.svg" alt="YouTube Icon" class="h-8" /> 
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-between w-full md:flex-row md:w-2/3 md:ml-20">
          <div class="flex flex-col mb-6 mr-20 md:mb-0">
            <h2 class="mb-3 font-semibold text-sl">QUICK LINKS</h2>
            <ul class="flex-col mt-2 space-y-3">
              <li><a href="/about-us" class="text-blue-600 dark:text-blue-400 hover:underline">About us</a></li>
              <li><a href="/services" class="text-blue-600 dark:text-blue-400 hover:underline">Services</a></li>
              <li><a href="/portofolio" class="text-blue-600 dark:text-blue-400 hover:underline">Portfolio</a></li>
              <li><a href="/career" class="text-blue-600 dark:text-blue-400 hover:underline">Career </a><a
                  class="text-white text-[10px] bg-[#136FF8] rounded-3xl px-3 py-1 ml-2" href="">Hiring!</a></li>
              <li><a href="/news" class="text-blue-600 dark:text-blue-400 hover:underline">News</a></li>
              <li><a href="/contact" class="text-blue-600 dark:text-blue-400 hover:underline">Contact us</a></li>
            </ul>
          </div>
          <div class="flex-col mb-6 mr-10 md:flex">
            <h2 class="mb-3 font-semibold text-sl">OUR ECOSYSTEM</h2>
            <ul class="flex-col mt-2 space-y-3">
              <li><a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Hexamedia</a></li>
              <li><a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Hexa Journal</a></li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h2 class="mb-3 font-semibold text-sl">CONTACT US</h2>
            <p class="flex items-center mt-2">
              <img src="@/assets/footer/email.svg" alt="Email Icon" class="mr-2" />
              <a href="mailto:contact@hexagon.co.id"
                class="text-blue-600 dark:text-blue-400 hover:underline">contact@hexagon.co.id</a>
            </p>
            <p class="flex items-center mt-2 text-blue-600 dark:text-blue-400">
              <img src="@/assets/footer/loc.svg" alt="Location Icon" class="mr-2" />
              Jl. Abdul Halim No.128, <br>
              Cimahi Tengah, Kota Cimahi 40522
            </p>
            <p class="flex items-center mt-2">
              <img src="@/assets/footer/call.svg" alt="Phone Icon" class="mr-2" />
              <a href="tel:+6281222181823" class="text-blue-600 dark:text-blue-400 hover:underline">(+62) 812 2218
                1823</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="text-center border-t pt-3 pb-3 bg-gradient-to-r from-black via-[#0A58CA] to-[#0C57C3]">
    <p class="text-sm text-white">&copy; 2024 All rights reserved. Hexagon Inc.</p>
  </div>
</template>

<style scoped></style>