import { HelpCircleIcon18 } from '../../../../../assets/icons';
import { SwitchButton } from '../../../../@core/modules/Button';
import { Tooltip } from '../../../../@core/modules/Tooltip';

import * as styled from './SettingsSwitch.styled';

type Props = {
  name: string;
  tooltip: string;
};

export const SettingsSwitch: React.VFC<Props> = ({ name, tooltip }) => {
  return (
    <styled.BodyWrapper>
      <styled.NameContainer>
        <Tooltip content={tooltip} position={'center'}>
          <HelpCircleIcon18 />
        </Tooltip>
        <styled.Name children={name} />
      </styled.NameContainer>
      <styled.SwitchWrapper>
        <SwitchButton />
      </styled.SwitchWrapper>
    </styled.BodyWrapper>
  );
};
