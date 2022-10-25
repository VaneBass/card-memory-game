<template>
  <!-- <n-el tag="img" :src="imgSrc" alt="img" class="img" /> -->
  <n-el tag="svg" class="img">
    <use :href="`${sprite}#${content}`"></use>
  </n-el>
</template>

<script setup>
import { NEl } from "naive-ui";
import sprite from "../assets/icons/sprite.svg";

const props = defineProps({
  content: String,
});
</script>

<style scoped>
.img {
  width: 80%;
  height: 80%;
  color: black;
  filter: drop-shadow(0px 0px 30px var(--primary-color));
}
</style>
