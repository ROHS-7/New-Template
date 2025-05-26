<template>
  <div class="w-full relative">
    <div class="relative w-[126px] mx-5 mb-3">
      <div class="relative z-10">
        <div style="" class="relative z-0">
          <div
            class="absolute w-full z-30 pointer-events-none"
            style="padding-bottom: 142.857%"
          >
            <div class="grid gap-2 absolute top-0 right-2 pointer-events-none">
              <div v-if="isHot" class="relative translate-y-1 translate-x-1">
                <HotBadge />
              </div>
              <div v-if="isNew" class="relative translate-y-1 translate-x-1">
                <NewBadge />
              </div>
            </div>
          </div>
          <!-- <div class="relative z-20"></div> -->
          <div
            class="absolute w-full z-10 pointer-events-none"
            style="zoom: 0.969231; padding-bottom: 142.857%"
          >
            <div
              class="absolute left-0 right-0 bottom-0 h-[15%] rounded-b-md pointer-events-none bg-gradient-to-r from-black/40 via-black/40 to-black/0"
            >
              <div
                class="absolute left-[10%] right-[10%] bottom-[10%] top-[10%]"
              >
                <div>
                  <div
                    class="absolute top-0 left-0 bottom-0 right-0 duration-300 opacity-100"
                  >
                    <img
                      loading="lazy"
                      class="w-full h-full object-left object-contain"
                      :src="gameTypeImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="block relative w-full rounded-lg overflow-hidden"
            target="_blank"
            style="padding-bottom: 142.857%"
          >
            <div class="absolute left-0 right-0 bottom-0 top-0">
              <div>
                <div
                  class="absolute top-0 left-0 bottom-0 right-0 duration-300 opacity-100"
                >
                  <img
                    loading="lazy"
                    class="w-full h-full object-cover cursor-pointer blur scale-125"
                    :src="image"
                    alt="game_5908"
                  />
                </div>
              </div>
              <div
                class="absolute top-0 left-0 bottom-0 right-0 duration-300 opacity-100"
              >
                <img
                  loading="lazy"
                  class="w-full h-full object-contain cursor-pointer"
                  :src="image"
                  alt="game_5908"
                />
              </div>
            </div>
          </a>
          <div
            class="text-center truncate text-white mt-1.5"
            style="font-size: 12px"
          >
            {{ name }}
          </div>
        </div>
      </div>
      <div class="absolute -left-[32px] w-[60px] h-[72px] bottom-5">
        <component :is="number" class="text-primary" />
      </div>
    </div>
  </div>
</template>
<script>
import HotBadge from "./HotBadge.vue";
import NewBadge from "./NewBadge.vue";
export default {
  components: {
    HotBadge,
    NewBadge,
  },
  props: {
    image: String,
    name: String,
    number: Object,
    isHot: {
      type: Boolean,
      default: true,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    gameTypeImage: String,
  },
};
</script>
