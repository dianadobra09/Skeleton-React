import { Meta, StoryObj } from '@storybook/react';
import { SwitchButton } from './SwitchButton';

const switchbuttonArgTypes = {
  defaultState: {
    name: 'defaultState',
    control: {
      type: 'boolean'
    }
  },
  isChecked: {
    name: 'isChecked',
    control: {
      type: 'boolean'
    }
  }
};

export default {
  title: 'Core/Components/SwitchButton',
  component: SwitchButton,
  tags: ['autodocs'],
  argTypes: switchbuttonArgTypes,
  parameters: {
    controls: { include: ['defaultState', 'isDisabled'] }
  }
} as Meta<typeof SwitchButton>;

export const Default: StoryObj<typeof SwitchButton> = {
  args: {
    onChange: checked => {
      alert(`State is ${checked}`);
    },
    defaultState: true,
    isDisabled: false
  }
};
