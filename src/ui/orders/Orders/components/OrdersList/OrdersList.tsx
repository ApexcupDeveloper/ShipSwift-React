import React, { useRef } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { StatusLabel, TitleRaw } from '../../../../@core/modules/ListBuilder';
import { OrdersRaw } from './OrdersRaw';
import { Tooltip, TooltipsList } from '../../../../@core/modules/Tooltip';

import * as styled from './OrdersList.styled';
import { convertTime, getCompanyId, updateMetadata } from '../../../../../utils';
import { OrderItem } from '../../../../../client/client';
import { convertTime1 } from '../../../../../utils/convert-time';
import { MultiSelectOrders } from '../MultiSelectOrders';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../app/api';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { useGrpcClient, useOrderClient } from '../../../../../client/client-hook';
import { CustomerInfo, OrderValue, UpdateOrderStatusRequest } from '../../../../../proto/order_manager_pb';
import { PopupWarning } from '../../../../@core/components/popupWarning';
import { config } from '../../../../../private';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { cacheService } from "../../../../../utils/cache-service";
import { NotAppliedIcon20, NoteIcon16 } from '../../../../../assets/icons';
import { useSelector } from 'react-redux';

type Props = {
  orders: OrderItem[];
  handleChangeEvent: () => void;
};

type StoreProps = {
  id: string;
  shortName: string;
  iconColour: string;
  type: string;
};

