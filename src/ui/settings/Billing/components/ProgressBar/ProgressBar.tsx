import * as styled from './ProgressBar.styled';

type Props = {
  num: number;
  range: number;
  name: string;
};

export const ProgressBar: React.FC<Props> = ({ num, range, name }) => {
  const isDanger = () => {
    if(num / range >= 0.8) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <styled.BodyWrapper>
      {`${num}/${range} ${name}`}
      <styled.ProgressExternal>
        <styled.ProgressInternal style={{ width: `${Math.ceil((num * 100) / range)}%`, backgroundColor: isDanger() ? '#FF6060' : '#1FC8BE' }}></styled.ProgressInternal>
      </styled.ProgressExternal>
    </styled.BodyWrapper>
  );
};
