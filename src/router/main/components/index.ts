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
];

export default componentsRouter;
