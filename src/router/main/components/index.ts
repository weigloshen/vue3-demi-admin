import { RouteRecordRaw } from 'vue-router';

const componentsRouter: RouteRecordRaw[] = [
  {
    path: '/form',
    component: () => import('@/view/main/components/form'),
    meta: {
      title: 'form',
      p: 'components',
    },
  },
  {
    path: '/model',
    component: () => import('@/view/main/components/model'),
    meta: {
      title: 'model',
      p: 'components',
    },
  },
  {
    path: '/g6',
    component: () => import('@/view/main/components/g6'),
    meta: {
      title: 'g6',
      p: 'components',
    },
  },
];

export default componentsRouter;
