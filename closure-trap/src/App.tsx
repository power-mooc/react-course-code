import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

// function useInterval(fn: Function, delay: number) {
//   const ref = useRef(fn);
//   const callbackFn = useRef<Function>();
//   const clean = useCallback(() => {
//     callbackFn.current?.();
//   }, []);
//   useLayoutEffect(() => {
//     ref.current = fn;
//   });
//   useEffect(() => {
//     console.log(111);
//     const timer = setInterval(() => ref.current?.(), delay);
//     callbackFn.current = () => {
//       clearInterval(timer);
//     };
//     return clean;
//   }, []);
//   return clean;
// }

function useInterval(fn: Function, time: number) {
  const ref = useRef(fn);

  ref.current = fn;

  let cleanUpFnRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => ref.current(), time);

    cleanUpFnRef.current = () => {
      clearInterval(timer);
    };
    return clean;
  }, []);
  return clean;
}

function App() {
  const [num, setNum] = useState(0);
  const updateFn = () => {
    setNum(num + 1);
  };
  useInterval(updateFn, 1000);
  return <div>{num}</div>;
}

export default App;
