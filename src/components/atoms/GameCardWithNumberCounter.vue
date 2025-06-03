<template>
  <div class="cursor-pointer w-[128px] h-[232px]">
    <div class="relative">
      <a
        class="block w-full relative rounded-lg overflow-hidden"
        target="_blank"
        style="padding-bottom: 142.857%"
        ><div>
          <div
            class="absolute top-0 left-0 bottom-0 right-0 duration-300 opacity-100"
          >
            <img
              loading="lazy"
              class="w-full h-full object-cover cursor-pointer"
              :src="image"
              alt="provider_26"
            />
          </div></div
      ></a>
    </div>
    <div
      class="h-[40px] w-full rounded-[11px] mt-2"
      style="
        background: radial-gradient(
          90.16% 77.79% at 92.58% 91.67%,
          rgba(48, 242, 0, 0.25) 0%,
          rgba(38, 106, 49, 0.25) 100%
        );
        backdrop-filter: blur(21px);
        border: 1px solid rgba(18, 255, 32, 0.5);
      "
    >
      <div class="flex justify-between text-[10px] p-[7px] h-full">
        <div
          class="p-[4px] rounded-md w-full flex gap-2 justify-between items-center"
          style="
            background-color: rgba(88, 180, 106, 0.3);
            color: rgb(25, 254, 22);
          "
        >
          <div class="py-[1px]">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99935 7.41081C6.8834 7.41081 7.73125 7.05962 8.35637 6.4345C8.98149 5.80937 9.33268 4.96153 9.33268 4.07747C9.33268 3.19342 8.98149 2.34557 8.35637 1.72045C7.73125 1.09533 6.8834 0.744141 5.99935 0.744141C5.11529 0.744141 4.26745 1.09533 3.64233 1.72045C3.01721 2.34557 2.66602 3.19342 2.66602 4.07747C2.66602 4.96153 3.01721 5.80937 3.64233 6.4345C4.26745 7.05962 5.11529 7.41081 5.99935 7.41081Z"
                fill="#33ff00"
                fill-opacity="0.86"
              ></path>
              <path
                d="M0 14.8047C0 13.1974 0.632141 11.6558 1.75736 10.5193C2.88258 9.38267 4.4087 8.74414 6 8.74414C7.5913 8.74414 9.11742 9.38267 10.2426 10.5193C11.3679 11.6558 12 13.1974 12 14.8047C12 14.9655 11.9368 15.1196 11.8243 15.2333C11.7117 15.347 11.5591 15.4108 11.4 15.4108H0.6C0.44087 15.4108 0.288258 15.347 0.175736 15.2333C0.0632141 15.1196 0 14.9655 0 14.8047Z"
                fill="#33ff00"
                fill-opacity="0.86"
              ></path>
            </svg>
          </div>
          <div class="font-semibold text-[12px]">
            <CountUp
              style="color: rgb(25, 254, 22)"
              :key="number"
              :end-val="number"
              >{{ new Intl.NumberFormat().format(number) }}</CountUp
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountUp from "vue-countup-v3";

export default {
  components: {
    CountUp,
  },
  props: {
    image: String,
    number: Number,
  },
};
</script>
<style lang=""></style>
