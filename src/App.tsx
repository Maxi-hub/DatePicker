import { useState } from 'react';
import './App.css'
import { Calendar } from './components/Calendar/Calendar'
import { PeriodContext } from './hooks/PeriodContext'
// import { DatePicker } from './components/date-picker/DatePicker'


function App() {
  const [period, setPeriod] = useState<string | null>(null);
  return (
    <>
      {/* <DatePicker /> */}
      <PeriodContext.Provider value={period}>
        <Calendar setPeriod={setPeriod}/>
      </PeriodContext.Provider>
    </>
  )
}

export default App;
