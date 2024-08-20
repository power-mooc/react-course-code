// 受控模式
import { ChangeEvent, useState } from 'react';

function App() {
  const [val, setVal] = useState('guang');
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    // setVal(event.target.value);
  }

  return <input value={val} onChange={onChange} />;
}

export default App;
