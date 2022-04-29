import * as styled from './MultiImageDropzone.styled';
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

export type Props = {
  onChange: (e: any) => void;
  onClearAll?: () => void;
  showClear?: boolean;
  maxCount?: number;
  noClick?: boolean;
};

export const MultiImageDropzone: React.FC<Props> = ({
  onChange,
  onClearAll,
  showClear = false,
  children,
  maxCount = 20,
  noClick = false
}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*", maxFiles: maxCount, noClick: noClick });


  useEffect(() => {
    if (acceptedFiles.length > 0) {
      onChange(acceptedFiles);
    }
  }, [acceptedFiles])

  return (
    <styled.BodyWrapper>
      {showClear && (<styled.ClearButton onClick={onClearAll}>Clear All</styled.ClearButton>)}
      <styled.CardWrapper>
        <styled.DropzoneContainer isAccept={isDragAccept} isReject={isDragReject} {...getRootProps({ className: 'dropzone', isDragActive, isDragAccept, isDragReject })}>
          <input className="multi-image-input" {...getInputProps()} />
          {
            isDragAccept ?
              <p>Drag & Drop Images</p>
              :
              isDragReject ?
                <p>Containing Invalid Image Format</p>
                :
                children
          }
        </styled.DropzoneContainer>
      </styled.CardWrapper>
    </styled.BodyWrapper>
  );
};
