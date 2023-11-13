import styled from 'styled-components';
import { ImageShape } from './Image.types';
import { Box } from '../Box/Box';
import { StyleSystemProps } from '../../styling/config/styled-system.types';

export const StyledContainer = styled(Box)``;

export const StyledImage = styled.img.attrs<{ shape?: ImageShape; sizeX?: string; sizeY?: string }>(({ shape, sizeX, sizeY }) => {
  return {
    style: {
      borderRadius: shape === 'circle' ? '50%' : '0',
      aspectRatio: shape === 'default' ? null : 1,
      width: sizeX,
      height: sizeY ? sizeY : shape === 'default' ? 'auto' : sizeY
    }
  };
})<{ shape?: ImageShape; sizeX?: string; sizeY?: string }>``;

const containerStyles = (shape?: ImageShape): StyleSystemProps => {
  return {
    borderRadius: shape === 'circle' ? '50%' : '0'
  };
};

export const styles = {
  container: containerStyles
};
