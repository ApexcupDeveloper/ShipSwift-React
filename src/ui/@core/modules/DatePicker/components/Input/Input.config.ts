import { WordFunc } from '../../../../../../assets/locale';
import { DateCell } from '../../utils/get-days-cells';

import { isEmpty } from '../../../../../../utils';

export const monthMap = (month: number, word: WordFunc) => {
  switch(month) {
    case 0 : return word('date-picker.month.january.short');
    case 1 : return word('date-picker.month.february.short');
    case 2 : return word('date-picker.month.march.short');
    case 3 : return word('date-picker.month.april.short');
    case 4 : return word('date-picker.month.may.short');
    case 5 : return word('date-picker.month.june.short');
    case 6 : return word('date-picker.month.july.short');
    case 7 : return word('date-picker.month.august.short');
    case 8 : return word('date-picker.month.september.short');
    case 9 : return word('date-picker.month.october.short');
    case 10: return word('date-picker.month.november.short');
    case 11: return word('date-picker.month.december.short');
  }
};

export const formatDate = (cell: DateCell, word: WordFunc) => {
  if (isEmpty(cell)) return '';

  const month = monthMap(cell.month, word);
  return `${month} ${cell.day}, ${cell.year}`;
};
