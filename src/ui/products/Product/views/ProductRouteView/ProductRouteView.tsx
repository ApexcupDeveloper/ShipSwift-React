import { useCallback } from 'react';
import { Route, Switch, useHistory, useParams, useLocation } from 'react-router-dom';

import { AppRoutes } from '../../../../app/api';

import { AddProductModal } from '../../components/AddProductModal';
import { EditProductImageModal } from '../../components/EditProductImageModal';

type Props = {};

export const ProductRouteView: React.VFC<Props> = () => {
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();

  const onClose = useCallback(() => push(AppRoutes.Products.Product.Index.replace(':id', id), state), [id, state, push]);

  return (
    <Switch>
      <Route path={AppRoutes.Products.Add} children={<AddProductModal visible onClose={onClose} />} />
      <Route path={AppRoutes.Products.Product.EditImage} children={<EditProductImageModal visible onClose={onClose} />} />
    </Switch>
  );
};
