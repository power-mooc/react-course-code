import { ChangeEvent, useState } from 'react';

interface CalendarProps {
  defaultValue: Date;
  onChange: (date: Date) => void;
}
function Calendar(props: CalendarProps) {
  const { defaultValue = new Date(), onChange } = props;
  const [date, setDate] = useState(defaultValue);
  function changeValue(date: Date) {
    setDate(date);
    onChange?.(date);
  }
  return (
    <div>
      <div>{date.toLocaleDateString()}</div>
      <div
        onClick={() => {
          changeValue(new Date('2024-5-1'));
        }}>
        2023-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date('2024-5-2'));
        }}>
        2023-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date('2024-5-3'));
        }}>
        2023-5-3
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Calendar
        defaultValue={new Date('2024-5-1')}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
        }}></Calendar>
    </>
  );
}
