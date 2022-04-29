import { Devider } from './Devider';
import { ItemsSelected } from './ItemsSelected';

import * as styled from './MultiSelect.styled';

type Props = {
  visible?: boolean;
};

type FCMultiSelect = React.FC<Props> & {
  Devider: typeof Devider;
  ItemsSelected: typeof ItemsSelected;
};

export const MultiSelect: FCMultiSelect = ({ children, visible }) => {
  return (
    <styled.RelativeWrapper data-visible={visible}>
      <styled.BodyWrapper>{children}</styled.BodyWrapper>
    </styled.RelativeWrapper>
  );
};

MultiSelect.Devider = Devider;
MultiSelect.ItemsSelected = ItemsSelected;
