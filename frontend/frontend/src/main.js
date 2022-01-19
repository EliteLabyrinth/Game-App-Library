import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// install bootstrap first
import "bootstrap/dist/css/bootstrap.css";
// Importing the bootstrapvue library
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const DEFAULT_TITLE = "Game Library";
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
