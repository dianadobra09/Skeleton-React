import styled from 'styled-components';
import { Box } from '../Box/Box';

export const Wrapper = styled(Box)`
  .react-tabs {
    width: 100%;
    height: 100%;
  }

  .react-tabs__tab-list {
    border: none;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray2};
  }

  .react-tabs__tab {
    height: 50px;
    padding: 6px 20px;
    border: none;
  }

  .react-tabs__tab--selected {
    border: none;
    background: none;
  }

  .react-tabs__tab-panel {
    display: none;
    height: calc(100% - 64px);
  }

  .react-tabs__tab-panel--selected {
    display: flex;
    height: calc(100% - 64px);
  }
`;
