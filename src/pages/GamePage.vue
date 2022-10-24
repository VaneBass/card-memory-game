<template>
  <div class="game-container">
    <n-el tag="div" class="game-area">
      <TheCard
        v-for="(card, index) in cards"
        :key="index"
        :content="card.content"
        :isBack="card.isBack"
        :clickable="card.clickable"
        @click="handleClick(card)"
      />
    </n-el>
  </div>
</template>

<script setup>
import TheCard from "../components/TheCard.vue";
import { NEl, useDialog } from "naive-ui";
import { useCardStore } from "../store/cardStore";
import { onMounted, ref } from "vue";
import { shuffle } from "lodash-es";
import { useRouter } from "vue-router";

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

let cardStore = useCardStore();
let cards = ref(cardStore.cards);
cards.value = shuffle(cardStore.cards);

let start = null;
let end = null;

const router = useRouter();

const dialog = useDialog();

onMounted(() => {
  start = Date.now();
});

// 卡片点击事件
function handleClick(card) {
  let clickedCard = card;

  if (card.clickable) {
    if (clickedCard !== cardOne && !disableDeck) {
      clickedCard.isBack = false;

      if (!cardOne) {
        cardOne = clickedCard;
        return;
      }

      cardTwo = clickedCard;

      disableDeck = true;

      let cardOneContent = cardOne.content;
      let cardTwoContent = cardTwo.content;

      matchCards(cardOneContent, cardTwoContent);
    }
  }
}

// 匹配点击的两张卡
function matchCards(content1, content2) {
  if (content1 === content2) {
    matchedCard++;

    if (matchedCard === cards.value.length / 2) {
      end = Date.now();
      setTimeout(() => {
        shuffleCard();
        return;
      }, 1000);
    }

    cardOne.clickable = false;
    cardTwo.clickable = false;

    cardOne = cardTwo = "";

    disableDeck = false;

    return;
  }

  setTimeout(() => {
    cardOne.isBack = !cardOne.isBack;
    cardTwo.isBack = !cardTwo.isBack;
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1000);
}

// 重置游戏界面，打乱卡片数组，重新计时
function shuffleCard() {
  matchedCard = 0;
  cardOne = cardTwo = "";

  // 弹出提示
  dialog.success({
    title: "成功",
    content: `用时 ${(end - start) / 1000} s, 要继续游戏吗?`,
    maskClosable: false,
    positiveText: "是",
    negativeText: "否",
    onPositiveClick: () => {
      start = Date.now();
    },
    onNegativeClick: () => {
      console.log("ok");
      router.push("/");
    },
  });

  start = end = null;

  cards.value.forEach((card) => {
    card.isBack = true;
    card.clickable = true;
  });

  cards.value = shuffle(cards.value);

  console.log("done");
}
</script>

<style scoped>
.game-container {
  width: 80%;
  height: 100%;
}
.game-area {
  width: 100%;
  background-color: var(--primary-color);
  padding: 1.1rem;
  margin-top: 4rem;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
</style>
