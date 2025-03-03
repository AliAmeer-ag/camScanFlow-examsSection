<template>
  <div class="flex flex-col gap-6">
    <div
      class="flex flex-col items-center justify-center gap-6 min-h-[420px] max-w-[590px] mx-auto"
    >
      <div
        class="flex items-center justify-center gap-4 p-[14px] bg-[#4FC3441A] border border-[#4FC344] rounded-[100px] w-fit"
      >
        <img :src="checkIcon" alt="done" class="w-[60px] h-[60px]" />
        <span class="text-[40px] font-bold leading-[normal]">Done</span>
      </div>
      <span
        class="text-lg text-center font-normal text-[#39373A] leading-[21.78px]"
      >
        Your exam registration has been submitted successfully. Check your email
        for confirmation and further details.
      </span>

      <button @click="handleClick" class="">Back to Website</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { checkIcon } from "../../assets/images";

const router = useRouter();

const handleClick = () => {
  router.replace("/");
};
</script>
