import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../styling/config/theme.types';

const emToPx = (val: string) => Number.parseFloat(val.split('em')[0]) * 16;

export const useIsMobile = () => {
  const { breakpoints } = useTheme() as Theme;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mobileBreakpointInEm = breakpoints.sm;
    const mobileBreakpointInPx = emToPx(mobileBreakpointInEm.toString());

    setIsMobile(windowWidth < mobileBreakpointInPx);
  }, [windowWidth]);

  return isMobile;
};
