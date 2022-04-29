import { useLocale } from '../../../../../../assets/locale';

import { MultiSelect, Devider } from '..';
import { MainButton } from '../../../Button';

import * as styled from './FreeTrialMultiSelect.styled';

type Props = {
  trial: number;
  visible: boolean;
  onClose: () => void;
};

const TRIAL = '{{DAYS}}';

export const FreeTrialMultiSelect: React.FC<Props> = ({ children, trial, visible, onClose }) => {
  const { word } = useLocale();

  return (
    <MultiSelect visible={visible}>
      <styled.LeftBlock>
        <styled.TrialPeriod>{word('global.trial-period').replace(TRIAL, trial + '')}</styled.TrialPeriod>
      </styled.LeftBlock>
      <MainButton children={word('global.upgrade')} />
      <Devider />
      <MainButton type="text-white" flat children={word('global.close')} onClick={onClose} />
    </MultiSelect>
  );
};
