<template>
  <Navbar />
  <div class="mt-[70px]">
    <HomeSlider slides-per-view="1" />
  </div>
  <div class="flex w-full items-center gap-3 my-3">
    <PrimaryDarkBtn class="w-full" text="Register" />
    <PrimaryLightBtn class="w-full" text="Login" />
  </div>
  <div>
    <Marquee />
  </div>
  <div class="my-3 flex gap-3 overflow-scroll mb-2 pb-2">
    <div
      class="flex items-center px-5 transition-all w-fit gap-2 rounded-md"
      v-for="route in routes"
      :key="route.path"
      :style="{
        background:
          currentFilter === route.path.split('/')[1]
            ? 'linear-gradient(165.34deg, rgb(51, 255, 0) -17.16%, rgb(51, 153, 51) 91.36%)'
            : 'none',
        boxShadow:
          currentFilter === route.path.split('/')[1]
            ? 'rgb(55, 156, 53) 0px 0px 7.5px 0px'
            : 'none',
      }"
    >
      <div
        v-html="route.icon"
        class="text-primary"
        :class="{ 'text-white': currentFilter === route.path.split('/')[1] }"
      />
      <p
        class="text-primary text-[14px] pt-1 font-semibold"
        :class="{ 'text-white': currentFilter === route.path.split('/')[1] }"
      >
        {{ route.text }}
      </p>
    </div>
  </div>
  <div class="flex">
    <div class="sticky top-[60px] h-fit z-[98]">
      <div class="flex flex-col gap-2.5 justify-start items-center pl-1">
        <RouterLink
          :to="link.path"
          class="w-[60px] h-[60px] transition-all flex items-center justify-center flex-col rounded-md"
          v-for="link in navLinks"
          :key="link.text"
          :style="{
            background:
              currentRoute == link.path ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            boxShadow:
              currentRoute == link.path
                ? 'rgb(255, 255, 255) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.247) 0px 4px 4px 0px, rgba(0, 0, 0, 0.247) 0px -2px 1px 0px inset, rgba(0, 0, 0, 0.247) 0px 4px 4px 0px'
                : 'rgb(0, 0, 0) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.247) 0px 4px 4px 0px, rgba(0, 0, 0, 0.247) 0px -2px 1px 0px inset, rgba(0, 0, 0, 0.247) 0px 4px 4px 0px',
          }"
        >
          <img
            class="w-[34px] transition-all h-[30px] object-contain"
            :class="{ 'scale-[1.5]': currentRoute == link.path }"
            :src="link.image"
            alt=""
          />
          <p
            class="text-[10px] text-white font-semibold"
            :class="{ '!text-black': currentRoute == link.path }"
          >
            {{ link.text }}
          </p>
        </RouterLink>
      </div>
    </div>
    <div class="overflow-hidden">
      <slot />
    </div>
  </div>
  <div>
    <p class="md:font-semibold text-white text-sm mt-[50px] text-center">
      Payment Method
    </p>
    <div class="mt-3 flex flex-wrap gap-4 items-center">
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/BBL.png"
          alt="BBL"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/KBANK.png"
          alt="KBANK"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/KTB.png"
          alt="KTB"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/TTB.png"
          alt="TTB"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/SCB.png"
          alt="SCB"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/BAY.png"
          alt="BAY"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/KKP.png"
          alt="KKP"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/CIMBT.png"
          alt="CIMBT"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/UOBT.png"
          alt="TISCO"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/TCD.png"
          alt="UOBT"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/LHFG.png"
          alt="TCD"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/BAAC.png"
          alt="LHFG"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/EXIM.png"
          alt="BAAC"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full"
          src="https://alpha7s.online/images/banks/TH/GSB.png"
          alt="EXIM"
        />
      </div>
      <div class="relative inline-block max-h-[32px] rounded-full">
        <img
          loading="lazy"
          class="max-h-[32px] rounded-full brightness-75"
          src="https://alpha7s.online/images/banks/TH/GHB.png"
          alt="GSB"
        />
      </div>
    </div>
  </div>
  <div
    class="flex items-center border-t-[1px] border-t-white/30 pt-[10px] justify-between mt-[40px]"
  >
    <div class="flex flex-col">
      <p class="text-white text-sm">Contact</p>
      <div class="flex items-center gap-3 mt-3">
        <img
          class="w-[32px]"
          src="https://cdn.zabbet.com/0VNF/lobby_settings/da78a3be-1ece-44a8-99d2-d7f823dbcffa.png"
        />
        <img
          class="w-[32px]"
          src="https://cdn.zabbet.com/0VNF/lobby_settings/dad788f8-6441-4f80-a0c4-bb39325532e9.png"
          alt=""
        />

        <img
          class="w-[32px]"
          src="https://cdn.zabbet.com/0VNF/lobby_settings/f6a5f318-531d-4cec-a8b3-5e4c5816577c.webp"
        />
      </div>
    </div>
    <div>
      <div class="text-white text-sm">Responsible for betting</div>
      <div class="mt-3 flex gap-6 items-center">
        <img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 1"
          src="https://alpha7s.online/images/footer/18.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 2"
          src="https://alpha7s.online/images/footer/gamecare.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 3"
          src="https://alpha7s.online/images/footer/be-gamble-aware.png"
        />
      </div>
    </div>
  </div>
  <div
    class="flex gap-3 mt-7 border-t-[1px] border-t-white/30 pt-[10px] justify-between"
  >
    <div class="xl:col-span-3 lg:col-span-4 md:col-span-6">
      <p class="text-[#7CA9B7] font-normal text-sm flex flex-col">
        <span class="font-semibold text-white">Licenses and certificates</span>
        <span class="text-white/60 text-[12px]"
          >"(Guaranteed authentic licensed game)"</span
        >
      </p>
      <div class="mt-3 flex flex-wrap gap-6 items-center">
        <img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 1"
          src="https://alpha7s.online/images/footer/GC-icon%202.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 2"
          src="https://alpha7s.online/images/footer/iTech.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 3"
          src="https://alpha7s.online/images/footer/GamingLab.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 4"
          src="https://alpha7s.online/images/footer/BBM-Cert.png"
        /><img
          loading="lazy"
          class="max-h-[32px]"
          alt="Image 5"
          src="https://alpha7s.online/images/footer/Iovation.png"
        />
      </div>
    </div>
    <div class="flex shrink-0 gap-12">
      <div>
        <div class="text-white text-sm">Support and security by</div>
        <div class="mt-3 flex gap-6 flex-wrap items-center">
          <img
            loading="lazy"
            class="max-h-[32px]"
            alt="Image 1"
            src="https://alpha7s.online/images/footer/GO%20DADDY.png"
          /><img
            loading="lazy"
            class="max-h-[32px]"
            alt="Image 2"
            src="https://alpha7s.online/images/footer/Group%2048102721.png"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-5 items-end mt-12">
    <img
      loading="lazy"
      class="max-h-[25px]"
      src="https://cdn.zabbet.com/0VNF/lobby_settings/8e561d6d-916e-4647-a060-769b671aaa4a.png"
      alt="logo"
    />
    <div class="font-normal text-sm text-white opacity-50">
      Copyright © alpha7s.com, All Rights Reserved.
    </div>
  </div>
