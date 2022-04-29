import { Checkbox as Check } from  '../../../Checkbox';

import * as styled from './ItemRaw.styled';

type CheckboxProps = React.ComponentProps<typeof Check>;
type Props = CheckboxProps & { flex?: number, onClickWrapper?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void; };

export const Checkbox: React.FC<Props> = ({ flex = 0, onClickWrapper, ...props }) => {
  return (
    <styled.CheckboxWrapper onClick={onClickWrapper} flex={flex}>
      <Check {...props} />
    </styled.CheckboxWrapper>
  );
};
