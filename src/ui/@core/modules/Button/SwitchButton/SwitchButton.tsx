import Switch from 'antd/lib/switch';
import * as styled from './SwitchButton.styled';

type Props = React.ComponentProps<typeof Switch>;

export const SwitchButton: React.FC<Props> = (props) => {
  return (
    <styled.BodyWrapper>
      <Switch {...props} data-size={props?.size ?? 'default'} />
    </styled.BodyWrapper>
  );
};
