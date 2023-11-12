// Button.stories.ts|tsx
import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Button, ButtonProps } from './Button';
import { ButtonIntent, ButtonSize, ButtonVariant } from './Button.types';

const buttonArgTypes = {
  variant: {
    name: 'variant',
    control: {
      type: 'select'
    },
    options: ['solid', 'outline', 'empty'] as ButtonVariant[]
  },
  intent: {
    name: 'intent',
    control: {
      type: 'select'
    },
    options: ['primary', 'success', 'warning', 'danger', 'neutral'] as ButtonIntent[]
  },
  size: {
    name: 'size',
    control: {
      type: 'select'
    },
    options: ['sm', 'md', 'lg'] as ButtonSize[]
  },
  isDisabled: {
    name: 'isDisabled',
    control: {
      type: 'boolean'
    }
  },
  isLoading: {
    name: 'isLoading',
    control: {
      type: 'boolean'
    }
  }
};

export default {
  title: 'Core/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: buttonArgTypes,
  parameters: {
    controls: { include: ['variant', 'intent', 'size', 'isLoading', 'isDisabled'] }
  }
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button'
  }
};

const ButtonWithMargin = (props: ButtonProps) => (
  <Button mr={4} {...props}>
    Button
  </Button>
);

export const Size: StoryObj<typeof Button> = {
  parameters: {
    controls: { exclude: ['size'] }
  },
  render: args => {
    return (
      <Flex flexDirection="column">
        {(['sm', 'md', 'lg'] as ButtonSize[]).map(size => {
          return (
            <Box key={size} _notFirst={{ marginTop: 5 }}>
              <Box mb={2}>{size}</Box>
              <Flex>
                <ButtonWithMargin size={size} {...args}>
                  Button
                </ButtonWithMargin>
                <ButtonWithMargin size={size} {...args} isDisabled>
                  Button
                </ButtonWithMargin>
                <ButtonWithMargin size={size} {...args} isLoading>
                  Button
                </ButtonWithMargin>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    );
  }
};

export const VariantsAndIntent: StoryObj<typeof Button> = {
  parameters: {
    controls: { exclude: ['variant', 'isLoading', 'isDisabled'] }
  },
  render: args => {
    return (
      <Flex flexDirection="column">
        {(['solid', 'outline', 'empty'] as ButtonVariant[]).map(variant => {
          return (
            <Box key={variant} _notFirst={{ marginTop: 5 }}>
              <Box mb={2}>{variant}</Box>
              <Flex>
                <ButtonWithMargin variant={variant} {...args}>
                  Button
                </ButtonWithMargin>
                <ButtonWithMargin variant={variant} {...args} isDisabled>
                  Button
                </ButtonWithMargin>
                <ButtonWithMargin variant={variant} {...args} isLoading>
                  Button
                </ButtonWithMargin>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    );
  }
};

export const WithIcon: StoryFn<typeof Button> = args => (
  <Flex flexDirection="column" height={'300px'} justifyContent={'space-between'}>
    <ButtonWithMargin {...args} startIcon={<ArrowDown />}>
      Button
    </ButtonWithMargin>
    <ButtonWithMargin {...args} endIcon={<ArrowDown />}>
      Button
    </ButtonWithMargin>
    <ButtonWithMargin {...args} startIcon={<ArrowDown />} endIcon={<ArrowDown />}>
      Button
    </ButtonWithMargin>
  </Flex>
);
