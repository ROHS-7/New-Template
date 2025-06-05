<template>
  <div class="md:block hidden">
    <FilterLayout
      logo-image="https://alpha7s.online/images/game/slot/logo_slot.webp"
      bg-image="https://alpha7s.online/images/game/slot/bg_slot.webp"
      :options="['arcade (55)', 'buy free spin (921)', 'hot (59)']"
      :game-types="gameTypes"
    >
      <h1 class="text-white text-[32px] mb-3 font-bold">Lottery (432 Game)</h1>
      <div class="grid grid-cols-6 gap-y-3 gap-x-0">
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1748350496745-de34373a-f5ec-45a9-aedf-8d0831bb0c40.jpeg"
          name="QUEEN OF INCA"
          :bg-transparent="true"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1748338153275-1d1712ae-f01f-41e3-99bf-0502668c4211.jpeg"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1745918328112-bd7af36c-205a-4177-917e-b48fd8bbb5ec.jpeg"
          name="QUEEN OF INCA"
          :bg-transparent="true"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/AskMeSlot/Slot/MAHJONGLEGEND.jpg"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1737688513655-5d6f16eb-ca46-409f-8136-011df6ed5502.jpeg"
          name="QUEEN OF INCA"
          :bg-transparent="true"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1737688704831-103eb675-51ea-47ae-9d1a-e971c58d1b3d.png"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1739333878803-f5839fa7-9f4a-43cd-87c3-758f2fd54352.jpeg"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1740124164055-d391d5ff-ea28-4ee9-a98d-a539d185528d.jpeg"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1740548980936-69a8f2cf-d52e-4280-a17f-afa6ac8fd963.jpeg"
          name="QUEEN OF INCA"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          :bg-transparent="true"
          is-hot="true"
          is-new="true"
        />
        <GameCardWithNumber
          :is-width-full="true"
          image="https://cdn.zabbet.com/games/1740549196029-5ceffe11-18bf-40ed-a4d2-600498272bae.jpeg"
          name="QUEEN OF INCA"
          :bg-transparent="true"
          game-type-image="https://cdn.zabbet.com/providers/set/1_1_badge/pgt.png"
          is-hot="true"
          is-new="true"
        />
      </div>
    </FilterLayout>
  </div>
  <div>
    <div class="flex items-end mt-[10px] gap-1 text-white">
      <p class="text-lg font-bold">Lottery</p>
      <p class="text-[10px] font-semibold pb-1">(11 Game NPH)</p>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <MobileGameCard
        class="col-span-2"
        image="https://cdn.zabbet.com/providers/set/1_1_h/lotmw.png"
        :is-new="true"
      />
      <MobileGameCard
        class="col-span-2"
        image="https://cdn.zabbet.com/providers/set/1_1_h/dac.png"
        :is-new="true"
      />
      <MobileGameCard
        image="https://cdn.zabbet.com/providers/set/1_1_h/yeebet.png"
        :is-new="true"
      />
      <MobileGameCard
        image="https://cdn.zabbet.com/providers/set/1_1_h/yeebet.png"
        :is-new="true"
      />
      <MobileGameCard
        image="https://cdn.zabbet.com/providers/set/1_1_h/yeebet.png"
        :is-new="true"
      />
      <MobileGameCard
        image="https://cdn.zabbet.com/providers/set/1_1_h/yeebet.png"
        :is-new="true"
      />
    </div>
  </div>
</template>
<script setup>
import GameCardWithNumber from "../components/atoms/GameCardWithNumber.vue";
import MobileGameCard from "../components/atoms/MobileGameCard.vue";
import FilterLayout from "../layouts/FilterLayout.vue";
const gameTypes = [
  {
    image: "https://cdn.zabbet.com/providers/set/1_1_badge/ygr.png",
    type: "ygr",
    bgImage: "https://cdn.zabbet.com/providers/set/1_1_bg/ygr.png",
    gameCharacterImage:
      "https://cdn.zabbet.com/providers/set/1_1_avatar/ygr.png",
  },
  {
    image: "https://cdn.zabbet.com/providers/set/1_1_badge/hotdog.png",
    type: "hotdog",
    bgImage: "https://cdn.zabbet.com/providers/set/1_1_bg/hotdog.png",
    gameCharacterImage:
      "https://cdn.zabbet.com/providers/set/1_1_avatar/hotdog.png",
  },
  {
    image: "https://cdn.zabbet.com/providers/set/1_1_title/jl.png",
    type: "jl",
    bgImage: "https://cdn.zabbet.com/providers/set/1_1_bg/jl.png",
    gameCharacterImage:
      "https://cdn.zabbet.com/providers/set/1_1_avatar/jl.png",
  },
];
</script>
<style lang=""></style>
