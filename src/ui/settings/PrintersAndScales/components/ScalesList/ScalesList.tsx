import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ScalesRaw } from './ScalesRaw';

import * as styled from './ScalesList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(10, (i) => ({
  key : 'id' + i,
  name: 'Invoice and Packing Slip',
  remember: true,
  printers: ['Desktop KJhjkh979879 / Zebra ZPL'] as string[],
}) as const);

export const ScalesList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.template.type')} />
        <TitleRaw.Item children={word('global.remember.choice')} />
        <TitleRaw.Item children={word('global.devices')} />
      </TitleRaw>
      {mockList.map((props) => (
        <ScalesRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
