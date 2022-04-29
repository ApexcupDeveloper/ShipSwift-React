import { PrintersAndScalesView } from '../../views/PrintersAndScalesView';

import * as styled from './PrintersAndScalesPage.styled';

type Props = {};

export const PrintersAndScalesPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <PrintersAndScalesView/>
    </styled.BodyWrapper>
  );
};
