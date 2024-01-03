import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../assets/icons/apps.svg';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as LogoShort } from '../../assets/logo/logo.svg';
import { Flex } from '../../core/components/Flex/Flex';
import { SlidingSidebar } from '../../core/components/SlidingSidebar/SlidingSidebar';
import { TopBar } from '../../core/components/TopBar/TopBar';
import { useAuth } from '../../core/contexts/Authentication.provider';
import { PageBody, styles } from './Layout.styles';

export const Layout = () => {
  const { principal } = useAuth();
  const [sidebarItems, setSidebarItems] = React.useState<any[]>([]);

  useEffect(() => {
    const defaultSidebarItems = [
      {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        component: <Link to="/private" />
      }
    ];

    setSidebarItems(defaultSidebarItems);
  }, [principal]);

  return (
    <>
      <SlidingSidebar logo={<Logo />} collapsedLogo={<LogoShort />} sidebarItems={sidebarItems} />
      <Flex flexDirection={'column'} width={'100%'}>
        <TopBar />
        <PageBody __css={styles.pageBody}>
          <Outlet />
        </PageBody>
      </Flex>
    </>
  );
};
