import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  let localTheme = localStorage.getItem("theme");

  const themeString = ref(null);
  themeString.value = localTheme || "lightTheme";

  return {
    themeString,
  };
});
