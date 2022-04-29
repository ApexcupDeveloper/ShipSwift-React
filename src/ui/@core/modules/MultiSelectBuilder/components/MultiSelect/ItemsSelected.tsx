import { useLocale } from '../../../../../../assets/locale';

import * as styled from './ItemsSelected.styled';

type Props = {
  items: number;
};

export const ItemsSelected: React.FC<Props> = ({ items }) => {
  const { word } = useLocale();

  return <styled.BodyWrapper>{`${items} ${word('global.items.selected')}:`}</styled.BodyWrapper>;
};
