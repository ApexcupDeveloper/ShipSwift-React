export const createUnix = (date: Date = new Date()) => {
    return +(date.getTime() / 1000).toFixed(0);
};
