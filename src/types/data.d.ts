type baseComponentType = {
  icon: string,
  title: string
}

type inputComponentItemType = {
} & baseComponentType;

type selectComponentItemType = {
} & baseComponentType;

type layoutComponentItemType = {
} & baseComponentType;

type formType = {
  name: string,
  model: string,
  rules: string,
  ref: string,
  gutter: number,
  span: number,
  disabled: boolean,
  size: string,
}

export {
  formType,
  baseComponentType,
  inputComponentItemType,
  selectComponentItemType,
  layoutComponentItemType,
};
