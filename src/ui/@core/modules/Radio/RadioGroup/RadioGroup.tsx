import GroupAntd from 'antd/lib/radio/group';
import * as styled from '../Radio/Radio.styled';

type Props = React.ComponentProps<typeof GroupAntd>;

export const RadioGroup: React.FC<Props> = (props) => {
  return (
    <styled.BodyWrapper>
      <GroupAntd {...props} />
    </styled.BodyWrapper>
  );
};
