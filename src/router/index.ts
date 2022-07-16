import { createRouter, createWebHistory } from 'vue-router';
// import store from '@/store';
import Sidebar from '@/components/Sidebar.vue';
import Home from '@/pages/Home.vue';
import Mountain from '@/pages/Mountain.vue';
import Food from '@/pages/Food.vue';

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      Sidebar,
    },
  },
  {
    path: '/mountain',
    components: {
      default: Mountain,
      Sidebar,
    },
  },
  {
    path: '/food',
    components: {
      default: Food,
      Sidebar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  // console.log(to);
  // if (to.name !== 'Login' && !isAuthenticated) {
  //   return { name: 'Login' };
  // }
});

router.afterEach((to) => {
  // console.log(to);
  // console.log(store);
  // let layoutProperty = to.matched[0].components.default.options.layout
  // if (typeof layoutProperty === 'function') {
  //   layoutProperty = layoutProperty()
  // }
  // layout.value = layoutProperty || 'Default'
});

export default router;
