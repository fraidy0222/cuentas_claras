import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/pages/auth/Login.vue"),
    },
    {
      meta: { requireAuth: true },
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/pages/HomeView.vue"),
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuht = localStorage.getItem("auth");

  if (to.meta.requireAuth && !isAuht) next({ name: "Login" });
  else next();
});

export default router;
