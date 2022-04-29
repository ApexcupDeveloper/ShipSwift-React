import GroupAntd from 'antd/lib/checkbox/Group';

import * as styled from '../Checkbox/Checkbox.styled';

type Props = React.ComponentProps<typeof GroupAntd>;

export const CheckboxGroup: React.FC<Props> = (props) => {
  return (
    <styled.BodyWrapper>
      <GroupAntd {...props} />
    </styled.BodyWrapper>
  );
};
