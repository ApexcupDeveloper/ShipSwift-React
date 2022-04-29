import { useLocale } from '../../../../../assets/locale';
import { BoardRaw } from '../../../../@core/modules/ListBuilder';

type Props = {
  onHand   : number;
  allocated: number;
  available: number;
  backorder: number;
  expected : number;
};

export const Statistics: React.VFC<Props> = ({ onHand, allocated, available, backorder, expected }) => {
  const { word } = useLocale();

  return (
    <BoardRaw>
      <BoardRaw.Card label={word('global.on-hand')} stats={onHand} />
      <BoardRaw.Card label={word('global.allocated')} stats={allocated} />
      <BoardRaw.Card label={word('global.available')} stats={available} />
      <BoardRaw.Card label={word('global.backorder')} stats={backorder} />
      <BoardRaw.Card label={word('global.expected')} stats={expected} />
    </BoardRaw>
  );
};
