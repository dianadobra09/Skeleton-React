import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Box } from '../Box/Box';

const textareaArgTypes = {
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
  title: 'Core/Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: textareaArgTypes,
  parameters: {
    controls: { include: ['label', 'placeholder', 'isDisabled'] }
  }
} as Meta<typeof Textarea>;

export const TextareaStory: StoryObj<typeof Textarea> = {
  args: {
    label: 'This is an textarea',
    placeholder: 'Placeholder'
  },
  render: args => (
    <Box width={'100%'} height={'30vh'} backgroundColor={'black'} padding={4}>
      <Textarea label={args.label} placeholder={args.placeholder} isDisabled={args.isDisabled} />
    </Box>
  )
};
