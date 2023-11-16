export interface MenuItemContent {
  content?: React.ReactNode; // can be string or JSX element
  subMenu?: MenuItemContent[];
  isFocusableItem?: boolean;
  isDisabled?: boolean;
}

export type DropdownMenuAlignment = 'start' | 'center' | 'end';
