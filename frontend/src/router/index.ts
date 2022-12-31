import auth from "@/middlewares/auth";
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
  {
    path: "/work/:id",
    name: "ProjectIndexPage",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/project/index.vue"),
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

router.beforeEach(auth);

export default router;
