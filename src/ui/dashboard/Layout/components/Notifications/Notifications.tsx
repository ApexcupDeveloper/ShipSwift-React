import { useLocale } from '../../../../../assets/locale';

import { NavButton } from '../NavLink';
import { NotificationsIcon20 } from '../../../../../assets/icons';

import * as styled from './Notifications.styled';

type Props = {
  count?: number;
  showLabel?: boolean;
  onOpen: () => void;
  isOpen: boolean;
};

export const Notifications: React.VFC<Props> = ({ count = 1, showLabel, onOpen, isOpen }) => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper data-is-open={showLabel}>
      <NavButton
        icon={<NotificationsIcon20 />}
        label={word('notifications')}
        showLabel={showLabel}
        isOpen={isOpen}
        onOpen={onOpen}
      />
      {count > 0 && <styled.Counter data-is-open={showLabel}>{showLabel && count}</styled.Counter>}
    </styled.BodyWrapper>
  );
};
