import { Meta, StoryObj } from '@storybook/react';
import React, { FormEvent, useCallback } from 'react';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { RightPanel } from './RightPanel';

const panelArgTypes = {
  title: {
    name: 'title',
    control: {
      type: 'text'
    }
  },
  size: {
    name: 'size',
    control: {
      type: 'text'
    }
  }
};

export default {
  title: 'Core/Components/RightPanel',
  component: RightPanel,
  argTypes: panelArgTypes,
  parameters: {
    layout: 'fullscreen',
    controls: { include: ['title', 'size'] }
  }
} as Meta<typeof RightPanel>;

export const Default: StoryObj<typeof RightPanel> = {
  args: {
    title: 'Add User',
    size: undefined
  },
  render: args => {
    const [email, setEmail] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [isOpen, setIsOpen] = React.useState(false);

    const submit = useCallback(
      (event: FormEvent) => {
        event.preventDefault();
      },
      [email, name]
    );
    return (
      <Box height={'100vh'} width={'100vw'}>
        <Button onClick={() => setIsOpen(!isOpen)} margin={4}>
          Open
        </Button>
        <RightPanel title={args.title} isOpen={isOpen} onClose={() => setIsOpen(false)} size={args.size}>
          <form onSubmit={submit}>
            <Input
              label={'Email'}
              value={email}
              onChange={setEmail}
              containerStyles={{
                marginBottom: 3
              }}
            />
            <Input
              label={'Name'}
              value={name}
              onChange={setName}
              containerStyles={{
                marginBottom: 3
              }}
            />

            <Button float={'right'}>Submit</Button>
          </form>
        </RightPanel>
      </Box>
    );
  }
};
