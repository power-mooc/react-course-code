import './App.css';
import InterSectionObserver from './IntersectionObserver';
import MutationObserver from './MutationObserverTest';
import ResizeObserverTest from './ResizeObserverTest';
import PerformanceObserverTest from './PerformanceObserverTest';
// useState
function App() {
  return (
    <>
      {/* <div>
        <p>intersectionObserver use:</p>
        <InterSectionObserver></InterSectionObserver>
      </div> */}
      {/* <div>
        <p>MutationObserver use:</p>
        <MutationObserver></MutationObserver>
      </div> */}
      {/* <div>
        <p>MutationObserver use:</p>
        <ResizeObserverTest></ResizeObserverTest>
      </div> */}
      <div>
        <p>MutationObserver use:</p>
        <PerformanceObserverTest></PerformanceObserverTest>
      </div>
    </>
  );
}
export default App;
