<script setup lang="ts">
import { logo } from "../assets/images/index";
</script>

<template>
  <header class="bg-primary h-[60px]">
    <div
      class="headerWrapper flex w-full justify-between items-center max-w-[1200px] h-full mx-auto px-2"
    >
      <div class="leftSide">
        <router-link to="/">
          <img :src="logo" alt="logo" class="w-[124px] md:w-[164px] h-auto" />
        </router-link>
      </div>

      <div
        class="rightSide"
        onclick="window.location.href = '/terms-and-conditions'"
      >
        <p
          class="!text-xs font-normal md:text-base !text-white md:font-medium leading-5 cursor-pointer"
        >
          support@camscan.ca
        </p>
        <p
          class="!text-xs font-normal md:text-base !text-white md:font-medium leading-5 cursor-pointer"
        >
          Call us now +1-613-484-2847
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
