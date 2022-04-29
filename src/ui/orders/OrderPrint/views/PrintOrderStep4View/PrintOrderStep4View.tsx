import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { Checkbox } from '../../../../@core/modules/Checkbox';
import { FormSection } from '../../../../@core/modules/FormBuilder';
import { SmallAlert } from '../../../../@core/modules/Other';
import { Radio } from '../../../../@core/modules/Radio';
import { AppRoutes } from '../../../../app/api';
import { PrintModal } from '../../components/PrintModal';

import * as styled from './PrintOrderStep4View.styled';

type Props = {};

const id = '1';

export const PrintOrderStep4View: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();

  const onClose = useCallback(() => push(AppRoutes.Orders.Order.Index.replace(':id', id)), [push]);
  const nextRoute = useMemo(() => AppRoutes.Orders.Order.Index.replace(':id', id), []);

  return (
    <PrintModal title={word('global.select.template.to.print')} onClose={onClose} height={350} nextRoute={nextRoute}>
      <styled.BodyWrapper>
        <SmallAlert>
					<p children={word('order.print.step-4.connect-printer')}/>
					<MainButton type='text-green' flat children={word('global.connect.now')} />
				</SmallAlert>
				<Checkbox label={word('global.remember.this.printer.next.time')}/>
				<FormSection title={word('global.devices')}>
					<Radio label={word('global.download.pdf')}/>
				</FormSection>
      </styled.BodyWrapper>
    </PrintModal>
  );
};
