import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Swal from "sweetalert2";
import adminRoutes from "./admin.routes";
import jwtService from "@/services/jwt.service";

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
    path: "/work/",
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (localStorage.getItem("userToken") == null) {
      next({
        path: "/login",
      });
    } else {
      const user = jwtService.decode();
      if (user.credentials === "admin") {
        next();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Permissões insuficientes!",
        });
        next({
          path: "/",
        });
      }
    }
  } else {
    next();
  }
});

export default router;
