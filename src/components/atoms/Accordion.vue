<template>
  <div class="rounded-xl overflow-hidden shadow-sm mb-4 text-white">
    <button
      class="w-full flex justify-between items-center px-4 py-3 bg-black rounded-[6px] focus:outline-none"
      @click="toggle"
    >
      <slot name="header">
        <span class="text-left font-medium">{{ title }}</span>
      </slot>
      <svg
        :class="[
          'w-4 h-4 transition-transform duration-300',
          { 'rotate-180': isOpen },
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="max-h-screen opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="isOpen" class="px-4 py-3 bg-black">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      default: "",
    },
    initiallyOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.initiallyOpen,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
