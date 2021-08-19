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
} & baseComponentType;

type antFormItemType = {
  name: string;
  tag: 'a-auto-complete' | 'a-cascader' | 'a-checkbox-group' | 'a-checkbox' | 'a-date-picker' | 'a-month-picker' |
  'a-range-picker' | 'a-week-picker' | 'a-input' | 'a-input-password' | 'a-textarea' | 'a-input-search' |
  'a-input-number' | 'a-mentions' | 'a-radio-group' | 'a-radio' | 'a-rate' | 'a-select' | 'a-slider' | 'a-switch' |
  'a-time-picker' | 'a-tree-select' | 'a-upload' | 'a-row' | null
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

type baseItemType = {
  type: 'input' | 'select' | 'switch' | 'number' | 'radio' | 'event';
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
      value: ((_arg: { menuNode: VNode, _props: VNodeProps }) => VNode) | Slot | null
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
      value: null | (() => HTMLElement)
    } & baseItemType;
    labelInValue: {
      value: boolean
    } & baseItemType;
    maxTagCount: {
      value: number | null
    } & baseItemType;
    maxTagPlaceholder: {
      value: null | Slot | ((_omittedValues: unknown) => unknown)
    } & baseItemType;
    maxTagTextLength: {
      value: number | null
    } & baseItemType;
    mode: {
      value: 'multiple' | 'tags' | 'combobox' | null
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
      value: VNode | Slot | null
    } & baseItemType;
    removeIcon: {
      value: VNode | Slot | null
    } & baseItemType;
    clearIcon: {
      value: VNode | Slot | null
    } & baseItemType;
    menuItemSelectedIcon: {
      value: VNode | Slot | null
    } & baseItemType;
    tokenSeparators: {
      value: Array<string>
    } & baseItemType;
    options: {
      value: Array<{
      value: string, label: string, disabled: string, key: string, title: string}>
    } & baseItemType;
    option: {
      value: Slot | null
    } & baseItemType;
    defaultOpen: {
      value: boolean
    } & baseItemType;
    open: {
      value: boolean
    } & baseItemType;
  };
} & antFormItemType;

type antCascaderComponentType = {
  config: {
    allowClear: {
      value: boolean
    } & baseItemType;
    autofocus: {
      value: boolean
    } & baseItemType;
    changeOnSelect: {
      value: boolean
    } & baseItemType;
    defaultValue: {
      value: string[] | number[]
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    displayRender: {
      value: ((_arg: {labels: unknown, selectedOptions: unknown}) => VNode) | Slot | null
    } & baseItemType;
    expandTrigger: {
      value: 'click' | 'hover'
    } & baseItemType;
    fieldNames: {
      value: { label: 'label', value: 'value', children: 'children' } | null
    } & baseItemType;
    getPopupContainer: {
      value: ((_triggerNode: VNode)=> HTMLElement) | null
    } & baseItemType;
    loadData: {
      value: ((_selectedOptions: unknown) => void) | null
    } & baseItemType;
    notFoundContent: {
      value: string
    } & baseItemType;
    options: {
      value: unknown
    } & baseItemType;
    placeholder: {
      value: string
    } & baseItemType;
    popupClassName: {
      value: string
    } & baseItemType;
    popupStyle: {
      value: {
        [key: string]: number | string;
      }
    } & baseItemType;
    popupPlacement: {
      value: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
    } & baseItemType;
    popupVisible: {
      value: boolean
    } & baseItemType;
    showSearch: {
      value: boolean | {
        filter: ((_inputValue: unknown, _path: unknown) => boolean) | null;
        limit: number | boolean;
        matchInputWidth: boolean;
        render: ((_arg: {inputValue: unknown, path: unknown}) => VNode) | null;
        sort: ((_a: unknown, _b: unknown, _inputValue: unknown) => unknown) | null;
      }
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
    suffixIcon: {
      value: string | VNode | Slot
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
      }
    } & baseItemType;
    filterTreeNode: {
      value: boolean | ((_inputValue: string, _treeNode: unknown) => boolean)
    } & baseItemType;
    getPopupContainer: {
      value: null | (() => HTMLElement)
    } & baseItemType;
    labelInValue: {
      value: boolean
    } & baseItemType;
    loadData: {
      value: (_node: string) => unknown
    } & baseItemType;
    maxTagCount: {
      value: number | null
    } & baseItemType;
    maxTagPlaceholder: {
      value: Slot | ((_omittedValues: unknown) => unknown) | null
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
      value: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD'
    } & baseItemType;
    showSearch: {
      value: boolean
    } & baseItemType;
    suffixIcon: {
      value: VNode | Slot | null
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
        disabled: unknown, disableCheckbox: unknown, selectable: unknown
      }>
    } & baseItemType;
    replaceFields: {
      value: { children?: string, title?: string, key?: string, value?: string }
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
        }, label: string|VNode } } | { number: () => VNode } | null
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
      value: (() => unknown) | null
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
      value: (() => HTMLElement) | null
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type antDateComponentType = {
  allowClear: {
    value: boolean
  } & baseItemType;
  autofocus: {
    value: boolean
  } & baseItemType;
  dateRender: {
    value: Slot | null
  } & baseItemType;
  disabled: {
    value: boolean
  } & baseItemType;
  disabledDate: {
    value: null | ((_currentDate: unknown) => boolean)
  } & baseItemType;
  getCalendarContainer: {
    value: null | (() => HTMLElement)
  } & baseItemType;
  locale: {
    value: {
      [key: string]: unknown
    }
  } & baseItemType;
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
    }
  } & baseItemType;
  dropdownClassName: {
    value: string
  } & baseItemType;
  size: {
    value: 'default' | 'small' | 'large'
  } & baseItemType;
  suffixIcon: {
    value: VNode | Slot | null
  } & baseItemType;
  inputReadOnly: {
    value: boolean
  } & baseItemType;
  align: {
    value: {
      [key: string]: unknown
    }
  } & baseItemType
  valueFormat: {
    value: string
  } & baseItemType;
};

