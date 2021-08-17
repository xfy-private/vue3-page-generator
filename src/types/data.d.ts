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

export {
  baseComponentType,
  inputComponentItemType,
  selectComponentItemType,
  layoutComponentItemType,
};
