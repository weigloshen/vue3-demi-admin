import { IFormOptions, Props } from '@/components/form';
import { TableOption } from '@/components/table';
export const formOptions: Array<IFormOptions> = [
  {
    label: '名称',
    field: 'name',
    type: 'input',
    placeholder: '请输入关键字',
  },
  {
    label: '权限',
    field: 'permissions',
    type: 'select',
    placeholder: '选择权限',
    children: [
      {
        label: '📇 管理员',
        value: 'ADMIN',
      },
      {
        label: '⛕ 用户',
        value: 'USER',
      },
      {
        label: '⛕ 游客',
        value: 'GUEST',
      },
    ],
  },
  {
    label: '部门',
    field: 'department',
    type: 'select',
    placeholder: '选择属性',
    children: [
      {
        label: '人力资源部',
        value: '人力资源部',
      },
      {
        label: '财务部',
        value: '财务部',
      },
      {
        label: '销售部',
        value: '销售部',
      },
      {
        label: '市场部',
        value: '市场部',
      },
      {
        label: '生产部',
        value: '生产部',
      },
      {
        label: '技术部',
        value: '技术部',
      },
      {
        label: '质量管理部',
        value: '质量管理部',
      },
      {
        label: '物资管理部',
        value: '物资管理部',
      },
    ],
  },
];

export const modelFormOptions: Props = {
  labelPosition: 'left',
  labelWidth: '80px',
  itemStyle: { style: { width: '100%' } },
  options: [
    {
      label: '名称',
      field: 'name',
      type: 'input',
      placeholder: '请输入名称',
    },
    {
      label: '权限',
      field: 'permissions',
      type: 'select',
      placeholder: '选择权限',
      children: [
        {
          label: '📇 管理员',
          value: 'ADMIN',
        },
        {
          label: '⛕ 用户',
          value: 'USER',
        },
        {
          label: '⛕ 游客',
          value: 'GUEST',
        },
      ],
    },
    {
      label: '头像',
      field: 'avatar',
      type: 'upload',
      placeholder: '请上传头像',
    },
    {
      label: '部门',
      field: 'department',
      type: 'select',
      placeholder: '选择属性',
      children: [
        {
          label: '人力资源部',
          value: '人力资源部',
        },
        {
          label: '财务部',
          value: '财务部',
        },
        {
          label: '销售部',
          value: '销售部',
        },
        {
          label: '市场部',
          value: '市场部',
        },
        {
          label: '生产部',
          value: '生产部',
        },
        {
          label: '技术部',
          value: '技术部',
        },
        {
          label: '质量管理部',
          value: '质量管理部',
        },
        {
          label: '物资管理部',
          value: '物资管理部',
        },
      ],
    },
    {
      label: '描述',
      field: 'describe',
      type: 'input',
      placeholder: '请详细描述一下',
    },
  ],
};
export const tableOption: TableOption[] = [
  {
    label: '名称',
    prop: 'name',
    width: '60px',
  },
  {
    label: '权限',
    prop: 'permissions',
    width: '100px',
  },
  {
    label: '头像',
    prop: 'avatar',
    width: '120px',
  },
  {
    label: '部门',
    prop: 'department',
    width: '120px',
  },
  {
    label: '描述',
    prop: 'describe',
    width: '380px',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '创建人',
    prop: 'creator',
  },
  {
    label: '操作',
    prop: 'handle',
    width: '200px',
  },
];
