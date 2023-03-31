import { RouteRecordRaw } from 'vue-router';
const homeRouter: RouteRecordRaw[] = [
  {
    path: '/dashBorard',
    component: () => import('@/view/main/home/dashBorard'),
    meta: {
      title: 'dashborard',
      p: 'homePage',
    },
  },
  {
    path: '/workbench',
    component: () => import('@/view/main/home/workbench'),
    meta: {
      title: 'workbench',
      p: 'homePage',
    },
  },
];
export default homeRouter;
