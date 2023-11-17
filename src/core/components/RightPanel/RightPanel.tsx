import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';
import { useWindowResizeObserver, useWindowResizeSubscriber } from '../../hooks/useWindowResize';
import { BaseComponentProps } from '../../types/Core';
import { CloseButton, Container, Content, Header, styles } from './RightPanel.styles';

interface RightPanelProps extends BaseComponentProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  size?: number; // in percentage of screen width
}

const RightPanel: React.FC<RightPanelProps> = ({ title, isOpen, onClose, size, children }) => {
  const contentRef = useRef(null);

  const [autoSize, setAutoSize] = useState(0);

  const panelSize = useMemo(() => {
    if (size && size > 0 && size <= 100) {
      return size;
    } else {
      return autoSize;
    }
  }, [size, autoSize]);

  const computeAutosize = useCallback(() => {
    if (isOpen) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const contentWidth = contentRef?.current?.offsetWidth;
      const windowWidth = window.innerWidth;
      const percentage = (contentWidth / windowWidth) * 100;
      setAutoSize(percentage);
    }
  }, [isOpen]);

  useWindowResizeObserver();
  useWindowResizeSubscriber(computeAutosize);

  useEffect(() => {
    computeAutosize();
  }, [computeAutosize]);

  return (
    <SlidingPanel type={'right'} isOpen={isOpen} size={panelSize} backdropClicked={onClose}>
      <Container __css={styles.container}>
        <Header __css={styles.header}>
          {title}
          <CloseButton __css={styles.closeButton}>
            <XIcon onClick={onClose} />
          </CloseButton>
        </Header>
        <Content __css={styles.content} ref={contentRef}>
          {children}
        </Content>
      </Container>
    </SlidingPanel>
  );
};

export { RightPanel };
