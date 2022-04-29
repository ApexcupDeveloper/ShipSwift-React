import * as styled from './BoardRaw.styled';

type Props = {
  stats: string | number;
  label: string;
};

export const BoardCard: React.VFC<Props> = ({ stats, label }) => {
  return (
    <styled.CardWrapper>
      <styled.Stats children={stats} />
      <styled.StatsName children={label} />
    </styled.CardWrapper>
  );
};
