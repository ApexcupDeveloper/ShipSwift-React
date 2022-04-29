import { useMemo } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { TemplateCard } from '../../components/TemplateCard';

import * as config from './PrintingTemplatesPage.config';
import * as styled from './PrintingTemplatesPage.styled';

type Props = {};

export const PrintingTemplatesPage: React.VFC<Props> = () => {
  const { word } = useLocale();
  const templates = useMemo(() => config.getTemplates(word), [word]);

  return (
    <styled.BodyWrapper>
      <styled.TemplatesContainer>
        {templates.map((props) => (
          <TemplateCard key={props.templateImage} {...props} />
        ))}
      </styled.TemplatesContainer>
    </styled.BodyWrapper>
  );
};
