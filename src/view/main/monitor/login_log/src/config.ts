import { TableOption } from '@/components/table';
export const tableOption: TableOption[] = [
  {
    label: '登录用户',
    prop: 'login_user',
  },
  {
    label: '登陆状态',
    prop: 'status',
  },
  {
    label: '登录ip',
    prop: 'ip',
  },
  {
    label: '登录地址',
    prop: 'address',
    width: '200px',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '操作系统',
    prop: 'os',
  },
  {
    label: '浏览器',
    prop: 'browser',
  },
  {
    label: '登陆时间',
    prop: 'time',
  },
  {
    label: '操作',
    prop: 'handle',
    width: '160px',
  },
];
