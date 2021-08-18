import {
  Slot, RendererNode, VNode, VNodeProps,
} from 'vue';
import { MentionsProps } from 'ant-design-vue';

type colType = {
  flex: string|number;
  offset: 0;
  order: 0;
  pull: 0;
  push: 0;
  span: 0;
};

type baseFormType = {
  name: string;
  model: string;
  rules: string;
  ref: string;
  disabled: boolean;
  size: 'large' | 'default' | 'small';
};

type baseComponentType = {
  icon: string;
  title: string;
};

type antFormType = {
  hideRequiredMark: boolean;
  labelAlign: 'left' | 'right';
  layout: 'horizontal' | 'vertical' | 'inline';
  labelCol: colType | {
    xs?: colType;
    sm?: colType;
    md?: colType;
    lg?: colType;
    xl?: colType;
    xxl?: colType;
  };
  wrapperCol: colType | {
    xs?: colType;
    sm?: colType;
    md?: colType;
    lg?: colType;
    xl?: colType;
    xxl?: colType;
  };
  colon: boolean;
  validateOnRuleChange: boolean;
  scrollToFirstError: boolean | {
    [key: string]: unknown
  };
  validateTrigger: 'blur' | 'change' | ['blur', 'change'];
} & baseFormType

type baseFormItemType = {
  label: string | Slot;
  rules: Array<{
    [key: string]: string
  }> | {
    [key: string]: string
  };
  required: boolean;
} & baseComponentType;

type antFormItemType = {
  name: string;
  autoLink: boolean;
  colon: boolean;
  extra: string | Slot;
  hasFeedback: boolean;
  help: string | Slot;
  htmlFor: string;
  labelCol: colType | {
    xs?: colType;
    sm?: colType;
    md?: colType;
    lg?: colType;
    xl?: colType;
    xxl?: colType;
  };
  labelAlign: 'left' | 'right';
  validateStatus: 'success' | 'warning' | 'error' | 'validating' | '';
  wrapperCol: colType | {
    xs?: colType;
    sm?: colType;
    md?: colType;
    lg?: colType;
    xl?: colType;
    xxl?: colType;
  };
  validateFirst: boolean;
  validateTrigger: 'blur' | 'change' | ['blur', 'change'];
} & baseFormItemType;

type baseItemType = {
  type: 'input' | 'select' | 'switch' | 'number' | 'radio'
}

type antInputType = {
  addonAfter: {
    value: string | Slot,
  } & baseItemType;
  addonBefore: {
    value: string | Slot,
  } & baseItemType;
  defaultValue: {
    value: string,
  } & baseItemType;
  id: {
    value: string
  } & baseItemType;
  disabled: {
    value: boolean;
  } & baseItemType;
  maxlength: {
    value: number | null;
  } & baseItemType;
  prefix: {
    value: string | Slot;
  } & baseItemType;
  size: {
    value: 'large' | 'default' | 'small';
  } & baseItemType;
  suffix: {
    value: string | Slot;
  } & baseItemType;
  allowClear: {
    value: boolean;
  } & baseItemType;
  placeholder: {
    value: string;
  } & baseItemType;
};

type antSingleInputComponentType = {
  config: {
    type: {
      value: string;
    } & baseItemType;
  } & antInputType
} & antFormItemType;

