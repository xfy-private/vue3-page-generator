import {
  Slot,
} from 'vue';

type colType = {
  offset: number;
  span: number;
};

type baseFormType = {
  name: string;
  model: string;
  rules: string;
  ref: string;
  disabled: boolean;
  gutter: [number, number]
};

type baseComponentType = {
  icon: string;
  title: string;
};

type antFormType = {
  hideRequiredMark: boolean;
  labelAlign: 'left' | 'right';
  layout: 'horizontal' | 'vertical' | 'inline';
  labelCol: colType;
  wrapperCol: colType;
  colon: boolean;
  validateOnRuleChange: boolean;
  scrollToFirstError: boolean | {
    [key: string]: unknown
  };
  validateTrigger: 'blur' | 'change' | ['blur', 'change'];
} & baseFormType

type baseFormItemType = {
  label: string;
  rules: Array<{
    [key: string]: string
  }> | {
    [key: string]: string
  };
  required: boolean;
  size: 'large' | 'default' | 'small';
};

type antTagType = 'a-auto-complete' | 'a-cascader' | 'a-checkbox-group' | 'a-checkbox' | 'a-date-picker' | 'a-month-picker' |
'a-range-picker' | 'a-week-picker' | 'a-input' | 'a-input-password' | 'a-textarea' | 'a-input-search' |
'a-input-number' | 'a-mentions' | 'a-radio-group' | 'a-radio' | 'a-rate' | 'a-select' | 'a-slider' | 'a-switch' |
'a-time-picker' | 'a-tree-select' | 'a-upload' | 'a-row' | 'a-text';

type antFormItemType = {
  layout: 'col' | 'row' | 'raw'
  name: string;
  autoLink: boolean;
  colon: boolean;
  extra: string | Slot;
  hasFeedback: boolean;
  help: string | Slot;
  htmlFor: string;
  labelCol: colType;
  labelAlign: 'left' | 'right';
  validateStatus: 'success' | 'warning' | 'error' | 'validating' | '';
  wrapperCol: colType;
  validateFirst: boolean;
  validateTrigger: 'blur' | 'change' | ['blur', 'change'];
} & baseFormItemType;

type antComponentType = {
  form: antFormItemType,
  tag: antTagType,
  slots: Array<Slot>,
  config: {
    vModel?: string
  }
} & baseComponentType;

type antInputType = {
  addonAfter: string;
  addonBefore: string;
  defaultValue: string;
  id: string;
  disabled: boolean;
  maxlength: number;
  prefix: string;
  suffix: string;
  allowClear: boolean;
  placeholder: string;
};

type antSingleInputComponentType = {
  config: {
    type: string;
  } & antInputType
} & antComponentType;

type antMultiInputComponentType = {
  config: {
    defaultValue: string;
    showCount: boolean;
    allowClear: boolean;
    autosize: boolean;
    maxlength: number;
    disabled: boolean;
    placeholder: string;
  }
} & antComponentType;

type antSearchInputComponentType = {
  config: {
    enterButton: boolean;
    loading: boolean;
  } & antInputType;
} & antComponentType;

type antPasswordInputComponentType = {
  config: {
    visibilityToggle: boolean;
  } & antInputType;
} & antComponentType;

type antAutoCompleteComponentType = {
  config: {
    allowClear: boolean;
    autofocus: boolean;
    backfill: boolean;
    '#default': string;
    defaultActiveFirstOption: boolean;
    disabled: boolean;
    filterOption: boolean;
    optionLabelProp: string;
    placeholder: string;
    defaultOpen: boolean;
    open: boolean;
  };
} & antComponentType;

type antNumberInputComponentType = {
  config: {
    autofocus: boolean;
    defaultValue: number;
    disabled: boolean;
    max: number;
    min: number;
    precision: number;
    decimalSeparator: string;
    step: number | string;
  };
} & antComponentType;

type antMentionsInputComponentType = {
  config: {
    autofocus: boolean;
    defaultValue: string;
    filterOption: boolean;
    placement: 'top' | 'bottom';
    prefix: Array<string>;
    split: string;
  };
} & antComponentType;

type antTextComponentType = {
  config: {
  };
} & antComponentType;

type antSelectComponentType = {
  config: {
    allowClear: boolean;
    autoClearSearchValue: boolean;
    autofocus: boolean;
    bordered: boolean;
    defaultActiveFirstOption: boolean;
    disabled: boolean;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean;
    filterOption: boolean;
    firstActiveValue: Array<string>;
    labelInValue: boolean;
    maxTagCount: number;
    maxTagTextLength: number;
    mode: 'multiple' | 'tags' | 'combobox' | null;
    notFoundContent: string;
    optionFilterProp: string;
    optionLabelProp: string;
    placeholder: string;
    showSearch: boolean;
    showArrow: boolean;
    tokenSeparators: Array<string>;
    defaultOpen: boolean;
    open: boolean;
  };
} & antComponentType;

