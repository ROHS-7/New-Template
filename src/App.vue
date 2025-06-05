<script setup>
import { onMounted, ref } from "vue";
import Container from "./components/atoms/Container.vue";

import { RouterView } from "vue-router";
import MobileLayout from "./layouts/MobileLayout.vue";
import DesktopLayout from "./layouts/DesktopLayout.vue";
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
</script>

<template>
  <Container>
    <component :is="isMobile ? MobileLayout : DesktopLayout">
      <transition name="slide" mode="out">
        <router-view :is="Component" :key="`${$route.fullPath}-${isMobile}`" />
      </transition>
    </component>
  </Container>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-enter-from {
  transform: translateY(100px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
