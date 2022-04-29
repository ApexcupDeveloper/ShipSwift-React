function padValue(value: number) {
    return (value < 10) ? "0" + value : value;
}

function getSuffix(value: number) {
    let suffix = '';
    switch (value) {
        case 1:
        case 21:
        case 31:
            suffix = "st";
            break;
        case 2:
        case 22:
            suffix = "nd";
            break;
        case 3:
        case 23:
            suffix = "rd";
            break;
        default:
            suffix = "th";
            break;
    }
    return suffix;
}

export const convertTime = (date: any): string => {
    var newDate = new Date(date);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour: any = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "am";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck >= 12) {
        sAMPM = "pm";
    }

    sHour = padValue(sHour);

    return sDay + "/" + sMonth + "/" + sYear + ", " + sHour + ":" + sMinute + " " + sAMPM;
};

export const convertDate = (date: any): string => {
    var newDate = new Date(date);
    var sMonth: any = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    return sMonth + "/" + sDay + "/" + sYear;
};

export const convertTime1 = (date: Date): string => {
    var newDate = new Date(date);

    var sMonth: any = newDate.toLocaleString('default', { month: 'long' });
    var sDay: any = newDate.getDate();
    var sHour: any = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "am";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck >= 12) {
        sAMPM = "pm";
    }

    sHour = padValue(sHour);

    return sMonth + ' ' + sDay + getSuffix(sDay) + '<br/>' + sHour + ':' + sMinute + ' ' + sAMPM;

};

export const convertDate1 = (date: Date): string => {
    var newDate = new Date(date);
    var sMonth: any = newDate.toLocaleString('default', { month: 'short' });
    var sDay: any = newDate.getDate();
    var sYear = newDate.getFullYear();

    return sDay + getSuffix(sDay) + ' ' + sMonth + ' ' + sYear;
};