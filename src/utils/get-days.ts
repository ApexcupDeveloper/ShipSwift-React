export const getDays = (start: any, end: any): number => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
};

export const addHoursToDate = (date: Date, hours: number): Date => {
    return new Date(new Date(date).setHours(date.getHours() + hours));
}

export const addDaysToDate = (date: Date, days: number): Date => {
    return new Date(new Date(date).setDate(date.getDate() + days));
}

export const getCutoffTime = (date: Date): string => {
    const hour = date.getHours();
    const minute = date.getMinutes();

    let returnHour = hour < 10 ? `0${hour}` : `${hour}`;
    let returnMin = minute < 10 ? `0${minute}` : `${minute}`;

    return returnHour + ':' + returnMin;
}

export const getCollectionDate = (time: string):number => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();
    let collectionDate = 0;

    let newHour = currentHour < 10 ? `0${currentHour}` : `${currentHour}`;
    let newMin = currentMin < 10 ? `0${currentMin}` : `${currentMin}`;

    let newTime = newHour + ':' + newMin;

    let times = time.split(':');
    if(newTime < time) {
        collectionDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), Number(times[0]), Number(times[1]), 0).getTime();
    } else {
        collectionDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, Number(times[0]), Number(times[1]), 0).getTime();
    }

    return collectionDate;
}