export const OrdersList: React.VFC<Props> = ({ orders, handleChangeEvent }) => {
  let dataSubscription: any;
  const { word } = useLocale();
  const { push } = useHistory();
  const { user, setUser } = useAuth0();
  const getClient = useOrderClient();
  const getGrpcClieht = useGrpcClient();
  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';
  const companyId = getCompanyId(user);

  const nRoute = AppRoutes.Orders.Ship.Step2;
  const cRoute = AppRoutes.Orders.Index;

  const [loaded, setLoaded] = React.useState(false);
  const [stores, setStores] = React.useState<StoreProps[]>([]);
  const [selectedOrders, setSelectedOrders] = React.useState<OrderItem[]>([]);
  const [updated, setUpdated] = React.useState(false);
  const [showDelWarning, setShowDelWarning] = React.useState(false);
  const [showAddStoreWarning, setShowAddStoreWarning] = React.useState(false);
  const [showMultiDelWarning, setShowMultiDelWarning] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [multiChecked, setMultiChecked] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const companyInfo = useSelector((state: any) => state.company.company);
  const [selectedOrder, setSelectedOrder] = React.useState({
    storeId: '',
    storeType: '',
    name: ''
  })

  React.useEffect(() => {
    return () => {
      cacheService.stopPoll('stores');
    }
  }, [])

  React.useEffect(() => {
    if (companyId) {
      cacheService.stopPoll('stores');
      dataSubscription = cacheService.callWithCache('stores', 'main_stores', getStores.bind(this), [], config.cache.store_timeout)
        .subscribe((data: any[]) => {
          setStores(data);
        }, err => {
          addErrorToast(err.message)
        })
    }
  }, [user, companyId]);


  React.useEffect(() => {
    if (stores.length && orders.length) {
      orders.map((order) => {
        if (!loaded) {
          var tempStore = stores.filter(store => store.id === order.storeId);
          if (tempStore.length === 0) {
            setLoaded(true);
            getGrpcClieht()
              .then((client) => {
                client
                  .getAllStores(companyId)
                  .then((res) => {
                    setStores(res);
                  })
                  .catch((err) => {
                  })
              })
              .catch((err) => {
              });
          }
        }
      })
    }
  }, [stores, orders])

  React.useEffect(() => {
    if (user) {
      let key = config.auth0.namespace + '/user_metadata';
      let storeList: string = (user as any)[key].storeList;
      if (storeList.length === 0 && orders.length === 0) {
        setShowAddStoreWarning(true);
      }
    }
  }, [user, orders])

  const getStores = () => {
    return new Promise<any>((resolve, reject) => {
      getGrpcClieht()
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

  const onClickChecbox = (order: OrderItem) => {
    if (selectedOrders.some((item) => item.orderNumber === order.orderNumber)) {
      setSelectedOrders(selectedOrders.filter((item) => item.orderNumber !== order.orderNumber));
    } else {
      setSelectedOrders([...selectedOrders, order]);
    }
  };

  const onClickAll = (e: any) => {
    if (selectedOrders.length !== orders.length) {
      setSelectedOrders(orders);
    } else {
      setSelectedOrders([]);
    }
  };

  const onClear = () => {
    setSelectedOrders([]);
  };

  // This multi cancel order function would be added later.
  const onCancel = () => {
    toastId.current = addInfoToast(`Cancelling orders...`, false);
    getClient()
      .then((client) => {
        selectedOrders.map((order) => {
          let storeData: StoreProps[] = stores.filter((item: any) => item.id === order.storeId);
          const requestOrder: UpdateOrderStatusRequest.AsObject = {
            companyId: order.companyId,
            storeId: order.storeId,
            storeType: storeData.length ? storeData[0].type : '',
            orderId: order.orderNumber,
            status: 'Cancelled',
          };
          client
            .updateOrderStatus(requestOrder)
            .then(async (data) => {
              cacheService.clearCache('main_orders');
              setUpdated(true);
              setShowMultiDelWarning(false);
              handleChangeEvent();
              var index = orders.findIndex(item => item.orderNumber === order.orderNumber);
              orders[index] = { ...orders[index], status: 'Cancelled' };
              updateToast(toastId.current, `Successfully cancelled order - ${order.orderNumber}`, 'success', 5000);
              setUpdated(false);
            })
            .catch((err) => {
              
              updateToast(toastId.current, err.message, 'error', 5000);
            });
        });
      })
      .catch((err) => {
        
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const onShip = () => {
    push(AppRoutes.Orders.MultiShip, selectedOrders);
    setSelectedOrders([]);
  };

  const showMultiWarning = () => {
    let key = config.auth0.namespace + '/user_metadata';
    let cancelOrderWarning: string = (user as any)[key].cancelOrderWarning;
    if (cancelOrderWarning === 'true') {
      setShowMultiDelWarning(true);
    } else {
      onCancel();
    }
  }

  const showWarning = (storeId: string, storeType: string, name: string) => {
    let key = config.auth0.namespace + '/user_metadata';
    let cancelOrderWarning: string = (user as any)[key].cancelOrderWarning;
    if (cancelOrderWarning === 'true') {
      setShowDelWarning(true);
      setSelectedOrder({ storeId, storeType, name });
    } else {
      cancelOrder(storeId, storeType, name);
    }
  }

  const onClose = () => {
    setShowDelWarning(false);
    setShowMultiDelWarning(false);
  }

  const onChecked = () => {
    let key = config.auth0.namespace + '/user_metadata';
    if (checked) {
      setChecked(false);
      updateMetadata({ user_metadata: { cancelOrderWarning: 'true' } }, userId)
        .then((res) => {
          setUser({
            ...user,
            [key]: res.data.user_metadata
          })
        })
    } else {
      setChecked(true);
      updateMetadata({ user_metadata: { cancelOrderWarning: 'false' } }, userId)
        .then((res) => {
          setUser({
            ...user,
            [key]: res.data.user_metadata
          })
        })
    }
  }

  const onMultiChecked = () => {
    let key = config.auth0.namespace + '/user_metadata';
    if (multiChecked) {
      setMultiChecked(false);
      updateMetadata({ user_metadata: { cancelOrderWarning: 'true' } }, userId)
        .then((res) => {
          setUser({
            ...user,
            [key]: res.data.user_metadata
          })
        })
    } else {
      setMultiChecked(true);
      updateMetadata({ user_metadata: { cancelOrderWarning: 'false' } }, userId)
        .then((res) => {
          setUser({
            ...user,
            [key]: res.data.user_metadata
          })
        })
    }
  }

  const cancelOrder = (storeId: string, storeType: string, name: string) => {
    setShowMenu(true);
    toastId.current = addInfoToast('Cancelling order...', false);

    getClient()
      .then((client) => {

        const requestOrder: UpdateOrderStatusRequest.AsObject = {
          companyId: getCompanyId(user),
          storeId: storeId,
          storeType: storeType,
          orderId: name,
          status: 'Cancelled',
        };

        client
          .updateOrderStatus(requestOrder)
          .then((data) => {
            cacheService.clearCache('main_orders');
            setShowMenu(false);
            setShowDelWarning(false);
            handleChangeEvent();
            updateToast(toastId.current, "Successfully cancelled order.", 'success', 5000);
          })
          .catch((err) => {
            
            setShowMenu(false);
            updateToast(toastId.current, err.message, 'error', 5000);
          });
      })
      .catch((err) => {
        
        setShowMenu(false);
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const applyCancelOrder = () => {
    setShowMenu(true);
    toastId.current = addInfoToast('Cancelling order...', false);

    getClient()
      .then((client) => {
        const requestOrder: UpdateOrderStatusRequest.AsObject = {
          companyId: getCompanyId(user),
          storeId: selectedOrder.storeId,
          storeType: selectedOrder.storeType,
          orderId: selectedOrder.name,
          status: 'Cancelled',
        };

        client
          .updateOrderStatus(requestOrder)
          .then((data) => {
            cacheService.clearCache('main_orders');
            setShowMenu(false);
            setShowDelWarning(false);
            handleChangeEvent();
            updateToast(toastId.current, "Successfully cancelled order.", 'success', 5000);
          })
          .catch((err) => {
            
            setShowMenu(false);
            updateToast(toastId.current, err.message, 'error', 5000);
          });
      })
      .catch((err) => {
        
        setShowMenu(false);
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const onClickTrack = (status: string, orderNumber: string, storeId: string, orderData: OrderItem) => {
    if (status === 'shipped') {
      push(AppRoutes.Orders.View.Shipment, { orderData, nRoute, cRoute });
    } else {
      push(AppRoutes.Orders.Ship.Step1, { orderData, nRoute, cRoute });
    }
  }

  const goDashboard = () => {
    setShowAddStoreWarning(false);
    push(AppRoutes.Dashboard.Index);
  }

  const goAddStore = () => {
    setShowAddStoreWarning(false);
    push(AppRoutes.Settings.ConnectStores.SetUpStore.Index);
  }

  return (
    <TooltipsList itemsCount={orders.length}>
      <styled.BodyWrapper>
        <TitleRaw>
          <TitleRaw.Merge margin="0px -80px 0px 0px" flex={1}>
            <TitleRaw.Checkbox
              handleChangeEvent={onClickAll}
              checked={selectedOrders.length === orders.length && orders.length ? true : false}
            />
          </TitleRaw.Merge>
          <TitleRaw.Merge flex={10}>
            <styled.TitleWrapper>
              <TitleRaw.Item align="left" flex={1.5} children={word('order.number')} />
              <TitleRaw.Item flex={2.5} align="left" children={word('order.product.item')} />
              <TitleRaw.Item children={word('global.price')} />
              <TitleRaw.Item children={word('order.date')} />
              <TitleRaw.Item children={word('order.customer-name')} />
              <TitleRaw.Item children={word('order.country')} />
              <TitleRaw.Item children={word('order.shipping-method')} />
              <TitleRaw.Item children={word('order.status')} />
            </styled.TitleWrapper>
          </TitleRaw.Merge>
          <TitleRaw.Merge>
            <styled.IconsWrapper>
              <styled.NoteWrapperWithHovering>
                <Tooltip align="center" position="bottom" content={word('order.rule')} children={<NotAppliedIcon20 />} />
              </styled.NoteWrapperWithHovering>
              <styled.NoteWrapperWithHovering>
                <Tooltip
                  align="center"
                  position="bottom"
                  content={word('order.contains.a.note')}
                  children={<NoteIcon16 />}
                />
              </styled.NoteWrapperWithHovering>
              <TitleRaw.Space flex={2} />
            </styled.IconsWrapper>
          </TitleRaw.Merge>
        </TitleRaw>
        {orders.map((props, index) => {
          let orderDate = convertTime1(new Date(Number((props.timestamp ? props.timestamp.seconds as any : 0) * 1000)));
          let createdDate = convertTime(new Date(Number((props.timestamp ? props.timestamp.seconds as any : 0) * 1000)));
          let storeData: StoreProps[] = stores.filter((item: any) => item.id === props.storeId);
          let qty = 0;
          let productList = props.productsList;
          productList.map((prod) => {
            qty += prod.quantity;
          });
          let status =
            props.status === 'Ready to ship'
              ? 'ready-to-ship'
              : props.status === 'Shipped'
                ? 'shipped'
                : props.status === 'Pending Payment'
                  ? 'pending-payment'
                  : props.status === 'On-Hold'
                    ? 'on-hold'
                    : props.status === 'Backordered'
                      ? 'waiting-for-stock'
                      : props.status === 'Cancelled'
                        ? 'cancelled'
                        : props.status === 'Refunded'
                          ? 'refunded'
                          : 'default';

          return (
            <OrdersRaw
              key={index}
              index={index}
              name={props.orderNumber}
              storeId={props.storeId}
              shortName={storeData.length ? storeData[0].shortName : ''}
              orderDate={orderDate}
              iconColour={storeData.length ? storeData[0].iconColour : ''}
              customerName={props.customer ? props.customer.fullName : ''}
              country={props.customer ? props.customer.countryCode2 : ''}
              items={qty.toString()}
              shippingMethod={props.shippingMethod}
              orderStatus={status as StatusLabel}
              products={productList}
              orderValue={props.orderValue as OrderValue.AsObject}
              paymentMethod={props.paymentMethod}
              customer={props.customer as CustomerInfo.AsObject}
              createdDate={createdDate}
              storeType={storeData.length ? storeData[0].type : ''}
              note={props.customerNotes}
              orderData={props}
              selectedOrders={selectedOrders}
              companyData={companyInfo}
              onClickChecbox={() => onClickChecbox(props)}
              showMenu={showMenu}
              showWarning={() => showWarning(props.storeId, storeData.length ? storeData[0].type : '', props.orderNumber)}
              onClickTrack={() => onClickTrack(status, props.orderNumber, props.storeId, props)}
            />
          );
        })}
        {selectedOrders.length > 0 && companyInfo && (
          <MultiSelectOrders count={selectedOrders.length} companyData={companyInfo} orderData={selectedOrders} onClear={onClear} onCancel={showMultiWarning} onShip={onShip} />
        )}
        <PopupWarning.AddStore goDashboard onApply={goAddStore} onCancel={goDashboard} onClose={goDashboard} visible={showAddStoreWarning} onChecked={onChecked} checked={checked} />
        <PopupWarning.CancelAnOrder onApply={applyCancelOrder} onCancel={onClose} onClose={onClose} visible={showDelWarning} onChecked={onChecked} checked={checked} />
        <PopupWarning.CancelAnOrder onApply={onCancel} onCancel={onClose} onClose={onClose} visible={showMultiDelWarning} onChecked={onMultiChecked} checked={multiChecked} />
      </styled.BodyWrapper>
    </TooltipsList>
  );
};
