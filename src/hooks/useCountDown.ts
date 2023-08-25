import { useEffect, useMemo, useState } from 'react';
import calculateTimeParts from '../utils/calculateTimeParts';

/**
 * Custom hook to count down from a given time
 *
 * @param {number} initialTime the initial time to count down from (in seconds)
 * @return {TimeParts}
 */
function useCountDown(initialTime: number): TimeParts {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time > 0) {
            const interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    });

    const timeParts = useMemo(() => calculateTimeParts(time), [time]);

    return timeParts;
}

export default useCountDown;
