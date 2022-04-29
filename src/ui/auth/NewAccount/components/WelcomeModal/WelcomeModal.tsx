import React, { useCallback, useState } from 'react';
import { Modal } from '../../../../@core/modules/Modal';

type ModalProps = React.ComponentProps<typeof Modal>;

type Props = Pick<ModalProps, 'footer'> & {
	title: string;
	onClose: () => void;
};

export const WelcomeModal: React.FC<Props> = ({ children, title, footer, onClose, }) => {
	const [opened, setOpened] = useState(true);

  const _onClose = useCallback(() => {
    setOpened(false);
    onClose && onClose();
  }, [onClose]);

  return (
    <Modal
      title={title}
      width={680}
      height={438}
      visible={opened}
      onClose={_onClose}
      footer={footer}
    >
			{children}
		</Modal>
  );
};
