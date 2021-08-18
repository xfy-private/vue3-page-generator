import {
  antFormType,
  antFormItemType,
  antSingleInputComponentType,
  antMultiInputComponentType,
  antSearchInputComponentType,
  antPasswordInputComponentType,
  antAutoCompleteComponentType,
  antNumberInputComponentType,
  antMentionsInputComponentType,
  antTextComponentType,
  antSelectComponentType,
  antTreeSelectComponentType,
  antRadioGroupComponentType,
  antCheckboxComponentType,
  antSwitchComponentType,
  antSliderComponentType,
  antDatePickerComponentType,
  antRangePickerComponentType,
  antTimePickerComponentType,
  antMonthPickerComponentType,
  antWeekPickerComponentType,
  antRateComponentType,
  antUploadComponentType,
  RowComponentType,
} from '@/types/config';

const baseForm = {
  name: 'form',
  model: 'model',
  rules: 'rules',
  ref: 'ref',
  disabled: false,
  size: 'default',
};

const antForm: antFormType = {
  ...baseForm,
  size: 'default',
  hideRequiredMark: false,
  labelAlign: 'right',
  layout: 'horizontal',
  labelCol: {},
  wrapperCol: {},
  colon: true,
  validateOnRuleChange: true,
  scrollToFirstError: false,
  validateTrigger: 'change',
};

const antFormItem: antFormItemType = {
  label: '',
  rules: [],
  extra: '',
  help: '',
  htmlFor: '',
  labelCol: {},
  wrapperCol: {},
  icon: '',
  title: '',
  name: '',
  autoLink: false,
  colon: antForm.colon,
  hasFeedback: false,
  labelAlign: 'right',
  required: false,
  validateFirst: false,
  validateTrigger: 'change',
  validateStatus: '',
};

const antInputComponentList: Array<antSingleInputComponentType | antMultiInputComponentType |
antSearchInputComponentType | antPasswordInputComponentType | antAutoCompleteComponentType |
antNumberInputComponentType | antMentionsInputComponentType | antTextComponentType> = [
  {
    ...antFormItem,
    icon: 'single',
    title: '单行输入',
    name: 'single',
    config: {
      addonAfter: {
        value: '',
        type: 'input',
      },
      addonBefore: {
        value: '',
        type: 'input',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      id: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      maxlength: {
        value: null,
        type: 'number',
      },
      prefix: {
        value: '',
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      suffix: {
        value: '',
        type: 'input',
      },
      allowClear: {
        value: false,
        type: 'switch',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      type: {
        value: 'text',
        type: 'radio',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'multi',
    title: '多行输入',
    name: 'multi',
    config: {
      defaultValue: {
        value: '',
        type: 'input',
      },
      showCount: {
        value: false,
        type: 'switch',
      },
      allowClear: {
        value: false,
        type: 'switch',
      },
      autosize: {
        value: false,
        type: 'switch',
      },
      maxlength: {
        value: null,
        type: 'number',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      size: {
        value: 'small',
        type: 'radio',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'search',
    title: '搜索输入',
    name: 'search',
    config: {
      addonAfter: {
        value: '',
        type: 'input',
      },
      addonBefore: {
        value: '',
        type: 'input',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      id: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      maxlength: {
        value: null,
        type: 'number',
      },
      prefix: {
        value: '',
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      suffix: {
        value: '',
        type: 'input',
      },
      allowClear: {
        value: false,
        type: 'switch',
      },
      enterButton: {
        value: false,
        type: 'switch',
      },
      loading: {
        value: false,
        type: 'switch',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'password',
    title: '密码输入',
    name: 'password',
    config: {
      addonAfter: {
        value: '',
        type: 'input',
      },
      addonBefore: {
        value: '',
        type: 'input',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      id: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      maxlength: {
        value: null,
        type: 'number',
      },
      prefix: {
        value: '',
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      suffix: {
        value: '',
        type: 'input',
      },
      allowClear: {
        value: false,
        type: 'switch',
      },
      visibilityToggle: {
        value: true,
        type: 'switch',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'single',
    title: '建议输入',
    name: 'auto',
    config: {
      allowClear: {
        value: false,
        type: 'switch',
      },
      autofocus: {
        value: false,
        type: 'switch',
      },
      backfill: {
        value: false,
        type: 'switch',
      },
      '#default': {
        value: '',
        type: 'input',
      },
      options: {
        value: {},
        type: 'input',
      },
      dropdownMenuStyle: {
        value: {},
        type: 'input',
      },
      defaultActiveFirstOption: {
        value: true,
        type: 'switch',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      filterOption: {
        value: true,
        type: 'switch',
      },
      optionLabelProp: {
        value: 'children',
        type: 'input',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      defaultOpen: {
        value: false,
        type: 'switch',
      },
      open: {
        value: false,
        type: 'switch',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'number',
    title: '数字输入',
    name: 'number',
    config: {
      autofocus: {
        value: false,
        type: 'switch',
      },
      defaultValue: {
        value: null,
        type: 'number',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      formatter: {
        value: null,
        type: 'input',
      },
      max: {
        value: Infinity,
        type: 'number',
      },
      min: {
        value: -Infinity,
        type: 'number',
      },
      parser: {
        value: null,
        type: 'input',
      },
      precision: {
        value: null,
        type: 'number',
      },
      decimalSeparator: {
        value: null,
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      step: {
        value: 1,
        type: 'number',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'mentions',
    title: '触发输入',
    name: 'mentions',
    config: {
      autofocus: {
        value: false,
        type: 'switch',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      filterOption: {
        value: false,
        type: 'switch',
      },
      notFoundContent: {
        value: null,
        type: 'input',
      },
      placement: {
        value: 'bottom',
        type: 'radio',
      },
      prefix: {
        value: '@',
        type: 'input',
      },
      split: {
        value: ' ',
        type: 'input',
      },
      validateSearch: {
        value: null,
        type: 'input',
      },
      getPopupContainer: {
        value: null,
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    ...antFormItem,
    icon: 'text',
    title: '富文编辑',
    name: 'text',
    config: {},
  },
];

const selectComponentList: Array<antSelectComponentType | antTreeSelectComponentType |
antRadioGroupComponentType | antCheckboxComponentType | antSwitchComponentType |
antSliderComponentType | antDatePickerComponentType | antRangePickerComponentType |
antTimePickerComponentType | antMonthPickerComponentType | antWeekPickerComponentType |
antRateComponentType | antUploadComponentType> = [
  {
    icon: 'select',
    title: '下拉选择',
  },
  {
    icon: 'tree',
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
    icon: 'month',
    title: '月份选择',
  },
  {
    icon: 'week',
    title: '周数选择',
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
    icon: 'rate',
    title: '评分',
  },
  {
    icon: 'upload',
    title: '上传',
  },
];

const layoutComponentList: Array<RowComponentType> = [];

const componentList: Array<{
  title: string,
  icon: string,
  componentList: Array<unknown>
}> = [
  {
    icon: 'input',
    title: '输入型组件',
    componentList: antInputComponentList,
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
  antInputComponentList,
  selectComponentList,
  layoutComponentList,
};
