import * as styled from './LogoDropzone.styled';
import { useDropzone } from 'react-dropzone';
import { CameraIcon } from '../../../../assets/icons';
import { PlaceholderImage } from '../../../products/Product/views/OrderFormView/images';
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from 'react';

export type Props = {
  id?: string;
  height?: number;
  width?: number;
  image?: string;
  uploading?: boolean;
  percent?: number;
  onChange: (e: any) => void;
};

export const LogoDropzone: React.FC<Props> = ({
  id,
  height = 94,
  width = 94,
  image,
  uploading,
  percent,
  onChange,
}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({ accept: "image/*", multiple: false, maxSize: 4194304 });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onChange(acceptedFiles);
    }
  }, [acceptedFiles])

  return (
    <styled.BodyWrapper width={width} height={height + 40}>
      <styled.CardWrapper>
        <styled.DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
          {
            image && image.length ?
              <>
                <input {...getInputProps()} />
                <styled.ProductImageWrapper>
                  <styled.ProductImage src={image} />
                </styled.ProductImageWrapper>
                <styled.ButtonImage className="button-image">
                  <CameraIcon />
                </styled.ButtonImage>
              </>
              :
              <>
                <input {...getInputProps()} />
                <CameraIcon />
              </>
          }
        </styled.DropzoneContainer>
      </styled.CardWrapper>
      {
        uploading && image && image.length ? (
          <styled.ProgressBarWrapper>
            <ProgressBar className="progress-bar" isLabelVisible={false} height={'14px'} labelSize={'10px'} bgColor={'#1FC8BE'} completed={percent ? percent : 0} />
          </styled.ProgressBarWrapper>
        ) : null
      }
    </styled.BodyWrapper>
  );
};
