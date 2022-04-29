import { PhotoCameraIcon36 } from '../../../../../assets/icons';
import * as styled from './SelectImage.styled';

type Props = {
  /**
	 * @default 116px
	 */
	size?: number;

	/**
	 * Image file.
	 */
	src?: string;
};

export const SelectImage: React.VFC<Props> = ({ src, size = 116 }) => {
  return (
    <styled.BodyWrapper size={size}>
      {src ? <styled.SelectedImage src={src} /> : <PhotoCameraIcon36 />}
    </styled.BodyWrapper>
  );
};
