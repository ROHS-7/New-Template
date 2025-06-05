<template>
  <div class="relative">
    <img
      src="https://alpha7s.online/images/live/bg_live.webp"
      class="min-h-[600px] fixed top-0 -z-[1] w-full object-cover duration-100 transition-all"
    />
    <div
      class="fixed w-full h-full z-[50] top-0 left-0"
      style="
        background: linear-gradient(
          182deg,
          rgba(115, 115, 115, 0) 29.43%,
          rgb(0, 0, 0) 52.3%,
          rgb(0, 0, 0) 85.96%
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
        class="w-full h-[300px] flex items-center translate-y-0 scale-100 relative justify-center"
      >
        <img
          class="w-[800px] absolute h-[370px] object-contain transition-all duration-700"
          src="https://alpha7s.online/images/live/logo_live.webp"
          alt=""
        />
      </div>
    </div>
    <div class="relative z-[100] px-3">
      <h1 class="text-[40px] font-semibold text-white">Live</h1>
      <div
        class="w-full h-[90px] rounded-[18px] px-8 gap-4 flex items-center"
        style="
          background: linear-gradient(rgb(0, 0, 0) 0.01%, rgb(0, 0, 0) 100%);
        "
      >
        <div
          class="w-[208px] h-[48px] p-[2px] rounded-[24px]"
          style="
            background: linear-gradient(
              165.34deg,
              rgb(51, 255, 0) -17.16%,
              rgb(51, 153, 51) 91.36%
            );
            box-shadow: rgba(122, 253, 143, 0.5) 0px 0px 6px 2px;
          "
        >
          <div
            class="w-full h-full rounded-[24px] bg-[#080F1C] flex items-center justify-center text-center text-white cursor-pointer"
          >
            Football
          </div>
        </div>
        <div
          class="w-[208px] h-[48px] p-[2px] rounded-[24px]"
          style="
            background: rgb(32, 46, 65);
            box-shadow: rgba(122, 253, 143, 0.5) 0px 0px 6px 2px;
          "
        >
          <div
            class="w-full h-full rounded-[24px] bg-[#080F1C] flex items-center justify-center text-center text-[#7F7F7F] cursor-pointer"
          >
            VolleyBall
          </div>
        </div>
        <div
          class="w-[208px] h-[48px] p-[2px] rounded-[24px]"
          style="
            background: rgb(32, 46, 65);
            box-shadow: rgba(122, 253, 143, 0.5) 0px 0px 6px 2px;
          "
        >
          <div
            class="w-full h-full rounded-[24px] bg-[#080F1C] flex items-center justify-center text-center text-[#7F7F7F] cursor-pointer"
          >
            Boxing
          </div>
        </div>
      </div>
      <div class="w-full h-[68px] px-6 rounded-[12px] flex gap-4 bg-black mt-4">
        <div
          class="flex items-center rounded-l-lg rounded-r-lg"
          style="border: 1px solid rgb(0, 0, 0)"
        >
          <div
            @click="filter = 'sortbytime'"
            class="w-[167px] cursor-pointer h-[44px] py-3 rounded-l-lg flex items-center justify-center text-white"
            :style="{
              background:
                filter == 'sortbytime'
                  ? 'linear-gradient(190deg,rgb(51, 255, 0),rgb(51, 153, 51))'
                  : 'linear-gradient(to top, rgb(0, 0, 0), rgb(0, 0, 0))',
            }"
          >
            Sort By Time
          </div>
          <div
            @click="filter = 'sortbyleague'"
            class="w-[167px] cursor-pointer h-[44px] py-3 rounded-r-lg flex items-center justify-center text-white"
            :style="{
              background:
                filter == 'sortbyleague'
                  ? 'linear-gradient(190deg,rgb(51, 255, 0),rgb(51, 153, 51))'
                  : 'linear-gradient(to top, rgb(0, 0, 0), rgb(0, 0, 0))',
            }"
          >
            Sort By League
          </div>
        </div>
      </div>
      <div class="flex mt-3 flex-col">
        <div class="border-t-[1px] py-5 border-t-black">
          <div class="flex mb-3 items-center justify-between">
            <p class="text-[18px] font-bold text-primary">
              เอเชีย - ฟุตบอลโลกรอบคัดเลือก โซนเอเชีย
            </p>
            <p
              class="text-[16px] font-bold"
              style="
                background: linear-gradient(
                    165.34deg,
                    rgb(51, 255, 0) -17.16%,
                    rgb(51, 153, 51) 91.36%
                  )
                  text;
                color: transparent;
              "
            >
              05-06-2025
            </p>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-3 flex-col">
        <div class="py-5">
          <div class="flex mb-3 items-center justify-between">
            <p class="text-[18px] font-bold text-primary">
              เอเชีย - ฟุตบอลโลกรอบคัดเลือก โซนเอเชีย
            </p>
            <p
              class="text-[16px] font-bold"
              style="
                background: linear-gradient(
                    165.34deg,
                    rgb(51, 255, 0) -17.16%,
                    rgb(51, 153, 51) 91.36%
                  )
                  text;
                color: transparent;
              "
            >
              05-06-2025
            </p>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-3 flex-col">
        <div class="py-5">
          <div class="flex mb-3 items-center justify-between">
            <p class="text-[18px] font-bold text-primary">
              เอเชีย - ฟุตบอลโลกรอบคัดเลือก โซนเอเชีย
            </p>
            <p
              class="text-[16px] font-bold"
              style="
                background: linear-gradient(
                    165.34deg,
                    rgb(51, 255, 0) -17.16%,
                    rgb(51, 153, 51) 91.36%
                  )
                  text;
                color: transparent;
              "
            >
              05-06-2025
            </p>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="flex items-center bg-black justify-between px-[24px] py-[16px]"
          >
            <div class="w-[768px] justify-center flex items-center gap-[20px]">
              <div class="flex items-center gap-1">
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/156.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-[16px] font-bold text-primary">18:15</div>
              <div class="flex items-center gap-1">
                <div>
                  <img
                    class="w-[48px] h-[48px]"
                    src="https://googlecdn.live/teams/1348.png"
                    alt=""
                  />
                </div>
                <div class="text-[16px] text-white font-normal">ออสเตรเลีย</div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="text-sm font-semibold text-white">Watch Live</p>
              <svg
                class="scale-75"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4064 12L9.42655 18L8.03125 16.6L12.6158 12L8.03125 7.4L9.42655 6L15.4064 12Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const filter = ref("sortbytime");
</script>
<style lang=""></style>
