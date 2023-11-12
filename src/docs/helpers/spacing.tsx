import React from 'react';
import { Box } from '../../core/components/Box/Box';
import { BaseComponentProps, StylingProps } from '../../core/types/Core';

const Row: React.FC<StylingProps> = props => {
  return <Box display="grid" gridTemplateColumns="75px 100px 100px 1fr" gridGap="30px" _notLast={{ borderBottom: '1px solid #ebebeb' }} {...props} />;
};

const Cell: React.FC<StylingProps> = props => <Box lineHeight={'30px'} minHeight={38} padding={3} {...props} />;
const Header: React.FC<BaseComponentProps> = ({ children }) => <Cell fontWeight={700}>{children}</Cell>;

export const Spacing: React.FC<StylingProps> = props => {
  const pxToRem = (val: number) => val / 16;
  return (
    <Box {...props}>
      <Row backgroundColor="brandBlue1">
        <Header>Space</Header>
        <Header>Rem</Header>
        <Header>Pixels</Header>
        <Header></Header>
      </Row>
      {Array.from(Array(9).keys()).map((val, idx) => (
        <Row key={idx}>
          <Cell>{val}</Cell>
          <Cell>{val !== 0 ? pxToRem(Math.pow(2, val + 1)) : 0}rem</Cell>
          <Cell>{val !== 0 ? Math.pow(2, val + 1) : 0}px</Cell>
          <Cell display="flex" alignItems="center">
            <Box width={val !== 0 ? Math.pow(2, val + 1) : 0} height="20px" backgroundColor="blue3" />
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
