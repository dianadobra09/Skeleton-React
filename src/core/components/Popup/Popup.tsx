import React from 'react';
import { OnAfterOpenCallback } from 'react-modal';
import { useTheme } from 'styled-components';
import { Theme } from '../../styling/config/theme.types';
import { BaseComponentProps } from '../../types/Core';
import { StyledCloseButton, StyledModal, styles } from './Popup.styles';
import { PopupSize } from './Popup.types';
import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';

interface PopupProps extends BaseComponentProps {
  isOpen: boolean;
  onClose?: () => void;
  onAfterOpen?: OnAfterOpenCallback;
  onAfterClose?: () => void;
  size?: PopupSize;
}

const Popup: React.FC<PopupProps> = props => {
  const { isOpen, onAfterOpen, onAfterClose, onClose, size, children } = props;
  const { colors } = useTheme() as Theme;

  return (
    <StyledModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      shouldCloseOnEsc
      onRequestClose={onClose}
      style={styles.modal(colors, size)}
      ariaHideApp={false}
    >
      <StyledCloseButton __css={styles.closeButton}>
        <XIcon onClick={onClose} />
      </StyledCloseButton>
      {children}
    </StyledModal>
  );
};

export { Popup };
