import styled from 'styled-components';
import { Box } from '../Box/Box';
import { StylingProps } from '../../types/Core';

const Flex = styled(Box).attrs<StylingProps>(() => ({ display: 'flex' }))``;

const CenteredFlex = styled(Box).attrs<StylingProps>(() => ({ display: 'flex', alignItems: 'center', justifyContent: 'center' }))``;

export { Flex, CenteredFlex };
