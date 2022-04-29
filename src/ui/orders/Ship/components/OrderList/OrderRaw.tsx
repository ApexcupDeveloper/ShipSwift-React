import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

import { CloseIconSquare16 } from '../../../../../assets/icons';
import { OrderItem } from '../../../../../client/client';
import { IconButton } from '../../../../@core/modules/Button';
import { InputCustom } from '../../../../@core/modules/Input';
import { ItemRaw } from '../../../../@core/modules/ListBuilder';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './OrderList.styled';

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
  index: number,
  order: OrderItem,
  services?: ServiceProps[],
  packages: ServiceProps[],
  onRemove: (id: string) => void,
  onChangeShipment: (item: ShipmentProps) => void,
  errorWeight: string[],
  errorService: string[],
  errorPackage: string[]
};


const currencySymbol = '£';

export const OrderRaw: React.VFC<Props> = ({ order, services, packages, onRemove, onChangeShipment, errorWeight, errorService, errorPackage }) => {
  const [selectedService, setSelectedService] = useState<ServiceProps[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<ServiceProps[]>([]);
  const [weight, setWeight] = useState<string>('');

  useEffect(() => {
    setSelectedService([]);
    setSelectedPackage([]);
  }, [services])

  useEffect(() => {
    onChangeShipment({
      id: order.orderNumber,
      weight: weight || '',
      package: selectedPackage.length > 0 ? selectedPackage[0].value : '',
      service: selectedService.length > 0 ? selectedService[0].value : ''
    });
  }, [selectedService, selectedPackage, weight])

  const formattedPrice = useMemo(() => `${currencySymbol}${order.orderValue ? order.orderValue.total.toFixed(2) : 0}`, [order]);

  return (
    <ItemRaw>
      <ItemRaw.Merge flex={0.3}>
        <ItemRaw.Title bold children={order.orderNumber} align="center" />
      </ItemRaw.Merge>
      <ItemRaw.Merge flex={0.3}>
        <ItemRaw.Title bold children={order.customer ? order.customer.countryCode2 : ''} align="center" />
      </ItemRaw.Merge>
      <ItemRaw.Merge flex={1.8}>
        <ItemRaw.NameContainer>
          {order.productsList && order.productsList.map((item, index) => {
            return <ItemRaw.Title bold children={item.name} key={'order-title' + index} />
          })}
          <ItemRaw.Title children={formattedPrice} />
        </ItemRaw.NameContainer>
      </ItemRaw.Merge>
      <ItemRaw.Merge flex={0.5}>
        <InputCustom placeholder={'0.00'} prefix={'kg'} id={'weight' + order.orderNumber} value={weight} onChange={setWeight} error={errorWeight.includes(order.orderNumber)} />
      </ItemRaw.Merge>
      <ItemRaw.Merge flex={2}>
        <styled.TrackInputWrapper style={{ width: packages.length > 0 ? '50%' : '100%' }}>
          <Select
            values={services}
            placeholder={'Select Service'}
            selectedValues={selectedService}
            onSelectedChanged={(e) => {
              setSelectedService(e);
            }}
            error={errorService.includes(order.orderNumber)}
          />
        </styled.TrackInputWrapper>
        {packages.length > 0 && (
          <styled.TrackInputWrapper>
            <Select
              values={packages}
              placeholder={'Select Package'}
              selectedValues={selectedPackage}
              onSelectedChanged={(e) => {
                setSelectedPackage(e);
              }}
              error={errorPackage.includes(order.orderNumber)}
            />
          </styled.TrackInputWrapper>
        )}
      </ItemRaw.Merge>
      <ItemRaw.Space flex={0.2} minWidth={20}>
        <IconButton onClick={() => onRemove(order.orderNumber)}>
          <CloseIconSquare16 />
        </IconButton>
      </ItemRaw.Space>
    </ItemRaw>
  );
};
