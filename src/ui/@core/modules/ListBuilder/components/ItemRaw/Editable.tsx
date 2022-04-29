import { useEffect, useState } from 'react';
import { InputCustom } from '../../../Input';
import { Tooltip } from '../../../Tooltip';
import * as styled from './ItemRaw.styled';
import { Align } from './ItemRaw.styled';

type Props = {
  bold?: boolean;
  flex?: number;
  align?: Align;
  id: string;
  isEdit: string;
  setIsEdit: (e: string) => void;
  onChange?: (e: string) => void;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
};

export const Editable: React.FC<Props> = ({ children, bold, flex = 1, id, align, isEdit, setIsEdit, onChange, width, minWidth, maxWidth }) => {
  if (isEdit === id) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flex: !!flex ? flex : 'none' }}>
        <div style={{ minWidth: minWidth, maxWidth: maxWidth }}>
          <InputCustom
            id={id}
            type={'number'}
            placeholder={children as string}
            value={children as string}
            onClick={(e) => { e.stopPropagation(); }}
            autoFocus
            style={{ textAlign: 'center' }}
            onChange={onChange} />
        </div>
      </div>
    )
  }
  return (
    <Tooltip align="center" position="top" content={'Edit stock'} flex={flex}>
      <styled.Title data-bold={bold} align={align} hover width={'100%'}
        onClick={(e) => {
          if(!isEdit) {
            setIsEdit(id)
            e.stopPropagation();
          }
        }}
      >
        {children}
      </styled.Title>
    </Tooltip>
  );
};
