import { IconWrapper } from './IconButton.styled';

type Props = React.ComponentPropsWithRef<'button'>;

export const IconButton: React.FC<Props> = ({ children, disabled, ...props }) => {
	return <IconWrapper disabled={disabled} {...props}>{children}</IconWrapper>;
};
