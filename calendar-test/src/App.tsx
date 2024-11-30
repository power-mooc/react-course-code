import { useEffect, useRef, useState } from 'react';
import Calendar from './component/Canlendar';
import type { CalendarRef } from './component/Canlendar';
function App() {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef<CalendarRef>(null);
  useEffect(() => {
    console.log(calendarRef.current?.getDate());
  }, []);
  return (
    <div>
      <Calendar
        ref={calendarRef}
        value={new Date('2023-3-1')}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
          setDate(date);
        }}></Calendar>
      <div>{date.toLocaleDateString()}</div>
    </div>
  );
}

export default App;
