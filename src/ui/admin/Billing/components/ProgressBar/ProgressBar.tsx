import * as styled from './ProgressBar.styled';

type Props = {
  num: number;
  range: number;
  name: string;
};

export const ProgressBar: React.FC<Props> = ({ num, range, name }) => {
  return (
    <styled.BodyWrapper>
      {`${num}/${range} ${name}`}
      <styled.ProgressExternal>
        <styled.ProgressInternal style={{ width: `${Math.ceil((num * 100) / range)}%` }}></styled.ProgressInternal>
      </styled.ProgressExternal>
    </styled.BodyWrapper>
  );
};
