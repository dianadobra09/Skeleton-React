export interface SidebarItem {
  /**
   * The label to be displayed in the menu item
   */
  label?: string | React.ReactNode;
  /**
   * The icon to be displayed in the menu item
   */
  icon?: React.ReactNode;
  /**
   * The prefix to be displayed in the menu item
   */
  prefix?: React.ReactNode;
  /**
   * The suffix to be displayed in the menu item
   */
  suffix?: React.ReactNode;
  /**
   * If set to true, the menu item will have an active state
   */
  active?: boolean;
  /**
   * If set to true, the menu item will be disabled
   */
  disabled?: boolean;
  /**
   * The component to be rendered as the menu item button
   */
  component?: string | React.ReactElement;

  /** -------- Submenu only -------- */
  /**
   * Controls the open state of the sub menu
   */
  open?: boolean;

  subMenu?: SidebarItem[];
}
