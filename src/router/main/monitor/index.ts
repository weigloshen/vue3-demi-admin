import { RouteRecordRaw } from 'vue-router';

const monitorRouter: RouteRecordRaw[] = [
  {
    path: '/login_log',
    component: () => import('@/view/main/monitor/login_log'),
    meta: {
      title: 'login_log',
      p: 'monitor',
    },
  },
  {
    path: '/operate_log',
    component: () => import('@/view/main/monitor/operate_log'),
    meta: {
      title: 'operate_log',
      p: 'monitor',
    },
  },
];

export default monitorRouter;
