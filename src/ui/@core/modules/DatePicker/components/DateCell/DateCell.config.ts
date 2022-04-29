/* eslint-disable no-mixed-operators */
import { isEmpty } from '../../../../../../utils';
import { DateCellOrEmpty } from '../../__hooks/_useDatePicker';

export const isActive = (cell: DateCellOrEmpty, is: DateCellOrEmpty) => {
  if (isEmpty(cell) || isEmpty(is)) return false;

  // @ts-ignore
  return cell?.day === is?.day && cell?.month === is?.month && cell?.year === is?.year;
};

const deepRange = (start: number, end: number, current: number, parentStart: number, parentEnd: number, parentCurrent: number) => {
  const isStart = parentCurrent === parentStart && current >= start;
  const isEnd = parentCurrent === parentEnd && current <= end;
  const inRange = current >= start && current <= end; 

  const hasParentRange = !!Math.abs(parentStart - parentEnd);
  const inFullRange = hasParentRange && (parentCurrent > parentStart && parentCurrent < parentEnd);
  const inStartEnd = hasParentRange && (isEnd || isStart);
  
  return inRange || inFullRange || inStartEnd;
}

export const isSubActive = (cell: DateCellOrEmpty, startRange: DateCellOrEmpty, endRange: DateCellOrEmpty) => {
	if (isEmpty(cell) || isEmpty(startRange) || isEmpty(endRange)) return false;

  // @ts-ignore
  const { year, month, day } = cell;
  // @ts-ignore
  const { year: sYear, month: sMonth, day: sDay } = startRange;
  // @ts-ignore
  const { year: eYear, month: eMonth, day: eDay } = endRange;
  
  
  const yearOk = year >= sYear && year <= eYear;
  if (!yearOk) return false;

  const monthOk = deepRange(sMonth, eMonth, month, sYear, eYear, year);
  if (!monthOk) return false;

  const dayOk = deepRange(sDay, eDay, day, sMonth, eMonth, month);
  if (!dayOk) return false;

  
	return true;
}
