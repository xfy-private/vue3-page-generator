import {
  Slot, RendererNode, VNode, VNodeProps,
} from 'vue';
import { MentionsProps } from 'ant-design-vue';

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
  label: string | Slot;
  rules: Array<{
    [key: string]: string
  }> | {
    [key: string]: string
  };
  required: boolean;
};

type antTagType = 'a-auto-complete' | 'a-cascader' | 'a-checkbox-group' | 'a-checkbox' | 'a-date-picker' | 'a-month-picker' |
'a-range-picker' | 'a-week-picker' | 'a-input' | 'a-input-password' | 'a-textarea' | 'a-input-search' |
'a-input-number' | 'a-mentions' | 'a-radio-group' | 'a-radio' | 'a-rate' | 'a-select' | 'a-slider' | 'a-switch' |
'a-time-picker' | 'a-tree-select' | 'a-upload' | 'a-row';

type antFormItemType = {
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
} & baseComponentType;

type valueType = {
  type: 'input' | 'select' | 'switch' | 'number' | 'radio' | 'event';
}

type antInputType = {
  addonAfter: {
    value: string | Slot,
  } & valueType;
  addonBefore: {
    value: string | Slot,
  } & valueType;
  defaultValue: {
    value: string,
  } & valueType;
  id: {
    value: string
  } & valueType;
  disabled: {
    value: boolean;
  } & valueType;
  maxlength: {
    value: number | null;
  } & valueType;
  prefix: {
    value: string | Slot;
  } & valueType;
  size: {
    value: 'large' | 'default' | 'small';
  } & valueType;
  suffix: {
    value: string | Slot;
  } & valueType;
  allowClear: {
    value: boolean;
  } & valueType;
  placeholder: {
    value: string;
  } & valueType;
};

type antSingleInputComponentType = {
  config: {
    type: {
      value: string;
    } & valueType;
  } & antInputType
} & antComponentType;

