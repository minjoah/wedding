import { createWebHistory, createRouter } from "vue-router";
import index from "@/index.vue";
import wedding from "@/wedding.vue";
import wedding1 from "@/wedding1.vue";
import info from "@/info.vue";
const routes = [
  {
    path: "/",
    component: wedding,
  },
  {
    path: "/info",
    component: info,
  },
  {
    path: "/index",
    component: index,
  },
  {
    path: "/wedding1",
    component: wedding1,
  },
];

const router = createRouter({
  history: createWebHistory("/wedding/"),
  routes,
});

export default router;
