import type { RouteRecordRaw } from 'vue-router';

export const bookRoute: RouteRecordRaw = {
  path: '/books',
  name: 'Books',
  component: () => import('./views/Books.vue'),
};
