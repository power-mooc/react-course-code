import Calendar from './Calendar';
import dayjs from 'dayjs';
function App() {
  return (
    <div className="App">
      <Calendar locale='en-US' dateInnerContent={(value => {
        return <div>
          <p style={{background: 'yellowgreen', height: '20px'}}>{value.format('YYYY-MM-DD')}</p>
        </div>
      })}value={dayjs('2024-11-30')}></Calendar>
    </div>
  );
}

export default App;
