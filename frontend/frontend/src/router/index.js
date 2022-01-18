import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/Hello.vue"
const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
