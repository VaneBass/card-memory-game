import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardStore = defineStore("card", () => {
  let cards = ref([
    {
      content: "CurrentLocation",
      isBack: true,
      clickable: true,
    },
    {
      content: "BrandReddit",
      isBack: true,
      clickable: true,
    },
    {
      content: "Bulb",
      isBack: true,
      clickable: true,
    },
    {
      content: "Diamond",
      isBack: true,
      clickable: true,
    },
    {
      content: "MoodNeutral",
      isBack: true,
      clickable: true,
    },
    {
      content: "Windmill",
      isBack: true,
      clickable: true,
    },
    {
      content: "Speedboat",
      isBack: true,
      clickable: true,
    },
    {
      content: "Snowflake",
      isBack: true,
      clickable: true,
    },
    {
      content: "CurrentLocation",
      isBack: true,
      clickable: true,
    },
    {
      content: "BrandReddit",
      isBack: true,
      clickable: true,
    },
    {
      content: "Bulb",
      isBack: true,
      clickable: true,
    },
    {
      content: "Diamond",
      isBack: true,
      clickable: true,
    },
    {
      content: "MoodNeutral",
      isBack: true,
      clickable: true,
    },
    {
      content: "Windmill",
      isBack: true,
      clickable: true,
    },
    {
      content: "Speedboat",
      isBack: true,
      clickable: true,
    },
    {
      content: "Snowflake",
      isBack: true,
      clickable: true,
    },
  ]);

  return {
    cards,
  };
});
