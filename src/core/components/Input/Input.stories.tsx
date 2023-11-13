import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { HTMLInputTypeAttribute } from 'react';

const inputArgTypes = {
  label: {
    name: 'label',
    control: {
      type: 'text'
    }
  },
  placeholder: {
    name: 'placeholder',
    control: {
      type: 'text'
    }
  },
  type: {
    name: 'type',
    control: {
      type: 'select'
    },
    options: ['text', 'number', 'checkbox', 'radio', 'search'] as HTMLInputTypeAttribute[]
  },
  isDisabled: {
    name: 'isDisabled',
    control: {
      type: 'boolean'
    }
  }
};

export default {
  title: 'Core/Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: inputArgTypes,
  parameters: {
    controls: { include: ['label', 'placeholder', 'type', 'isDisabled'] }
  }
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'This is an input',
    placeholder: 'Placeholder',
    type: 'text'
  }
};
