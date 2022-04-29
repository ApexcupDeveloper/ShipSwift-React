export const parseUnix = (unix: number) => {
    return new Date(unix * 1000); 
};
