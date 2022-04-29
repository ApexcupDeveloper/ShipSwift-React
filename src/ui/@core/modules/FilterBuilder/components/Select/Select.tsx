import { useState, useCallback, useMemo } from 'react';
import { useLocale } from '../../../../../../assets/locale';

import { ToggleButton } from '../../../Button';

import * as config from './Select.config';
import * as styled from './Select.styled';

type Props = {
  type: config.SelectType;
};

export const Select: React.FC<Props> = ({ type }) => {
  const { word } = useLocale();
  const [showSection, setShowSection] = useState(false);
  const onShowToggle = useCallback(() => {
    setShowSection((prev) => !prev);
  }, []);

  const typeObjectList = useMemo(() => config.selectMap(word), [word]);
  const typeObject = useMemo(() => typeObjectList(type), [typeObjectList, type]);

  return (
    <styled.BodyWrapper>
      <styled.ButtonWrapper>
        <ToggleButton toggled={!showSection} onToggle={onShowToggle}>
          <styled.IconWrapper>
            {typeObject.icon}
            {typeObject.label}
          </styled.IconWrapper>
        </ToggleButton>
      </styled.ButtonWrapper>
      {showSection && (
        <styled.SectionWrapper>
          {typeObject.section}
        </styled.SectionWrapper>
      )}
    </styled.BodyWrapper>
  );
};
