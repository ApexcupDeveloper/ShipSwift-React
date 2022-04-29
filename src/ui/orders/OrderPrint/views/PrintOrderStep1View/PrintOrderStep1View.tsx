import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { AppRoutes } from '../../../../app/api';
import { PrintModal } from '../../components/PrintModal';

import * as styled from './PrintOrderStep1View.styled';

type Props = {};

const id = '1';

export const PrintOrderStep1View: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Orders.Order.Index.replace(':id', id)), [push]);
  const nextRoute = useMemo(() => AppRoutes.Orders.Order.Print.Step2.replace(':id', id), []);

  return (
    <PrintModal
      title={word('global.select.template.to.print')}
      height={500}
      onClose={onClose}
      footer={<MainButton type="text" children={word('global.choose.template')} />}
      nextRoute={nextRoute}
    >
      <styled.BodyWrapper>
        <Checkbox label={word('global.picking.list')} />
        <Checkbox label={word('global.invoices')} />
        <Checkbox label={word('global.packing.slips')} />
        <Checkbox label={word('global.delivery.labels')} />
        <Checkbox label={word('global.drop.note')} />
      </styled.BodyWrapper>
    </PrintModal>
  );
};
