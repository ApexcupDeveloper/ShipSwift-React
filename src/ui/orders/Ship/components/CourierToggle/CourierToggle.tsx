import { useCallback, useState } from 'react';

import { ArrowDownChevronIcon16 } from '../../../../../assets/icons';
import { ComponentRotate } from '../../../../@core/modules/Other';

import * as styled from './CourierToggle.styled';

type Props = {
  src: string;
  name: string;
};

export const CourierToggle: React.FC<Props> = ({ src, name, children }) => {
  const [toggled, setToggled] = useState(false);

  const onToggle = useCallback(() => setToggled((t) => !t), []);

  return (
    <styled.BodyWrapper>
      <styled.Header onClick={onToggle} data-show-splitter={toggled}>
        <styled.CourierImage src={src} />
        <styled.CourierName children={name} />
        <ComponentRotate angle={toggled ? 180 : 0}>
          <ArrowDownChevronIcon16 />
        </ComponentRotate>
      </styled.Header>
      <styled.Content data-show={toggled}>{children}</styled.Content>
    </styled.BodyWrapper>
  );
};
