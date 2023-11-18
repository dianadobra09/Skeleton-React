import React from 'react';
import { BaseComponentProps } from '../../types/Core';
import { StyledSection, styles } from './Section.styles';

const Section: React.FC<BaseComponentProps> = ({ children, ...restProps }) => {
  return (
    <StyledSection __css={styles.section} {...restProps}>
      {children}
    </StyledSection>
  );
};

export { Section };
