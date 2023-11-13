import { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { ImageShape } from './Image.types';
import img from '../../../assets/stories/test.png';

const imageArgTypes = {
  sizeX: {
    name: 'sizeX',
    control: {
      type: 'text'
    }
  },
  sizeY: {
    name: 'sizeY',
    control: {
      type: 'text'
    }
  },
  shape: {
    name: 'shape',
    control: {
      type: 'select'
    },
    options: ['circle', 'square', 'default'] as ImageShape[]
  }
};

export default {
  title: 'Core/Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: imageArgTypes,
  parameters: {
    controls: { include: ['shape', 'sizeX', 'sizeY'] }
  }
} as Meta<typeof Image>;

export const Default: StoryObj<typeof Image> = {
  args: {
    url: img,
    alt: 'Logo',
    sizeX: '200px',
    sizeY: 'auto',
    shape: 'default'
  }
};
