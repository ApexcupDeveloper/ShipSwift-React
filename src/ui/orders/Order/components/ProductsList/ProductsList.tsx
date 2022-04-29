import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { ProductsRaw } from './ProductsRaw';

import * as styled from './ProductsList.styled';
import { Product } from '../../../../../proto/order_manager_pb';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { useEffect, useState } from 'react';

type Props = {
  products: Product.AsObject[],
  companyData: CompanyInfo.AsObject | undefined
};

export const ProductsList: React.VFC<Props> = ({ products, companyData }) => {
  const { word } = useLocale();
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    if (companyData) {
      if (companyData.defaultCurrency === 'GBP') {
        setCurrency('£');
      } else if (companyData.defaultCurrency === 'EUR') {
        setCurrency('€');
      } else {
        setCurrency('$');
      }
    }
  }, [companyData])

  return (
    <styled.BodyWrapper>
      <TitleRaw>
        <TitleRaw.Item children={word('product.name')} />
        <TitleRaw.Item flex={0.2} children={word('global.price')} />
        <TitleRaw.Item flex={0.2} children={word('global.quantity')} />
        <TitleRaw.Item flex={0.2} children={word('global.quantity.to-ship')} />
        <TitleRaw.Space flex={0} minWidth={30} />
      </TitleRaw>
      {products.map((props, index) => {
        const price = props.price?.value ? props.price.value.toFixed(2) : '0';
        return (
          <ProductsRaw
            key={index}
            id={props.shipswiftProductSku}
            name={props.shipswiftProductName}
            quantity={props.quantity.toString()}
            price={currency + price}
          />
        )
      })}
    </styled.BodyWrapper>
  );
};
