import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimeStore = defineStore("time", () => {
  let localBestTime = localStorage.getItem("bestTime");

  const bestTime = ref(null);

  bestTime.value = localBestTime || "暂无最佳成绩";

  return {
    bestTime,
  };
});
