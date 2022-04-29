import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { StoreProductsRaw } from './StoreProductsRaw';

import * as styled from './StoreProductsList.styled';
import { StoreProductInfo } from '../../../../../proto/product_manager_pb';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';

type Props = {
  products: StoreProductInfo.AsObject[],
  stores: StoreProps[],
  companyInfo: CompanyInfo.AsObject | undefined
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

export const StoreProductsList: React.VFC<Props> = ({ products, stores, companyInfo }) => {
  const { word } = useLocale();

  const getCurrency = (currency: string | undefined) => {
    if (currency === 'GBP') {
      return '£';
    } else if (currency === 'EUR') {
      return '€';
    } else {
      return '$';
    }
  }

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item flex={6} children={word('product.name')} />
        <TitleRaw.Item children={word('global.sku')} />
        <TitleRaw.Item children={word('global.price')} />
      </TitleRaw>
      {products.map((props, index) => {
        let storeData: StoreProps[] = stores.filter((item: any) => item.id === props.storeId);
        const currency =  getCurrency(companyInfo?.defaultCurrency);
        const price = props.price?.value ? currency + props.price?.value.toFixed(2) : currency + '0';

        return (
          <StoreProductsRaw
            iconColour={storeData.length ? storeData[0].iconColour : ''}
            shortName={storeData.length ? storeData[0].shortName : ''}
            name={props.name}
            sku={props.sku}
            price={price}
            url={props.url}
            key={index}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
