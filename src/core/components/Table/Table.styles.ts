import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  --ag-header-background-color: ${props => props.theme.colors.gray1};
  --ag-background-color: ${props => props.theme.colors.base};
  --ag-odd-row-background-color: ${props => props.theme.colors.base};
  --ag-selected-row-background-color: #ceddea;

  --ag-border-color: ${props => props.theme.colors.gray2};

  --ag-checkbox-checked-color: ${props => props.theme.colors.blue4};
  --ag-checkbox-unchecked-color: ${props => props.theme.colors.base};

  --ag-input-focus-box-shadow: none;
  --ag-input-focus-border-color: transparent;
  --ag-range-selection-border-color: transparent;

  --ag-row-height: 34px;

  --ag-data-color: ${props => props.theme.colors.gray11};
  --ag-font-family: 'Nunito', sans-serif;
  --ag-font-size: 12px;

  --ag-header-foreground-color: ${props => props.theme.colors.gray9};

  & .ag-header-row {
    font-weight: ${props => props.theme.fontWeights.semibold};
    text-transform: uppercase;
  }

  & .ag-checkbox {
    border: 2px solid ${props => props.theme.colors.gray4};
    border-radius: 4px;
  }
`;
