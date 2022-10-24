<template>
  <n-el tag="img" :src="imgSrc" alt="img" class="img" />
</template>

<script setup>
import { computed } from "vue";
import { NEl } from "naive-ui";

const props = defineProps({
  content: String,
});

const imgSrc = computed(() => {
  return `./src/assets/${props.content}.svg`;
});
</script>

<style scoped>
.img {
  width: 80%;
  height: 80%;

  filter: drop-shadow(0px 0px 30px var(--primary-color));
}
</style>
