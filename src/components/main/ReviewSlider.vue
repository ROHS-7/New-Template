<template>
  <div class="relative">
    <Swiper
      :slides-per-view="4"
      :space-between="30"
      :centered-slides="false"
      :modules="modules"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '1280': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
      :navigation="navigation"
    >
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <div
        class="reviewswiper-button-next z-[100] text-primary absolute top-[50%] left-[5px] rounded-full flex items-center justify-center w-[30px] translate-y-[-50%] h-[30px] bg-black"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
          ></path>
        </svg>
      </div>
      <div
        class="reviewswiper-button-prev z-[100] text-primary absolute top-[50%] right-[5px] rounded-full flex items-center justify-center w-[30px] translate-y-[-50%] h-[30px] bg-black"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
          ></path>
        </svg>
      </div>
    </Swiper>
  </div>
</template>

<script>
import { SwiperSlide } from "swiper/vue";
import ReviewCard from "./ReviewCard.vue";
import Swiper from "./Swiper.vue";
import { Autoplay, Navigation } from "swiper/modules";
export default {
  components: {
    SwiperSlide,
    ReviewCard,
    Swiper,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: ".reviewswiper-button-next",
        prevEl: ".reviewswiper-button-prev",
      },
    };
  },
};
</script>
<style lang=""></style>
