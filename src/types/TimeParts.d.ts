type TimePartLabel = 'days' | 'hours' | 'minutes' | 'seconds';

interface TimePart {
    before: number;
    after: number;
}

interface TimeParts {
    days: TimePart;
    hours: TimePart;
    minutes: TimePart;
    seconds: TimePart;
}
