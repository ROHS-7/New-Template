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
      <RouterView />
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
</style>