type antMultiInputComponentType = {
  config: {
    defaultValue: {
      value: string;
    } & baseItemType;
    showCount: {
      value: boolean;
    } & baseItemType;
    allowClear: {
      value: boolean;
    } & baseItemType;
    autosize: {
      value: boolean;
    } & baseItemType;
    maxlength: {
      value: number | null;
    } & baseItemType;
    disabled: {
      value: boolean;
    } & baseItemType;
    placeholder: {
      value: string;
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  }
} & antFormItemType;

type antSearchInputComponentType = {
  config: {
    enterButton: {
      value: boolean | Slot;
    } & baseItemType;
    loading: {
      value: boolean;
    } & baseItemType;
  } & antInputType;
} & antFormItemType;

type antPasswordInputComponentType = {
  config: {
    visibilityToggle: {
      value: boolean;
    } & baseItemType;
  } & antInputType;
} & antFormItemType;

type antAutoCompleteComponentType = {
  config: {
    allowClear: {
      value: boolean;
    } & baseItemType;
    autofocus: {
      value: boolean;
    } & baseItemType;
    backfill: {
      value: boolean;
    } & baseItemType;
    '#default': {
      value: HTMLInputElement | HTMLTextAreaElement | '';
    } & baseItemType;
    options: {
      value: Slot | {
        value?: string,
        text?: string,
      }
    } & baseItemType;
    dropdownMenuStyle: {
      value: {
        [key: string]: string | number
      }
    } & baseItemType;
    defaultActiveFirstOption: {
      value: boolean;
    } & baseItemType;
    disabled: {
      value: boolean;
    } & baseItemType;
    filterOption: {
      value: boolean | ((_inputValue: unknown, _option: unknown) => void);
    } & baseItemType;
    optionLabelProp: {
      value: string;
    } & baseItemType;
    placeholder: {
      value: string | Slot;
    } & baseItemType;
    defaultOpen: {
      value: boolean;
    } & baseItemType;
    open: {
      value: boolean;
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antNumberInputComponentType = {
  config: {
    autofocus: {
      value: boolean;
    } & baseItemType;
    defaultValue: {
      value: number | null;
    } & baseItemType;
    disabled: {
      value: boolean;
    } & baseItemType;
    formatter: {
      value: null | ((_value: number | string) => string);
    } & baseItemType;
    max: {
      value: number;
    } & baseItemType;
    min: {
      value: number;
    } & baseItemType;
    parser: {
      value: null | ((_value: string) => number);
    } & baseItemType;
    precision: {
      value: number | null;
    } & baseItemType;
    decimalSeparator: {
      value: string | null;
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
    step: {
      value: number|string;
    } & baseItemType;
  };
} & antFormItemType;

type antMentionsInputComponentType = {
  config: {
    autofocus: {
      value: boolean;
    } & baseItemType;
    defaultValue: {
      value: string;
    } & baseItemType;
    filterOption: {
      value: boolean | ((_input: string, _option: { value: string }) => boolean)
    } & baseItemType;
    notFoundContent: {
      value: RendererNode | null
    } & baseItemType;
    placement: {
      value: 'top' | 'bottom'
    } & baseItemType;
    prefix: {
      value: string | Array<string>
    } & baseItemType;
    split: {
      value: string
    } & baseItemType;
    validateSearch: {
      value: null | ((_text: string, _props: MentionsProps) => void)
    } & baseItemType;
    getPopupContainer: {
      value: null | (() => HTMLElement)
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antTextComponentType = {
  config: {
  };
} & antFormItemType;

type antSelectComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & baseItemType;
    autoClearSearchValue: {
      value: boolean
    } & baseItemType;
    autofocus: {
      value: boolean
    } & baseItemType;
    bordered: {
      value: boolean
    } & baseItemType;
    defaultActiveFirstOption: {
      value: boolean
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    dropdownClassName: {
      value: string
    } & baseItemType;
    dropdownMatchSelectWidth: {
      value: boolean
    } & baseItemType;
    dropdownRender: {
      value: ((_arg: { menuNode: VNode, _props: VNodeProps }) => VNode) | Slot
    } & baseItemType;
    dropdownStyle: {
      value: {
      [key: string]: number | string
    }
  } & baseItemType;
    dropdownMenuStyle: {
      value: {
      [key: string]: number | string
    }
  } & baseItemType;
    filterOption: {
      value: boolean | ((_inputValue: unknown, _option: unknown) => void)
    } & baseItemType;
    firstActiveValue: {
      value: string | Array<string>
    } & baseItemType;
    getPopupContainer: {
      value: () => HTMLElement
    } & baseItemType;
    labelInValue: {
      value: boolean
    } & baseItemType;
    maxTagCount: {
      value: number
    } & baseItemType;
    maxTagPlaceholder: {
      value: Slot | ((_omittedValues: unknown) => unknown)
    } & baseItemType;
    maxTagTextLength: {
      value: number
    } & baseItemType;
    mode: {
      value: 'multiple' | 'tags' | 'combobox'
    } & baseItemType;
    notFoundContent: {
      value: string | Slot
    } & baseItemType;
    optionFilterProp: {
      value: string
    } & baseItemType;
    optionLabelProp: {
      value: string
    } & baseItemType;
    placeholder: {
      value: string | Slot
    } & baseItemType;
    showSearch: {
      value: boolean
    } & baseItemType;
    showArrow: {
      value: boolean
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
    suffixIcon: {
      value: VNode | Slot
    } & baseItemType;
    removeIcon: {
      value: VNode | Slot
    } & baseItemType;
    clearIcon: {
      value: VNode | Slot
    } & baseItemType;
    menuItemSelectedIcon: {
      value: VNode | Slot
    } & baseItemType;
    tokenSeparators: {
      value: Array<string>
    } & baseItemType;
    options: {
      value: Array<{
      value: string, label: string, disabled: string, key: string, title: string}>
    } & baseItemType;
    option: {
      value: Slot
    } & baseItemType;
    defaultOpen: {
      value: boolean
    } & baseItemType;
    open: {
      value: boolean
    } & baseItemType;
  };
} & antFormItemType;

type antTreeSelectComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & baseItemType;
    defaultValue: {
      value: string | Array<string>
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    dropdownClassName: {
      value: string
    } & baseItemType;
    dropdownMatchSelectWidth: {
      value: boolean
    } & baseItemType;
    dropdownStyle: {
      value: {
      [key: string]: string | number
    }} & baseItemType;
    filterTreeNode: {
      value: boolean | ((_inputValue: string, _treeNode: unknown) => boolean)
    } & baseItemType;
    getPopupContainer: {
      value: () => HTMLElement
    } & baseItemType;
    labelInValue: {
      value: boolean
    } & baseItemType;
    loadData: {
      value: (_node: string) => unknown
    } & baseItemType;
    maxTagCount: {
      value: number
    } & baseItemType;
    maxTagPlaceholder: {
      value: Slot | ((_omittedValues: unknown) => unknown)
    } & baseItemType;
    multiple: {
      value: boolean
    } & baseItemType;
    placeholder: {
      value: string | Slot
    } & baseItemType;
    searchPlaceholder: {
      value: string | Slot
    } & baseItemType;
    searchValue: {
      value: string
    } & baseItemType;
    treeIcon: {
      value: boolean
    } & baseItemType;
    showCheckedStrategy: {
      value: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_PARENT'
    } & baseItemType;
    showSearch: {
      value: boolean
    } & baseItemType;
    suffixIcon: {
      value: VNode | Slot
    } & baseItemType;
    treeCheckable: {
      value: boolean
    } & baseItemType;
    treeCheckStrictly: {
      value: boolean
    } & baseItemType;
    treeData: {
      value: Array<{
      value: unknown, label: unknown, children: unknown,
      disabled: unknown, disableCheckbox: unknown, selectable: unknown}>
    } & baseItemType;
    replaceFields: {
      value: { children: string, title:string, key: string, value: string }
    } & baseItemType;
    treeDataSimpleMode: {
      value: boolean | Array<{ id: string, pId: string, rootPId: null }>
    } & baseItemType;
    treeDefaultExpandAll: {
      value: boolean
    } & baseItemType;
    treeDefaultExpandedKeys: {
      value: Array<string> | Array<number>
    } & baseItemType;
    treeExpandedKeys: {
      value: Array<string> | Array<number>
    } & baseItemType;
    treeNodeFilterProp: {
      value: string
    } & baseItemType;
    treeNodeLabelProp: {
      value: string
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antRadioGroupComponentType = {
  config: {
    defaultValue: {
      value: unknown
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    name: {
      value: string
    } & baseItemType;
    options: {
      value: Array<string> | Array<{ label: string, value: string, disabled?: boolean }>
    } & baseItemType;
    value: {
      value: unknown
    } & baseItemType;
    buttonStyle: {
      value: 'outline' | 'solid'
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antCheckboxComponentType = {
  config: {
    disabled: {
      value: boolean
    } & baseItemType;
    name: {
      value: string
    } & baseItemType;
    options: {
      value: Array<string> | Array<{
      label: string, value: string, disabled?: boolean,
      indeterminate?: boolean, onChange?: (..._args: unknown[]) => unknown }>
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antSwitchComponentType = {
  config: {
    autofocus: {
      value: boolean
    } & baseItemType;
    checked: {
      value: boolean | string | number
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    loading: {
      value: boolean
    } & baseItemType;
    size: {
      value: 'default' | 'small' | 'large'
    } & baseItemType;
    checkedChildren: {
      value: string| Slot
    } & baseItemType;
    unCheckedChildren: {
      value: string| Slot
    } & baseItemType;
    checkedValue: {
      value: boolean | string | number
    } & baseItemType;
    unCheckedValue: {
      value: boolean | string | number
    } & baseItemType;
  };
} & antFormItemType;

type antSliderComponentType = {
  config: {
    autofocus: {
      value: boolean
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    dots: {
      value: boolean
    } & baseItemType;
    included: {
      value: boolean
    } & baseItemType;
    marks: {
      value: { number: string | VNode } |
        { number: { style: {
          [key: string]: number | string
        }, label: string|VNode } } | { number: () => VNode }
    } & baseItemType;
    max: {
      value: number
    } & baseItemType;
    min: {
      value: number
    } & baseItemType;
    range: {
      value: boolean
    } & baseItemType;
    reverse: {
      value: boolean
    } & baseItemType;
    step: {
      value: number | null
    } & baseItemType;
    tipFormatter: {
      value: () => unknown | null
    } & baseItemType;
    vertical: {
      value: boolean
    } & baseItemType;
    tooltipPlacement: {
      value: string
    } & baseItemType;
    tooltipVisible: {
      value: boolean
    } & baseItemType;
    getTooltipPopupContainer: {
      value: () => HTMLElement
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antDateComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & baseItemType;
    autofocus: {
      value: boolean
    } & baseItemType;
    dateRender: {
      value: Slot
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    disabledDate: {
      value: (_currentDate: unknown) => boolean
    } & baseItemType;
    getCalendarContainer: {
      value: () => HTMLElement
    } & baseItemType;
    locale: {
      value: {
      [key: string]: unknown
    }} & baseItemType;
    mode: {
      value: 'time' | 'date' | 'month' | 'year' | 'decade'
    } & baseItemType;
    open: {
      value: boolean
    } & baseItemType;
    placeholder: {
      value: string
    } & baseItemType;
    popupStyle: {
      value: {
      [key: string]: number | string
    }} & baseItemType;
    dropdownClassName: {
      value: string
    } & baseItemType;
    size: {
      value: 'default' | 'small' | 'large'
    } & baseItemType;
    suffixIcon: {
      value: VNode | Slot
    } & baseItemType;
    inputReadOnly: {
      value: boolean
    } & baseItemType;
    align: {
      value: {
      [key: string]: unknown
    }} & baseItemType
    valueFormat: {
      value: string
    } & baseItemType;
  }
} & antFormItemType;

type antTimePickerComponentType = {
  config: {
    addon: {
      value: Slot
    } & baseItemType;
    allowClear: {
      value: boolean
    } & baseItemType;
    autofocus: {
      value: boolean
    } & baseItemType;
    clearText: {
      value: string
    } & baseItemType;
    defaultOpenValu: {
      value: unknown
    } & baseItemType;
    defaultValue: {
      value: unknown
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    disabledHours: {
      value: () => unknown
    } & baseItemType;
    disabledMinutes: {
      value: (_selectedHour: unknown) => unknown
    } & baseItemType;
    disabledSeconds: {
      value: (_selectedHour: unknown, _selectedMinute: unknown) => unknown
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    getPopupContainer: {
      value: (_trigger: unknown) => HTMLElement
    } & baseItemType;
    hideDisabledOptions: {
      value: boolean
    } & baseItemType;
    hourStep: {
      value: number
    } & baseItemType;
    inputReadOnly: {
      value: boolean
    } & baseItemType;
    minuteStep: {
      value: number
    } & baseItemType;
    open: {
      value: boolean
    } & baseItemType;
    placeholder: {
      value: string
    } & baseItemType;
    popupClassName: {
      value: string
    } & baseItemType;
    popupStyle: {
      value: {
      [key: string]: number | string
    }} & baseItemType;
    secondStep: {
      value: number
    } & baseItemType;
    suffixIcon: {
      value: string | VNode | Slot
    } & baseItemType;
    clearIcon: {
      value: string | VNode | Slot
    } & baseItemType;
    use12Hours: {
      value: boolean
    } & baseItemType;
    align: {
      value: {
      [key: string]: unknown
    }} & baseItemType;
    valueFormat: {
      value: string
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antDatePickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & baseItemType;
    disabledTime: {
      value: (_date: unknown) => unknown
    } & baseItemType;
    format: {
      value: string | Array<string>
    } & baseItemType;
    renderExtraFooter: {
      value: Slot
    } & baseItemType;
    showTime: {
      value: antTimePickerComponentType | boolean
    } & baseItemType;
    showToday: {
      value: boolean
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  } & antDateComponentType;
} & antFormItemType;

type antRangePickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & baseItemType;
    disabledTime: {
      value: (_dates: [unknown, unknown], _partial: 'start' | 'end') => unknown
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    ranges: {
      value: { [range: string]: Array<unknown> } | { [range: string]: () => Array<unknown> }
    } & baseItemType;
    renderExtraFooter: {
      value: Slot
    } & baseItemType;
    separator: {
      value: string
    } & baseItemType;
    showTime: {
      value: antTimePickerComponentType | boolean
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  } & antDateComponentType;
} & antFormItemType;

type antMonthPickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    monthCellContentRender: {
      value: Slot
    } & baseItemType;
    renderExtraFooter: {
      value: Slot
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  } & antDateComponentType;
} & antFormItemType;

type antWeekPickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    renderExtraFooter: {
      value: Slot
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  } & antDateComponentType;
} & antFormItemType;

type antRateComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & baseItemType;
    allowHalf: {
      value: boolean
    } & baseItemType;
    autofocus: {
      value: boolean
    } & baseItemType;
    character: {
      value: string | Slot
    } & baseItemType;
    count: {
      value: number
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    tooltips: {
      value: Array<string>
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antUploadComponentType = {
  config: {
    accept: {
      value: string
    } & baseItemType;
    action: {
      value: string | ((_file: File) => Promise<unknown>)
    } & baseItemType;
    method: {
      value: string
    } & baseItemType;
    directory: {
      value: boolean
    } & baseItemType;
    beforeUpload: {
      value: (_file: File, _fileList: Array<File>) => boolean | Promise<unknown>
    } & baseItemType;
    customRequest: {
      value: (..._args: unknown[]) => unknown
    } & baseItemType;
    data: {
      value: {
      [key: string]: unknown
    } | ((_file: string) => {
      [key: string]: unknown
    })} & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    fileList: {
      value: Array<{
      [key: string]: unknown
    }>} & baseItemType;
    headers: {
      value: {
      [key: string]: unknown
    }} & baseItemType;
    listType: {
      value: string
    } & baseItemType;
    multiple: {
      value: boolean
    } & baseItemType;
    name: {
      value: string
    } & baseItemType;
    previewFile: {
      value: (_file: File | Blob) => Promise<string>
    } & baseItemType;
    showUploadList: {
      value: boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean }
    } & baseItemType;
    supportServerRender: {
      value: boolean
    } & baseItemType;
    withCredentials: {
      value: boolean
    } & baseItemType;
    openFileDialogOnClick: {
      value: boolean
    } & baseItemType;
    remove: {
      value: (_file: File) => boolean | Promise<unknown>
    } & baseItemType;
    transformFile: {
      value: (_file: File) => string | Blob | File | Promise<string | Blob | File>
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type RowComponentType = {
} & antFormItemType;

export {
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
};
