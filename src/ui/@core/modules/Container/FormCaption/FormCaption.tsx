import * as captionStyled from '../Caption/Caption.styled';
import * as styled from './FormCaption.styled';

type Props = {
  caption?: string;
  error?: string;
  style?: any;
};

export const FormCaption: React.FC<Props> = ({ caption, children, error, style }) => {
  return (
    <captionStyled.BodyWrapper style={style}>
      {caption && <captionStyled.Caption children={caption} />}
      <styled.Error data-show={!!error} children={children} />
    </captionStyled.BodyWrapper>
  );
};
