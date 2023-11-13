import Modal, { Styles } from 'react-modal';
import styled from 'styled-components';
import { Box } from '../Box/Box';
import { StyleSystemProps } from '../../styling/config/styled-system.types';
import { Colors } from '../../styling/config/colors.types';
import { PopupSize } from './Popup.types';

export const StyledModal = styled(Modal)``;
export const StyledCloseButton = styled(Box)``;

const sizeStyles: Record<PopupSize, React.CSSProperties> = {
  sm: {
    width: '300px'
  },
  md: {
    width: '460px'
  },
  lg: {
    width: '560px'
  },
  auto: {
    height: 'auto',
    width: 'auto'
  }
};

const closeButtonStyles: StyleSystemProps = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer'
};

const modalStyles = (colors: Colors, size?: PopupSize): Styles => {
  return {
    overlay: {
      backgroundColor: '#161616bf',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      position: 'relative',
      backgroundColor: colors.base,
      borderRadius: '8px',
      padding: '40px 30px',
      ...sizeStyles[size || 'md']
    }
  };
};

export const styles = {
  modal: modalStyles,
  closeButton: closeButtonStyles
};
