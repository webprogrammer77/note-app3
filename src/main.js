import Vue from "vue";
import App from "./App.vue";

import router from './routes'
import store from './store'

import "./assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.directive("click-outside", {
  bind(el, binding) {
    el.addEventListener("click", e => e.stopPropagation());
    document.body.addEventListener("click", binding.value);
  },
  unbind(el, binding) {
    document.body.removeEventListener("click", binding.value);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
