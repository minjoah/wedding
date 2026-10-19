import { createWebHistory, createRouter } from "vue-router";
import index from "@/index.vue";
import wedding from "@/wedding.vue";
import wedding1 from "@/wedding1.vue";
import info from "@/info.vue";
const routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/wedding",
    component: wedding,
  },
  {
    path: "/wedding1",
    component: wedding1,
  },
  {
    path: "/wedding/info",
    component: info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
