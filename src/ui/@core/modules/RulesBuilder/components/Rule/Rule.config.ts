import { WordFunc } from "../../../../../../assets/locale";
import { SelectOption } from "../../../Select";

import { Equal } from "../RulesGroup/RulesGroup.types";

export const equalList = (word: WordFunc): SelectOption<Equal>[] => [
  {
    label: word('global.equal'),
    value: 'equal'
  }
];