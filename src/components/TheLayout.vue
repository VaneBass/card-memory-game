<template>
  <n-config-provider :theme="useTheme">
    <n-el tag="div" class="container">
      <slot></slot>
    </n-el>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NEl, darkTheme } from "naive-ui";
import { computed } from "vue";
import { useThemeStore } from "../store/themeStore";

const themeStore = useThemeStore();

const useTheme = computed(() => {
  return themeStore.themeString === "darkTheme" ? darkTheme : null;
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: var(--body-color);
  color: var(--text-color-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
