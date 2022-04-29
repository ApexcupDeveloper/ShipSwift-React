import { DateCell } from "./get-days-cells";

export const cellToMilliseconds = (cell: DateCell) => {
  if (Object.entries(cell).length === 0) return undefined;
  return new Date(cell.year, cell.month, cell.day).getTime();
};
