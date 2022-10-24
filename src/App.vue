<script setup>
import TheLayout from "./components/TheLayout.vue";
import TopBar from "./components/TopBar.vue";
import { NDialogProvider } from "naive-ui";
</script>

<template>
  <TheLayout>
    <TopBar />
    <n-dialog-provider>
      <router-view></router-view>
    </n-dialog-provider>
  </TheLayout>
</template>

<style scoped></style>
