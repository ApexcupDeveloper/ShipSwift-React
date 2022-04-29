import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { InputCustom } from '../../../../@core/modules/Input';
import { ListSection } from '../../../../@core/modules/ListBuilder';
import { Modal } from '../../../../@core/modules/Modal';

import { UploadIcon16 } from '../../../../../assets/icons';

import * as styled from './RaiseTicketSection.styled';

type Props = {
	onClose: () => void;
};

export const RaiseTicketSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();

  return (
    <Modal
      visible
      width={680}
      hideFooterSplitter
      title={word('global.raise.ticket')}
			onClose={onClose}
      footer={
        <styled.FooterWrapper>
          <MainButton type="text" flat icon={<UploadIcon16 />} children={word('global.add.attachment')} />
          <MainButton children={word('global.send')} onClick={onClose} />
        </styled.FooterWrapper>
      }
    >
      <ListSection>
        <FormCaption caption={word('global.subject')}>
          <InputCustom />
        </FormCaption>
				<FormCaption caption={word('global.description')}>
          <InputCustom height={145} multiline />
        </FormCaption>
      </ListSection>
    </Modal>
  );
};
