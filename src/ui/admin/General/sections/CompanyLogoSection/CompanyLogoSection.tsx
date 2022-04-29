import { useCallback, useMemo, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { SelectImage } from '../../../../@core/modules/Other';

import { isFileFormat, isFileLimit, parseFilePath } from '../../../../../utils';

import * as config from './CompanyLogoSection.config';
import * as styled from './CompanyLogoSection.styled';
import { useEffect } from 'react';

type Props = {};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const CompanyLogoSection: React.VFC<Props> = () => {
  const { word } = useLocale();

  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedFilePath, setSelectedFilePath] = useState<string>();

  const fileSizeFormatted = useMemo(() => `${word('global.maximum.file.size')}: ${config.fileSizeRule} MB`, [word]);
  const supportedImagesFormatted = useMemo(() => `${word('global.supported.images')}: ${config.formatText}`, [word]);

  const onOpenLogo = useCallback(() => fileInput.current?.click(), [fileInput]);
  const onChooseLogo = useCallback(async (e: InputChangeEvent) => {
    const { files } = e.target;
    if (!files) return;

    const logo = files[0];
    const formatOk = isFileFormat(logo, config.formatRule);
    const sizeOk = !isFileLimit(logo, config.fileSizeRule);    

    if (sizeOk && formatOk) {
      const path = await parseFilePath(logo);

      setSelectedFile(logo);
      setSelectedFilePath(path);
    }
  }, []);

  return (
    <styled.BodyWrapper>
      <SelectImage src={selectedFilePath} />
      <styled.LogoFileSection>
        <styled.LogoSectionTitle children={word('global.company.logo')} />
        <styled.FileDescription children={fileSizeFormatted} />
        <styled.FileDescription children={supportedImagesFormatted} />
        <styled.FileInput type="file" onChange={onChooseLogo} ref={fileInput} />
        <MainButton type="secondary" children={word('global.choose.file')} onClick={onOpenLogo} />
      </styled.LogoFileSection>
    </styled.BodyWrapper>
  );
};
