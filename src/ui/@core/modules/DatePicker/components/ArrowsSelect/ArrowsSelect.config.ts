import { WordFunc } from "../../../../../../assets/locale";

export const monthMap = (month: number, word: WordFunc) => {
  switch(month) {
    case 0 : return word('date-picker.month.january');
    case 1 : return word('date-picker.month.february');
    case 2 : return word('date-picker.month.march');
    case 3 : return word('date-picker.month.april');
    case 4 : return word('date-picker.month.may');
    case 5 : return word('date-picker.month.june');
    case 6 : return word('date-picker.month.july');
    case 7 : return word('date-picker.month.august');
    case 8 : return word('date-picker.month.september');
    case 9 : return word('date-picker.month.october');
    case 10: return word('date-picker.month.november');
    case 11: return word('date-picker.month.december');
  }
};
