import { Checkbox } from '../ItemRaw/Checkbox';

import * as styled from './TitleRaw.styled';

type Props = {
  cleanBackground?: boolean;
  splitter?: boolean;
  flat?: boolean;
  minWidth?: number;
  height?: number;
};
type FCTitleRaw = React.FC<Props> & {
  Space   : typeof styled.Space;
  Item    : typeof styled.Name;
  Merge   : typeof styled.Merge;
  Checkbox: typeof Checkbox;
};

const TitleRaw: FCTitleRaw = ({ children, cleanBackground, splitter, flat, minWidth, height }) => {
  return (
    <styled.RawWrapper data-clean-background={cleanBackground} data-splitter={splitter} data-flat={flat} minWidth={minWidth} height={height}>
      {children}
    </styled.RawWrapper>
  );
};

TitleRaw.Item     = styled.Name;
TitleRaw.Merge    = styled.Merge;
TitleRaw.Checkbox = Checkbox;
TitleRaw.Space    = styled.Space;

export default TitleRaw;
export { TitleRaw };
