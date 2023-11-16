import { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { DropdownMenu } from './DropdownMenu';
import React from 'react';

export default {
  title: 'Core/Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    controls: { include: [] }
  }
} as Meta<typeof DropdownMenu>;

const MenuItemContent = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <Box typographyVariant={'body9'} width={'100%'} onClick={onClick}>
    {label}
  </Box>
);

export const Default: StoryObj<typeof DropdownMenu> = {
  render: args => {
    return (
      <DropdownMenu
        alignment={args.alignment}
        menuButtonContent={
          <Flex typographyVariant={'hed4'} color={'gray11'}>
            john.doe@example.co
            <Box marginLeft={2} color={'gray7'}>
              <ArrowDown />
            </Box>
          </Flex>
        }
        menuItems={[
          { content: 'john.doe@example.com', isDisabled: true },
          {
            content: <MenuItemContent label={'Account Settings'} onClick={() => alert('Account settings clicked')} />
          },
          {
            content: <MenuItemContent label={'Sign Out'} onClick={() => alert('Sign out clicked')} />
          }
        ]}
      />
    );
  }
};

export const SubMenu: StoryObj<typeof DropdownMenu> = {
  render: args => {
    return (
      <DropdownMenu
        alignment={args.alignment}
        menuButtonContent={
          <Flex typographyVariant={'hed4'} color={'gray11'}>
            john.doe@example.co
            <Box marginLeft={2} color={'gray7'}>
              <ArrowDown />
            </Box>
          </Flex>
        }
        menuItems={[
          { content: 'john.doe@example.com', isDisabled: true },
          {
            content: <MenuItemContent label={'Account Settings'} onClick={() => alert('Account settings clicked')} />
          },
          {
            content: <MenuItemContent label={'More'} />,
            subMenu: [
              { content: 'Account active' },
              {
                content: <MenuItemContent label={'Permissions'} />,
                subMenu: [{ content: 'Read' }, { content: 'Write' }, { content: 'Delete' }]
              },
              {
                content: <MenuItemContent label={'Account Settings'} onClick={() => alert('Account settings clicked')} />
              }
            ]
          },
          {
            content: <MenuItemContent label={'Sign Out'} onClick={() => alert('Sign out clicked')} />
          }
        ]}
      />
    );
  }
};