type antTimePickerComponentType = {
  config: {
    addon: {
      value: Slot | null
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
      value: null | (() => unknown)
    } & baseItemType;
    disabledMinutes: {
      value: null | ((_selectedHour: unknown) => unknown)
    } & baseItemType;
    disabledSeconds: {
      value: null | ((_selectedHour: unknown, _selectedMinute: unknown) => unknown)
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    getPopupContainer: {
      value: null | ((_trigger: unknown) => HTMLElement)
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
      }
    } & baseItemType;
    secondStep: {
      value: number
    } & baseItemType;
    suffixIcon: {
      value: string | VNode | Slot | null
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
      }
    } & baseItemType;
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
      value: null | ((_date: unknown) => unknown)
    } & baseItemType;
    format: {
      value: string | Array<string>
    } & baseItemType;
    renderExtraFooter: {
      value: Slot | null
    } & baseItemType;
    showTime: {
      value: antTimePickerComponentType | boolean
    } & baseItemType;
    showToday: {
      value: boolean
    } & baseItemType;
  } & antDateComponentType;
} & antFormItemType;

type antRangePickerComponentType = {
  config: {
    defaultPickerValue: {
      value: unknown
    } & baseItemType;
    disabledTime: {
      value: null | ((_dates: [unknown, unknown], _partial: 'start' | 'end') => unknown)
    } & baseItemType;
    format: {
      value: string
    } & baseItemType;
    ranges: {
      value: { [range: string]: Array<unknown> } | { [range: string]: () => Array<unknown> }
    } & baseItemType;
    renderExtraFooter: {
      value: Slot | null
    } & baseItemType;
    separator: {
      value: string
    } & baseItemType;
    showTime: {
      value: antTimePickerComponentType | boolean
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
      value: Slot | null
    } & baseItemType;
    renderExtraFooter: {
      value: Slot | null
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
      value: Slot | null
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
      value: null | ((_file: File, _fileList: Array<File>) => boolean | Promise<unknown>)
    } & baseItemType;
    customRequest: {
      value: null | ((..._args: unknown[]) => unknown)
    } & baseItemType;
    data: {
      value: {
        [key: string]: unknown
      } | ((_file: string) => {
        [key: string]: unknown
      })
    } & baseItemType;
    disabled: {
      value: boolean
    } & baseItemType;
    fileList: {
      value: Array<{
        [key: string]: unknown
      }>
    } & baseItemType;
    headers: {
      value: {
        [key: string]: unknown
      }
    } & baseItemType;
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
      value: null | ((_file: File | Blob) => Promise<string>)
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
      value: null | ((_file: File) => boolean | Promise<unknown>)
    } & baseItemType;
    transformFile: {
      value: null | ((_file: File) => string | Blob | File | Promise<string | Blob | File>)
    } & baseItemType;
    size: {
      value: 'large' | 'default' | 'small'
    } & baseItemType;
  };
} & antFormItemType;

type RowComponentType = {
} & antFormItemType;

type componentItemType = {
  [key: string]: unknown
}

export {
  componentItemType,
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
