import React, { useState } from 'react';
import { FieldText } from './FieldText';

import {
    EuiSuperDatePicker,
    EuiSpacer,
    EuiFormControlLayoutDelimited,
    EuiFormLabel,
    EuiPanel,
    EuiText,
} from '@elastic/eui';

interface OnRefreshProps {
    start: string,
    end: string,
    refreshInterval: unknown,
}

interface OnTimeChangeProps {
    start: string,
    end: string,
}


export const DatePicker = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [start, setStart] = useState('now-30m');
    const [end, setEnd] = useState('now');

    const onTimeChange = ({ start, end }: OnTimeChangeProps) => {
        setStart(start);
        setEnd(end);
        setIsLoading(true);
        startLoading();
    };

    const onRefresh = async ({ start, end, refreshInterval }: OnRefreshProps) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 100);
        });
        console.log(start, end, refreshInterval);
    };

    const onStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStart(e.target.value);
    };

    const onEndInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnd(e.target.value);
    };

    const startLoading = () => {
        setTimeout(stopLoading, 1000);
    };

    const stopLoading = () => {
        setIsLoading(false);
    };

    const renderTimeRange = () => {
        return (
            <EuiPanel color="subdued" paddingSize="m">
                <EuiText size="s">
                    EuiSuperDatePicker should be resilient to invalid date values. You can
                    try to break it with unexpected values here.
                </EuiText>
                <EuiSpacer />
                <EuiFormControlLayoutDelimited
                    prepend={<EuiFormLabel>Dates</EuiFormLabel>}
                    startControl={
                        <FieldText
                            controlOnly
                            onChange={onStartInputChange}
                            value={start}
                            placeholder="start"
                        />
                    }
                    endControl={
                        <FieldText
                            controlOnly
                            onChange={onEndInputChange}
                            placeholder="end"
                            value={end}
                        />
                    }
                />
            </EuiPanel>
        );
    };

    return (
        <>
            {renderTimeRange()}
            <EuiSpacer />
            <EuiSuperDatePicker
                isLoading={isLoading}
                start={start}
                end={end}
                onTimeChange={onTimeChange}
                onRefresh={onRefresh}
            />
        </>
    );
};
