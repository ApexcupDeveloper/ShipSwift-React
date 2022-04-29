import { useMemo } from 'react';

import Avatar from 'antd/lib/avatar/avatar';

import * as config from './AvatarLetter.config';
import * as styled from './AvatarLetter.styled';

type Props = {
  name: string;
  backgroundColor?: string;
  type?: config.Types;
  size?: number;
  icon?: React.ReactNode;
};

export const AvatarLetter: React.VFC<Props> = ({ name, type, backgroundColor, icon, size = 34 }) => {
  const iconColor = useMemo(() => (type ? config.getColor(type) : undefined), [type]);
  const background = backgroundColor || iconColor;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const content = useMemo(() => <styled.ContentWrapper>{name || icon}</styled.ContentWrapper>, [name]);
  return (
    <styled.BodyWrapper>
      <Avatar shape="circle" style={{ background }} size={size}>
        {content}
      </Avatar>
    </styled.BodyWrapper>
  );
};
