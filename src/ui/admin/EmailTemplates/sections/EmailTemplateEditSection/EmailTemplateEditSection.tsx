import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import SunEditor from 'suneditor-react';

import { AppRoutes } from '../../../../app/api';

import { Modal } from '../../../../@core/modules/Modal';
import { Caption, FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { MainButton } from '../../../../@core/modules/Button';

import * as styled from './EmailTemplateEditSection.styled';

type Props = {};

export const EmailTemplateEditSection: React.VFC<Props> = () => {
  const { word } = useLocale();
	const { push } = useHistory();

	const onClose = useCallback(() => push(AppRoutes.Settings.EmailTemplates.Index), [push]);

  return (
    <Modal
      visible
      title={word('email-template.edit.template')}
      onClose={onClose}
      width={700}
      height={500}
      footer={<MainButton children={word('global.save')} onClick={onClose} />}
    >
      <ListSection>
        <FormCaption caption={word('global.name')}>
          <InputCustom />
        </FormCaption>
        <Caption caption={word('email-template.default.template')}>
          <styled.EditorOverloadStyle>
            <SunEditor height={'180px'} />
          </styled.EditorOverloadStyle>
        </Caption>
      </ListSection>
    </Modal>
  );
};
