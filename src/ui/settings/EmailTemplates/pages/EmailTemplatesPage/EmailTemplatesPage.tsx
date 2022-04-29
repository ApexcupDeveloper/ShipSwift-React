import { DisplayRound } from '../../../../@core/modules/Other';
import { SettingsList } from '../../components/SettingsList';
import { TemplateEditorView } from '../../views/TemplateEditorView';

import * as styled from './EmailTemplatesPage.styled';

type Props = {};

export const EmailTemplatesPage: React.VFC<Props> = () => {
  return (
    <styled.BodyWrapper>
      <DisplayRound>
        <SettingsList />
      </DisplayRound>
      <TemplateEditorView />
    </styled.BodyWrapper>
  );
};
