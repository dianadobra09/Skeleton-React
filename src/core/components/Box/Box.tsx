import type { StyledComponent } from 'styled-components';
import styled from 'styled-components';
import { Theme } from 'styled-system';
import { styleSystemPropsParser } from '../../styling/config/styled-system.core';
import { HTMLProps, StylingProps } from '../../types/Core';

/**
 * A simple component that supports most system properties.
 *
 * @example
 *
 * <Box
 *  marginBottom={{
 *    md: 0
 *   }}
 * >
 *   I'm inside a box
 * </Box>
 *
 *
 * // To enhance a box beyond it's API, use styled as a method and wrap the Box component - as such:
 *
 * styled(Box)'
 *  ...
 * ';
 *
 */

const Box: StyledComponent<React.FC<HTMLProps<HTMLDivElement>>, Theme, StylingProps> = styled.div<StylingProps>(styleSystemPropsParser);
export { Box };
