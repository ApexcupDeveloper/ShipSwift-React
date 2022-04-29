import { useLocale } from '../../../../../assets/locale';
import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { MainButton } from '../../../../@core/modules/Button';
import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { KitComponentsList } from '../../components/KitComponentsList';

import { PlusIcon16 } from '../../../../../assets/icons';

import * as styled from './KitComponentsView.styled';

type Props = {};

export const KitComponentsView: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  const onAddProduct = useCallback(() => push(AppRoutes.Products.Product.Add.replace(':id', id)), [id, push]);

  return (
    <styled.BodyWrapper>
      <PlacementCard>
        <PlacementCard.Header>
          <PlacementCard.Title children={word('kit.components')} />
          <MainButton icon={<PlusIcon16 />} type="secondary" onClick={onAddProduct} children={word('global.add')} />
        </PlacementCard.Header>
        <PlacementCard.Content>
          <KitComponentsList />
        </PlacementCard.Content>
        <PlacementCard.Footer>
          <PageControl />
          <PerPage />
        </PlacementCard.Footer>
      </PlacementCard>
    </styled.BodyWrapper>
  );
};
