<template>
  <n-el tag="div" class="top-bar">
    <router-link to="/" v-if="isGaming" class="back-icon"> back </router-link>
    <n-switch
      v-model:value="active"
      @update:value="changeTheme"
      class="switch"
    ></n-switch>
  </n-el>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { NEl, NSwitch } from "naive-ui";
import { useThemeStore } from "../store/themeStore";

const active = ref(true);
const route = useRoute();
const themeStore = useThemeStore();

// 更换主题
function changeTheme() {
  themeStore.themeString = active.value ? "darkTheme" : "";
}

// 判断当前是否是游戏页面
const isGaming = computed(() => {
  return route.name === "game-page";
});
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--border-color);

  display: flex;
  align-items: center;
}

.top-bar .back-icon {
  margin-left: 1rem;
  text-decoration: none;
  color: var(--text-color-2);
}

.top-bar .back-icon:hover {
  color: var(--primary-color-hover);
}

.top-bar .switch {
  cursor: pointer;
  margin-left: auto;
  margin-right: 1rem;
}
</style>
