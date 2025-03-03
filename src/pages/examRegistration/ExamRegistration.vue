<template>
  <div class="max-w-4xl mx-auto mt-8">
    <!-- Stepper Container -->
    <div
      class="flex items-center relative max-w-[630px] mb-4 mx-4 md:mx-auto"
    >
      <div class="absolute w-full h-[1px] bg-primary"></div>
      <div class="flex justify-between w-full relative z-10">
        <div
          v-for="(_, index) in steps"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            :class="[
              'flex items-center justify-center p-[5px] border-1 border-primary rounded-full bg-white text-primary',
            ]"
          >
            <span
              :class="[
                'flex items-center justify-center w-6 h-6 rounded-full text-[10px] leading-[normal]',
                index === currentStep ? 'bg-primary text-white' : '',
              ]"
              >{{ index + 1 }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="content max-w-5xl mx-auto px-4 p-5 md:px-5">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        {
          name: "terms-and-conditions",
        },
        {
          name: "applicant-information",
        },
        {
          name: "step3",
        },
      ],
    };
  },

  mounted() {
    // update the current step based on the route
    this.currentStep = this.steps.findIndex(
      (step) => step.name === this.route.name
    );

    if (this.route.path === "/exam-registration") {
      this.router.replace({ name: this.steps[0].name });
    }
  },
};
</script>
