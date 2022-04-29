import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { OrderRaw } from './OrderRaw';
import { OrderItem } from '../../../../../client/client';

type ServiceProps = {
  value: string,
  label: string
}


type ShipmentProps = {
  id: string,
  service: string,
  weight: string,
  package: string
}

type Props = {
  orders: OrderItem[],
  services?: ServiceProps[],
  packages: ServiceProps[],
  errorWeight: string[],
  errorService: string[],
  errorPackage: string[],
  onRemove: (id: string) => void,
  onChangeShipments: (items: ShipmentProps) => void
};

export const OrderList: React.VFC<Props> = ({ orders, services, onRemove, packages, onChangeShipments, errorWeight, errorService, errorPackage }) => {
  const { word } = useLocale();

  return (
    <>
      <TitleRaw>
        <TitleRaw.Item flex={0.3} children={word('order.no')} align="center" />
        <TitleRaw.Item flex={0.3} children={word('global.country')} />
        <TitleRaw.Item flex={1.8} children={word('product.name')} />
        <TitleRaw.Item flex={0.7} children={word('global.weight')} />
        <TitleRaw.Item flex={2} children={word('global.shipping-service')} />
        <TitleRaw.Space flex={0.2} minWidth={20} />
      </TitleRaw>
      {orders.map((props, index) => {
        return (
          <OrderRaw
            index={index}
            key={'orders' + index}
            order={props}
            services={services}
            packages={packages}
            onRemove={onRemove}
            errorWeight={errorWeight}
            errorService={errorService}
            errorPackage={errorPackage}
            onChangeShipment={onChangeShipments}
          />
        )
      })}
    </>
  );
};