type antCascaderComponentType = {
  config: {
    allowClear: boolean;
    autofocus: boolean;
    changeOnSelect: boolean;
    defaultValue: string[] | number[];
    disabled: boolean;
    expandTrigger: 'click' | 'hover';
    notFoundContent: string;
    placeholder: string;
    popupClassName: string;
    popupPlacement: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    popupVisible: boolean;
    suffixIcon: string;
  };
} & antComponentType;

type antTreeSelectComponentType = {
  config: {
    allowClear: boolean;
    defaultValue: Array<string>;
    disabled: boolean;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean;
    labelInValue: boolean;
    maxTagCount: number;
    multiple: boolean;
    placeholder: string;
    searchPlaceholder: string;
    searchValue: string;
    treeIcon: boolean;
    showCheckedStrategy: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD';
    showSearch: boolean;
    treeCheckable: boolean;
    treeCheckStrictly: boolean;
    treeDataSimpleMode: boolean;
    treeDefaultExpandAll: boolean;
    treeNodeFilterProp: string;
    treeNodeLabelProp: string;
  };
} & antComponentType;

type antRadioGroupComponentType = {
  config: {
    defaultValue: unknown;
    disabled: boolean;
    name: string;
    buttonStyle: 'outline' | 'solid';
  };
} & antComponentType;

type antCheckboxComponentType = {
  config: {
    disabled: boolean;
    name: string;
  };
} & antComponentType;

type antSwitchComponentType = {
  config: {
    autofocus: boolean;
    checked: boolean;
    disabled: boolean;
    loading: boolean;
    checkedChildren: string;
    unCheckedChildren: string;
    checkedValue: boolean;
    unCheckedValue: boolean;
  };
} & antComponentType;

type antSliderComponentType = {
  config: {
    autofocus: boolean;
    disabled: boolean;
    dots: boolean;
    included: boolean;
    max: number;
    min: number;
    range: boolean;
    reverse: boolean;
    step: number;
    vertical: boolean;
    tooltipPlacement: string;
    tooltipVisible: boolean;
  };
} & antComponentType;

type antDateComponentType = {
  allowClear: boolean;
  autofocus: boolean;
  disabled: boolean;
  mode: 'time' | 'date' | 'month' | 'year' | 'decade';
  open: boolean;
  placeholder: string;
  dropdownClassName: string;
  inputReadOnly: boolean;
  valueFormat: string;
};

type antTimePickerComponentType = {
  config: {
    allowClear: boolean;
    autofocus: boolean;
    clearText: string;
    disabled: boolean;
    format: string;
    hideDisabledOptions: boolean;
    hourStep: number;
    inputReadOnly: boolean;
    minuteStep: number;
    open: boolean;
    placeholder: string;
    popupClassName: string;
    secondStep: number;
    suffixIcon: string;
    clearIcon: string;
    use12Hours: boolean;
    valueFormat: string;
  };
} & antComponentType;

type antDatePickerComponentType = {
  config: {
    defaultPickerValue: unknown;
    format: string;
    showTime: boolean;
    showToday: boolean;
  } & antDateComponentType;
} & antComponentType;

type antRangePickerComponentType = {
  config: {
    defaultPickerValue: unknown;
    format: string;
    separator: string;
    showTime: boolean;
  } & antDateComponentType;
} & antComponentType;

type antMonthPickerComponentType = {
  config: {
    defaultPickerValue: unknown;
    format: string;
  } & antDateComponentType;
} & antComponentType;

type antWeekPickerComponentType = {
  config: {
    defaultPickerValue: unknown;
    format: string;
  } & antDateComponentType;
} & antComponentType;

type antRateComponentType = {
  config: {
    allowClear: boolean;
    allowHalf: boolean;
    autofocus: boolean;
    character: string;
    count: number;
    disabled: boolean;
  };
} & antComponentType;

type antUploadComponentType = {
  config: {
    accept: string;
    action: string;
    method: string;
    directory: boolean;
    disabled: boolean;
    listType: string;
    multiple: boolean;
    name: string;
    showUploadList: boolean;
    supportServerRender: boolean;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
  };
} & antComponentType;

type RowComponentType = {
} & antComponentType;

export {
  antTagType,
  antComponentType,
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
};
