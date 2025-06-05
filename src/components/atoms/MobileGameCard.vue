<template>
  <div class="w-full relative overflow-hidden rounded-lg">
    <img class="w-full h-full object-contain" :src="props.image" alt="" />
    <div class="absolute flex flex-col gap-1 top-1 right-1">
      <NewBadge v-if="props.isNew" />
      <HotBadge v-if="props.isHot" />
    </div>
  </div>
</template>
<script setup>
import NewBadge from "./NewBadge.vue";
import HotBadge from "./HotBadge.vue";

const props = defineProps({
  image: {
    type: String,
  },
  isHot: {
    type: Boolean,
    default: false,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang=""></style>
