import {
  antFormType,
  antFormItemType,
  antInputType,
  antSingleInputComponentType,
  antMultiInputComponentType,
  antSearchInputComponentType,
  antPasswordInputComponentType,
  antAutoCompleteComponentType,
  antNumberInputComponentType,
  antMentionsInputComponentType,
  antTextComponentType,
  antSelectComponentType,
  antCascaderComponentType,
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
  antDateComponentType,
  antRateComponentType,
  antUploadComponentType,
  RowComponentType,
} from '@/types/config';

const antForm: antFormType = {
  name: 'antForm',
  model: 'antModel',
  rules: 'antRules',
  ref: 'formRef',
  disabled: false,
  hideRequiredMark: false,
  labelAlign: 'right',
  layout: 'horizontal',
  labelCol: {
    span: 5,
    offset: 0,
  },
  wrapperCol: {
    span: 19,
    offset: 0,
  },
  gutter: [0, 0],
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
  labelCol: {
    span: 5,
    offset: 0,
  },
  wrapperCol: {
    span: 19,
    offset: 0,
  },
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

const antInput: antInputType = {
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
};

const antDate: antDateComponentType = {
  allowClear: {
    value: true,
    type: 'switch',
  },
  autofocus: {
    value: false,
    type: 'switch',
  },
  dateRender: {
    value: null,
    type: 'input',
  },
  disabled: {
    value: false,
    type: 'switch',
  },
  disabledDate: {
    value: null,
    type: 'input',
  },
  getCalendarContainer: {
    value: null,
    type: 'input',
  },
  locale: {
    value: {},
    type: 'input',
  },
  mode: {
    value: 'date',
    type: 'radio',
  },
  open: {
    value: false,
    type: 'switch',
  },
  placeholder: {
    value: '',
    type: 'input',
  },
  popupStyle: {
    value: {},
    type: 'input',
  },
  dropdownClassName: {
    value: '',
    type: 'input',
  },
  suffixIcon: {
    value: null,
    type: 'input',
  },
  inputReadOnly: {
    value: false,
    type: 'switch',
  },
  align: {
    value: {},
    type: 'input',
  },
  valueFormat: {
    value: '',
    type: 'input',
  },
  size: {
    value: 'default',
    type: 'radio',
  },
};

const antInputComponentList: Array<antSingleInputComponentType | antMultiInputComponentType |
antSearchInputComponentType | antPasswordInputComponentType | antAutoCompleteComponentType |
antNumberInputComponentType | antMentionsInputComponentType | antTextComponentType> = [
  {
    form: {
      ...antFormItem,
      label: '单行输入',
      name: 'single',
    },
    icon: 'single',
    title: '单行输入',
    tag: 'a-input',
    slots: [],
    config: {
      ...antInput,
      type: {
        value: 'text',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '多行输入',
      name: 'multi',
    },
    icon: 'multi',
    title: '多行输入',
    tag: 'a-textarea',
    slots: [],
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
    form: {
      ...antFormItem,
      label: '搜索输入',
      name: 'search',
    },
    icon: 'search',
    title: '搜索输入',
    tag: 'a-input-search',
    slots: [],
    config: {
      ...antInput,
      enterButton: {
        value: false,
        type: 'switch',
      },
      loading: {
        value: false,
        type: 'switch',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '密码输入',
      name: 'password',
    },
    icon: 'password',
    title: '密码输入',
    tag: 'a-input-password',
    slots: [],
    config: {
      ...antInput,
      visibilityToggle: {
        value: true,
        type: 'switch',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '建议输入',
      name: 'auto',
    },
    icon: 'auto',
    title: '建议输入',
    tag: 'a-auto-complete',
    slots: [],
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
    form: {
      ...antFormItem,
      label: '数字输入',
      name: 'number',
    },
    icon: 'number',
    title: '数字输入',
    tag: 'a-input-number',
    slots: [],
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
    form: {
      ...antFormItem,
      label: '触发输入',
      name: 'mentions',
    },
    icon: 'mentions',
    title: '触发输入',
    tag: 'a-mentions',
    slots: [],
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
  // {
  //   form: {
  //     ...antFormItem,
  //     label: '富文编辑',
  //     name: 'text',
  //   },
  //   icon: 'text',
  //   title: '富文编辑',
  //   tag: 'a-text',
  //   slots: [],
  //   config: {},
  // },
];

const selectComponentList: Array<antSelectComponentType | antCascaderComponentType |
antTreeSelectComponentType | antRadioGroupComponentType | antCheckboxComponentType |
antSwitchComponentType | antSliderComponentType | antDatePickerComponentType |
antRangePickerComponentType | antTimePickerComponentType | antMonthPickerComponentType |
antWeekPickerComponentType | antRateComponentType | antUploadComponentType> = [
  {
    form: {
      ...antFormItem,
      label: '下拉选择',
      name: 'select',
    },
    icon: 'select',
    title: '下拉选择',
    tag: 'a-select',
    slots: [],
    config: {
      allowClear: {
        value: false,
        type: 'switch',
      },
      autoClearSearchValue: {
        value: true,
        type: 'switch',
      },
      autofocus: {
        value: false,
        type: 'switch',
      },
      bordered: {
        value: true,
        type: 'switch',
      },
      defaultActiveFirstOption: {
        value: true,
        type: 'switch',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      dropdownClassName: {
        value: '',
        type: 'input',
      },
      dropdownMatchSelectWidth: {
        value: true,
        type: 'switch',
      },
      dropdownRender: {
        value: null,
        type: 'input',
      },
      dropdownStyle: {
        value: {},
        type: 'input',
      },
      dropdownMenuStyle: {
        value: {},
        type: 'input',
      },
      filterOption: {
        value: true,
        type: 'switch',
      },
      firstActiveValue: {
        value: '',
        type: 'input',
      },
      getPopupContainer: {
        value: null,
        type: 'input',
      },
      labelInValue: {
        value: false,
        type: 'switch',
      },
      maxTagCount: {
        value: null,
        type: 'number',
      },
      maxTagPlaceholder: {
        value: null,
        type: 'input',
      },
      maxTagTextLength: {
        value: null,
        type: 'number',
      },
      mode: {
        value: null,
        type: 'radio',
      },
      notFoundContent: {
        value: 'Not Found',
        type: 'input',
      },
      optionFilterProp: {
        value: 'value',
        type: 'input',
      },
      optionLabelProp: {
        value: 'children',
        type: 'input',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      showSearch: {
        value: false,
        type: 'switch',
      },
      showArrow: {
        value: true,
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      suffixIcon: {
        value: null,
        type: 'input',
      },
      removeIcon: {
        value: null,
        type: 'input',
      },
      clearIcon: {
        value: null,
        type: 'input',
      },
      menuItemSelectedIcon: {
        value: null,
        type: 'input',
      },
      tokenSeparators: {
        value: [],
        type: 'input',
      },
      options: {
        value: [],
        type: 'input',
      },
      option: {
        value: null,
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
    },
  },
  {
    form: {
      ...antFormItem,
      label: '级联选择',
      name: 'cascader',
    },
    icon: 'cascader',
    title: '级联选择',
    tag: 'a-cascader',
    slots: [],
    config: {
      allowClear: {
        value: true,
        type: 'switch',
      },
      autofocus: {
        value: false,
        type: 'switch',
      },
      changeOnSelect: {
        value: false,
        type: 'switch',
      },
      defaultValue: {
        value: [],
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      displayRender: {
        value: null,
        type: 'input',
      },
      expandTrigger: {
        value: 'click',
        type: 'radio',
      },
      fieldNames: {
        value: null,
        type: 'input',
      },
      getPopupContainer: {
        value: null,
        type: 'input',
      },
      loadData: {
        value: null,
        type: 'input',
      },
      notFoundContent: {
        value: '',
        type: 'input',
      },
      options: {
        value: {},
        type: 'input',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      popupClassName: {
        value: '',
        type: 'input',
      },
      popupStyle: {
        value: {},
        type: 'input',
      },
      popupPlacement: {
        value: 'bottomLeft',
        type: 'radio',
      },
      popupVisible: {
        value: false,
        type: 'switch',
      },
      showSearch: {
        value: false,
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'switch',
      },
      suffixIcon: {
        value: '',
        type: 'input',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '树型选择',
      name: 'tree',
    },
    icon: 'tree',
    title: '树型选择',
    tag: 'a-tree-select',
    slots: [],
    config: {
      allowClear: {
        value: false,
        type: 'switch',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      dropdownClassName: {
        value: '',
        type: 'input',
      },
      dropdownMatchSelectWidth: {
        value: true,
        type: 'switch',
      },
      dropdownStyle: {
        value: {},
        type: 'input',
      },
      filterTreeNode: {
        value: false,
        type: 'switch',
      },
      getPopupContainer: {
        value: null,
        type: 'input',
      },
      labelInValue: {
        value: false,
        type: 'switch',
      },
      loadData: {
        value: () => [],
        type: 'input',
      },
      maxTagCount: {
        value: null,
        type: 'number',
      },
      maxTagPlaceholder: {
        value: null,
        type: 'input',
      },
      multiple: {
        value: false,
        type: 'switch',
      },
      placeholder: {
        value: '',
        type: 'input',
      },
      searchPlaceholder: {
        value: '',
        type: 'input',
      },
      searchValue: {
        value: '',
        type: 'input',
      },
      treeIcon: {
        value: false,
        type: 'switch',
      },
      showCheckedStrategy: {
        value: 'SHOW_CHILD',
        type: 'radio',
      },
      showSearch: {
        value: false,
        type: 'switch',
      },
      suffixIcon: {
        value: null,
        type: 'input',
      },
      treeCheckable: {
        value: false,
        type: 'switch',
      },
      treeCheckStrictly: {
        value: false,
        type: 'switch',
      },
      treeData: {
        value: [],
        type: 'input',
      },
      replaceFields: {
        value: {},
        type: 'input',
      },
      treeDataSimpleMode: {
        value: false,
        type: 'switch',
      },
      treeDefaultExpandAll: {
        value: false,
        type: 'switch',
      },
      treeDefaultExpandedKeys: {
        value: [],
        type: 'input',
      },
      treeExpandedKeys: {
        value: [],
        type: 'input',
      },
      treeNodeFilterProp: {
        value: 'value',
        type: 'input',
      },
      treeNodeLabelProp: {
        value: 'title',
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '单选框组',
      name: 'radio',
    },
    icon: 'radio',
    title: '单选框组',
    tag: 'a-radio',
    slots: [],
    config: {
      defaultValue: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      name: {
        value: '',
        type: 'input',
      },
      options: {
        value: [],
        type: 'input',
      },
      buttonStyle: {
        value: 'outline',
        type: 'radio',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '复选框组',
      name: 'checkbox',
    },
    icon: 'checkbox',
    title: '复选框组',
    tag: 'a-checkbox-group',
    slots: [],
    config: {
      disabled: {
        value: false,
        type: 'switch',
      },
      name: {
        value: '',
        type: 'input',
      },
      options: {
        value: [],
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '滑动开关',
      name: 'switch',
    },
    icon: 'switch',
    title: '滑动开关',
    tag: 'a-switch',
    slots: [],
    config: {
      autofocus: {
        value: false,
        type: 'switch',
      },
      checked: {
        value: false,
        type: 'switch',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      loading: {
        value: false,
        type: 'switch',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
      checkedChildren: {
        value: '',
        type: 'input',
      },
      unCheckedChildren: {
        value: '',
        type: 'input',
      },
      checkedValue: {
        value: true,
        type: 'switch',
      },
      unCheckedValue: {
        value: false,
        type: 'switch',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '滑动输入',
      name: 'slider',
    },
    icon: 'slider',
    title: '滑动输入',
    tag: 'a-slider',
    slots: [],
    config: {
      autofocus: {
        value: false,
        type: 'switch',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      dots: {
        value: false,
        type: 'switch',
      },
      included: {
        value: false,
        type: 'switch',
      },
      marks: {
        value: null,
        type: 'switch',
      },
      max: {
        value: 100,
        type: 'number',
      },
      min: {
        value: 0,
        type: 'number',
      },
      range: {
        value: false,
        type: 'switch',
      },
      reverse: {
        value: false,
        type: 'switch',
      },
      step: {
        value: 1,
        type: 'number',
      },
      tipFormatter: {
        value: null,
        type: 'input',
      },
      vertical: {
        value: false,
        type: 'switch',
      },
      tooltipPlacement: {
        value: '',
        type: 'input',
      },
      tooltipVisible: {
        value: false,
        type: 'switch',
      },
      getTooltipPopupContainer: {
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
    form: {
      ...antFormItem,
      label: '日期选择',
      name: 'date',
    },
    icon: 'date',
    title: '日期选择',
    tag: 'a-date-picker',
    slots: [],
    config: {
      ...antDate,
      defaultPickerValue: {
        value: '',
        type: 'input',
      },
      disabledTime: {
        value: null,
        type: 'input',
      },
      format: {
        value: '',
        type: 'input',
      },
      renderExtraFooter: {
        value: null,
        type: 'input',
      },
      showTime: {
        value: false,
        type: 'switch',
      },
      showToday: {
        value: true,
        type: 'switch',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '时间选择',
      name: 'time',
    },
    icon: 'time',
    title: '时间选择',
    tag: 'a-time-picker',
    slots: [],
    config: {
      addon: {
        value: null,
        type: 'input',
      },
      allowClear: {
        value: true,
        type: 'switch',
      },
      autofocus: {
        value: false,
        type: 'switch',
      },
      clearText: {
        value: 'clear',
        type: 'input',
      },
      defaultOpenValu: {
        value: '',
        type: 'input',
      },
      defaultValue: {
        value: '',
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      disabledHours: {
        value: null,
        type: 'input',
      },
      disabledMinutes: {
        value: null,
        type: 'input',
      },
      disabledSeconds: {
        value: null,
        type: 'input',
      },
      format: {
        value: '',
        type: 'input',
      },
      getPopupContainer: {
        value: null,
        type: 'input',
      },
      hideDisabledOptions: {
        value: false,
        type: 'switch',
      },
      hourStep: {
        value: 1,
        type: 'number',
      },
      inputReadOnly: {
        value: false,
        type: 'switch',
      },
      minuteStep: {
        value: 1,
        type: 'number',
      },
      open: {
        value: false,
        type: 'switch',
      },
      placeholder: {
        value: '请选择时间',
        type: 'input',
      },
      popupClassName: {
        value: '',
        type: 'input',
      },
      popupStyle: {
        value: {},
        type: 'input',
      },
      secondStep: {
        value: 1,
        type: 'number',
      },
      suffixIcon: {
        value: '',
        type: 'input',
      },
      clearIcon: {
        value: '',
        type: 'input',
      },
      use12Hours: {
        value: false,
        type: 'switch',
      },
      align: {
        value: {},
        type: 'input',
      },
      valueFormat: {
        value: '',
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '月份选择',
      name: 'month',
    },
    icon: 'month',
    title: '月份选择',
    tag: 'a-month-picker',
    slots: [],
    config: {
      ...antDate,
      defaultPickerValue: {
        value: '',
        type: 'input',
      },
      format: {
        value: 'YYYY-MM',
        type: 'input',
      },
      monthCellContentRender: {
        value: null,
        type: 'input',
      },
      renderExtraFooter: {
        value: null,
        type: 'input',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '触发输入',
      name: '周数选择',
    },
    icon: 'week',
    title: '周数选择',
    tag: 'a-week-picker',
    slots: [],
    config: {
      ...antDate,
      defaultPickerValue: {
        value: '',
        type: 'input',
      },
      format: {
        value: '',
        type: 'input',
      },
      renderExtraFooter: {
        value: null,
        type: 'input',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '日期范围',
      name: 'DateScope',
    },
    icon: 'DateScope',
    title: '日期范围',
    tag: 'a-range-picker',
    slots: [],
    config: {
      ...antDate,
      defaultPickerValue: {
        value: '',
        type: 'input',
      },
      disabledTime: {
        value: null,
        type: 'input',
      },
      format: {
        value: '',
        type: 'input',
      },
      ranges: {
        value: {},
        type: 'input',
      },
      renderExtraFooter: {
        value: null,
        type: 'input',
      },
      separator: {
        value: '',
        type: 'input',
      },
      showTime: {
        value: false,
        type: 'switch',
      },
    },
  },
  // {
  //   icon: 'TimeScope',
  //   title: '时间范围',
  // },
  {
    form: {
      ...antFormItem,
      label: '评分',
      name: 'rate',
    },
    icon: 'rate',
    title: '评分',
    tag: 'a-rate',
    slots: [],
    config: {
      allowClear: {
        value: true,
        type: 'switch',
      },
      allowHalf: {
        value: false,
        type: 'switch',
      },
      autofocus: {
        value: false,
        type: 'switch',
      },
      character: {
        value: '',
        type: 'input',
      },
      count: {
        value: 5,
        type: 'number',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      tooltips: {
        value: [],
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
  {
    form: {
      ...antFormItem,
      label: '上传',
      name: 'upload',
    },
    icon: 'upload',
    title: '上传',
    tag: 'a-upload',
    slots: [],
    config: {
      accept: {
        value: '',
        type: 'input',
      },
      action: {
        value: '',
        type: 'input',
      },
      method: {
        value: 'post',
        type: 'input',
      },
      directory: {
        value: false,
        type: 'switch',
      },
      beforeUpload: {
        value: null,
        type: 'input',
      },
      customRequest: {
        value: null,
        type: 'input',
      },
      data: {
        value: {},
        type: 'input',
      },
      disabled: {
        value: false,
        type: 'switch',
      },
      fileList: {
        value: [],
        type: 'input',
      },
      headers: {
        value: {},
        type: 'input',
      },
      listType: {
        value: 'text',
        type: 'input',
      },
      multiple: {
        value: false,
        type: 'switch',
      },
      name: {
        value: 'file',
        type: 'input',
      },
      previewFile: {
        value: null,
        type: 'input',
      },
      showUploadList: {
        value: true,
        type: 'switch',
      },
      supportServerRender: {
        value: false,
        type: 'switch',
      },
      withCredentials: {
        value: false,
        type: 'switch',
      },
      openFileDialogOnClick: {
        value: true,
        type: 'switch',
      },
      remove: {
        value: null,
        type: 'input',
      },
      transformFile: {
        value: null,
        type: 'input',
      },
      size: {
        value: 'default',
        type: 'radio',
      },
    },
  },
];

const layoutComponentList: Array<RowComponentType> = [];

const componentList: Array<{
  title: string,
  icon: string,
  componentList: Array<antSingleInputComponentType | antMultiInputComponentType |
  antSearchInputComponentType | antPasswordInputComponentType | antAutoCompleteComponentType |
  antNumberInputComponentType | antMentionsInputComponentType | antTextComponentType |
  antSelectComponentType | antTreeSelectComponentType |
  antRadioGroupComponentType | antCheckboxComponentType | antSwitchComponentType |
  antSliderComponentType | antDatePickerComponentType | antRangePickerComponentType |
  antTimePickerComponentType | antMonthPickerComponentType | antWeekPickerComponentType |
  antRateComponentType | antUploadComponentType | RowComponentType>
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
