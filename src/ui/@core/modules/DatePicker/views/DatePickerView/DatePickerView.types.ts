import { Nullable } from "../../../../../../utils";

export type DateChangeEvent = {
  target: {
    value: Nullable<number>;
    name?: string;
  }
};