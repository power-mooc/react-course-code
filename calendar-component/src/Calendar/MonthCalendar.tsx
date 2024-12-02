import { Dayjs } from 'dayjs';
import { CalendarProps } from './index';
import LocaleContent from './LocaleContext';
import { useContext } from 'react';
import allLocales from './locale';
import  cs  from 'classnames'

interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

function getAllDays(date: Dayjs) {
  const startDate = date.startOf('month'); // 月份开始时间
  const day = startDate.day(); // 星期几
  const daysInfo = new Array(6 * 7);
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      currentMonth: false,
    };
  }
  for (let i = day; i < daysInfo.length; i++) {
    const calDate = startDate.add(i - day, 'day');
    daysInfo[i] = {
      date: calDate,
      currentMonth: calDate.month() === date.month(),
    };
  }
  return daysInfo;
}



function MonthCalendar(props: MonthCalendarProps) {
  const localeContent = useContext(LocaleContent);
  const CalendarLocale = allLocales[localeContent.locale];
  const {value, curMonth, dateRender, dateInnerContent, selectHandler} = props
  const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const allDays = getAllDays(curMonth);

  function renderDays(
    days: Array<{ date: Dayjs, currentMonth: boolean}>,
  ) {
    const rows = [];
    for(let i = 0; i < 6; i++ ) {
        const row = [];
        for(let j = 0; j < 7; j++) {
            const item = days[i * 7 + j];
            row[j] = <div onClick={() => selectHandler?.(item.date)} key={item.date.valueOf()} className={
                "calendar-month-body-cell " + (item.currentMonth ? 'calendar-month-body-cell-current' : '')
            }>
              {
                dateRender? dateRender(item.date): (
                  <div className='calendar-month-body-cell-date'>
                     <div className={
                      cs('calendar-month-body-cell-value', 
                        (value?.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD'))? 'calendar-month-body-cell-date-selected': ''
                      )
                         }>{item.date.date()}</div>
                     <div className='calendar-month-body-cell-content'>{dateInnerContent?.(item.date)}</div>
                  </div>
                )
              }
        </div>
        }
        rows.push(row);
    }
    return rows.map((row, index) => <div key={index} className="calendar-month-body-row">{row}</div>)
  }

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
