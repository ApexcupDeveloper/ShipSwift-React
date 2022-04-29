import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { CarriersRaw } from './CarriersRaw';

import { AmazonImage } from '../../../../../assets/images';

import * as styled from './CarriersList.styled';
import { generateArray } from '../../../../../utils';

type Props = {};

const mockList = generateArray(10, (i) => ({
  key : 'id' + i,
  item: {
		name: 'Amazon Shipping',
		description: 'For non-Amazon orders',
		image: AmazonImage,
	},
  hideWhenShipping: false,
  connected       : false,
}) as const);

export const CarriersList: React.VFC<Props> = () => {
  const { word } = useLocale();

  return (
    <styled.BodyWrapper>
      <TitleRaw cleanBackground splitter>
        <TitleRaw.Item children={word('global.shipping.carrier')} />
      </TitleRaw>
      {mockList.map((props) => (
        <CarriersRaw {...props} />
      ))}
    </styled.BodyWrapper>
  );
};
