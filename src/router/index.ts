import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/client.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ClientList",
    props: true,
    component: () => import("../views/client.vue"),
  },
  {
    path: "/client/record/:id?",
    name: "clientDetail",
    props: true,
    component: () => import("../views/clientRecord.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
