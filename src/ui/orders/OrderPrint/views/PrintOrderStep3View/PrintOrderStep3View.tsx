import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { FormCaption } from '../../../../@core/modules/Container';
import { Select } from '../../../../@core/modules/Select';
import { AppRoutes } from '../../../../app/api';
import { PrintModal } from '../../components/PrintModal';

import * as styled from './PrintOrderStep3View.styled';

type Props = {};

const id = '1';

export const PrintOrderStep3View: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Orders.Order.Index.replace(':id', id)), [push]);
  const nextRoute = useMemo(() => AppRoutes.Orders.Order.Print.Step4.replace(':id', id), []);

  return (
    <PrintModal title={word('global.select.template.to.print')} onClose={onClose} height={300} nextRoute={nextRoute}>
      <styled.BodyWrapper>
        <FormCaption caption={word('global.print.orders.by')}>
          <Select />
        </FormCaption>
        <FormCaption caption={word('global.select.the.template.type')}>
          <Select />
        </FormCaption>
      </styled.BodyWrapper>
    </PrintModal>
  );
};
