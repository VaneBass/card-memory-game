import HomePage from "./pages/HomePage.vue";
import GamePage from "./pages/GamePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
  {
    path: "/game-page",
    name: "game-page",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
