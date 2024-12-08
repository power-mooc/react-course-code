import { useEffect } from 'react';

const defaultOption: MutationObserverInit = {
  subtree: true,
  childList: true,
  attributeFilter: ['style', 'class'],
};
function useMutationObserve(
  nodeOrList: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOption
) {
  useEffect(() => {
    if (!nodeOrList) {
      return;
    }
    let instance: MutationObserver;

    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList];

    if ('MutationObserver' in window) {
      instance = new MutationObserver(callback);

      nodeList.forEach((element) => {
        instance.observe(element, options);
      });
    }
    return () => {
      instance?.takeRecords();
      instance?.disconnect();
    };
  }, [options, nodeOrList]);
}
export default useMutationObserve;
