import Vue from 'vue';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/i18n';

Vue.use(vueNumeralFilterInstaller);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');