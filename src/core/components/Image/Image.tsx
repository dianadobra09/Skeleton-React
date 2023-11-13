import React from 'react';
import { StyledContainer, StyledImage, styles } from './Image.styles';
import { ImageShape } from './Image.types';
import { StylingProps } from '../../types/Core';

interface ImageProps extends StylingProps {
  url: string;
  alt?: string;
  sizeX?: string; // can be in px, em, rem, etc.
  sizeY?: string; // can be in px, em, rem, etc.
  shape?: ImageShape;
}

const Image: React.FC<ImageProps> = props => {
  const { url, alt, sizeX, sizeY, shape = 'default', ...restProps } = props;
  return (
    <StyledContainer __css={styles.container(shape)} {...restProps}>
      <StyledImage src={url} alt={alt} sizeX={sizeX} sizeY={sizeY} shape={shape} />
    </StyledContainer>
  );
};

export { Image };
