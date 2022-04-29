import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as styled from './WelcomeStore.styled';

export type WelcomeStoreProps = {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  path: string;
};

export const WelcomeStore: React.VFC<WelcomeStoreProps> = ({ name, image, path, imageWidth, imageHeight }) => {
  const { push } = useHistory();
  const onOpen = useCallback(() => {
    push(path, name);
  }, [path, push]);

  return (
    <styled.BodyWrapper onClick={onOpen}>
      <styled.Image src={image} width={imageWidth} height={imageHeight} />
    </styled.BodyWrapper>
  );
};
