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
import { of } from 'rxjs';

type Props = {};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

export const StoresList: React.VFC<Props> = () => {
  const { word } = useLocale();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const toastId = React.useRef<any>(null);
  const { user, setUser } = useAuth0();
  const [stores, setStores] = React.useState<StoresItem[]>([]);
  const [updating, setUpdating] = React.useState('');
  const getclient = useGrpcClient();
  const userId = user?.sub || '';
  const companyId = getCompanyId(user);

  React.useEffect(() => {
    if(companyId) {
      getStores();
    }
  }, [pathname, companyId]);

  const getStores = () => {
    getclient()
      .then((client) => {
        client
          .getAllStores(companyId)
          .then((data) => {
            setStores(data);
          })
          .catch((er) => {
            
            addErrorToast(er);
          });
      })
      .catch((er) => {
        
        addErrorToast(er);
      });
  };

  const enableStatus = async (id: string, status: boolean) => {
    getclient()
      .then((client) => {
        if (status) {
          client
            .disableStore({
              storeId: id,
              companyId: companyId,
            })
            .then(async (data) => {
              let selectedIndex: any = stores?.findIndex((item) => item.id === id);
              stores[selectedIndex].enabled = false;
              setUpdating('disable');
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
              let selectedIndex: any = stores?.findIndex((item) => item.id === id);
              stores[selectedIndex].enabled = true;
              setUpdating('enable');
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
                updateToast(toastId.current, 'Successfully deleted store', 'success', 5000);
                getStores();
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
            onDelete={() => deleteStore(props.id)}
            onEdit={() => editStore(props)}
          />
        ))}
      </styled.BodyWrapper>
    </TooltipsList>
  );
};
