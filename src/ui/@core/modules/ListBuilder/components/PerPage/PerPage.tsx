import { useLocale } from '../../../../../../assets/locale';
import { usePerPage } from '../../hooks/usePerPage';

import { Select } from '../../../Select';

import * as styled from './PerPage.styled';
import * as config from './PerPage.config';

type Props = {};

export const PerPage: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { selectedRowsCount, onSelect } = usePerPage();

  return (
    <styled.BodyWrapper>
      <styled.Title children={word('global.rows.per.page')} />
      <Select position={'top'} values={config.selectValues} selectedValues={[selectedRowsCount]} onSelectedChanged={onSelect} />
    </styled.BodyWrapper>
  );
};
