import { RouteRecordRaw } from 'vue-router';

const systemRouter: RouteRecordRaw[] = [
  {
    path: '/menu',
    component: () => import('@/view/main/system/menu'),
    meta: {
      title: 'menus',
      p: 'system',
    },
  },
  {
    path: '/permissions',
    component: () => import('@/view/main/system/permissions'),
    meta: {
      title: 'permission',
      p: 'system',
    },
  },
  {
    path: '/information',
    component: () => import('@/view/main/system/information'),
    meta: {
      title: 'information',
      p: 'system',
    },
  },
];

export default systemRouter;
