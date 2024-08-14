import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  return <div onClick={() => setNum((preNum) => preNum + 1)}>{num}</div>;
}

export default App;
