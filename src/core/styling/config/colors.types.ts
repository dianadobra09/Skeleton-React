export type Color = // Primary

    | 'transparent'
    | 'white'
    | 'black'
    | 'base' // this is for the default color of the theme that changes on light/dark mode
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'gray7'
    | 'gray8'
    | 'gray9'
    | 'gray10'
    | 'gray11'
    | 'gray12'
    | 'gray13'

    // Green
    | 'green1'
    | 'green2'
    | 'green3'

    // Red
    | 'red1'
    | 'red2'
    | 'red3'

    // Yellow
    | 'yellow1'
    | 'yellow2'
    | 'yellow3'
    | 'yellow4'

    // Blue
    | 'blue1'
    | 'blue2'
    | 'blue3'
    | 'blue4'
    | 'blue5'
    | 'blue6';

export type Colors = Readonly<Record<Color, string>>;

export const lightModeColors: Colors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  base: '#FFFFFF',

  gray1: '#F0F2F2',
  gray2: '#E2E8F0',
  gray3: '#CBD5E1',
  gray4: '#E4E4E4',
  gray5: '#B8B8B8',
  gray6: '#A3A7AB',
  gray7: '#94A3B8',
  gray8: '#60738D',
  gray9: '#64748B',
  gray10: '#60738D',
  gray11: '#475569',
  gray12: '#001E1E',
  gray13: '#1E293B',

  green1: '#D1FAE5',
  green2: '#10B981',
  green3: '#059669',

  red1: '#FFE4E6',
  red2: '#F43F5E',
  red3: '#FF0000',

  yellow1: '#FEF3C7',
  yellow2: '#D97706',
  yellow3: '#FFCA39',
  yellow4: '#DAA000',

  blue1: '#27D1A330',
  blue2: '#27d1a36b',
  blue3: '#4DB1B6',
  blue4: '#00B3B7',
  blue5: '#46838A',
  blue6: '#001515'
};

export const darkModeColors: Colors = {
  transparent: 'transparent',
  white: 'diana',
  black: '#000000',
  base: '#17202E',

  gray1: '#F1F5F9',
  gray2: '#1E293B',
  gray3: '#64748B',
  gray4: '#E2E8F0',
  gray5: '#A3A7AB',
  gray6: '#CBD5E1',
  gray7: '#60738D',
  gray8: '#E4E4E4',
  gray9: '#B8B8B8',
  gray10: '#94A3B8',
  gray11: '#F1F5F9',
  gray12: '#1C2637',
  gray13: '#A09FA1',

  green1: '#D1FAE5',
  green2: '#059669',
  green3: '#10B981',

  red1: '#FFE4E6',
  red2: '#F43F5E',
  red3: '#FF0000',

  yellow1: '#FEF3C7',
  yellow2: '#FEF3C7',
  yellow3: '#FFCA39',
  yellow4: '#DAA000',

  blue1: '#4284F3',
  blue2: '#6366F1',
  blue3: '#A5B4FC',
  blue4: '#818CF8',
  blue5: '#17202E',
  blue6: '#0F172A'
};
