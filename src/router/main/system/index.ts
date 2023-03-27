import { RouteRecordRaw } from 'vue-router';

const systemRouter: RouteRecordRaw[] = [
  {
    path: '/menu',
    component: () => import('@/view/main/system/menu'),
    meta: {
      title: '菜单管理',
      p: '系统配置',
    },
  },
  {
    path: '/permissions',
    component: () => import('@/view/main/system/permissions'),
    meta: {
      title: '权限管理',
      p: '系统配置',
    },
  },
  {
    path: '/information',
    component: () => import('@/view/main/system/information'),
    meta: {
      title: '岗位信息',
      p: '系统配置',
    },
  },
];

export default systemRouter;
