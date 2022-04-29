import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { MainButton } from '../../../../@core/modules/Button';
import { SelectImage } from '../../../../@core/modules/Other';

import { getCompanyId, isFileFormat, isFileLimit, parseFilePath } from '../../../../../utils';

import * as config from './CompanyLogoSection.config';
import * as styled from './CompanyLogoSection.styled';
import { ImageDropzone } from '../../../../@core/modules/ImageDropzone';
import { addInfoToast, updateToast } from '../../../../toast';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';
import { config as productConfig } from '../../../../../private';
import Resizer from "react-image-file-resizer";
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useGrpcClient } from '../../../../../client/client-hook';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { LogoDropzone } from '../../../../@core/modules/LogoDropzone';

type Props = {
  companyInfo: CompanyInfo.AsObject
};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const CompanyLogoSection: React.VFC<Props> = ({ companyInfo }) => {
  const { word } = useLocale();

  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFilePath, setSelectedFilePath] = useState<string>(companyInfo.logoUrl);
  const getClient = useGrpcClient();
  const toastId = useRef<any>(null);
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fileSizeFormatted = useMemo(() => `${word('global.maximum.file.size')}: ${config.fileSizeRule} MB`, [word]);
  const supportedImagesFormatted = useMemo(() => `${word('global.supported.images')}: ${config.formatText}`, [word]);

  useEffect(() => {
    setSelectedFilePath(companyInfo.logoUrl)
  }, [companyInfo])

  const uploadImage = (files: any[]) => {
    const img = files[0];
    const previewImg = selectedFilePath;
    setSelectedFilePath(URL.createObjectURL(img));


    toastId.current = addInfoToast('Uploading company logo...', false);
    setUploading(true);

    const fileType = img.name.replace(/^.*\./, '');
    Promise.all([
      new Promise((resolve, reject) => {
        Resizer.imageFileResizer(
          img,
          2000,
          2000,
          fileType,
          80,
          0,
          (uri: any) => {
            resolve(uri);
          },
          "file"
        )
      })
    ])
      .then((resizedImage: any) => {
        const storage = getStorage(firebase, productConfig.firebase.companyLogos);
        const storageRef = ref(storage, `${companyId}/${Math.random()}.${fileType}`);
        const uploadTask = uploadBytesResumable(storageRef, resizedImage[0]);
        uploadTask.on('state_changed', async (snapshot: any) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        }, (err) => {
          updateToast(toastId.current, err.message, 'error', 2000);
          setUploading(false);
        }, () => {
          if (companyInfo && companyInfo.logoUrl) {
            const idString = decodeURIComponent(previewImg).split('?')[0];
            const delStorage = getStorage(firebase);
            const delRef = ref(delStorage, idString);

            deleteObject(delRef).then(() => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((url) => {
                  setSelectedFilePath(url);
                  setUploading(false);
                  getClient()
                    .then((client) => {
                      client
                        .editCompany({
                          companyId: companyId,
                          companyInfo: {
                            ...companyInfo,
                            logoUrl: url
                          }
                        })
                        .then((res) => {
                          updateToast(toastId.current, 'Successfully uploaded', 'success', 2000);

                        })
                        .catch((err) => {
                          updateToast(toastId.current, err.message, 'error', 2000);
                        })
                    })
                    .catch((err) => {
                      updateToast(toastId.current, err.message, 'error', 2000);
                    })
                })
                .catch((err) => {
                  updateToast(toastId.current, err.message, 'error', 2000);
                  setUploading(false);
                })
            })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 5000);
              });
          } else {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((url) => {
                setSelectedFilePath(url);
                setUploading(false);
                getClient()
                  .then((client) => {
                    client
                      .editCompany({
                        companyId: companyId,
                        companyInfo: {
                          ...companyInfo,
                          logoUrl: url
                        }
                      })
                      .then((res) => {
                        updateToast(toastId.current, 'Successfully uploaded', 'success', 2000);
                      })
                      .catch((err) => {
                        updateToast(toastId.current, err.message, 'error', 2000);
                      })
                  })
                  .catch((err) => {
                    updateToast(toastId.current, err.message, 'error', 2000);
                  })
              })
              .catch((err) => {
                updateToast(toastId.current, err.message, 'error', 2000);
                setUploading(false);
              })
          }
        })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
        setUploading(false);
      })
  }

  return (
    <styled.BodyWrapper>
      <LogoDropzone
        image={selectedFilePath}
        onChange={(e) => uploadImage(e)}
        uploading={uploading}
        percent={progress}
      />
      <styled.LogoFileSection>
        <styled.LogoSectionTitle children={word('global.company.logo')} />
        <styled.FileDescription children={fileSizeFormatted} />
        <styled.FileDescription children={supportedImagesFormatted} />
        <styled.FileInput type="file" />
      </styled.LogoFileSection>
    </styled.BodyWrapper>
  );
};
