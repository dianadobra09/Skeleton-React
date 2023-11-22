import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

const sidebarCollapseStateSubject = new Subject<boolean>();

export const useSidebarCollapseState = () => {
  const [sidebarCollapseState, setSidebarCollapseState] = useState<boolean>(false);

  const sidebarCollapseStateObserver = (isCollapsed: boolean) => {
    if (sidebarCollapseState !== isCollapsed) {
      setSidebarCollapseState(isCollapsed);
      sidebarCollapseStateSubject.next(isCollapsed);
    }
  };

  const sidebarCollapseStateSubscriber = (callback: (isCollapsed: boolean) => void) => {
    useEffect(() => {
      const subscription = sidebarCollapseStateSubject.subscribe(callback);
      return () => subscription.unsubscribe();
    }, [callback]);
  };

  return { sidebarCollapseStateObserver, sidebarCollapseStateSubscriber };
};
