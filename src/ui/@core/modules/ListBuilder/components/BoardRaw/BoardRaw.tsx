import { DisplayRound } from '../../../Other';
import { BoardCard } from './BoardCard';

import * as styled from './BoardRaw.styled';

type Props = {};
type FCBoardRaw = React.FC<Props> & { Card: typeof BoardCard };

const BoardRaw: FCBoardRaw = ({ children }) => {
  return (
    <DisplayRound>
      <styled.BoardWrapper>{children}</styled.BoardWrapper>
    </DisplayRound>
  );
};

BoardRaw.Card = BoardCard;

export default BoardRaw;
export { BoardRaw };
