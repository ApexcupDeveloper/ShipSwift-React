import {ItemRaw, TitleRaw} from '../../../../@core/modules/ListBuilder';
import {useLocale} from "../../../../../assets/locale";

type Props = {
  id: string;
  nickName: string;
  isSelected: boolean;
  selectPlan: (id: string) => void;
};

export const PaymentPlanRow: React.FC<Props> = ({id, nickName, isSelected, selectPlan}) => {
  const {word} = useLocale();
  return (
    <ItemRaw key={id}>
      <ItemRaw.Title children={nickName || id} bold/>
      <TitleRaw.Space/>
      {!isSelected ? <ItemRaw.Link label={word('global.select')} onClick={() => {
        selectPlan(id)
      }}/> : null}

    </ItemRaw>
  );
};
