import { SwitchButton } from '../../../Button';

import * as styled from './ItemRaw.styled';

type CheckboxProps = React.ComponentProps<typeof SwitchButton>;
type Props = CheckboxProps & { flex?: number };

export const Switch: React.FC<Props> = ({ flex = 1, ...props }) => {
  return (
    <styled.SwitchWrapper flex={flex}>
      <SwitchButton {...props} />
    </styled.SwitchWrapper>
  );
};
