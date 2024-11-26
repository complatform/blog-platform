<template>
  <div class="slider-container">
    <h1 class="text-2xl text-center text-gray-400 font-bold mt-5 mb-5">Trending Posts</h1>
    <swiper-container class="mySwiper" :slides-per-view="slidesPerView" :space-between="30">
      <swiper-slide v-for="index in 5" :key="index">
        <div class="bg-white rounded-md shadow-md p-5">
          <img :src="`/path/to/image${index}.jpg`" alt="" class="rounded-md">
          <h1 class="text-center text-blue-500 font-serif mt-5">
            <a :href="`#post${index}`">Post {{ index }}</a>
          </h1>
          <div class="flex justify-between mt-5 px-3 text-gray-400 font-bold">
            <div><p class="text-gray-400">Author {{ index }}</p></div>
            <div class="flex">
              <i class="fa-solid fa-calendar-days mr-2 mt-1"></i>
              <p>11/26/2024</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination
  },
  data() {
    return {
      slidesPerView: 3 // Set this based on your design
    };
  },
  mounted() {
    // Update slidesPerView on window resize for responsiveness
    window.addEventListener('resize', this.updateSlidesPerView);
    this.updateSlidesPerView();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      if (window.innerWidth < 768) {
        this.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 3;
      }
    }
  }
}
</script>

<style>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.mySwiper {
  padding: 20px 0;
}
</style>