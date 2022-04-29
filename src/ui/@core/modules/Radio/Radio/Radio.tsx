import { useCallback } from 'react';
import { ChangeEventHandler } from '../../../hooks/useInputState';

import RadioAntd from 'antd/lib/radio/radio';

import * as styled from './Radio.styled';

type RadioAntdProps = React.ComponentProps<typeof RadioAntd>;
type Props = Omit<RadioAntdProps, 'onChange'> & {
  label?: string;
  bold?: boolean;
  onChange?: (value: boolean) => void;
  handleChangeEvent?: ChangeEventHandler;
  name?: string;
};

export const Radio: React.FC<Props> = ({ label, bold, onChange, handleChangeEvent, name, ...props }) => {
const toggle = useCallback(
    () =>
      (onChange && onChange(!props.checked)) ||
      (handleChangeEvent &&
        handleChangeEvent({
          target: {
            name,
            value: !props.checked,
          },
        })),
    [props.checked, onChange, handleChangeEvent, name]
  );
  return (
    <styled.BodyWrapper onClick={toggle}>
      <RadioAntd {...props} />
      {label && <styled.Title data-bold={bold} children={label} />}
    </styled.BodyWrapper>
  );
};
