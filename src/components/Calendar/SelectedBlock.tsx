import { useEffect, useRef, useState } from 'react';
import styles from './calendar.module.scss';

interface SelectedPeriodProps {
    setPeriod: (value: string | null) => void;
    setIsOpen: (value: boolean) => void;
}

export const SelectedBlock = ({ setPeriod, setIsOpen }: SelectedPeriodProps) => {
    const period = ['Today', 'This week', 'This month', 'This year', 'Yesterday', 'Week to date', 'Month to date', 'Year to date'];
    const [periodSelect, setPeriodSelect] = useState('Last');
    const [amount, setAmount] = useState(30);
    const [timeSelect, setTimeSelect] = useState('Minutes');
    const functionalBlockRef = useRef<HTMLDivElement>(null);

    const now = new Date();
    console.log(now);

    const handlechoose = (element: string) => {
        setPeriod(element);
        let dateTime: number;
        switch (element) {
            case 'Today':
                dateTime = 12;
                break;
            case 'This week':
                dateTime = 13;
                break;
            case 'This month':
                dateTime = 14;
                break;
            case 'This year':
                dateTime = 15;
                break;
            case 'Yesterday':
                dateTime = 16;
                break;
            case 'Week to date':
                dateTime = 17;
                break;
            case 'Month to date':
                dateTime = 18;
                break;
            case 'Year to date':
                dateTime = 19;
                break;
            default:
                dateTime = 0;
        }
        console.log(dateTime);
        setIsOpen(false);
    };

    const handlePeriodSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPeriodSelect(e.target.value);
    };

    const handleAmountSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleTimeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeSelect(e.target.value);
    };

    const handleApply = () => {
        const updatedPeriod = `${periodSelect} ${amount} ${timeSelect}`;
        setPeriod(updatedPeriod);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (functionalBlockRef.current && !functionalBlockRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])


    return (
        <div className={styles.functionalBlock} ref={functionalBlockRef}>
            <div className={styles.selectTop}>
                <p className={styles.selectText}>Quick select</p>
                <div className={styles.arrowsBox}>
                    <div className={styles.leftArrowBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true"><path fillRule="evenodd" d="m5.707 8 5.647-5.646-.708-.708L4.293 8l6.353 6.354.707-.708L5.708 8Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className={styles.rightArrowBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true"><path fillRule="evenodd" d="M10.293 8 4.646 2.354l.708-.708L11.707 8l-6.353 6.354-.708-.708L10.293 8Z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
            <div className={styles.selectedPeriodBox}>
                <div className={styles.selectedPeriod}>
                    <select className={styles.select} name='Period' id='period-select' onChange={handlePeriodSelect}>
                        <option value='Last'>Last</option>
                        <option value='Next'>Next</option>
                    </select>
                    <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true"><path fillRule="evenodd" d="m8 10.293 5.646-5.647.708.708L8 11.707 1.646 5.354l.708-.708L8 10.293Z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <input className={styles.select} type='number' min={0} value={amount} onChange={handleAmountSelect} />
                <div className={styles.selectedTime}>
                    <select
                        className={styles.select}
                        name='Time'
                        id='time-select'
                        defaultValue={'Minutes'}
                        onChange={handleTimeSelect}
                    >
                        <option value='Seconds'>Seconds</option>
                        <option value='Minutes'>Minutes</option>
                        <option value='Hours'>Hours</option>
                        <option value='Days'>Days</option>
                        <option value='Weeks'>Weeks</option>
                        <option value='Months'>Months</option>
                        <option value='Years'>Years</option>
                    </select>
                    <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" aria-hidden="true"><path fillRule="evenodd" d="m8 10.293 5.646-5.647.708.708L8 11.707 1.646 5.354l.708-.708L8 10.293Z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <button
                    className={styles.applyButton}
                    onClick={handleApply}
                >
                    Apply
                </button>
            </div>
            <div className={styles.quickSelectPanel}>
                <h6 className={styles.quickSelectPanelTitle}>Commonly used</h6>
                <div>
                    <ul className={styles.quickSelectPanelList}>
                        {period.map((item, index) =>
                            <li
                                className={styles.quickSelectPanelItem}
                                key={index}
                                onClick={() => handlechoose(item)}
                            >
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div >
    )
};
