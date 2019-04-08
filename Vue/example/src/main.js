import Vue from "vue";
import App from "./App.vue";
import './../node_modules/purecss/build/pure-min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
