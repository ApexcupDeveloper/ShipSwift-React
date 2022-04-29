import { EmptyProductsPage } from '../../pages/EmptyProductsPage';
import { ProductsPage } from '../../pages/ProductsPage';

type Props = {};

const hasProducts = true;

export const ProductsView: React.VFC<Props> = () => {
	if (!hasProducts) return <EmptyProductsPage/>

	return <ProductsPage />
};
