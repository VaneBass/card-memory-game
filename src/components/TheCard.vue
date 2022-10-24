<template>
  <n-el tag="div">
    <div class="card" ref="card">
      <transition @leave="onLeave" mode="out-in" :css="false">
        <div v-if="isBack" class="back">?</div>
        <div v-else class="front">
          <TheIcon :content="content" />
        </div>
      </transition>
    </div>
  </n-el>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { NEl } from "naive-ui";
import gsap from "gsap";

const props = defineProps({
  content: String,
  isBack: Boolean,
  clickable: Boolean,
});

// 离开过渡效果时的动画
function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.3,
    rotateY: -180,
    ease: "power2.out",
    // 动画结束时，触发事件
    onComplete: () => {
      done();
    },
  });
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 10rem;
  border-radius: 8px;

  transform-style: preserve-3d;
  perspective: 800px;
  user-select: none;
}

.card .front,
.card .back {
  width: 100%;
  height: 100%;
  font-size: 32px;
  background-color: var(--modal-color);
  border-radius: 8px;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
