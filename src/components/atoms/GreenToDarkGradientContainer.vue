<template>
  <div class="relative w-full h-[38px] overflow-hidden rounded-[6px]">
    <div
      class="top-0 left-0 w-[100%] h-[38px] opacity-[0.48]"
      style="
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.6) -6.21%,
          rgb(18, 255, 32) 6.41%,
          rgba(0, 0, 0, 0.6) 80.01%
        );
      "
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[100%] h-[2px] opacity-[0.44]"
      style="
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.6) -6.21%,
          rgb(18, 255, 32) 4.41%,
          rgba(0, 0, 0, 0.6) 83.01%
        );
      "
    ></div>
    <div
      class="absolute flex top-0 left-0 right-0 bottom-0 z-[10] items-center gap-3 pl-5"
    >
      <img
        v-if="image"
        :src="image"
        class="w-[24px] h-[24px] object-cover"
        alt=""
      />
      <p
        v-if="text"
        class="md:text-[18px] text-[14px] font-semibold text-white"
      >
        {{ text }}
      </p>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang=""></style>
