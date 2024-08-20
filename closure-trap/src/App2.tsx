import { ForwardRefRenderFunction, useImperativeHandle, useRef, forwardRef, useEffect } from 'react';

interface PowerProps {
  name: string;
}
interface PowerRef {
  aaa: () => void;
}
const Power = forwardRef<PowerRef, PowerProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );
  return (
    <div>
      <input ref={inputRef} />
      <div>{props.name}</div>
    </div>
  );
});
function App() {
  const ref = useRef<PowerRef>(null);
  useEffect(() => {
    console.log('ref', ref.current);
    ref.current?.aaa();
  }, []);
  return (
    <div>
      <Power name="power" ref={ref} />
    </div>
  );
}
export default App;
