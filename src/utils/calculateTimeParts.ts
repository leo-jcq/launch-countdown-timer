/**
 * Calculate time parts of a time value
 *
 * @param {number} time the time value (in seconds)
 * @return {TimeParts} the time Parts
 */
function calculateTimeParts(time: number): TimeParts {
    // initialize variable
    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    // calculate days
    const days = Math.floor(time / oneDay);
    time %= oneDay;

    // calculate hours
    const hours = Math.floor(time / oneHour);
    time %= oneHour;

    // calculate minutes
    const minutes = Math.floor(time / oneMinute);
    time %= oneMinute;

    // calculate seconds
    const seconds = Math.floor(time);

    return {
        seconds: {
            before: seconds,
            after: seconds === 0 ? (minutes === 0 ? 0 : 59) : seconds - 1
        },
        minutes: {
            before: minutes,
            after: minutes === 0 ? (hours === 0 ? 0 : 59) : minutes - 1
        },
        hours: {
            before: hours,
            after: hours === 0 ? (days === 0 ? 0 : 23) : hours - 1
        },
        days: {
            before: days,
            after: days === 0 ? 0 : days - 1
        }
    };
}

export default calculateTimeParts;
