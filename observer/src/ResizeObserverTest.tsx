import { useEffect } from 'react';

function MutationObserverTest() {
  useEffect(() => {
    const box: HTMLDivElement = document.querySelector('#resize-box')!;

    setTimeout(() => {
      box.style.width = '200px';
    }, 3000);
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('当前大小', entries);
    });
    resizeObserver.observe(box);
  }, []);
  return <div id="resize-box"></div>;
}

export default MutationObserverTest;
