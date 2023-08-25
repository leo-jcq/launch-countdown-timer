import { FC } from 'react';
import startVal from '../../constants/startVal';
import useCountDown from '../../hooks/useCountDown';
import Flip from '../Flip/Flip';
import './Countdown.scss';

const Countdown: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { days, hours, minutes, seconds } = useCountDown(startVal);

    return (
        <div className="countdown">
            <Flip label="days" value={days} />
            <Flip label="hours" value={hours} />
            <Flip label="minutes" value={minutes} />
            <Flip label="seconds" value={seconds} />
        </div>
    );
};

export default Countdown;
