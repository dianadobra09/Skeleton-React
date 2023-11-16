import { FocusableItem, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import React from 'react';
import { StyledMenu, StyledMenuButton, StyledMenuItemContent, styles } from './DropdownMenu.styles';
import { DropdownMenuAlignment, MenuItemContent } from './DropdownMenu.types';

interface DropdownMenuProps {
  menuButtonContent: React.ReactNode;
  menuItems: MenuItemContent[];
  alignment?: DropdownMenuAlignment;
}

const recursiveMenu = (menuItems: MenuItemContent[]) => {
  return menuItems.map(({ content, subMenu, isDisabled, isFocusableItem }) => {
    if (subMenu) {
      return (
        <SubMenu key={Math.random()} label={<StyledMenuItemContent __css={styles.menuItem(isDisabled)}>{content}</StyledMenuItemContent>} disabled={isDisabled}>
          {recursiveMenu(subMenu)}
        </SubMenu>
      );
    }

    if (isFocusableItem) {
      return (
        <FocusableItem key={Math.random()} disabled={isDisabled}>
          {({ ref }) => (
            <StyledMenuItemContent ref={ref} __css={styles.menuItem(isDisabled)}>
              {content}
            </StyledMenuItemContent>
          )}
        </FocusableItem>
      );
    } else {
      return (
        <MenuItem key={Math.random()} disabled={isDisabled}>
          <StyledMenuItemContent __css={styles.menuItem(isDisabled)}>{content}</StyledMenuItemContent>
        </MenuItem>
      );
    }
  });
};

const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuButtonContent, menuItems, alignment } = props;
  return (
    <StyledMenu menuButton={<StyledMenuButton>{menuButtonContent}</StyledMenuButton>} transition={true} align={alignment}>
      {recursiveMenu(menuItems)}
    </StyledMenu>
  );
};

export { DropdownMenu };
