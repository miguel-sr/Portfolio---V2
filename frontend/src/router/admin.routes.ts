import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/admin/index.vue"),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/skills",
    name: "AdminSkillsIndexPage",
    component: () =>
      import(
        /* webpackChunkName: "AdminSkillsIndexPage" */ "../views/admin/skills/index.vue"
      ),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/skills/?id=:id",
    name: "AdminSkillsId",
    component: () =>
      import(
        /* webpackChunkName: "AdminSkillsId" */ "../views/admin/skills/id.vue"
      ),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/work",
    name: "AdminProjectIndexPage",
    component: () =>
      import(
        /* webpackChunkName: "AdminProjectIndexPage" */ "../views/admin/project/index.vue"
      ),
    meta: {
      isAdmin: true,
    },
  },
  {
    path: "/admin/work/?id=:id",
    name: "AdminProjectId",
    component: () =>
      import(
        /* webpackChunkName: "AdminProjectId" */ "../views/admin/project/id.vue"
      ),
    meta: {
      isAdmin: true,
    },
  },
];

export default routes;
