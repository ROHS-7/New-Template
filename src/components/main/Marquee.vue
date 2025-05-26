<template>
    <div
      class="overflow-hidden flex items-center whitespace-nowrap rounded-md p-1 pl-0 cursor-pointer border-[1px] " 
      style="border-color:rgb(96, 130, 99) ;"
      @mousedown="pause = true"
      @mouseup="pause = false"
      @mouseleave="pause = false"
      @mouseenter="pause = true"
    >
    <div class="h-full px-4 bg-black text-white relative z-[10]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><!-- Icon from CoreUI Free by creativeLabs Łukasz Holeczek - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="m429 15.933l-253.574 120H15.992v211.728l52.192 148.267h114.654l-46.56-128h35.847L431.182 496h64.735L496 15.933Zm-269.009 320h-56.025l.061 36.949l33.119 91.051h-46.3l-42.854-121.74V167.928h112Zm32.125-172.495l175.876-83.233v348.858l-175.875-86.949ZM463.923 464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"/></svg>
    </div>
      <div
        :class="[
          'inline-block animate-marquee text-white text-sm',
          pause ? 'paused' : ''
        ]"
      >
        <span class="mx-8" v-for="(item, i) in items" :key="i">{{ item }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props : {
        items : {
            type : Array,
            default : () => [
          'ยินดีต้อนรับสู่ ALPHA7 เว็บเดิมพันอันดับ 1 ในเอเชีย 🌏 อยากเดิมพัน ต้อง ALPHA7 ฝาก-ถอน อัตโนมัติภายใน 30 วินาที การเงินมั่นคง ปลอดภัย 100% เล่นง่ายให้บริการคาสิโนลิขสิทธิ์แท้ครบวงจร พร้อมให้บริการและดูแลคุณตลอด 24 ชั่วโมง 💝',
          'ยินดีต้อนรับสู่ ALPHA7 เว็บเดิมพันอันดับ 1 ในเอเชีย 🌏 อยากเดิมพัน ต้อง ALPHA7 ฝาก-ถอน อัตโนมัติภายใน 30 วินาที การเงินมั่นคง ปลอดภัย 100% เล่นง่ายให้บริการคาสิโนลิขสิทธิ์แท้ครบวงจร พร้อมให้บริการและดูแลคุณตลอด 24 ชั่วโมง 💝'
        ]
        }
    },
    data() {
      return {
        pause: false,
      };
    },
  };
  </script>
  
  <style scoped>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
  
    100% {
      transform: translateX(-100%);
    }
  }
  
  .animate-marquee {
    animation: marquee 35s linear infinite;
  }
  
  .paused {
    animation-play-state: paused;
  }
  </style>
  