import { createRouter, createWebHistory } from 'vue-router';
import { bookRoute } from '@/sections/books/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/books',
    },
    bookRoute,
  ],
});

export default router;
