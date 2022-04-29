export const addAddress = (address?: string): string => {
    if(address) {
        return address + ', ';
    } else {
        return '';
    }
};