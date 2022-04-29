import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocale } from '../../../../../assets/locale';

import { Modal } from '../../../../@core/modules/Modal';
import { SmallAlert } from '../../../../@core/modules/Other';
import { StoreCard } from '../../components/StoreCard';

import { getStores } from './SetUpStoreSection.config';
import * as styled from './SetUpStoreSection.styled';

type Props = {
  onClose: () => void;
};

export const SetUpStoreSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const isDark = useSelector((state: any) => state.theme.isDark);
  const stores = useMemo(() => getStores(isDark), []);

  return (
    <Modal visible height={438} width={680} onClose={onClose} title={word('setup-store.set.up.store')}>
      <styled.BodyWrapper>
        <styled.StoresList>
          {stores.map((props, index) => (
            <StoreCard key={index} {...props} />
          ))}
        </styled.StoresList>
        <SmallAlert customStyle={{
          position: 'absolute',
          bottom: 20,
          width: 'calc(100% - 40px)',
          background: isDark ? '#3D3C41' : null
        }}>
          <styled.TitleContainer>
            <styled.Title children={word('welcome.step-1.have-multiple-stores')} />
            <styled.Description children={word('welcome.step-1.connect-store')} />
          </styled.TitleContainer>
        </SmallAlert>
      </styled.BodyWrapper>
    </Modal>
  );
};