type antMultiInputComponentType = {
  config: {
    defaultValue: {
      value: string;
    } & valueType;
    showCount: {
      value: boolean;
    } & valueType;
    allowClear: {
      value: boolean;
    } & valueType;
    autosize: {
      value: boolean;
    } & valueType;
    maxlength: {
      value: number | null;
    } & valueType;
    disabled: {
      value: boolean;
    } & valueType;
    placeholder: {
      value: string;
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  }
} & antComponentType;

type antSearchInputComponentType = {
  config: {
    enterButton: {
      value: boolean | Slot;
    } & valueType;
    loading: {
      value: boolean;
    } & valueType;
  } & antInputType;
} & antComponentType;

type antPasswordInputComponentType = {
  config: {
    visibilityToggle: {
      value: boolean;
    } & valueType;
  } & antInputType;
} & antComponentType;

type antAutoCompleteComponentType = {
  config: {
    allowClear: {
      value: boolean;
    } & valueType;
    autofocus: {
      value: boolean;
    } & valueType;
    backfill: {
      value: boolean;
    } & valueType;
    '#default': {
      value: HTMLInputElement | HTMLTextAreaElement | '';
    } & valueType;
    options: {
      value: Slot | {
        value?: string,
        text?: string,
      }
    } & valueType;
    dropdownMenuStyle: {
      value: {
        [key: string]: string | number
      }
    } & valueType;
    defaultActiveFirstOption: {
      value: boolean;
    } & valueType;
    disabled: {
      value: boolean;
    } & valueType;
    filterOption: {
      value: boolean | ((_inputValue: unknown, _option: unknown) => void);
    } & valueType;
    optionLabelProp: {
      value: string;
    } & valueType;
    placeholder: {
      value: string | Slot;
    } & valueType;
    defaultOpen: {
      value: boolean;
    } & valueType;
    open: {
      value: boolean;
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antNumberInputComponentType = {
  config: {
    autofocus: {
      value: boolean;
    } & valueType;
    defaultValue: {
      value: number | null;
    } & valueType;
    disabled: {
      value: boolean;
    } & valueType;
    formatter: {
      value: null | ((_value: number | string) => string);
    } & valueType;
    max: {
      value: number;
    } & valueType;
    min: {
      value: number;
    } & valueType;
    parser: {
      value: null | ((_value: string) => number);
    } & valueType;
    precision: {
      value: number | null;
    } & valueType;
    decimalSeparator: {
      value: string | null;
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
    step: {
      value: number|string;
    } & valueType;
  };
} & antComponentType;

type antMentionsInputComponentType = {
  config: {
    autofocus: {
      value: boolean;
    } & valueType;
    defaultValue: {
      value: string;
    } & valueType;
    filterOption: {
      value: boolean | ((_input: string, _option: { value: string }) => boolean)
    } & valueType;
    notFoundContent: {
      value: RendererNode | null
    } & valueType;
    placement: {
      value: 'top' | 'bottom'
    } & valueType;
    prefix: {
      value: string | Array<string>
    } & valueType;
    split: {
      value: string
    } & valueType;
    validateSearch: {
      value: null | ((_text: string, _props: MentionsProps) => void)
    } & valueType;
    getPopupContainer: {
      value: null | (() => HTMLElement)
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antTextComponentType = {
  config: {
  };
} & antComponentType;

type antSelectComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & valueType;
    autoClearSearchValue: {
      value: boolean
    } & valueType;
    autofocus: {
      value: boolean
    } & valueType;
    bordered: {
      value: boolean
    } & valueType;
    defaultActiveFirstOption: {
      value: boolean
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    dropdownClassName: {
      value: string
    } & valueType;
    dropdownMatchSelectWidth: {
      value: boolean
    } & valueType;
    dropdownRender: {
      value: ((_arg: { menuNode: VNode, _props: VNodeProps }) => VNode) | Slot | null
    } & valueType;
    dropdownStyle: {
      value: {
      [key: string]: number | string
      }
    } & valueType;
    dropdownMenuStyle: {
      value: {
        [key: string]: number | string
      }
    } & valueType;
    filterOption: {
      value: boolean | ((_inputValue: unknown, _option: unknown) => void)
    } & valueType;
    firstActiveValue: {
      value: string | Array<string>
    } & valueType;
    getPopupContainer: {
      value: null | (() => HTMLElement)
    } & valueType;
    labelInValue: {
      value: boolean
    } & valueType;
    maxTagCount: {
      value: number | null
    } & valueType;
    maxTagPlaceholder: {
      value: null | Slot | ((_omittedValues: unknown) => unknown)
    } & valueType;
    maxTagTextLength: {
      value: number | null
    } & valueType;
    mode: {
      value: 'multiple' | 'tags' | 'combobox' | null
    } & valueType;
    notFoundContent: {
      value: string | Slot
    } & valueType;
    optionFilterProp: {
      value: string
    } & valueType;
    optionLabelProp: {
      value: string
    } & valueType;
    placeholder: {
      value: string | Slot
    } & valueType;
    showSearch: {
      value: boolean
    } & valueType;
    showArrow: {
      value: boolean
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
    suffixIcon: {
      value: VNode | Slot | null
    } & valueType;
    removeIcon: {
      value: VNode | Slot | null
    } & valueType;
    clearIcon: {
      value: VNode | Slot | null
    } & valueType;
    menuItemSelectedIcon: {
      value: VNode | Slot | null
    } & valueType;
    tokenSeparators: {
      value: Array<string>
    } & valueType;
    options: {
      value: Array<{
      value: string, label: string, disabled: string, key: string, title: string}>
    } & valueType;
    option: {
      value: Slot | null
    } & valueType;
    defaultOpen: {
      value: boolean
    } & valueType;
    open: {
      value: boolean
    } & valueType;
  };
} & antComponentType;

type antCascaderComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & valueType;
    autofocus: {
      value: boolean
    } & valueType;
    changeOnSelect: {
      value: boolean
    } & valueType;
    defaultValue: {
      value: string[] | number[]
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    displayRender: {
      value: ((_arg: {labels: unknown, selectedOptions: unknown}) => VNode) | Slot | null
    } & valueType;
    expandTrigger: {
      value: 'click' | 'hover'
    } & valueType;
    fieldNames: {
      value: { label: 'label', value: 'value', children: 'children' } | null
    } & valueType;
    getPopupContainer: {
      value: ((_triggerNode: VNode)=> HTMLElement) | null
    } & valueType;
    loadData: {
      value: ((_selectedOptions: unknown) => void) | null
    } & valueType;
    notFoundContent: {
      value: string
    } & valueType;
    options: {
      value: unknown
    } & valueType;
    placeholder: {
      value: string
    } & valueType;
    popupClassName: {
      value: string
    } & valueType;
    popupStyle: {
      value: {
        [key: string]: number | string;
      }
    } & valueType;
    popupPlacement: {
      value: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
    } & valueType;
    popupVisible: {
      value: boolean
    } & valueType;
    showSearch: {
      value: boolean | {
        filter: ((_inputValue: unknown, _path: unknown) => boolean) | null;
        limit: number | boolean;
        matchInputWidth: boolean;
        render: ((_arg: {inputValue: unknown, path: unknown}) => VNode) | null;
        sort: ((_a: unknown, _b: unknown, _inputValue: unknown) => unknown) | null;
      }
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
    suffixIcon: {
      value: string | VNode | Slot
    } & valueType;
  };
} & antComponentType;

type antTreeSelectComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & valueType;
    defaultValue: {
      value: string | Array<string>
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    dropdownClassName: {
      value: string
    } & valueType;
    dropdownMatchSelectWidth: {
      value: boolean
    } & valueType;
    dropdownStyle: {
      value: {
        [key: string]: string | number
      }
    } & valueType;
    filterTreeNode: {
      value: boolean | ((_inputValue: string, _treeNode: unknown) => boolean)
    } & valueType;
    getPopupContainer: {
      value: null | (() => HTMLElement)
    } & valueType;
    labelInValue: {
      value: boolean
    } & valueType;
    loadData: {
      value: (_node: string) => unknown
    } & valueType;
    maxTagCount: {
      value: number | null
    } & valueType;
    maxTagPlaceholder: {
      value: Slot | ((_omittedValues: unknown) => unknown) | null
    } & valueType;
    multiple: {
      value: boolean
    } & valueType;
    placeholder: {
      value: string | Slot
    } & valueType;
    searchPlaceholder: {
      value: string | Slot
    } & valueType;
    searchValue: {
      value: string
    } & valueType;
    treeIcon: {
      value: boolean
    } & valueType;
    showCheckedStrategy: {
      value: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD'
    } & valueType;
    showSearch: {
      value: boolean
    } & valueType;
    suffixIcon: {
      value: VNode | Slot | null
    } & valueType;
    treeCheckable: {
      value: boolean
    } & valueType;
    treeCheckStrictly: {
      value: boolean
    } & valueType;
    treeData: {
      value: Array<{
        value: unknown, label: unknown, children: unknown,
        disabled: unknown, disableCheckbox: unknown, selectable: unknown
      }>
    } & valueType;
    replaceFields: {
      value: { children?: string, title?: string, key?: string, value?: string }
    } & valueType;
    treeDataSimpleMode: {
      value: boolean | Array<{ id: string, pId: string, rootPId: null }>
    } & valueType;
    treeDefaultExpandAll: {
      value: boolean
    } & valueType;
    treeDefaultExpandedKeys: {
      value: Array<string> | Array<number>
    } & valueType;
    treeExpandedKeys: {
      value: Array<string> | Array<number>
    } & valueType;
    treeNodeFilterProp: {
      value: string
    } & valueType;
    treeNodeLabelProp: {
      value: string
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antRadioGroupComponentType = {
  config: {
    defaultValue: {
      value: unknown
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    name: {
      value: string
    } & valueType;
    options: {
      value: Array<string> | Array<{ label: string, value: string, disabled?: boolean }>
    } & valueType;
    buttonStyle: {
      value: 'outline' | 'solid'
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antCheckboxComponentType = {
  config: {
    disabled: {
      value: boolean
    } & valueType;
    name: {
      value: string
    } & valueType;
    options: {
      value: Array<string> | Array<{
      label: string, value: string, disabled?: boolean,
      indeterminate?: boolean, onChange?: (..._args: unknown[]) => unknown }>
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antSwitchComponentType = {
  config: {
    autofocus: {
      value: boolean
    } & valueType;
    checked: {
      value: boolean | string | number
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    loading: {
      value: boolean
    } & valueType;
    size: {
      value: 'default' | 'small' | 'large'
    } & valueType;
    checkedChildren: {
      value: string| Slot
    } & valueType;
    unCheckedChildren: {
      value: string| Slot
    } & valueType;
    checkedValue: {
      value: boolean | string | number
    } & valueType;
    unCheckedValue: {
      value: boolean | string | number
    } & valueType;
  };
} & antComponentType;

type antSliderComponentType = {
  config: {
    autofocus: {
      value: boolean
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    dots: {
      value: boolean
    } & valueType;
    included: {
      value: boolean
    } & valueType;
    marks: {
      value: { number: string | VNode } |
        { number: { style: {
          [key: string]: number | string
        }, label: string|VNode } } | { number: () => VNode } | null
    } & valueType;
    max: {
      value: number
    } & valueType;
    min: {
      value: number
    } & valueType;
    range: {
      value: boolean
    } & valueType;
    reverse: {
      value: boolean
    } & valueType;
    step: {
      value: number | null
    } & valueType;
    tipFormatter: {
      value: (() => unknown) | null
    } & valueType;
    vertical: {
      value: boolean
    } & valueType;
    tooltipPlacement: {
      value: string
    } & valueType;
    tooltipVisible: {
      value: boolean
    } & valueType;
    getTooltipPopupContainer: {
      value: (() => HTMLElement) | null
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antDateComponentType = {
  allowClear: {
    value: boolean
  } & valueType;
  autofocus: {
    value: boolean
  } & valueType;
  dateRender: {
    value: Slot | null
  } & valueType;
  disabled: {
    value: boolean
  } & valueType;
  disabledDate: {
    value: null | ((_currentDate: unknown) => boolean)
  } & valueType;
  getCalendarContainer: {
    value: null | (() => HTMLElement)
  } & valueType;
  locale: {
    value: {
      [key: string]: unknown
    }
  } & valueType;
  mode: {
    value: 'time' | 'date' | 'month' | 'year' | 'decade'
  } & valueType;
  open: {
    value: boolean
  } & valueType;
  placeholder: {
    value: string
  } & valueType;
  popupStyle: {
    value: {
      [key: string]: number | string
    }
  } & valueType;
  dropdownClassName: {
    value: string
  } & valueType;
  size: {
    value: 'default' | 'small' | 'large'
  } & valueType;
  suffixIcon: {
    value: VNode | Slot | null
  } & valueType;
  inputReadOnly: {
    value: boolean
  } & valueType;
  align: {
    value: {
      [key: string]: unknown
    }
  } & valueType
  valueFormat: {
    value: string
  } & valueType;
};

type antTimePickerComponentType = {
  config: {
    addon: {
      value: Slot | null
    } & valueType;
    allowClear: {
      value: boolean
    } & valueType;
    autofocus: {
      value: boolean
    } & valueType;
    clearText: {
      value: string
    } & valueType;
    defaultOpenValu: {
      value: unknown
    } & valueType;
    defaultValue: {
      value: unknown
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    disabledHours: {
      value: null | (() => unknown)
    } & valueType;
    disabledMinutes: {
      value: null | ((_selectedHour: unknown) => unknown)
    } & valueType;
    disabledSeconds: {
      value: null | ((_selectedHour: unknown, _selectedMinute: unknown) => unknown)
    } & valueType;
    format: {
      value: string
    } & valueType;
    getPopupContainer: {
      value: null | ((_trigger: unknown) => HTMLElement)
    } & valueType;
    hideDisabledOptions: {
      value: boolean
    } & valueType;
    hourStep: {
      value: number
    } & valueType;
    inputReadOnly: {
      value: boolean
    } & valueType;
    minuteStep: {
      value: number
    } & valueType;
    open: {
      value: boolean
    } & valueType;
    placeholder: {
      value: string
    } & valueType;
    popupClassName: {
      value: string
    } & valueType;
    popupStyle: {
      value: {
        [key: string]: number | string
      }
    } & valueType;
    secondStep: {
      value: number
    } & valueType;
    suffixIcon: {
      value: string | VNode | Slot | null
    } & valueType;
    clearIcon: {
      value: string | VNode | Slot
    } & valueType;
    use12Hours: {
      value: boolean
    } & valueType;
    align: {
      value: {
        [key: string]: unknown
      }
    } & valueType;
    valueFormat: {
      value: string
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antDatePickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & valueType;
    disabledTime: {
      value: null | ((_date: unknown) => unknown)
    } & valueType;
    format: {
      value: string | Array<string>
    } & valueType;
    renderExtraFooter: {
      value: Slot | null
    } & valueType;
    showTime: {
      value: antTimePickerComponentType | boolean
    } & valueType;
    showToday: {
      value: boolean
    } & valueType;
  } & antDateComponentType;
} & antComponentType;

type antRangePickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & valueType;
    disabledTime: {
      value: null | ((_dates: [unknown, unknown], _partial: 'start' | 'end') => unknown)
    } & valueType;
    format: {
      value: string
    } & valueType;
    ranges: {
      value: { [range: string]: Array<unknown> } | { [range: string]: () => Array<unknown> }
    } & valueType;
    renderExtraFooter: {
      value: Slot | null
    } & valueType;
    separator: {
      value: string
    } & valueType;
    showTime: {
      value: antTimePickerComponentType | boolean
    } & valueType;
  } & antDateComponentType;
} & antComponentType;

type antMonthPickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & valueType;
    format: {
      value: string
    } & valueType;
    monthCellContentRender: {
      value: Slot | null
    } & valueType;
    renderExtraFooter: {
      value: Slot | null
    } & valueType;
  } & antDateComponentType;
} & antComponentType;

type antWeekPickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & valueType;
    format: {
      value: string
    } & valueType;
    renderExtraFooter: {
      value: Slot | null
    } & valueType;
  } & antDateComponentType;
} & antComponentType;

type antRateComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & valueType;
    allowHalf: {
      value: boolean
    } & valueType;
    autofocus: {
      value: boolean
    } & valueType;
    character: {
      value: string | Slot
    } & valueType;
    count: {
      value: number
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    tooltips: {
      value: Array<string>
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
  };
} & antComponentType;

type antUploadComponentType = {
  config: {
    accept: {
      value: string
    } & valueType;
    action: {
      value: string | ((_file: File) => Promise<unknown>)
    } & valueType;
    method: {
      value: string
    } & valueType;
    directory: {
      value: boolean
    } & valueType;
    beforeUpload: {
      value: null | ((_file: File, _fileList: Array<File>) => boolean | Promise<unknown>)
    } & valueType;
    customRequest: {
      value: null | ((..._args: unknown[]) => unknown)
    } & valueType;
    data: {
      value: {
        [key: string]: unknown
      } | ((_file: string) => {
        [key: string]: unknown
      })
    } & valueType;
    disabled: {
      value: boolean
    } & valueType;
    fileList: {
      value: Array<{
        [key: string]: unknown
      }>
    } & valueType;
    headers: {
      value: {
        [key: string]: unknown
      }
    } & valueType;
    listType: {
      value: string
    } & valueType;
    multiple: {
      value: boolean
    } & valueType;
    name: {
      value: string
    } & valueType;
    previewFile: {
      value: null | ((_file: File | Blob) => Promise<string>)
    } & valueType;
    showUploadList: {
      value: boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean }
    } & valueType;
    supportServerRender: {
      value: boolean
    } & valueType;
    withCredentials: {
      value: boolean
    } & valueType;
    openFileDialogOnClick: {
      value: boolean
    } & valueType;
    remove: {
      value: null | ((_file: File) => boolean | Promise<unknown>)
    } & valueType;
    transformFile: {
      value: null | ((_file: File) => string | Blob | File | Promise<string | Blob | File>)
    } & valueType;
    size: {
      value: 'large' | 'default' | 'small'
    } & valueType;
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
