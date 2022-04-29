import React from 'react';
import { IconButton } from '../@core/modules/Button';
import { toast } from 'react-toastify';
import * as styled from './index.styled';
import { ToastProps } from 'react-toastify/dist/types';

import {
  AlertErrorIcon20,
  AlertInfoIcon20,
  AlertSuccessIcon20,
  AlertWarningIcon20,
  CloseIconSquare16,
} from '../../assets/icons';

const commonStyle = {
  paddingRight: '2px',

  fontFamily: 'Roboto',
  fontSize: '15px',
  backgroundColor: 'red',
  borderRadius: '5px',
  background: '#1F213E',
  color: '#fff',
  boxShadow: '0px 4px 8px rgba(38, 39, 57, 0.04)',
};

type ToastType = 'info' | 'warning' | 'error' | 'success' | 'default';

const ToastTypes = {
  default: {
    icon: null,
    style: commonStyle,
  },
  info: {
    icon: <AlertInfoIcon20 />,
    style: commonStyle,
  },
  warning: {
    icon: <AlertWarningIcon20 />,
    style: commonStyle,
  },
  error: {
    icon: <AlertErrorIcon20 />,
    style: commonStyle,
  },
  success: {
    icon: <AlertSuccessIcon20 />,
    style: commonStyle,
  },
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    paddingRight: '16px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
};

const commonsSettings: Partial<ToastProps> = {
  closeButton: false,
  autoClose: 5000,
};

const stringify = (con: any): string => {
  let str = '';
  if (!con) {
    return str;
  }
  if (typeof con == 'string') {
    return con;
  }
  if (con.error_description) {
    return con.error_description;
  }
  if (con.description) {
    return con.description;
  }
  if (con.error) {
    return con.error;
  }
  if (con.code) {
    return con.code;
  }
  if (con.message) {
    return con.message;
  }
  if (con.toString) {
    return con.toString();
  }
  str = JSON.stringify(con);
  return str;
};

const callToast = (content: string, type: ToastType, autoClose?: number | false | undefined) => {
  const { icon, style } = ToastTypes[type];

  return toast(
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <span style={styles.icon} children={icon} />
        <span>{stringify(content)}</span>
      </div>
      <styled.ButtonWrapper>
        <IconButton style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <CloseIconSquare16 />
        </IconButton>
      </styled.ButtonWrapper>
    </div>,
    { style, ...commonsSettings, autoClose }
  );
};

export const updateToast = (id: string, content: string, type: ToastType, autoClose?: number | false | undefined) => {
  const { icon } = ToastTypes[type];

  toast.update(id, {
    render: () => (
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <span style={styles.icon} children={icon} />
          <span>{stringify(content)}</span>
        </div>
        <styled.ButtonWrapper>
          <IconButton style={{ justifySelf: 'center', alignSelf: 'center' }}>
            <CloseIconSquare16 />
          </IconButton>
        </styled.ButtonWrapper>
      </div>
    ),
    autoClose
  })
}

export const addToast = (content: string, autoClose?: number | false | undefined) => callToast(content, 'default', autoClose);
export const addInfoToast = (content: string, autoClose?: number | false | undefined) => callToast(content, 'info', autoClose);
export const addErrorToast = (content: string, autoClose?: number | false | undefined) => callToast(content, 'error', autoClose);
export const addSuccessToast = (content: string, autoClose?: number | false | undefined) => callToast(content, 'success', autoClose);
export const addWarningToast = (content: string, autoClose?: number | false | undefined) => callToast(content, 'warning', autoClose);
