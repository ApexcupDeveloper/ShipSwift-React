import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { Radio } from '../../../../@core/modules/Radio';
import { Select } from '../../../../@core/modules/Select';
import { AppRoutes } from '../../../../app/api';
import { PrintModal } from '../../components/PrintModal';

import * as styled from './PrintOrderStep2View.styled';

type Props = {};

const id = '1';

export const PrintOrderStep2View: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Orders.Order.Index.replace(':id', id)), [push]);
  const nextRoute = useMemo(() => AppRoutes.Orders.Order.Print.Step3.replace(':id', id), []);

  return (
    <PrintModal title={word('global.select.template.to.print')} height={550} onClose={onClose} nextRoute={nextRoute}>
      <styled.BodyWrapper>
        <FormCaption caption={word('global.print.orders.by')}>
          <Select />
        </FormCaption>
        <Radio label={word('global.delivery.labels')} />
        <Radio label={word('global.purchase.order')} />
        <Radio label={word('global.product.labels')} />
        <Radio label={word('global.purchase.order.reminder')} />
        <Radio label={word('global.stock.booking.document')} />
        <Radio label={word('global.invoice.and.shipping.label-landscape')} />
        <Radio label={word('global.invoice.and.shipping.label-portrait')} />
        <Radio label={word('global.picking.list.pick.to.order')} />
        <Radio label={word('global.packing.slips')} />
      </styled.BodyWrapper>
    </PrintModal>
  );
};
