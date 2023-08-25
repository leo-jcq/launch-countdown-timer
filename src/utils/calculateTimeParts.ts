/**
 * Calculate time parts of a time value
 *
 * @param {number} time the time value (in seconds)
 * @return {TimeParts} the time Parts
 */
function calculateTimeParts(time: number): TimeParts {
    // initialize temp variable
    let temp = time;

    // calculate seconds
    const sec = Math.floor(time % 60);

    // calculate minutes
    temp /= 60;
    const min = Math.floor(temp % 60);

    // calculate hours
    temp /= 60;
    const hour = Math.floor(temp % 60);

    // calculate days
    temp /= 60;
    const day = Math.floor(temp % 60);

    return {
        seconds: {
            before: sec,
            after: sec === 0 ? (min === 0 ? 0 : 59) : sec - 1
        },
        minutes: {
            before: min,
            after: min === 0 ? (hour === 0 ? 0 : 59) : min - 1
        },
        hours: {
            before: hour,
            after: hour === 0 ? (day === 0 ? 0 : 23) : hour - 1
        },
        days: {
            before: day,
            after: day === 0 ? 0 : day - 1
        }
    };
}

export default calculateTimeParts;
