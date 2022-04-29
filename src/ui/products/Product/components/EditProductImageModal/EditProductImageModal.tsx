import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useProductClient } from '../../../../../client/client-hook';
import { config } from '../../../../../private';
import { GetAllProductsRequest, ProductInfo } from '../../../../../proto/product_manager_pb';
import { getCompanyId } from '../../../../../utils';
import firebase from '../../../../../utils/firebase';
import { ImageDropzone } from '../../../../@core/modules/ImageDropzone';
import { Modal, ModalProps } from '../../../../@core/modules/Modal';
import { MultiImageDropzone } from '../../../../@core/modules/MultiImageDropzone';

import { addErrorToast, addInfoToast, addWarningToast, updateToast } from '../../../../toast';
import Resizer from "react-image-file-resizer";

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

import * as styled from './EditProductImageModal.styled';
import { deleteObject } from 'firebase/storage';

type Props = Pick<ModalProps, 'visible' | 'onClose'>;

type ParamsProps = {
  id: string;
}

export const EditProductImageModal: React.VFC<Props> = ({ onClose, visible = false }) => {
  const { word } = useLocale();
  const params: ParamsProps = useParams();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useProductClient();
  const toastId = useRef<any>(null);
  const { state } = useLocation();
  const productName = state as string;
  const [handleChanged, setHandleChanged] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [maxCount, setMaxCount] = useState(20);
  const [orderArr, setOrderArr] = useState<any[]>([]);
  const [uploading, setUploading] = useState<number[]>([]);
  const [ordering, setOrdering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState({
    id: 0,
    percent: 0
  });
  const [imageUrls, setImageUrls] = useState([
    { id: 0, name: '', url: '' },
    { id: 1, name: '', url: '' },
    { id: 2, name: '', url: '' },
    { id: 3, name: '', url: '' },
    { id: 4, name: '', url: '' },
    { id: 5, name: '', url: '' },
    { id: 6, name: '', url: '' },
    { id: 7, name: '', url: '' },
    { id: 8, name: '', url: '' },
    { id: 9, name: '', url: '' },
    { id: 10, name: '', url: '' },
    { id: 11, name: '', url: '' }
  ]);
  const [uploadPercents, setUploadPercents] = useState<any[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  useEffect(() => {
    let drag = false;
    document.addEventListener(
      'mousedown', (e: any) => {
        drag = false;
      });

    document.addEventListener(
      'mousemove', () => drag = true);

    document.addEventListener(
      'mouseup', (e: any) => {
        setIsDragging(drag ? true : false);
        if (e && e.target.tagName === 'svg' && !drag) {
          let id = Number(e.target.id);
          setIsDragging(true);
        }
      });

    return () => {
      document.removeEventListener('mousedown', () => { });
      document.removeEventListener('mousemove', () => { });
      document.removeEventListener('mouseup', () => { });
    };
  }, [])

  useEffect(() => {
    let tempArr = uploadPercents;
    tempArr[progress.id] = progress.percent;
    setUploadPercents(tempArr);
  }, [progress])

  useEffect(() => {
    let i = 0;
    imageUrls.map((item) => {
      if (item.url !== '') {
        i++
      }
    })
    setMaxCount(20 - i < 0 ? 0 : 20 - i);
  }, [imageUrls])

  useEffect(() => {
    if (companyId) {
      setLoaded(false);
      getClient()
        .then((client) => {
          const requestProduct: GetAllProductsRequest.AsObject = {
            companyId: companyId,
            minQuantity: 0,
            maxQuantity: 0,
            storeFilter: {
              storeIdsList: [],
              nameSkuFreeTextSearch: params.id
            },
            paginationCursor: "",
            pageSize: 1,
            includeArchived: false
          };
          client
            .getAllProducts(requestProduct)
            .then((res: any) => {
              const productData: ProductInfo.AsObject = res.productsList[0];
              // setImages(productData.imageUrlsList);
              let tempUrlArr = [
                { id: 0, name: '', url: '' },
                { id: 1, name: '', url: '' },
                { id: 2, name: '', url: '' },
                { id: 3, name: '', url: '' },
                { id: 4, name: '', url: '' },
                { id: 5, name: '', url: '' },
                { id: 6, name: '', url: '' },
                { id: 7, name: '', url: '' },
                { id: 8, name: '', url: '' },
                { id: 9, name: '', url: '' },
                { id: 10, name: '', url: '' },
                { id: 11, name: '', url: '' }
              ];
              let tempOrderArr: any[] = [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
              ];
              productData.imagesList.map((img, index) => {
                tempUrlArr[index].url = img.url;
                tempUrlArr[index].name = img.id.toString();
                tempOrderArr[index] = img.id;
              });
              setOrderArr(tempOrderArr);
              setImageUrls(tempUrlArr);
              setLoaded(true);
            })
            .catch((err) => {
              addErrorToast(err.message);
              setLoaded(true);
            })
        })
        .catch((err) => {
          addErrorToast(err.message);
          setLoaded(true);
        })
    }
  }, [companyId, handleChanged])

  const onDeleteImage = (id: number, url: string) => {
    const idString = decodeURIComponent(url).split('?')[0];
    toastId.current = addInfoToast('Deleting image...', false);
    const storage = getStorage(firebase);
    const storageRef = ref(storage, idString);
    deleteObject(storageRef).then(() => {
      getClient()
        .then((client) => {
          const request = {
            companyId: companyId,
            productSku: params.id,
            imageId: id
          };
          client
            .deleteImage(request)
            .then((res) => {
              updateToast(toastId.current, `Successfully deleted`, 'success', 5000);
              setHandleChanged(prev => !prev);
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 5000);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 5000);
        })
    }).catch((err) => {
      updateToast(toastId.current, err.message, 'error', 5000);
    });
  }

  const uploadImage = (id: number, files: any[]) => {
    if (uploading.includes(id))
      return;

    toastId.current = addInfoToast('Uploading images...', false);
    setUploading([id]);
    const image = files[0];
    let tempUrlArr: any[] = imageUrls;
    tempUrlArr[id] = URL.createObjectURL(image);
    setImageUrls(tempUrlArr);
    const fileType = image.name.replace(/^.*\./, '');

    Promise.all([
      new Promise((resolve, reject) => {
        Resizer.imageFileResizer(
          image,
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
        const storage = getStorage(firebase, config.firebase.productImages);
        const storageRef = ref(storage, `${companyId}/${productName}/${Math.random()}.${fileType}`);
        const uploadTask = uploadBytesResumable(storageRef, resizedImage[0]);
        uploadTask.on('state_changed', async (snapshot: any) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress({
            id: id,
            percent: progress
          });
        }, (err) => {
          updateToast(toastId.current, err.message, 'error', 2000);
          setUploading([]);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              let tempUrlArray: any[] = imageUrls;
              tempUrlArray[id] = url;
              setImageUrls(tempUrlArr);
              setUploading([]);
              getClient()
                .then((client) => {
                  client
                    .addImage({
                      companyId: companyId,
                      productSku: params.id,
                      url: url
                    })
                    .then((res) => {
                      updateToast(toastId.current, 'Successfully updated', 'success', 2000);
                      setHandleChanged(prev => !prev);
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
              setUploading([]);
            })
        })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
        setUploading([]);
      })
  }

  const handleMultiImage = (files: any[]) => {
    if (uploading.length)
      return;

    if (files.length) {
      let tempUrlArr = imageUrls;
      let idArr: number[] = [];
      let id = 0;

      imageUrls.map((item, index) => {
        if (item.url === '') {
          if (files[id]) {
            tempUrlArr[index].url = URL.createObjectURL(files[id]);
            idArr = [...idArr, index]
            id++;
          }
        }
      })
      setImageUrls(tempUrlArr);

      toastId.current = addInfoToast('Uploading images...', false);
      setUploading(idArr);
      const storage = getStorage(firebase, config.firebase.productImages);
      Promise.all(
        files.map((image: any, index) => {
          const fileType = image.name.replace(/^.*\./, '');

          return new Promise((resolve, reject) => {
            Resizer.imageFileResizer(
              image,
              2000,
              2000,
              fileType,
              80,
              0,
              (uri: any) => {
                resolve({
                  id: idArr[index],
                  img: uri,
                  type: fileType
                })
              },
              "file"
            );
          })
        })
      )
        .then((resizedImages) => {
          Promise.all(
            resizedImages.map((imageData: any) => {
              const storageRef = ref(storage, `${companyId}/${productName}/${Math.random()}.${imageData.type}`);
              return new Promise((resolve, reject) => {
                const uploadTask = uploadBytesResumable(storageRef, imageData.img);
                uploadTask.on('state_changed', async (snapshot: any) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setProgress({
                    id: imageData.id,
                    percent: progress
                  });
                }, (err) => {
                  reject(err);
                }, () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                      resolve(url);
                    })
                    .catch((err) => {
                      reject(err);
                    })
                })
              })
            })
          )
            .then((urls) => {
              updateToast(toastId.current, `Updating product...`, 'info', false);
              setUploading([]);
              getClient()
                .then((client) => {
                  Promise.all(
                    urls.map((url: any) => {
                      return new Promise((resolve, reject) => {
                        client
                          .addImage({
                            companyId: companyId,
                            productSku: params.id,
                            url: url
                          })
                          .then((res) => {
                            resolve(res);
                          })
                          .catch((err) => {
                            reject(err);
                          })
                      })
                    })
                  )
                    .then((res) => {
                      updateToast(toastId.current, 'Successfully updated', 'success', 2000);
                      setHandleChanged(prev => !prev);
                    })
                    .catch((err) => {
                      updateToast(toastId.current, err.message, 'error', 2000);
                    })
                })
                .catch((err) => {
                  updateToast(toastId.current, err.message, 'error', 2000);
                  setUploading([]);
                })
            })
            .catch((err) => {
              updateToast(toastId.current, err.message, 'error', 2000);
              setUploading([]);
            })
        })
        .catch((err) => {
          updateToast(toastId.current, err.message, 'error', 2000);
          setUploading([]);
        })
    }

  }

  const changeOrder = (sourceId: any, sourceIndex: any, targetIndex: any, targetId: any) => {
    if (sourceIndex === targetIndex || ordering) return;
    if (imageUrls[sourceIndex].url === '' || imageUrls[targetIndex].url === '') {
      addWarningToast("You can't drag with empty card.");
      return;
    }

    setOrdering(true);

    const tempOrderArr = swap(orderArr, sourceIndex, targetIndex);
    const tempUrlArr = swap(imageUrls, sourceIndex, targetIndex);
    setOrderArr(tempOrderArr);

    toastId.current = addInfoToast('Reordering images...', false);

    getClient()
      .then((client) => {
        let imageIdsList: any[] = [];
        tempOrderArr.map((item) => {
          if (item !== undefined) {
            imageIdsList = [...imageIdsList, item];
          }
        })
        client
          .changeImagesOrder({
            companyId: companyId,
            productSku: params.id,
            imageIdsList: imageIdsList
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully reordered', 'success', 2000);
            // setHandleChanged(prev => !prev);
            setOrdering(false);
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 2000);
            setOrdering(false);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 2000);
        setOrdering(false);
      })

    return setImageUrls(tempUrlArr);
  }

  return (
    <Modal visible={visible} width={830} height={420} onClose={onClose} title={word('global.edit.images')}>
      {loaded && (
        <styled.BodyWrapper>
          <GridContextProvider onChange={changeOrder}>
            <MultiImageDropzone onChange={handleMultiImage} maxCount={maxCount} noClick={isDragging}>
              <styled.Container>
                <GridDropZone
                  className="dropzone"
                  id="image-reorder"
                  boxesPerRow={6}
                  rowHeight={154}

                >
                  {imageUrls.map((item, index) => {
                    if (item.url === '') {
                      return (
                        <div
                          key={index}
                          style={{
                            zIndex: 0,
                            position: 'absolute',
                            opacity: 1,
                            height: 154,
                            boxSizing: 'border-box',
                            transform: `translate3d(${(index % 6) * 130}px, ${Math.floor(index / 6) * 154}px, 0px) scale(1)`
                          }}>
                          <ImageDropzone id={index.toString()} uploading={uploading.includes(index)} percent={uploadPercents[index]} image={item.url} onChange={(e) => uploadImage(index, e)} />
                        </div>
                      )
                    } else {
                      return (
                        <GridItem key={item.name} className="grid-drag-item">
                          <ImageDropzone id={item.name} uploading={uploading.includes(index)} percent={uploadPercents[index]} image={item.url} onDeleteImage={() => onDeleteImage(Number(item.name), item.url)} onChange={(e) => uploadImage(index, e)} />
                        </GridItem>
                      )
                    }
                  })}
                </GridDropZone>
              </styled.Container>
            </MultiImageDropzone>
          </GridContextProvider>
        </styled.BodyWrapper>
      )}
    </Modal>
  );
};
