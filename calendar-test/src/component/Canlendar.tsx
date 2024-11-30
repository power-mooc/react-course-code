import '../index.css';
import { useControllableValue } from 'ahooks';
import { useImperativeHandle, forwardRef, ForwardRefRenderFunction } from 'react';
interface CanlendarProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}
export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
const InternalCalendar: ForwardRefRenderFunction<CalendarRef, CanlendarProps> = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date) {
        setDate(date);
      },
    };
  });
  const mouthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  });
  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  };
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };

  const daysOfMonth = (year: number, month: number) => {
    // 获取一个月有多少天
    return new Date(year, month + 1, 0).getDate();
  };
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  // 渲染日期
  const renderDates = () => {
    const days = [];
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={'empty' + i} className="empty"></div>);
    }
    for (let i = 1; i < daysCount + 1; i++) {
      const clickHandler = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(curDate);
      };
      if (i === date.getDate()) {
        days.push(
          <div key={i} className="day selected" onClick={() => clickHandler()}>
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={i} className="day" onClick={() => clickHandler()}>
            {i}
          </div>
        );
      }
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {mouthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};
const Calendar = forwardRef(InternalCalendar);
export default Calendar;
