import { useEffect } from 'react';

function PerformanceObserverTest() {
  const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(entry); // 上报
    });
  });
  performanceObserver.observe({ entryTypes: ['resource', 'mark', 'measure'] });

  performance.mark('registered-observer');

  function measureClick() {
    performance.measure('button clicked');
  }
  return (
    <div>
      <button onClick={measureClick}>Measure</button>
      <img alt="" src="https://p9-passport.byteacctimg.com/img/user-avatar/4e9e751e2b32fb8afbbf559a296ccbf2~300x300.image" />
    </div>
  );
}

export default PerformanceObserverTest;
