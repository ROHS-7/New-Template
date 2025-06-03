<template>
  <div class="relative">
    <swiper
      :slides-per-view="slidesPerView"
      :centered-slides="centeredSlides"
      :modules="modules"
      :pagination="pagination"
      :navigation="navigation"
      :autoplay="autoplay"
      :loop="loop"
      :breakpoints="breakpoints"
      :space-between="spaceBetween"
    >
      <slot></slot>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slidesPerView: {
      type: Number,
      default: 1,
    },
    centeredSlides: {
      type: Boolean,
      default: true,
    },
    modules: {
      type: Array,
      default: [Pagination, Autoplay, Navigation],
    },
    pagination: {
      type: Object,
      default: () => ({
        clickable: true,
      }),
    },
    autoplay: {
      type: Object,
      default: {
        delay: 2500,
        disableOnInteraction: true,
      },
    },
    loop: {
      type: Boolean,
      default: true,
    },
    spaceBetween: {
      type: Number,
      default: 30,
    },
    navigation: {
      type: [Boolean, Object],
      default: true,
    },
    breakpoints: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style>
.swiper-pagination-bullet {
  background: rgb(234, 233, 233);
}
.swiper-pagination-bullet-active {
  background: rgb(51, 255, 0);
  width: 20px;
  transform-origin: top left;
  border-radius: 100px;
  transition: all 0.3s linear;
}
</style>
