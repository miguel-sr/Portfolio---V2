import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import adminRoutes from "./admin.routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (!to.hash) {
      return {
        top: 0,
      };
    }
    return {
      el: to.hash,
      top: 100,
    };
  },
});

export default router;
