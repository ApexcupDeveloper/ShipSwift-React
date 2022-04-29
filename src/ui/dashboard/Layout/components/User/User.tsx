import { useCallback, useMemo, useState } from 'react';

import { ComponentRotate } from '../../../../@core/modules/Other';
import { DropdownMenu } from '../DropdownMenu';

import { ArrowDownIconSolid16, AvatarIcon32 } from '../../../../../assets/icons';

import * as styled from './User.styled';

type Props = {
  name: string;
  surname: string;
  avatar?: string;
  showLabel?: boolean;
};

const captializeFirstChar = (s: string): string => {
  if (!s) {
    return s as any;
  }
  if (s.length == 1) {
    return s.toLocaleUpperCase();
  }
  let firstChar = s.charAt(0);
  let restChars = s.substr(1);
  return firstChar.toUpperCase() + restChars;
};

export const User: React.VFC<Props> = ({ avatar, name, surname, showLabel = true }) => {
  //const formattedName = useMemo(() => `${name} ${surname.charAt(0)}.`, [name, surname]);
  const formattedName = useMemo(() => captializeFirstChar(name), [name]);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const angle = useMemo(() => (menuVisibility ? 180 : 0), [menuVisibility]);

  const toggleMenuVisibility = useCallback(() => setMenuVisibility((prev) => !prev), []);
  const onCloseMenu = useCallback(() => setMenuVisibility(false), []);
  return (
    <styled.BodyWrapper>
      <styled.UserWrapper onClick={toggleMenuVisibility} data-is-open={false}>
        <styled.AvatarContainer data-is-open={showLabel}>
          {avatar ? <styled.Avatar src={avatar} /> : <AvatarIcon32 />}
        </styled.AvatarContainer>
        {showLabel && (
          <>
            <styled.Name>{formattedName}</styled.Name>
            <ComponentRotate angle={angle}>
              <styled.ArrowWrapper>
                <ArrowDownIconSolid16 />
              </styled.ArrowWrapper>
            </ComponentRotate>
          </>
        )}
      </styled.UserWrapper>
      <DropdownMenu visible={menuVisibility} onBlur={onCloseMenu} onClose={onCloseMenu} />
    </styled.BodyWrapper>
  );
};
