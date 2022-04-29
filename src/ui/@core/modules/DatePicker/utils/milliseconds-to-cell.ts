import { Nullable } from "../../../../../utils";
import { DateCell } from "./get-days-cells";

export const millisecondsToCell = (ms: Nullable<number>) => {
  if (!ms) return {};

  const date = new Date(ms);

  const cell: DateCell = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  };

  return cell;
};
