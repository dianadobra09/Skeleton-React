import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const dropdownnArgTypes = {
  isDisabled: {
    name: 'isDisabled',
    control: {
      type: 'boolean'
    }
  },
  isClearable: {
    name: 'isClearable',
    control: {
      type: 'boolean'
    }
  },
  isMultiselect: {
    name: 'isMultiselect',
    control: {
      type: 'boolean'
    }
  },
  isSearchable: {
    name: 'isSearchable',
    control: {
      type: 'boolean'
    }
  },
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
  }
};

export default {
  title: 'Core/Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: dropdownnArgTypes,
  parameters: {
    controls: { include: ['isDisabled', 'isClearable', 'isSearchable', 'isMultiselect', 'label', 'placeholder'] }
  }
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry', isDisabled: true },
      { value: 'vanilla', label: 'Vanilla' },
      { value: 'banana', label: 'Banana' }
    ],
    isClearable: false,
    isDisabled: false,
    isMultiselect: false,
    isSearchable: false,
    label: 'This is a dropdown',
    placeholder: 'Placeholder'
  }
};
