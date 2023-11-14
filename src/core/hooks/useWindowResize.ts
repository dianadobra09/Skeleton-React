import { useEffect } from 'react';
import { Subject } from 'rxjs';
import { debounce } from 'debounce';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
const windowSizeSubject = new Subject<WindowSize>();

export const useWindowResizeObserver = () => {
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      windowSizeSubject.next({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', debounce(handleResize, 30));
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export const useWindowResizeSubscriber = (callback: (size: WindowSize) => void) => {
  useEffect(() => {
    const subscription = windowSizeSubject.subscribe(callback);
    return () => subscription.unsubscribe();
  }, [callback]);
};
