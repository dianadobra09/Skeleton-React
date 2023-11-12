import React from 'react';
import { useTheme } from 'styled-components';
import { Box } from '../../core/components/Box/Box';
import { BaseComponentProps, StylingProps } from '../../core/types/Core';
import { Theme } from '../../core/styling/config/theme.types';
import { TypographyVariant } from '../../core/styling/config/typography.types';

const TEXT = 'Lorem ipsum dolor.';

const Row: React.FC<StylingProps> = props => {
  return <Box display="grid" gridTemplateColumns="75px 100px 100px 1fr" gridGap="30px" _notLast={{ borderBottom: '1px solid #ebebeb' }} {...props} />;
};

const Cell: React.FC<StylingProps> = props => <Box lineHeight={'30px'} minHeight={38} padding={3} {...props} />;
const Header: React.FC<BaseComponentProps> = ({ children }) => <Cell fontWeight={700}>{children}</Cell>;

export const FontSizes = (props: StylingProps) => {
  const { fontSizes } = useTheme() as Theme;

  const remToPx = (val: string) => Number.parseFloat(val) * 16;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'75px 100px 150px 1fr'}>
        <Header>Key</Header>
        <Header>Size Rem</Header>
        <Header>Size Pixels</Header>
        <Header></Header>
      </Row>
      {Object.entries(fontSizes).map(([key, val]) => (
        <Row key={val} gridTemplateColumns={'75px 100px 150px 1fr'}>
          <Cell>
            <code>{key}</code>
          </Cell>
          <Cell>{val}</Cell>
          <Cell>{remToPx(val)}px</Cell>
          <Cell display="flex" alignItems="center" lineHeight="unset" fontSize={key}>
            {TEXT}
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
export const FontWeights = (props: StylingProps) => {
  const { fontWeights } = useTheme() as Theme;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'150px 100px 1fr'}>
        <Header>Key</Header>
        <Header>Value</Header>
        <Header></Header>
      </Row>
      {Object.entries(fontWeights).map(([key, val]) => (
        <Row key={val} gridTemplateColumns={'150px 100px 1fr'}>
          <Cell>
            <code>{key}</code>
          </Cell>
          <Cell>{val}</Cell>
          <Cell display="flex" alignItems="center" lineHeight="unset" fontWeight={key}>
            {TEXT}
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
export const LineHeights = (props: StylingProps) => {
  const { lineHeights } = useTheme() as Theme;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'150px 100px 1fr'}>
        <Header>Key</Header>
        <Header>Value</Header>
        <Header></Header>
      </Row>
      {Object.entries(lineHeights).map(([key, val]) => (
        <Row key={val} gridTemplateColumns={'150px 100px 1fr'}>
          <Cell>
            <code>{key}</code>
          </Cell>
          <Cell>{val}</Cell>
          <Cell display="flex" alignItems="center" lineHeight={key}>
            {TEXT}
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
export const LetterSpacings = (props: StylingProps) => {
  const { letterSpacings } = useTheme() as Theme;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'150px 100px 1fr'}>
        <Header>Key</Header>
        <Header>Value</Header>
        <Header></Header>
      </Row>
      {Object.entries(letterSpacings).map(([key, val]) => (
        <Row key={val} gridTemplateColumns={'150px 100px 1fr'}>
          <Cell>
            <code>{key}</code>
          </Cell>
          <Cell>{val}</Cell>
          <Cell display="flex" alignItems="center" letterSpacing={key}>
            {TEXT}
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
export const TypographyTable = (props: StylingProps) => {
  const { typography } = useTheme() as Theme;

  return (
    <Box {...props}>
      <Row gridTemplateColumns={'200px 300px 1fr'}>
        <Header>Key</Header>
        <Header>Config</Header>
        <Header></Header>
      </Row>
      {(Object.keys(typography.variants) as TypographyVariant[]).map(key => (
        <Row key={key} gridTemplateColumns={'200px 300px 1fr'}>
          <Cell>
            <code>{key}</code>
          </Cell>
          <Cell>
            {Object.entries(typography.variants[key]).map(([prop, val]) =>
              val ? (
                <p key={val}>
                  <b>{prop}</b>: {val}
                </p>
              ) : null
            )}
          </Cell>
          <Cell typographyVariant={key as keyof Theme['typography']['variants']} display="block" width="100%">
            {TEXT}
          </Cell>
        </Row>
      ))}
    </Box>
  );
};
