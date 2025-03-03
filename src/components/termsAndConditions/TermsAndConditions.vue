<template>
  <div class="flex flex-col gap-6">
    <h1>Terms & Conditions</h1>

    <hr />

    <div class="flex flex-col gap-4">
      <h2>1. de communication</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage
        of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200
        Latin words, combined with a handful of model sentence structures, to
        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
        is therefore always free from repetition, injected humour, or
        non-characteristic words etc.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
        slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary, making this the first true
        generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic
        words etc.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <h2>2. de communication</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage
        of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200
        Latin words, combined with a handful of model sentence structures, to
        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
        is therefore always free from repetition, injected humour, or
        non-characteristic words etc.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
        slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary, making this the first true
        generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic
        words etc.
      </p>
    </div>

    <hr />

    <div class="flex align-center gap-8">
      <button @click="handleAgree" class="">Agree</button>
      <button @click="handleDisagree" class="secondary">Disagree</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["updateCurrentStep"]);

const handleAgree = () => {
  emit("updateCurrentStep", props.currentStep + 1);
};

const handleDisagree = () => {
  router.replace("/");
};
</script>
