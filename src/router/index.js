import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home/Home.vue';
import About from '../components/About/About.vue';
import PathNotFound from '../components/PathNotFound/PathNotFound.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', redirect: PathNotFound, component: PathNotFound }, 
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...routes],
  });
  
  export default router;