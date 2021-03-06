import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  
  {
    path: "/ma3had",
    name: "ma3had",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ma3had.vue"),
  },
  {
    path: "/tass2el",
    name: "tass2el",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tass2el.vue"),
  },
  {
    path: "/5admaat",
    name: "5admaat",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/5admaat.vue"),
  },
  

  {
    path: "/america",
    name: "america",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/america.vue"),
  },
  
  {
    path: "/rosyaa",
    name: "rosyaa",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/rosyaa.vue"),
  },
  {
    path: "/elsodann",
    name: "elsodann",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/elsodann.vue"),
  },
  {
    path: "/omann",
    name: "omann",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/omann.vue"),
  },
  {
    path: "/Medical supplies",
    name: "Medical supplies",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Medical supplies.vue"),
  },
  {
    path: "/Medical consulting",
    name: "Medical consulting",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Medical consulting.vue"),
  },
  {
    path: "/ni",
    name: "ni",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ni.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
