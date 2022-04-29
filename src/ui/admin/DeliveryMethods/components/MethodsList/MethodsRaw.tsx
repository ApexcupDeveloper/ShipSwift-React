import { useMemo } from 'react';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { IconButton } from '../../../../@core/modules/Button';

import { EditIcon18, TrashIcon16 } from '../../../../../assets/icons';

import * as styled from './MethodsList.styled';

type Props = {
  name   : string;
  courier: string;
  service: string;
  cost   : number | string;
};

const currencySymbol = '£';

export const MethodsRaw: React.VFC<Props> = ({ name, courier, service, cost }) => {
  const costFormatted = useMemo(() => `${currencySymbol}${(+cost).toFixed(2)}`, [cost]);

  return (
    <ItemRaw>
      <ItemRaw.Title bold children={name}/>
      <ItemRaw.Title children={courier}/>
      <ItemRaw.Title children={service}/>
      <ItemRaw.Title children={costFormatted}/>
      <styled.IconButtonWrapper>
          <IconButton>
            <EditIcon18 />
          </IconButton>
          <IconButton>
            <TrashIcon16 />
          </IconButton>
        </styled.IconButtonWrapper>
    </ItemRaw>
  );
};
