<template>
  <div
    class="fixed top-0 md:px-0 px-3 bg-black left-0 w-full z-[10000] md:h-[108px] h-[60px]"
  >
    <div class="max-w-[1400px] mx-auto">
      <div class="flex items-center py-2 justify-between">
        <div class="md:hidden block text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
            />
          </svg>
        </div>
        <div class="flex items-center gap-2.5">
          <img
            class="md:w-[140px] w-[100px]"
            src="https://cdn.zabbet.com/0VNF/lobby_settings/8e561d6d-916e-4647-a060-769b671aaa4a.png"
            alt=""
          />
          <div
            class="p- md:flex hidden bg-secondary-black items-center justify-center rounded-full cursor-pointer"
          >
            <div
              class="w-[20px] h-[20px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center"
            >
              <img
                class="w-full h-full max-w-[40px] rounded-full max-h-[40px] object-cover"
                src="https://alpha7s.online/images/flags/en.svg"
                alt=""
              />
            </div>
          </div>
          <div
            class="p-2 md:flex hidden bg-secondary-black items-center justify-center text-white rounded-full"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <GradientBtn class="md:block hidden" />
        </div>
        <div class="md:flex hidden items-center gap-3">
          <PrimaryLightBtn text="Login" />
          <PrimaryDarkBtn text="Register" />
        </div>
        <div
          class="p-2 bg-secondary-black md:hidden flex items-center justify-center rounded-full cursor-pointer"
        >
          <div
            class="w-[20px] h-[20px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center"
          >
            <img
              class="w-full h-full max-w-[40px] rounded-full max-h-[40px] object-cover"
              src="https://alpha7s.online/images/flags/en.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="md:flex hidden items-center gap-4 justify-start">
        <RouterLink to="/" class="relative">
          <div
            class="absolute z-[1] mx-auto h-2 left-[10px] -bottom-1 opacity-0"
            :class="{ 'opacity-100': currentRoute === '' }"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Home.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Home</p>
          </div>
        </RouterLink>
        <RouterLink to="/casino" class="relative">
          <div
            :class="{ 'opacity-100': currentRoute === 'casino' }"
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Casino.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Casino</p>
          </div>
        </RouterLink>
        <RouterLink to="/fishing" class="relative">
          <div
            :class="{ 'opacity-100': currentRoute === 'fishing' }"
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Fishing.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Fishing</p>
          </div>
        </RouterLink>
        <RouterLink to="/sport" class="relative">
          <div
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            :class="{ 'opacity-100': currentRoute === 'sport' }"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Football.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Sport</p>
          </div>
        </RouterLink>
        <RouterLink to="/cards" class="relative">
          <div
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            :class="{ 'opacity-100': currentRoute === 'cards' }"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Cards.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Cards</p>
          </div>
        </RouterLink>
        <RouterLink class="relative" to="/lottery">
          <div
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            :class="{ 'opacity-100': currentRoute === 'lottery' }"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Lottery.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Lottery</p>
          </div>
        </RouterLink>
        <RouterLink class="relative" to="/live">
          <div
            class="absolute opacity-0 z-[1] mx-auto h-2 left-[10px] -bottom-1"
            :class="{ 'opacity-100': currentRoute === 'live' }"
            style="
              width: calc(100% - 20px);
              box-shadow: rgb(76, 226, 84) 0px -4px 9px 0px;
              background-color: rgb(125, 255, 133);
            "
          ></div>
          <div
            class="h-[49px] relative p-3 z-[10] flex items-center justify-center gap-2"
            style="
              backdrop-filter: blur(4px);
              background: radial-gradient(
                164.23% 100% at 50% 0%,
                rgba(35, 38, 44, 0) 0%,
                rgba(114, 125, 146, 0.11) 100%
              );
            "
          >
            <img src="/Live.png" alt="" class="w-[42px]" />
            <p class="font-bold text-[16px] text-white">Live</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import GradientBtn from "../atoms/GradientBtn.vue";
import PrimaryLightBtn from "../atoms/PrimaryLightBtn.vue";
import PrimaryDarkBtn from "../atoms/PrimaryDarkBtn.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    GradientBtn,
    PrimaryLightBtn,
    PrimaryDarkBtn,
    RouterLink,
  },
  computed: {
    currentRoute() {
      return this.$route.path.split("/")[1];
    },
  },
};
</script>
<style lang=""></style>
