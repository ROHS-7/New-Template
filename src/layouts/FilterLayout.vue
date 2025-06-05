<template>
  <div>
    <div class="relative">
      <img
        :src="bgImage"
        class="min-h-[600px] fixed top-0 -z-[1] translate-y-0 w-full object-cover duration-100 transition-all"
        :class="{ 'translate-y-[-500%]': currentGameType != null }"
      />
      <img
        v-for="gameType in gameTypes"
        :key="gameType.type"
        class="min-h-[600px] fixed top-0 -z-[1] w-full translate-y-[-500%] object-cover duration-1000 transition-all"
        :class="{ '!translate-y-0': currentGameType === gameType.type }"
        :src="gameType.bgImage"
        alt=""
      />
      <img
        v-for="gameType in gameTypes"
        :key="gameType.type"
        :src="gameType.gameCharacterImage"
        class="w-[383px] h-[383px] fixed top-10 right-0 object-contain z-[100] transition-all duration-1000"
        :class="{
          '!translate-y-[0] scale-90 translate-x-0':
            currentGameType === gameType.type,
          'translate-y-[-500%] scale-[0.1] translate-x-[2000px]':
            currentGameType !== gameType.type,
        }"
        alt=""
      />
      <div
        class="fixed w-full h-full z-[50] top-0 left-0 opacity-60"
        style="
          background: linear-gradient(
            106deg,
            rgb(0, 0, 0) -46.77%,
            rgb(38, 106, 49) 80.31%
          );
        "
      ></div>
      <div
        class="fixed w-full z-[50] h-full top-0 left-0"
        style="
          background: linear-gradient(
            182deg,
            rgba(115, 115, 115, 0) 29.43%,
            rgb(0, 0, 0) 52.3%,
            rgb(0, 0, 0) 85.96%
          );
        "
      ></div>
      <div class="relative z-[100]">
        <div
          class="w-full h-[170px] flex items-center translate-y-0 scale-100 relative justify-center"
        >
          <img
            class="w-[366px] absolute h-[120px] object-contain transition-all duration-700"
            :src="logoImage"
            :class="{
              '!translate-y-[0] scale-80': currentGameType === null,
              'translate-y-[-500%] scale-[0.1]': currentGameType !== null,
            }"
            alt=""
          />
          <img
            class="w-[366px] h-[120px] absolute transition-all duration-700 object-contain"
            :src="gameType.image"
            v-for="gameType in gameTypes"
            :key="gameType.type"
            :class="{
              '!translate-y-[0] scale-80': currentGameType === gameType.type,
              'translate-y-[-500%] scale-[0.1]':
                currentGameType !== gameType.type,
            }"
            alt=""
          />
        </div>
        <div class="flex gap-5 mt-[30px] px-5">
          <div
            class="w-[345px] pb-7 bg-black rounded-[20px] h-fit sticky text-center overflow-y-auto top-[120px]"
          >
            <div
              class="p-5 w-full h-[60px] absolute rounded-[20px]"
              style="
                background: radial-gradient(
                  35% 90% at 50% 10%,
                  rgb(18, 255, 32) 0%,
                  rgb(0, 0, 0) 90%
                );
              "
            ></div>
            <div class="py-5 w-full rounded-[20px] backdrop-blur-md">
              <p class="text-xl font-bold top-5 text-white left-0 w-full">
                Filter
              </p>
            </div>
            <div v-if="options.length">
              <GreenToDarkGradientContainer class="rounded-[2px] h-[30px]">
                <div
                  class="w-full text-white flex items-center justify-between pr-3"
                >
                  <p class="text-xs font-semibold">Find game interests</p>
                  <p class="text-[12px] font-thin">Multiple Options</p>
                </div>
              </GreenToDarkGradientContainer>
              <div class="grid grid-cols-2 gap-x-2 gap-y-5 mb-3 px-3 mt-3">
                <div
                  v-for="option in options"
                  :key="option"
                  class="flex items-center gap-3"
                >
                  <label
                    class="inline-flex items-center relative cursor-pointer"
                  >
                    <div
                      class="w-5 h-5 border border-primary bg-transparent rounded-sm relative"
                    >
                      <input
                        type="checkbox"
                        class="peer absolute opacity-0 top-0 left-0 w-full h-full"
                      />
                      <img
                        src="https://alpha7s.online/images/game/check.svg"
                        alt="checkmark"
                        class="hidden peer-checked:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] object-contain"
                      />
                    </div>
                  </label>
                  <p class="text-white text-sm">{{ option }}</p>
                </div>
              </div>
            </div>
            <div v-if="gameTypes.length" class="mt-6">
              <GreenToDarkGradientContainer class="rounded-[2px] h-[30px]">
                <div
                  class="w-full text-white flex items-center justify-between pr-3"
                >
                  <p class="text-xs font-semibold">Find the NPH</p>
                  <p class="text-[12px] font-thin">Choose only one</p>
                </div>
              </GreenToDarkGradientContainer>
              <div class="grid grid-cols-3 gap-1 mt-3">
                <div
                  v-for="gameType in gameTypes"
                  :key="gameType.type"
                  @click="
                    () => {
                      if (currentGameType == gameType.type) {
                        currentGameType = null;
                        return;
                      } else {
                        currentGameType = gameType.type;
                      }
                    }
                  "
                  class="w-full h-14 rounded-xl cursor-pointer flex justify-center items-center border relative"
                  :style="{
                    background:
                      currentGameType == gameType.type
                        ? 'linear-gradient(rgb(51, 153, 51) 0%, rgb(0, 0, 0) 100%)'
                        : 'linear-gradient(155deg, rgb(0, 0, 0), rgb(0, 0, 0) 30%)',
                    border:
                      currentGameType == gameType.type
                        ? '1px solid rgb(129, 254, 140)'
                        : 'none',
                    boxShadow:
                      currentGameType == gameType.type
                        ? 'rgba(220, 220, 220, 0.55) 0px 0px 6px 0px'
                        : 'none',
                  }"
                >
                  <div
                    class="w-full h-full absolute top-0.5 left-[2.5%] rounded-[10px]"
                    style="
                      background: linear-gradient(
                        150deg,
                        rgb(51, 153, 51),
                        rgba(18, 152, 255, 0) 25%
                      );
                    "
                  ></div>
                  <div
                    class="absolute flex items-center justify-center top-0 left-0 w-full h-full"
                  >
                    <img
                      :src="gameType.image"
                      class="w-[50%] object-contain scale-90"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-between text-white px-4 text-sm font-light my-8"
            >
              <p>Find the Game</p>
              <p>11 NPH</p>
            </div>
            <div class="mx-4">
              <button
                class="w-full border-[1px] border-primary rounded-md font-semibold py-3 text-white"
              >
                Clear
              </button>
            </div>
          </div>
          <div class="flex-1">
            <div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import GreenToDarkGradientContainer from "../components/atoms/GreenToDarkGradientContainer.vue";
const props = defineProps({
  bgImage: {
    type: String,
    default: "",
  },
  logoImage: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  gameTypes: {
    type: Array,
    default: () => [],
  },
});

const currentGameType = ref(null);
</script>
<style lang=""></style>
