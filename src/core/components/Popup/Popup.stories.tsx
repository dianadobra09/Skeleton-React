// Popup.stories.ts|tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box/Box';
import { Popup } from './Popup';
import { PopupSize } from './Popup.types';
import { Button } from '../Button/Button';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Input } from '../Input/Input';
import { Flex } from '../Flex/Flex';

const popupArgTypes = {
  size: {
    name: 'size',
    control: {
      type: 'select'
    },
    options: ['sm', 'md', 'lg', 'auto'] as PopupSize[]
  }
};

export default {
  title: 'Core/Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: popupArgTypes,
  parameters: {
    controls: { include: ['size'] }
  }
} as Meta<typeof Popup>;

export const Default: StoryObj<typeof Popup> = {
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Box height={'100vh'} width={'100vw'}>
        {!isOpen && <Button onClick={() => setIsOpen(true)}>Open Popup</Button>}
        <Popup size={args.size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Box typographyVariant={'hed3'}>Add Environment Variable</Box>
          <Input label={'Name'} containerStyles={{ marginTop: 4, width: '100%' }} inputStyles={{ width: '100%' }} />
          <Input label={'Value'} containerStyles={{ marginTop: 3, width: '100%' }} inputStyles={{ width: '100%' }} />
          <Flex marginTop={4} justifyContent={'flex-end'} width={'100%'}>
            <Button variant={'outline'} intent={'neutral'} onClick={() => setIsOpen(false)} marginRight={2}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                alert('Succes');
                setIsOpen(false);
              }}
            >
              Add Environment Variable
            </Button>
          </Flex>
        </Popup>
      </Box>
    );
  }
};
