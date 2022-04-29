import React, { useState, useCallback } from 'react';

import { IconButton } from '../../../Button';
import { CloseIconSquare16 } from '../../../../../../assets/icons';

import { Nullable } from '../../../../../../utils';

import * as styled from './Modal.styled';
import { useEffect } from 'react';
import { StyledProps } from 'styled-components';

export type ModalProps = {
  height?: number;
  title: string;
  width?: number;
  containerPin?: boolean;
  contentBottomPadding?: boolean;
  hideFooterSplitter?: boolean;
  visible?: boolean;
  hide?: boolean;
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  onClose?: Nullable<() => void>;
  noOverflow?: boolean;
};

type FCModal = React.FC<ModalProps> & {
  SecondaryButton: typeof styled.SecondaryButton;
};

const Modal: FCModal = ({
  height,
  width,
  children,
  containerPin,
  contentBottomPadding,
  title,
  visible,
  header,
  footer,
  hide,
  hideFooterSplitter = false,
  onClose,
  noOverflow = false
}) => {
  const close = useCallback(() => onClose && onClose(), [onClose]);
  const [pos, setPos] = useState<'left' | 'right'>()

  const getPosition = useCallback((el) => {
    if (!containerPin) return;
    if (!el) return;
    const right = parseInt(el.getBoundingClientRect()?.right + '') || 0;
    const width = window.outerWidth;
    setPos(width / 2 > right ? 'right' : 'left');
  }, [containerPin]);



  useEffect(() => {
    const handleDown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        close()
      }
    }

    document.addEventListener("keydown", handleDown);

    return () => {
      document.removeEventListener("keydown", handleDown);
    }
  }, [])



  return (
    <styled.RelativeWrapper data-visible={visible}>
      <styled.BodyWrapper ref={getPosition} data-visible={visible} data-pos={pos} data-pin={containerPin ?? false}>
        <styled.DialogWrapper data-visible={visible} height={height} width={width}>
          {header ? (
            <styled.CustomHeader>
              {header}
              <styled.CustomCloseButton>
                <IconButton onClick={close}>
                  <CloseIconSquare16 />
                </IconButton>
              </styled.CustomCloseButton>
            </styled.CustomHeader>
          ) : (
            <styled.Header>
              <styled.Title children={title} />
              {!hide && (
                <IconButton onClick={close}>
                  <CloseIconSquare16 />
                </IconButton>
              )}
            </styled.Header>
          )}
          <styled.Content data-bottom-space={contentBottomPadding ?? false} noOverflow={noOverflow}>{children}</styled.Content>
          {footer && <styled.Footer data-hide-splitter={hideFooterSplitter} children={footer} />}
        </styled.DialogWrapper>
      </styled.BodyWrapper>
    </styled.RelativeWrapper >
  );
};

Modal.SecondaryButton = styled.SecondaryButton;

export default Modal;
export { Modal };
