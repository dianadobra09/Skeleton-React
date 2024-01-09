import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box/Box';
import { PhoneInput } from './PhoneInput';

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
  isDisabled: {
    name: 'isDisabled',
    control: {
      type: 'boolean'
    }
  }
};

export default {
  title: 'Core/Components/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  argTypes: inputArgTypes,
  parameters: {
    controls: { include: ['label', 'placeholder', 'isDisabled'] }
  }
} as Meta<typeof PhoneInput>;

export const InputStory: StoryObj<typeof PhoneInput> = {
  args: {
    label: 'This is a phone input'
  },
  render: args => (
    <Box width={'100%'} height={'30vh'} backgroundColor={'black'} padding={4}>
      <PhoneInput label={args.label} placeholder={args.placeholder} isDisabled={args.isDisabled} />
    </Box>
  )
};
