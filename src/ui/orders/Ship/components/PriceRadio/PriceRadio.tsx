import { useState } from 'react';
import { useMemo } from 'react';

import { Radio } from '../../../../@core/modules/Radio';

import * as styled from './PriceRadio.styled';

type Props = {
  label         : string;
  value         : string;
  price         : string;
  currencySymbol: string;
  group?        : string;
  selected?     : string;
  onChange?     : any;
};

export const PriceRadio: React.VFC<Props> = ({ label, value, price, currencySymbol, group, selected, onChange }) => {
  const formattedPrice = useMemo(() => `${currencySymbol}${price}`, [currencySymbol, price]);

  return (
    <styled.BodyWrapper>
      <Radio label={label} name={group} checked={selected === value} onChange={() => onChange(label)} />
      <styled.Price children={formattedPrice} />
    </styled.BodyWrapper>
  );
};
