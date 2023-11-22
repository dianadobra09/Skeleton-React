import React, { useEffect } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { useTheme } from 'styled-components';
import { Theme } from '../../styling/config/theme.types';
import { CollapseButton, Logo, MobileButton, styles } from './SlidingSidebar.styles';
import { SidebarItem } from './SlidingSidebar.types';
import { ReactComponent as ClosePanelIcon } from '../../../assets/icons/close-panel.svg';
import { ReactComponent as OpenPanelIcon } from '../../../assets/icons/open-panel.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { Box } from '../Box/Box';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Button } from '../Button/Button';
import { useSidebarCollapseState } from '../../hooks/useSidebarCollapseState';

interface SlidingSidebarProps {
  logo?: React.ReactNode;
  collapsedLogo?: React.ReactNode;
  sidebarItems: SidebarItem[];
  isCollapsed?: boolean;
}

const recursiveSidebar = (menuItems: SidebarItem[]) => {
  return menuItems.map(({ label, icon, prefix, suffix, active, disabled, component, open, subMenu }) => {
    if (subMenu) {
      return (
        <SubMenu key={Math.random()} label={label} icon={icon} prefix={prefix} suffix={suffix} active={active} disabled={disabled} component={component} open={open}>
          {recursiveSidebar(subMenu)}
        </SubMenu>
      );
    }
    return (
      <MenuItem key={Math.random()} icon={icon} prefix={prefix} suffix={suffix} active={active} disabled={disabled} component={component}>
        {label}
      </MenuItem>
    );
  });
};

const SlidingSidebar: React.FC<SlidingSidebarProps> = ({ sidebarItems, logo, collapsedLogo, isCollapsed }) => {
  const theme = useTheme() as Theme;
  const isMobile = useIsMobile();
  const [toggled, setToggled] = React.useState(false); //for mobile behavior
  const [collapsed, setCollapsed] = React.useState(isCollapsed); //for desktop behavior

  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  const { sidebarCollapseStateObserver: useSidebarCollapseStateObserver } = useSidebarCollapseState();

  const handleCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed);
    useSidebarCollapseStateObserver(isCollapsed);
  };

  return (
    <>
      {isMobile && (
        <MobileButton __css={styles.mobileButton}>
          <Button variant={'empty'} intent={'neutral'} onClick={() => setToggled(true)} startIcon={<MenuIcon />} />
        </MobileButton>
      )}
      <Sidebar
        rootStyles={styles.sidebar(theme)}
        collapsed={collapsed}
        toggled={toggled}
        customBreakPoint={theme.breakpoints.sm.toString()}
        onBackdropClick={() => setToggled(false)}
      >
        <Box>
          <Logo __css={styles.logo} padding={collapsed ? '24px 24px 0 24px' : '32px 30px 0 30px'}>
            {collapsed ? collapsedLogo : logo}
          </Logo>
          <Menu menuItemStyles={styles.sidebarItem(theme)}>{recursiveSidebar(sidebarItems)}</Menu>
        </Box>
        {!isMobile && (
          <CollapseButton __css={styles.collapseButton}>
            {!collapsed && <ClosePanelIcon onClick={() => handleCollapse(true)} />}
            {collapsed && <OpenPanelIcon onClick={() => handleCollapse(false)} />}
          </CollapseButton>
        )}
      </Sidebar>
    </>
  );
};

export { SlidingSidebar };
