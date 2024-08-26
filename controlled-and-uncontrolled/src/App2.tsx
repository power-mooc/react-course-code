// 受控模式
// import { ChangeEvent, useState } from 'react';

// function App() {
//   const [val, setVal] = useState('guang');
//   function onChange(event: ChangeEvent<HTMLInputElement>) {
//     console.log(event.target.value);
//     // setVal(event.target.value);
//   }

//   return <input value={val} onChange={onChange} />;
// }

// export default App;

import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('guang');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValue(event.target.value.toUpperCase());
  }

  return <input value={value} onChange={onChange} />;
}

export default App;
