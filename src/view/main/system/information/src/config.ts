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
    label: '邮箱',
    field: 'email',
    type: 'input',
    placeholder: '请输入邮箱',
  },
  {
    label: '岗位',
    field: 'information',
    type: 'select',
    placeholder: '选择岗位信息',
    children: [
      {
        label: '前端',
        value: '前端',
      },
      {
        label: '测试',
        value: '测试',
      },
      {
        label: '后端',
        value: '后端',
      },
      {
        label: 'UI',
        value: 'UI',
      },
      {
        label: '运维',
        value: '运维',
      },
      {
        label: 'Rust',
        value: 'Rust',
      },
      {
        label: '嵌入式',
        value: '嵌入式',
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
      placeholder: '请输入关键字',
    },
    {
      label: 'Emoji',
      field: 'emoji',
      type: 'input',
      placeholder: '请输入你的Emoij',
    },
    {
      label: '邮箱',
      field: 'email',
      type: 'input',
      placeholder: '请输入邮箱',
    },
    {
      label: '岗位',
      field: 'information',
      type: 'select',
      placeholder: '选择岗位信息',
      children: [
        {
          label: '前端',
          value: '前端',
        },
        {
          label: '测试',
          value: '测试',
        },
        {
          label: '后端',
          value: '后端',
        },
        {
          label: 'UI',
          value: 'UI',
        },
        {
          label: '运维',
          value: '运维',
        },
        {
          label: 'Rust',
          value: 'Rust',
        },
        {
          label: '嵌入式',
          value: '嵌入式',
        },
      ],
    },
    {
      label: '邮箱',
      field: 'email',
      type: 'input',
      placeholder: '请输入它的邮箱',
    },
    {
      label: '居住地',
      field: 'location',
      type: 'input',
      placeholder: '请输入你现居地',
    },
  ],
};
export const tableOption: TableOption[] = [
  {
    label: '名称',
    prop: 'name',
    width: '180px',
  },
  {
    label: 'Emoji',
    prop: 'emoji',
    width: '100px',
  },
  {
    label: '岗位',
    prop: 'information',
    width: '80px',
  },
  {
    label: '邮箱',
    prop: 'email',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: '地址',
    prop: 'location',
    otherAttr: {
      showOverflowTooltip: true,
    },
  },
  {
    label: 'ip地址',
    prop: 'ip',
  },
  {
    label: '操作',
    prop: 'handle',
  },
];
