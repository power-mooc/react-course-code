import './index.scss';
import dayjs, { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import localeContent from './LocaleContext';
import Header from './Header';
import { CSSProperties, ReactNode, useState } from 'react';
import cs  from 'classnames';
import { useControllableValue } from 'ahooks';
export interface CalendarProps {
  value?: Dayjs;
  defaultValue?: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { className, style, locale, onChange} = props
  const classNames = cs('calendar', className);
  
  const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs()
  }); // 选中的值
  const [curMonth, setCurMonth] = useState<Dayjs>(curValue); // 日历显示的月份
  function changeDate(date:Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }
  function selectHandler(date:Dayjs) {
    changeDate(date);
  }
  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'))
  }
  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'))
  }
  function todayHandler() {
    const today = dayjs(Date.now())
    changeDate(today)
  }
  return (
    <localeContent.Provider value={{
      locale: locale || navigator.language
    }}>
      <div className={classNames} style={style}>
        <Header curMonth={curMonth} prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} todayHandler={todayHandler}></Header>
        <MonthCalendar value={curValue} curMonth={curMonth} {...props} selectHandler={selectHandler}></MonthCalendar>
      </div>
    </localeContent.Provider>
  );
}

export default Calendar;
