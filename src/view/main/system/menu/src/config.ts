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
    label: '属性',
    field: 'attribute',
    type: 'select',
    placeholder: '选择属性',
    children: [
      {
        label: '📇 目录',
        value: 'menu',
      },
      {
        label: '⛕ 菜单',
        value: 'catalog',
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
      label: 'Emoji',
      field: 'emoji',
      type: 'input',
      placeholder: '请输入你的Emoij',
    },
    {
      label: '属性',
      field: 'attribute',
      type: 'select',
      placeholder: '请选择属性',
      children: [
        {
          label: '📇 目录',
          value: 'menu',
        },
        {
          label: '⛕ 菜单',
          value: 'catalog',
        },
      ],
    },
    {
      label: '路径',
      field: 'path',
      type: 'input',
      placeholder: '请输入路径',
    },
    {
      label: '跳转路径',
      field: 'redirect',
      type: 'input',
      placeholder: '请输入跳转路径',
    },
  ],
};
export const tableOption: TableOption[] = [
  {
    label: '名称',
    prop: 'name',
    width: '80px',
  },
  {
    label: '属性',
    prop: 'attribute',
    width: '100px',
  },
  {
    label: 'Emoji',
    prop: 'emoji',
    width: '80px',
  },
  {
    label: '路径',
    prop: 'path',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '跳转路径',
    prop: 'redirect',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '创建日期',
    prop: 'birthdate',
  },
  {
    label: '操作',
    prop: 'handle',
  },
];
