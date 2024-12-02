import {Dayjs} from 'dayjs'
import LocaleContent from './LocaleContext';
import { useContext } from 'react';
import allLocales from './locale';
interface HeaderProps {
  curMonth: Dayjs,
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void

}
function Header(props: HeaderProps) {
  const { prevMonthHandler, nextMonthHandler, curMonth, todayHandler} = props;
  const localeContent = useContext(LocaleContent);
  const calendarContext = allLocales[localeContent.locale]

  return <div className="calendar-header">
      <div className="calendar-header-left">
          <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
          <div className="calendar-header-value">{curMonth.format(calendarContext.formatMonth)}</div>
          <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
          <button className="calendar-header-btn" onClick={todayHandler}>{calendarContext.today}</button>
      </div>
  </div>
}

export default Header;
