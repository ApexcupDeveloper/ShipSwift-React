import { generateArray, Nullable } from "../../../../../utils";

type Cell = Nullable<DateCell>;

export type DateCell = {
  day: number;
  month: number;
  year: number;
}

export const getDaysCells = (year: number, month: number) => {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const cells: Cell[] = generateArray<Cell>(first.getDay(), () => null);
  
  for (let day = 1; day <= last.getDate(); day++) {
    cells.push({ year, month, day });
  }
  
  return cells;
};
