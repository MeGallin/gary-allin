import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home/Home.vue';
import About from '../components/About/About.vue';
import MyWork from '../components/MyWork/MyWork.vue';
import ContactMe from '../components/ContactMe/ContactMe.vue';
import PathNotFound from '../components/PathNotFound/PathNotFound.vue';
import Private from '../components/Authentication/Private/Private.vue';
import Callback from '../components/Authentication/Callback/Callback.vue';
import NotAuthorised from '../components/Authentication/NotAuthorised/NotAuthorised.vue';

import { isLoggedIn } from '../components/Authentication/utils/auth';

Vue.config.productionTip = false;
Vue.use(VueRouter);

function authCheck(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/notauthorised',
    });
  } else {
    next();
  }
}

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/my-work', component: MyWork },
  { path: '/contact-me', component: ContactMe },
  { path: '/private', beforeEnter: authCheck, component: Private },
  { path: '/notauthorised', component: NotAuthorised },
  { path: '/callback', component: Callback },
  { path: '/:PathNotFound(.*)', component: PathNotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes],
});

export default router;
