import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ContentDescription from './components/common/ContentDescription/ContentDescription.vue';
// Create global components
Vue.component('content-description', ContentDescription);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
