import { HelpCircleIcon18 } from '../../../../../assets/icons';
import { SwitchButton } from '../../../../@core/modules/Button';
import { Tooltip } from '../../../../@core/modules/Tooltip';

import * as styled from './SettingsSwitch.styled';

type Props = {
  name: string;
  tooltip: string;
  value?: boolean;
  onChange?: (e: boolean) => void;
};

export const SettingsSwitch: React.VFC<Props> = ({ name, tooltip, value, onChange }) => {
  return (
    <styled.BodyWrapper>
      <styled.NameContainer>
        <Tooltip content={tooltip} position={'center'}>
          <HelpCircleIcon18 />
        </Tooltip>
        <styled.Name children={name} />
      </styled.NameContainer>
      <styled.SwitchWrapper>
        <SwitchButton checked={value} onChange={onChange ? onChange : () => {}} />
      </styled.SwitchWrapper>
    </styled.BodyWrapper>
  );
};
