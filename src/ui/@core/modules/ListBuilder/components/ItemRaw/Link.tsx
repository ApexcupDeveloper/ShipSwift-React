import * as styled from "./ItemRaw.styled";

type Props = {
  label: string;
  url?: string;
  onClick?:any;
  align?: 'center' | 'left' | 'right';
};

export const Link: React.FC<Props> = ({ label, url, onClick, align = 'left' }) => {
  return (
      <styled.Link href={url} onClick={onClick} target="_blank" align={align}>{label}</styled.Link>
  );
};
