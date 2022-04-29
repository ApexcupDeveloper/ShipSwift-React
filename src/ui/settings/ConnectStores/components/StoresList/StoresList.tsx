import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { StoresRaw } from './StoresRaw';

import * as styled from './StoresList.styled';
import { StoresItem } from '../../../../../client/client';
import React from 'react';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { TooltipsList } from '../../../../@core/modules/Tooltip';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { config } from '../../../../../private';
import { getCompanyId, updateMetadata } from '../../../../../utils';
import { useHistory, useLocation } from 'react-router-dom';
import { quickEditStoresList } from '../../views/NavTabView/NavTabView.config';
import { PopupWarning } from '../../../../@core/components/popupWarning';
import { AppRoutes } from '../../../../app/api';
import { cacheService } from '../../../../../utils/cache-service';

type Props = {};

export const StoresList: React.VFC<Props> = () => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { push } = useHistory();
  const toastId = React.useRef<any>(null);
  const { pathname } = useLocation();
  const { user, setUser } = useAuth0();
  const [stores, setStores] = React.useState<StoresItem[]>([]);
  const [updating, setUpdating] = React.useState('');
  const [showDelWarning, setShowDelWarning] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const getclient = useGrpcClient();
  const userId = user?.sub || '';
  const companyId = getCompanyId(user);

  React.useEffect(() => {
    if(companyId) {
      getStores()
      .then(res => {
        setStores(res);
      })
      .catch(err => {
        addErrorToast(err.message)
      })
    }
  }, [updating, user, pathname]);

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getclient()
      .then((client) => {
        Promise.all([
          client.getAllStores(companyId)
        ])
        .then(data => {
          resolve(data[0]);
        }, error => {
          reject(error);
        })
      })
      .catch((err) => {
        reject(err);
      });
    })
  };

  const enableStatus = async (id: string, status: boolean) => {
    getclient()
      .then((client) => {
        setUpdating('');
        if (status) {
          client
            .disableStore({
              storeId: id,
              companyId: companyId,
            })
            .then(async (data) => {
              setUpdating('disable');
              cacheService.clearCache('stores');
            })
            .catch((er) => {
              
              addErrorToast(er);
            });
        } else {
          client
            .enableStore({
              storeId: id,
              companyId: companyId,
            })
            .then(async (data) => {
              setUpdating('enable');
              cacheService.clearCache('stores');
            })
            .catch((er) => {
              
              addErrorToast(er);
            });
        }
      })
      .catch((er) => {
        
        addErrorToast(er);
      });
  };

  const deleteStore = (id: string) => {
    toastId.current = addInfoToast('Deleting store...', false);
    getclient()
      .then((client) => {
        client
          .deleteStore({
            storeId: id,
            companyId: companyId,
          })
          .then(async (data) => {
            // Update Auth0 User Metadata
            let key = config.auth0.namespace + '/user_metadata';
            let storeList: string = (user as any)[key].storeList;
            let storeListArray: string[] = storeList.split(',');
            let newStoreList = '';
            storeListArray.filter((item) => item !== id).map((store, index) => {
              if (index === 0) {
                newStoreList = store;
              } else {
                newStoreList = newStoreList + ',' + store;
              }
            })
            updateMetadata({ user_metadata: { storeList: newStoreList } }, userId)
              .then(async (res) => {
                // Update user metadata
                setUser({
                  ...user,
                  [key]: res.data.user_metadata
                });

                cacheService.clearCache('stores');
                
                updateToast(toastId.current, 'Successfully deleted store', 'success', 5000);

                onClose();
              })
              .catch((err) => {
                
                updateToast(toastId.current, err.message, 'error', 5000);
              });
          })
          .catch((er) => {
            
            updateToast(toastId.current, er, 'error', 5000);
          });
      })
      .catch((er) => {
        
        updateToast(toastId.current, er, 'error', 5000);
      });
  };

  const editStore = (data: StoresItem) => {
    push(quickEditStoresList(data.type), data);
  }

  const showWarning = (id: string) => {
    let key = config.auth0.namespace + '/user_metadata';
    let showDeleteStoreWarning: string = (user as any)[key].deleteStoreWarning;
    if (showDeleteStoreWarning === 'true') {
      setShowDelWarning(true);
      setDeleteId(id);
    } else {
      setDeleteId(id);
      deleteStore(id);
    }
  }

  const onClose = () => {
    setShowDelWarning(false);
    setDeleteId('');
  }

  const onChecked = () => {
    if (checked) {
      setChecked(false);
      updateMetadata({ user_metadata: { deleteStoreWarning: 'true' } }, userId)
    } else {
      setChecked(true);
      updateMetadata({ user_metadata: { deleteStoreWarning: 'false' } }, userId)
    }
  }

  return (
    <TooltipsList itemsCount={stores.length}>
      <styled.BodyWrapper>
        <TitleRaw cleanBackground splitter>
          <TitleRaw.Merge margin="0px -70px 0px 0px" flex={0.5}>
            <TitleRaw.Checkbox />
          </TitleRaw.Merge>
          <TitleRaw.Item children={word('global.icon')} />
          <TitleRaw.Item children={word('global.name')} />
          <TitleRaw.Item children={word('global.store.type')} />
          <TitleRaw.Item children={word('store.country')} />
          <TitleRaw.Item children={word('global.sync')} />
          <TitleRaw.Item children={word('global.status')} />
          <TitleRaw.Space flex={0} />
        </TitleRaw>
        {stores.map((props) => (
          <StoresRaw
            {...props}
            onClick={() => enableStatus(props.id, props.enabled)}
            key={props.id}
            onDelete={() => showWarning(props.id)}
            onEdit={() => editStore(props)}
          />
        ))}
      </styled.BodyWrapper>
      <PopupWarning.DeleteYourStore onApply={() => deleteStore(deleteId)} onCancel={onClose} onClose={onClose} visible={showDelWarning} onChecked={onChecked} checked={checked} />
    </TooltipsList>
  );
};
