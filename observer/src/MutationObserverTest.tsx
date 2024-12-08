import { useEffect } from 'react';

function MutationObserverTest() {
  useEffect(() => {
    const box: HTMLDivElement = document.querySelector('#box')!;
    setTimeout(() => {
      box.style.background = 'red';
    }, 2000);

    setTimeout(() => {
      const dom = document.createElement('button');
      dom.textContent = '111';
      box.appendChild(dom);
      dom.textContent = '东东东';

      document.querySelectorAll('button')[0].remove();
    }, 3000);

    // setTimeout(() => {
    //   document.querySelectorAll('button')[0].remove();
    // }, 5000);

    const mutationObserver = new MutationObserver((mutationsList) => {
      console.log(mutationsList);
    });

    mutationObserver.observe(box, {
      attributes: true,
      childList: true,
    });
  }, []);
  return (
    <div id="box">
      <button>光</button>
    </div>
  );
}

export default MutationObserverTest;
