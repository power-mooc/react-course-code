import { useState } from 'react';
import './index.css';
function Calendar() {
  const mouthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const [date, setDate] = useState(new Date());
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
    // todo
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="empty"></div>);
    }
    for (let i = 1; i < daysCount + 1; i++) {
      days.push(<div className="day">{i}</div>);
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
}
export default Calendar;
