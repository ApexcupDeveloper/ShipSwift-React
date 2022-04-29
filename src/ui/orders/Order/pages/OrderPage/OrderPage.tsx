import React, { useEffect, useRef, useState } from 'react';
import { useNavTabHistory } from '../../../../@core/modules/Navigation/hooks/useNavTabHistory';

import { OrdersView } from '../../views/ProductsView';
import { OrderNotesView } from '../../views/OrderNotesView';
import { OrderFormView } from '../../views/OrderFormView';
import { OrderDetailsView } from '../../views/OrderDetailsView';
import { ProductHistoryView } from '../../views/ProductHistoryView';
import { OrderRouteView } from '../../views/OrderRouteView';
import { NavTabView } from '../../views/NavTabView';

import { OrdersContainer } from '../../containers/OrdersContainer';
import { OrderNotesContainer } from '../../containers/OrderNotesContainer';
import { ProductHistoryContainer } from '../../containers/ProductHistoryContainer';

import * as styled from './OrderPage.styled';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useOrderClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { CustomerInfo, GetOrderRequest, OrderValue, Product, UpdateOrderStatusRequest } from '../../../../../proto/order_manager_pb';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import { convertTime, getCompanyId, updateMetadata } from '../../../../../utils';
import { AppRoutes } from '../../../../app/api';
import { config } from '../../../../../private';
import { cacheService } from '../../../../../utils/cache-service';
import { PopupWarning } from '../../../../@core/components/popupWarning';
import { OrderItem } from '../../../../../client/client';

type Props = {};
type ParamsProps = {
  id: string;
  storeId: string;
}

const orderNumber = 'CSO-0001-43435';

export const OrderPage: React.VFC<Props> = () => {
  const params: ParamsProps = useParams();
  const { updateLabel } = useNavTabHistory();
  const history = useHistory();
  const { pathname } = useLocation();
  const { user, setUser } = useAuth0();
  const getClient = useOrderClient();
  const toastId = useRef<any>(null);
  const userId = user?.sub ? user.sub : '';

  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState<Product.AsObject[]>([]);
  const [customer, setCustomer] = useState<CustomerInfo.AsObject>();
  const [billing, setBilling] = useState<CustomerInfo.AsObject>();
  const [orderValue, setOrderValue] = useState<OrderValue.AsObject>();
  const [createdDate, setCreatedDate] = useState<string>('');
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [orderStatus, setOrderSatus] = useState('');
  const [orderData, setOrderData] = useState<any>();
  const [handleChanged, setHandleChanged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const companyId = getCompanyId(user);
  const [showDelWarning, setShowDelWarning] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({
    storeId: '',
    storeType: '',
    name: ''
  })

  useEffect(() => updateLabel(params.id), [updateLabel]);

  useEffect(() => {
    if (user) {
      let roleKey = config.auth0.namespace + '/roles';
      let role: string[] = (user as any)[roleKey];
      if (role && role.length > 0 && role.some(item => item === 'ShipSwift Admin')) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user])

  useEffect(() => {
    if (companyId) {
      // Get All Orders
      getClient()
        .then((client) => {
          const requestOrder: GetOrderRequest.AsObject = {
            storeId: params.storeId,
            orderNumber: params.id,
            companyId: companyId
          }
          client.getOrder(requestOrder)
            .then((data: any) => {
              if (data) {
                setOrderData(data)
                let status =
                  data.status === 'Ready to ship' ? 'ready-to-ship' :
                    data.status === 'Pending Payment' ? 'pending-payment' :
                      data.status === 'Shipped' ? 'shipped' :
                        data.status === 'On-Hold' ? 'on-hold' :
                          data.status === 'Backordered' ? 'waiting-for-stock' :
                            data.status === 'Cancelled' ? 'cancelled' :
                              data.status === 'Refunded' ? 'refunded' : 'default';
                setOrderSatus(status);
                setProducts(data.productsList);
                setCustomer(data.customer);
                setBilling(data.billing);
                setOrderValue(data.orderValue);
                setCreatedDate(convertTime(new Date(Number(data.timestamp.seconds as any * 1000))));
                setNote(data.customerNotes);
                setPaymentMethod(data.paymentMethod);
              } else {
                history.push(AppRoutes.Orders.Index)
              }
            })
            .catch((err) => {
              
              addErrorToast(err)
            })
        })
        .catch((err) => {
          
          addErrorToast(err)
        });
    }
  }, [companyId, pathname, handleChanged])

  const selectOrder = (storeId: string, storeType: string, name: string) => {
    setShowDelWarning(true)
    setSelectedOrder({
      storeId: storeId,
      storeType: storeType,
      name: name
    })
  }

  const cancelOrder = (storeId: string, storeType: string, name: string) => {
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
            setShowDelWarning(false);
            updateToast(toastId.current, "Successfully cancelled order.", 'success', 5000);
          })
          .catch((err) => {
            
            updateToast(toastId.current, err.message, 'error', 5000);
          });
      })
      .catch((err) => {
        
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const applyCancelOrder = () => {
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
            setShowDelWarning(false);
            setHandleChanged(prev => !prev);
            updateToast(toastId.current, "Successfully cancelled order.", 'success', 5000);
          })
          .catch((err) => {
            
            updateToast(toastId.current, err.message, 'error', 5000);
          });
      })
      .catch((err) => {
        
        updateToast(toastId.current, err.message, 'error', 5000);
      });
  };

  const onClose = () => {
    setShowDelWarning(false);
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

  const shipOrder = () => {
    if (orderStatus === 'shipped') {
      // push(AppRoutes.Orders.View.Shipment, { orderData, nRoute, cRoute });
    } else {
      const nRoute = AppRoutes.Orders.Order.Ship.Step2.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId);
      const cRoute = AppRoutes.Orders.Order.Index.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId);
    
      history.push(AppRoutes.Orders.Order.Ship.Step1.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId), {
        orderData,
        nRoute,
        cRoute
      });
    }
  }

  if (orderData) {
    return (
      <styled.BodyWrapper>
        <NavTabView orderData={orderData} cancelOrder={cancelOrder} selectOrder={selectOrder} shipOrder={shipOrder} />
        <styled.LeftWrapper>
          <OrdersContainer>
            <OrdersView products={products} />
          </OrdersContainer>
          <OrderNotesContainer>
            <OrderNotesView customer={customer as CustomerInfo.AsObject} createdDate={createdDate} note={note as string} />
          </OrderNotesContainer>
          <OrderDetailsView orderValue={orderValue as OrderValue.AsObject} />
          {isAdmin && (
            <ProductHistoryContainer>
              <ProductHistoryView />
            </ProductHistoryContainer>
          )}
        </styled.LeftWrapper>
        <OrderFormView orderData={orderData} customer={customer as CustomerInfo.AsObject} billing={billing as CustomerInfo.AsObject} createdDate={createdDate} paymentMethod={paymentMethod} />
        <OrderRouteView orderNumber={orderNumber} />
        <PopupWarning.CancelAnOrder onApply={applyCancelOrder} onCancel={onClose} onClose={onClose} visible={showDelWarning} onChecked={onChecked} checked={checked} />
      </styled.BodyWrapper>
    );
  } else {
    return (
      <styled.BodyWrapper></styled.BodyWrapper>
    )
  }
};
