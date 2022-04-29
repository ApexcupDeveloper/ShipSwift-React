import * as styled from './ImageDropzone.styled';
import { useDropzone } from 'react-dropzone';
import { CameraIcon } from '../../../../assets/icons';
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from 'react';

export type Props = {
  id?: string;
  height?: number;
  width?: number;
  image?: string;
  uploading?: boolean;
  percent?: number;
  isDragging?: boolean;
  onDeleteImage?: () => void;
  onChange: (e: any) => void;
  noClick?: boolean;
  noDrag?: boolean;
};

export const ImageDropzone: React.FC<Props> = ({
  id,
  height = 94,
  width = 94,
  image,
  uploading,
  percent,
  isDragging = false,
  onDeleteImage,
  onChange,
  noClick = true,
  noDrag = true
}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({ accept: "image/*", noDrag: noDrag, noClick: noClick, multiple: false, maxSize: 4194304 });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onChange(acceptedFiles);
    }
  }, [acceptedFiles, onChange])

  return (
    <styled.BodyWrapper width={width} height={height + 40}>
      {
        image && image.length ?
          <styled.ProductImageWrapper>
            <styled.ProductImage src={image} />
          </styled.ProductImageWrapper>
          :
          <styled.CardWrapper>
            <styled.DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <CameraIcon />
            </styled.DropzoneContainer>
          </styled.CardWrapper>
      }
      {
        image && image.length && !uploading && !isDragging ? (
          <styled.RemoveButton onClick={onDeleteImage}>
            <styled.TrashIcon id={id} />
          </styled.RemoveButton>
        ) : null
      }
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
