import React from 'react';
import { DividerPlacement } from './Divider.types';
import { StyledContainer, StyledDivider, styles } from './Divider.styles';
import { StylingProps } from '../../types/Core';

interface DividerProps extends StylingProps {
  placement?: DividerPlacement;
  length?: string;
  thickness?: string;
  color?: string;
}
const Divider: React.FC<DividerProps> = props => {
  const { placement = 'horizontal', length, thickness, color, ...restProps } = props;

  return (
    <StyledContainer {...restProps} __css={styles.container(placement, length)}>
      <StyledDivider __css={styles.divider(placement, length, thickness, color)} />
    </StyledContainer>
  );
};

export { Divider };
