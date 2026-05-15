import { createWebHistory, createRouter } from "vue-router";
import index from "@/index.vue";
import wedding from "@/wedding.vue";
const routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/wedding",
    component: wedding,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
