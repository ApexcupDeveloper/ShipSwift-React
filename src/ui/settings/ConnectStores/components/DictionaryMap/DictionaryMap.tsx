import * as styled from './DictionaryMap.styled';

type Props = {
  field: string;
  value: string;
};

export const DictionaryMap: React.VFC<Props> = ({ field, value }) => {
  return (
    <styled.BodyWrapper>
      <styled.Field children={field} />
      <styled.Value children={value} />
    </styled.BodyWrapper>
  );
};
