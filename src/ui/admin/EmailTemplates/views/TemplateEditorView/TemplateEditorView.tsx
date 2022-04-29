import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';

import { EmailTemplateEditSection } from '../../sections/EmailTemplateEditSection';

type Props = {};

export const TemplateEditorView: React.VFC<Props> = () => {
  return (
    <Switch>
      <Route path={AppRoutes.Settings.EmailTemplates.Edit} component={EmailTemplateEditSection} />
    </Switch>
  );
};
