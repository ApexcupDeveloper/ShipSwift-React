import { EditIcon18 } from '../../../../../assets/icons';
import { MainButton } from '../../../../@core/modules/Button';
import { Select } from '../../../../@core/modules/Select';

import * as styled from './TemplateCard.styled';

export type TemplateCardProps = {
  title: string;
  templateImage: string;
};

export const TemplateCard: React.VFC<TemplateCardProps> = ({ title, templateImage }) => {
  return (
    <styled.BodyWrapper>
      <styled.TitleContainer>
        <styled.Title children={title} />
      </styled.TitleContainer>
      <styled.TemplateContainer>
        <MainButton flat iconSize={18} icon={<EditIcon18 />} />
        <styled.TemplateImage src={templateImage} />
      </styled.TemplateContainer>
      <Select />
    </styled.BodyWrapper>
  );
};
