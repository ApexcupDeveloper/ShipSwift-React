import { DisplayRound } from '../../../Other';

import * as styled from './PlacementCard.styled';

type Props = {
  children: React.ReactNode[] | React.ReactNode
};

type FCPlacementCard = React.VFC<Props> & {
  Title: typeof styled.Title;
  Header: typeof styled.Header;
  Content: typeof styled.Content;
  Footer: typeof styled.Footer;
};

const PlacementCard: FCPlacementCard = ({ children }) => {
  return (
    <DisplayRound overflow>
      <styled.BodyWrapper>{children}</styled.BodyWrapper>
    </DisplayRound>
  );
};

PlacementCard.Title = styled.Title;
PlacementCard.Header = styled.Header;
PlacementCard.Content = styled.Content;
PlacementCard.Footer = styled.Footer;

export default PlacementCard;
export { PlacementCard };
