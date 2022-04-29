import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { IconButton } from '../../../../@core/modules/Button';

import { TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './RulesList.styled';

type Props = {
  ruleName: string;
  trigger: string;
  action: string;
};

export const RulesRaw: React.VFC<Props> = ({ ruleName, trigger, action }) => {
  return (
    <ItemRaw>
      <ItemRaw.Title bold children={ruleName} />
      <ItemRaw.Title children={trigger} />
      <ItemRaw.Title children={action} />
      <styled.IconButtonWrapper>
        <IconButton>
          <TrashIcon16 />
        </IconButton>
      </styled.IconButtonWrapper>
    </ItemRaw>
  );
};
