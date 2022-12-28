import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/admin/index.vue"),
  },
  {
    path: "/admin/skills",
    name: "skills",
    component: () =>
      import(
        /* webpackChunkName: "skills" */ "../views/admin/skills/index.vue"
      ),
  },
  {
    path: "/admin/skills/id:id",
    name: "skills/id",
    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/admin/skills/id.vue"),
  },
];

export default routes;
