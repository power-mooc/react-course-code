import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
interface RefProps {
  doSomething: () => void;
}
const Child: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        doSomething() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );
  return <input ref={inputRef}></input>;
};

const WrapChild = forwardRef(Child);
// useRef
function App() {
  const ref = useRef<RefProps>(null);
  const numRef = useRef<number>(0);
  const [, setNum] = useState(0);
  useEffect(() => {
    ref.current?.doSomething();
  });
  return (
    <div>
      <div
        onClick={() => {
          setNum(Math.random);
          numRef.current++;
        }}>
        {numRef.current}
      </div>
      <WrapChild ref={ref} />
    </div>
  );
}
export default App;
