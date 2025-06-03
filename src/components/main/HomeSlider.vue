<template>
  <div>
    <Swiper
      :slides-per-view="props.slidesPerView"
      :navigation="false"
      :modules="modules"
    >
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1732970581617-71db0754-60c6-4973-974c-cb7137785192.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1747910928205-f23834c6-f1a4-4fd2-a517-5c48a935565b.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1748194843723-d24a48a0-2639-4603-9a5a-f0c6acad8d42.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1747645096293-85168575-fd3d-41ea-a98e-b89b223e7eaf.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1746934874166-c8e65c0f-e3cc-4cc8-9be2-44e1fecdec02.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1748174850636-e86eb5f5-4d84-4723-b8b4-fc7bc65e6e13.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1747387445476-88196761-66a8-4352-a9b4-3753cc7b5aea.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733055897727-e2a0b1be-1d7f-432f-b750-ffd16169c991.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733811102588-a250a7d4-5dbc-4509-9a92-3eabcbfd8e6e.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733811488052-fc00a120-f714-4cfb-81d6-c69c605ead82.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733051200825-6e2e2dad-ed30-4360-ac86-773adcf1aec2.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733055919660-df34267d-b64d-44a1-88bf-9381b8ea9890.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733051257496-55996fba-f561-4cb8-86bd-9f4ac4df246b.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733811167707-7a45181c-a170-46a0-9a45-736c09c6305b.webp"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full object-cover rounded-lg"
          src="https://cdn.zabbet.com/0VNF/imageslides/1733893488244-e47e7f5e-fa2b-45ce-b9a3-a6a9e2cd7df6.webp"
          alt=""
        />
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script setup>
import Swiper from "./Swiper.vue";
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/vue";

const modules = [Pagination, Autoplay];
const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 1.9,
  },
});
</script>
<style lang=""></style>