</template>
<script setup>
import Navbar from "../components/main/Navbar.vue";
import HomeSlider from "../components/main/HomeSlider.vue";
import PrimaryLightBtn from "../components/atoms/PrimaryLightBtn.vue";
import PrimaryDarkBtn from "../components/atoms/PrimaryDarkBtn.vue";
import Marquee from "../components/main/Marquee.vue";
import { computed, ref } from "vue";
import { navLinks } from "../libs/NavLinks";
import { RouterLink, useRoute } from "vue-router";

const routes = [
  {
    path: "/highlights",
    text: "Highlights",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15-.723l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064zm0-3.852"
        />
      </svg>`,
  },
  {
    path: "/promotions",
    text: "Promotions",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M149.518 78.38c-6.55.117-12.45 1.736-17.35 4.91c-7.465 4.84-11.765 12.904-13.063 21.34c-2.595 16.874 4.747 36.355 19.862 52.31C154.08 172.893 177.643 185 208 185h2.438l-9.118-18.234c-22.194-1.554-38.46-10.777-49.287-22.205c-11.885-12.545-16.543-28.064-15.138-37.19c.702-4.564 2.402-7.25 5.062-8.974s7.113-2.875 14.756-1.326c13.078 2.65 34.233 13.948 62.205 39.284L220.27 135h23.408c-35.31-34.8-62.215-51.278-83.39-55.57a52 52 0 0 0-7.925-1.006q-1.441-.068-2.845-.043zm212.964 0q-1.404-.023-2.845.044c-2.562.12-5.21.455-7.924 1.006c-21.176 4.292-48.082 20.77-83.39 55.57h23.406l1.352 1.354c27.972-25.336 49.127-36.633 62.205-39.284c7.643-1.55 12.096-.398 14.756 1.326s4.36 4.41 5.062 8.973c1.405 9.126-3.253 24.645-15.138 37.19c-10.827 11.43-27.093 20.652-49.287 22.206L301.562 185H304c30.357 0 53.92-12.106 69.033-28.06c15.115-15.955 22.457-35.436 19.862-52.31c-1.298-8.436-5.598-16.5-13.063-21.34c-4.9-3.174-10.8-4.793-17.35-4.91M227.73 153l-8.78 8.777L229.564 183h52.875l10.61-21.223l-8.777-8.777h-56.54zM73 201v46h142v-46zm160 0v270h46V201zm64 0v46h142v-46zm-192 64v206h110V265zm192 0v206h110V265z"
        />
      </svg>`,
  },
  {
    path: "/event",
    text: "Event",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 1.25c-1.828 0-3.339.161-4.502.357l-.134.023c-1.01.169-1.85.31-2.507 1.118c-.42.519-.557 1.08-.588 1.705l-.492.164c-.463.154-.87.29-1.191.44c-.348.162-.667.37-.911.709s-.341.707-.385 1.088c-.04.353-.04.78-.04 1.269v.145c0 .402 0 .757.03 1.054c.032.321.103.634.28.936c.179.303.417.517.683.701c.245.17.555.343.907.538l2.64 1.467c.54 1.061 1.281 2.007 2.3 2.69c.887.596 1.952.97 3.213 1.069a.8.8 0 0 0-.053.277v1.75H9.82a1.75 1.75 0 0 0-1.716 1.407l-.219 1.093H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-1.885l-.219-1.093a1.75 1.75 0 0 0-1.716-1.407h-1.43V17a.8.8 0 0 0-.053-.277c1.261-.1 2.326-.473 3.213-1.068c1.02-.684 1.76-1.63 2.3-2.691l2.64-1.467c.352-.195.662-.368.907-.538c.265-.184.504-.398.682-.7c.178-.303.25-.616.281-.937c.03-.297.03-.652.03-1.054v-.145c0-.488 0-.916-.04-1.269c-.044-.381-.14-.75-.385-1.088c-.244-.339-.563-.547-.91-.71c-.323-.15-.729-.285-1.192-.439l-.492-.164c-.03-.626-.167-1.186-.588-1.705c-.656-.809-1.496-.95-2.506-1.118l-.135-.023A27 27 0 0 0 12 1.25m2.585 20l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201l-.16.799zM4.288 6.028l.014-.005c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a11 11 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39m15.41-.005c-.071 1.52-.243 3.2-.67 4.77l1.065-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39zM7.748 3.086A25.6 25.6 0 0 1 12 2.75c1.74 0 3.167.153 4.252.336c1.207.204 1.46.28 1.727.608c.262.322.287.628.233 1.983c-.09 2.258-.388 4.696-1.31 6.55c-.456.914-1.052 1.662-1.827 2.182c-.771.517-1.766.841-3.075.841s-2.303-.324-3.074-.841c-.776-.52-1.372-1.268-1.827-2.183c-.923-1.853-1.22-4.29-1.31-6.55c-.054-1.354-.03-1.66.233-1.982c.266-.328.519-.404 1.726-.608"
          clip-rule="evenodd"
        />
      </svg>`,
  },
  {
    path: "/information",
    text: "Information",
    icon: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 1.25c-1.828 0-3.339.161-4.502.357l-.134.023c-1.01.169-1.85.31-2.507 1.118c-.42.519-.557 1.08-.588 1.705l-.492.164c-.463.154-.87.29-1.191.44c-.348.162-.667.37-.911.709s-.341.707-.385 1.088c-.04.353-.04.78-.04 1.269v.145c0 .402 0 .757.03 1.054c.032.321.103.634.28.936c.179.303.417.517.683.701c.245.17.555.343.907.538l2.64 1.467c.54 1.061 1.281 2.007 2.3 2.69c.887.596 1.952.97 3.213 1.069a.8.8 0 0 0-.053.277v1.75H9.82a1.75 1.75 0 0 0-1.716 1.407l-.219 1.093H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-1.885l-.219-1.093a1.75 1.75 0 0 0-1.716-1.407h-1.43V17a.8.8 0 0 0-.053-.277c1.261-.1 2.326-.473 3.213-1.068c1.02-.684 1.76-1.63 2.3-2.691l2.64-1.467c.352-.195.662-.368.907-.538c.265-.184.504-.398.682-.7c.178-.303.25-.616.281-.937c.03-.297.03-.652.03-1.054v-.145c0-.488 0-.916-.04-1.269c-.044-.381-.14-.75-.385-1.088c-.244-.339-.563-.547-.91-.71c-.323-.15-.729-.285-1.192-.439l-.492-.164c-.03-.626-.167-1.186-.588-1.705c-.656-.809-1.496-.95-2.506-1.118l-.135-.023A27 27 0 0 0 12 1.25m2.585 20l-.16-.799a.25.25 0 0 0-.245-.201H9.82a.25.25 0 0 0-.245.201l-.16.799zM4.288 6.028l.014-.005c.072 1.52.243 3.2.671 4.77l-1.066-.591c-.389-.217-.633-.353-.809-.475c-.162-.113-.215-.18-.244-.23c-.03-.05-.062-.128-.082-.324a11 11 0 0 1-.022-.938v-.073c0-.539.001-.88.03-1.138c.028-.238.072-.327.112-.381c.039-.055.109-.125.326-.226c.236-.11.56-.219 1.07-.39m15.41-.005c-.071 1.52-.243 3.2-.67 4.77l1.065-.591c.389-.217.633-.353.809-.475c.162-.113.215-.18.244-.23c.03-.05.062-.128.082-.324c.021-.214.022-.493.022-.938v-.073c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39zM7.748 3.086A25.6 25.6 0 0 1 12 2.75c1.74 0 3.167.153 4.252.336c1.207.204 1.46.28 1.727.608c.262.322.287.628.233 1.983c-.09 2.258-.388 4.696-1.31 6.55c-.456.914-1.052 1.662-1.827 2.182c-.771.517-1.766.841-3.075.841s-2.303-.324-3.074-.841c-.776-.52-1.372-1.268-1.827-2.183c-.923-1.853-1.22-4.29-1.31-6.55c-.054-1.354-.03-1.66.233-1.982c.266-.328.519-.404 1.726-.608"
          clip-rule="evenodd"
        />
      </svg>`,
  },
];

const currentFilter = ref("highlights");

const route = useRoute();

const currentRoute = computed(() => route.path);
</script>
<style></style>
