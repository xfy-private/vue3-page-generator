import {
  baseComponentType, inputComponentItemType, selectComponentItemType, layoutComponentItemType,
} from '@/types/data';

const baseForm = {
  name: 'form',
  model: 'model',
  rules: 'rules',
  ref: 'ref',
  gutter: 10,
  span: 24,
  disabled: false,
  size: 'default',
};

const antForm = {
  ...baseForm,
};

const inputComponentList: Array<inputComponentItemType> = [
  {
    icon: 'SingleInput',
    title: '单行输入',
  },
  {
    icon: 'MultiInput',
    title: '多行输入',
  },
  {
    icon: 'NumberInput',
    title: '数字输入',
  },
  {
    icon: 'password',
    title: '密码输入',
  },
  {
    icon: 'phone',
    title: '手机输入',
  },
  {
    icon: 'email',
    title: '邮箱输入',
  },
  {
    icon: 'RichText',
    title: '富文编辑器',
  },
  {
    icon: 'customize',
    title: '自定义输入',
  },
];

const selectComponentList: Array<selectComponentItemType> = [
  {
    icon: 'select',
    title: '下拉选择',
  },
  {
    icon: 'cascade',
    title: '级联选择',
  },
  {
    icon: 'TreeSelect',
    title: '树型选择',
  },
  {
    icon: 'radio',
    title: '单选框组',
  },
  {
    icon: 'checkbox',
    title: '复选框组',
  },
  {
    icon: 'switch',
    title: '滑动开关',
  },
  {
    icon: 'slider',
    title: '滑动输入',
  },
  {
    icon: 'date',
    title: '日期选择',
  },
  {
    icon: 'time',
    title: '时间选择',
  },
  {
    icon: 'DateScope',
    title: '日期范围',
  },
  {
    icon: 'TimeScope',
    title: '时间范围',
  },
  {
    icon: 'mentions',
    title: '提及输入',
  },
  {
    icon: 'rate',
    title: '评分',
  },
  {
    icon: 'upload',
    title: '上传',
  },
];

const layoutComponentList: Array<layoutComponentItemType> = [
  {
    icon: 'row',
    title: '行内布局',
  },
];

const componentList: Array<{
  title: string,
  icon: string,
  componentList: Array<baseComponentType>
}> = [
  {
    icon: 'input',
    title: '输入型组件',
    componentList: inputComponentList,
  },
  {
    icon: 'choose',
    title: '选择型组件',
    componentList: selectComponentList,
  },
  {
    icon: 'component',
    title: '布局型组件',
    componentList: layoutComponentList,
  },
];

export {
  antForm,
  componentList,
  inputComponentList,
  selectComponentList,
  layoutComponentList,
};
