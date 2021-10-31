import VueRouter from 'vue-router'
import routes from './routes.js';

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});





export default router
