import { useContext, useState } from 'react';
import styles from './calendar.module.scss';
import { SelectedBlock } from './SelectedBlock';
import { PeriodContext } from '../../hooks/PeriodContext';

interface PeriodProps {
  setPeriod: (value: string | null) => void;
}

export const Calendar = ({ setPeriod }: PeriodProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const period = useContext(PeriodContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  console.log('Current period:', period);

  return (
    <div className={styles.box}>
      <div className={styles.boxLeftPart}>
        <div
          className={styles.calendarBox}
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.calendar} role="img" aria-hidden="true"><path fillRule="evenodd" d="M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4h12zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1v1zM4 7h2v1H4V7zm3 0h2v1H7V7zm3 0h2v1h-2V7zM4 9h2v1H4V9zm3 0h2v1H7V9zm3 0h2v1h-2V9zm-6 2h2v1H4v-1zm3 0h2v1H7v-1zm3 0h2v1h-2v-1z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.arrow} role="img" aria-hidden="true"><path fillRule="evenodd" d="m8 10.293 5.646-5.647.708.708L8 11.707 1.646 5.354l.708-.708L8 10.293Z" clipRule="evenodd"></path>
          </svg>
        </div>
        {isOpen && <SelectedBlock setPeriod={setPeriod}/>}
      </div>
      <div className={styles.boxRightPart}>
        <button
          type='button'
          className={styles.buttonBoxRightPart}
          onClick={() => console.log('click')}
        >
          {period}
        </button>
      </div >
      <div className={styles.refreshButtonBox}>
        <button className={styles.refreshButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.roundArrows} role="img" aria-hidden="true"><path fill-rule="evenodd" d="M2 8a5.98 5.98 0 0 0 1.757 4.243A5.98 5.98 0 0 0 8 14v1a6.98 6.98 0 0 1-4.95-2.05A6.98 6.98 0 0 1 1 8c0-1.79.683-3.58 2.048-4.947l.004-.004.019-.02L3.1 3H1V2h4v4H4V3.525a6.51 6.51 0 0 0-.22.21l-.013.013-.003.002-.007.007A5.98 5.98 0 0 0 2 8Zm10.243-4.243A5.98 5.98 0 0 0 8 2V1a6.98 6.98 0 0 1 4.95 2.05A6.98 6.98 0 0 1 15 8a6.98 6.98 0 0 1-2.047 4.947l-.005.004-.018.02-.03.029H15v1h-4v-4h1v2.475a6.744 6.744 0 0 0 .22-.21l.013-.013.003-.002.007-.007A5.98 5.98 0 0 0 14 8a5.98 5.98 0 0 0-1.757-4.243Z" clip-rule="evenodd"></path></svg>
          Refresh
        </button>
      </div>
    </div >
  )
};
