import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box/Box';
import { SlidingSidebar } from './SlidingSidebar';
import React from 'react';
import { ReactComponent as DashboardIcon } from '../../../assets/icons/apps.svg';
import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
import { ReactComponent as TeamIcon } from '../../../assets/icons/team.svg';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { ReactComponent as LogoShort } from '../../../assets/logo/logo.svg';

export default {
  title: 'Core/Components/SlidingSidebar',
  component: SlidingSidebar,
  parameters: {
    layout: 'fullscreen',
    controls: { include: [] }
  }
} as Meta<typeof SlidingSidebar>;

export const Default: StoryObj<typeof SlidingSidebar> = {
  render: () => {
    return (
      <Box height={'100vh'} width={'100vw'}>
        <SlidingSidebar
          logo={<Logo />}
          collapsedLogo={<LogoShort />}
          sidebarItems={[
            {
              label: 'Dashboard',
              icon: <DashboardIcon />
            },
            {
              label: 'Users',
              icon: <TeamIcon />
            },
            {
              label: 'Account settings',
              icon: <PersonIcon />
            }
          ]}
        />
      </Box>
    );
  }
};
