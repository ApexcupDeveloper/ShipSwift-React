import { useEffect, useState } from 'react';
import { IconButton } from '../IconButton';

type BoolOrVoid = boolean | void;

type Props = {
  eventOn?: () => Promise<BoolOrVoid> | BoolOrVoid;
  eventOff?: () => Promise<BoolOrVoid> | BoolOrVoid;
  defaultState?: boolean;
  switched?: boolean;
  disabled?: boolean;
};

export const SwitchIconButton: React.FC<Props> = ({ children, defaultState, eventOn, eventOff, disabled, switched: state }) => {
  const [switched, setSwitch] = useState(state ?? defaultState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSwitch(state ?? defaultState), [state]);
  if (!Array.isArray(children)) return null;
  
  const onSwitch = async () => {
    // eslint-disable-next-line no-mixed-operators
    const nextState = !switched && state == null || state;
    const on = async () => eventOn && await eventOn();
    const off = async () => eventOff && await eventOff();

    const ok = await (nextState ? on() : off());
    (ok || ok === undefined) && state == null && setSwitch(nextState);
  };
  
	return <IconButton onClick={onSwitch} disabled={disabled}>{switched ? children[1] : children[0]}</IconButton>
};
