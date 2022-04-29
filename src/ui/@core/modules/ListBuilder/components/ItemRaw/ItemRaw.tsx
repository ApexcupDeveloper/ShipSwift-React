import { Title } from './Title';
import { Link } from './Link';
import { Checkbox } from './Checkbox';
import { OrderStatus } from './OrderStatus';
import { RoadmapStatus } from './RoadmapStatus';
import { ActiveStatus } from './ActiveStatus';
import { Switch } from './Switch';
import { HistoryTag } from './HistoryTag';
import { ProductTag } from './ProductTag';
import { Payments } from './Payments';
import { ProductItem } from './ProductItem';
import { Editable } from './Editable';

import * as styled from './ItemRaw.styled';

type Props = { onClick?: () => void; hover?: boolean; flat?: boolean; minWidth?: number; minHeight?: number};
type FCItemRaw = React.FC<Props> & {
  Title        : typeof Title;
  Editable     : typeof Editable;
  Link         : typeof Link;
  Space        : typeof styled.Space;
  ProductTag   : typeof ProductTag;
  Merge        : typeof styled.Merge;
  OrderStatus  : typeof OrderStatus;
  RoadmapStatus: typeof RoadmapStatus;
  ActiveStatus : typeof ActiveStatus;
  Checkbox     : typeof Checkbox;
  Switch       : typeof Switch;
  HistoryTag   : typeof HistoryTag;
  ProductImage : typeof styled.ProductImage;
  NameContainer: typeof styled.NameContainer;
  Payments     : typeof Payments;
  ProductItem  : typeof ProductItem;
};

const ItemRaw: FCItemRaw = ({hover, flat, minWidth, minHeight, ...props}) => {
  return <styled.RawWrapper data-hover={hover} data-flat={flat} minWidth={minWidth} minHeight={minHeight} {...props} />;
};

ItemRaw.Title         = Title;
ItemRaw.Link          = Link;
ItemRaw.Merge         = styled.Merge;
ItemRaw.OrderStatus   = OrderStatus;
ItemRaw.RoadmapStatus = RoadmapStatus;
ItemRaw.ActiveStatus  = ActiveStatus;
ItemRaw.Checkbox      = Checkbox;
ItemRaw.Switch        = Switch;
ItemRaw.HistoryTag    = HistoryTag;
ItemRaw.Space         = styled.Space;
ItemRaw.ProductImage  = styled.ProductImage;
ItemRaw.ProductTag    = ProductTag;
ItemRaw.NameContainer = styled.NameContainer;
ItemRaw.Payments      = Payments;
ItemRaw.ProductItem   = ProductItem;
ItemRaw.Editable      = Editable;

export default ItemRaw;
export { ItemRaw };
