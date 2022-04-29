import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { Radio } from '../../../../@core/modules/Radio';

import * as styled from './ScalesList.styled';

type Props = {
  name: string;
  remember: boolean;
  printers: string[];
};

export const ScalesRaw: React.VFC<Props> = ({ name, printers = [], remember = false }) => {
  const { word } = useLocale();
  const printersAll = useMemo(() => [word('global.download.pdf'), ...(printers || [])], [printers, word]);

  return (
    <ItemRaw>
      <ItemRaw.Title children={name} />
      <ItemRaw.Switch checked={remember} />
      <styled.PrinterList>
        {printersAll?.map((printer) => (
          <Radio label={printer} />
        ))}
      </styled.PrinterList>
    </ItemRaw>
  );
};
