import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import HelloWorld from '@/components/HelloWorld.vue';
import DefaultLayout from '@/layout/DefaultLayout.vue';

const routes = [
  {
    path: '/',
    layout: DefaultLayout,
    component: DefaultLayout,
  },
  {
    path: '/mountain',
    component: HelloWorld,
  },
  {
    path: '/food',
    component: HelloWorld,
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
