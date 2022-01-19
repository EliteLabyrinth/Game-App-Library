import Vue from "vue";
import VueRouter from "vue-router";
import Games from "../components/Games.vue";
import Hello from "../components/Hello.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Games",
    component: Games,
    meta: { title: "Game Library" },
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
    meta: { title: "Greetings" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
