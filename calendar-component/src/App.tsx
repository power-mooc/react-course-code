import { useState } from 'react';
import Calendar from './Calendar';
import dayjs from 'dayjs';
function App() {
  const [value, setValue] = useState(dayjs());
  return (
    <div className="App">
       {/* 非受控模式 */}
       <Calendar defaultValue={dayjs('2023-11-08')}></Calendar>
       {/* 受控模式 */}
       <Calendar value={value} onChange={(val) => {
        setValue(val)
      }}></Calendar>
    </div>
  );
}

export default App;
