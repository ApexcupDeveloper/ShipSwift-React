import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as styled from './StoreCard.styled';

export type StoreCardProps = {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  path: string;
};

export const StoreCard: React.VFC<StoreCardProps> = ({ name, image, path, imageWidth, imageHeight }) => {
  const { push } = useHistory();

  const onOpen = useCallback(() => {
    push(path);
  }, [path, push]);

  return (
    <styled.BodyWrapper onClick={onOpen}>
      <styled.Image src={image} width={imageWidth} height={imageHeight} />
    </styled.BodyWrapper>
  );
};
