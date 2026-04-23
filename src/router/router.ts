import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/pages/auth/Login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/HomeView.vue"),
    },
  ],
});

export default router;
