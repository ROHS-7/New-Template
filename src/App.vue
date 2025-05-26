<script setup>
import GradientBtn from './components/atoms/GradientBtn.vue';
import PrimaryDarkBtn from './components/atoms/PrimaryDarkBtn.vue';
import PrimaryLightBtn from './components/atoms/PrimaryLightBtn.vue';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <PrimaryLightBtn text="Login" />
  <PrimaryDarkBtn text="Register" />
  <GradientBtn />
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
