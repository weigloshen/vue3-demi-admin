import { RouteRecordRaw } from 'vue-router';

const linkRouter: RouteRecordRaw[] = [
  {
    path: '/link',
    component: () => import('@/view/main/link/github'),
    meta: {
      title: 'bing',
      p: 'link',
    },
  },
];

export default linkRouter;
