import { useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';
import { useSelectPage } from '../../hooks/useSelectPage';

import { ArrowLeftIcon16, ArrowRightIcon16 } from '../../../../../../assets/icons';

import * as styled from './PageControl.styled';

type Props = {
  /**
   * @default false
   */
  showEntries?: boolean;
  onNext? : () => void;
  onPrev? : () => void;
  disabled? : boolean;
};

const PageControl: React.VFC<Props> = ({ showEntries = false, onNext, onPrev, disabled }) => {
  const { word } = useLocale();
  const { currentPage, pageCount, canPrev, canNext, next, prev } = useSelectPage();

  const entries = useMemo(
    () => `${word('entries')} ${currentPage} ${word('entries.of')} ${pageCount}`,
    [currentPage, pageCount, word]
  );

  return (
    <styled.BodyWrapper>
      <styled.ButtonContainer>
        <styled.Button onClick={onPrev ? onPrev : prev} disabled={!canPrev || disabled}>
          <ArrowLeftIcon16 />
        </styled.Button>
        <styled.Button data-left-active={canPrev} onClick={onNext ? onNext : next} disabled={!canNext || disabled}>
          <ArrowRightIcon16 />
        </styled.Button>
      </styled.ButtonContainer>
      {showEntries && <styled.Entires>{entries}</styled.Entires>}
    </styled.BodyWrapper>
  );
};

export default PageControl;
export { PageControl };
