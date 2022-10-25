<template>
  <div class="content-box">
    <div class="main-content">
      <h2 class="title">Card Memory Game</h2>
      <router-link to="/game-page">
        <transition :css="false">
          <n-button class="start">Start</n-button>
        </transition>
      </router-link>
      <span>你的最佳成绩: {{ `${timeSotre.bestTime} 秒` || "暂无" }} </span>
    </div>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
import { useTimeStore } from "../store/timeStore";

let timeSotre = useTimeStore();
</script>

<style scoped>
.content-box {
  width: 90%;
  height: 100%;
}

.content-box .main-content {
  width: 100%;
  height: 60%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.content-box .main-content .title {
  font-size: 32px;
  transition: none;
}

.content-box .main-content a {
  text-decoration: none;
}

.content-box .main-content .start {
  width: 12rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
