import React from 'react';
import { useTheme } from 'styled-components';
import { Box } from '../../core/components/Box/Box';
import { BaseComponentProps, StylingProps } from '../../core/types/Core';
import { Theme } from '../../core/styling/config/theme.types';

const Row: React.FC<StylingProps> = props => {
  return <Box display="grid" gridTemplateColumns="75px 100px 100px 1fr" gridGap="30px" _notLast={{ borderBottom: '1px solid #ebebeb' }} {...props} />;
};

const Cell: React.FC<StylingProps> = props => <Box lineHeight={'30px'} minHeight={38} padding={3} {...props} />;
const Header: React.FC<BaseComponentProps> = ({ children }) => <Cell fontWeight={700}>{children}</Cell>;

export const Breakpoints = (props: StylingProps) => {
  const { breakpoints } = useTheme() as Theme;

  const emToPx = (val: string) => Number.parseFloat(val.split('em')[0]) * 16;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'100px 150px 150px'}>
        <Header>Key</Header>
        <Header>Size Em</Header>
        <Header>Size Pixels</Header>
      </Row>
      {Object.entries(breakpoints)
        .filter(([key]) => isNaN(Number(key)))
        .map(([key, val]) => (
          <Row key={val} gridTemplateColumns={'100px 150px 150px'}>
            <Cell>
              <code>{key}</code>
            </Cell>
            <Cell>{val}</Cell>
            <Cell>{emToPx(val)}px</Cell>
          </Row>
        ))}
    </Box>
  );
};
