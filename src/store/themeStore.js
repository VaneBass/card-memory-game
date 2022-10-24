import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const themeString = ref("darkTheme");

  return {
    themeString,
  };
});
