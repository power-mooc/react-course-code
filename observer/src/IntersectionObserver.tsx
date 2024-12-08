import { useEffect } from 'react';
import './App.css';
// useState
function InterSectionObserver() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      function (entries) {
        console.log('info:');
        entries.forEach((item) => {
          console.log(item.target, item.intersectionRatio);
        });
      },
      {
        threshold: [0.5, 1],
      }
    );

    intersectionObserver.observe(document.querySelector('#box1')!);
    intersectionObserver.observe(document.querySelector('#box2')!);
  }, []);

  return (
    <>
      <div id="box1">BOX111</div>
      <div id="box2">BOX222</div>
    </>
  );
}
export default InterSectionObserver;
