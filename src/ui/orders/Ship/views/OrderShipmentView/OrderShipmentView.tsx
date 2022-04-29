import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';

import { TitleRaw } from '../../../../@core/modules/ListBuilder';
import { OrderDataRow } from './OrderDataRow';
import { ShipmentDataRow } from './ShipmentDataRow';

import * as styled from './OrderShipmentView.styled';
import { convertTime, generateArray, getCompanyId } from '../../../../../utils';
import { ShipmentViewModal } from '../../components/ShipmentViewModal';
import { useHistory, useLocation } from 'react-router';
import { OrderItem } from '../../../../../client/client';
import { AppRoutes } from '../../../../app/api';
import { useCourierClient, useGrpcClient, useOrderClient } from '../../../../../client/client-hook';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { addErrorToast, addInfoToast, addWarningToast, updateToast } from '../../../../toast';
import { cacheService } from '../../../../../utils/cache-service';
import { UpdateOrderStatusRequest } from '../../../../../proto/order_manager_pb';

type Props = {};

type ShipmentProps = {
	shipmentCarrier: string,
	trackingNumber: string,
	shipmentDate: string,
	labelUrl: string,
	status: string
}

type StateProps = {
	orderData: OrderItem;
	nRoute: string;
	cRoute: string;
}

export const OrderShipmentView: React.FC<Props> = () => {
	const { word } = useLocale();
	const { push, goBack } = useHistory();
	const { user } = useAuth0();
	const { state } = useLocation();
	const getClient = useCourierClient();
	const getOrderClient = useOrderClient();
	const getCompanyClient = useGrpcClient();


	const companyId = getCompanyId(user);
	// const { orderData, nRoute, cRoute } = state as StateProps;
	const [shipments, setShipments] = useState<ShipmentProps[]>([])
	const toastId = useRef<any>(null);
	const [storeType, setStoreType] = useState('');
	// const [stateData, setStateData] = useState<StateProps>();
	const [orderData, setOrderData] = useState<OrderItem>();
	const [cRoute, setCRoute] = useState('');
	const [nRoute, setNRoute] = useState('');
	const [nextRoute, setNextRoute] = useState('');

	useEffect(() => {
		if (state) {
			const stateData = state as StateProps;
			setOrderData(stateData.orderData);
			setCRoute(stateData.cRoute);
			setNRoute(stateData.nRoute);
			setNextRoute(AppRoutes.Orders.Order.Ship.Step2.replace(':id', stateData.orderData.orderNumber).replace(':storeId', stateData.orderData.storeId));
		} else {
			goBack();
		}
	}, [state])

	useEffect(() => {
		if (companyId && orderData) {
			getClient()
				.then(client => {
					client
						.getShipment({
							companyId: companyId,
							storeId: orderData.storeId,
							orderNumber: orderData.orderNumber,
							latestOnly: false
						})
						.then((res: any) => {
							let shipmentList = res.shipmentsList;
							let tempShipments: ShipmentProps[] = [];
							shipmentList.map((item: any) => {
								tempShipments = [...tempShipments, {
									shipmentCarrier: item.carrier,
									trackingNumber: item.trackingNumber,
									shipmentDate: convertTime(new Date(item.shipmentDate.seconds * 1000)),
									labelUrl: item.labelUrl,
									status: item.status
								}]
							})
							setShipments(tempShipments);
						})
						.catch(err => {
							if(err.message && err.message.includes("retrieving shipment")) {
								addWarningToast("Shipment created outside of ShipSwift");
							} else {
								addErrorToast(err.message);
							}
						})
				})
				.catch(err => {
					addErrorToast(err.message);
				})
		}
	}, [orderData, companyId])

	const onCancel = () => {
		if (!companyId || !orderData) {
			return;
		}
		toastId.current = addInfoToast('Sending the cancel request...', false);
		getCompanyClient()
			.then(client => {
				client.getStoreType({
					companyId: companyId,
					storeId: orderData.storeId
				}).then((res: any) => {
					const storeType = res.type;
					setStoreType(storeType);
					getClient()
						.then(client => {
							client
								.cancelShipment({
									companyId: companyId,
									storeId: orderData.storeId,
									orderNumber: orderData.orderNumber
								})
								.then((response: any) => {
									getOrderClient()
										.then(orderClient => {
											const requestOrder: UpdateOrderStatusRequest.AsObject = {
												companyId: companyId,
												storeId: orderData.storeId,
												storeType: storeType,
												orderId: orderData.orderNumber,
												status: 'Ready to ship',
											};
											orderClient
												.updateOrderStatus(requestOrder)
												.then((resp) => {
													cacheService.clearCache('main_orders');
													updateToast(toastId.current, 'Successfully sent the cancel request.', 'success', 5000);
													onClose();
												})
												.catch((err) => {
													updateToast(toastId.current, err.message, 'error', 5000);
												})
										})
										.catch(err => {
											updateToast(toastId.current, err.message, 'error', 5000);
										})

								})
								.catch(err => {
									updateToast(toastId.current, err.message, 'error', 5000);
								})
						})
						.catch(err => {
							updateToast(toastId.current, err.message, 'error', 5000);
						})
				}).catch(err => {
					updateToast(toastId.current, err.message, 'error', 5000);
				})
			})


	}

	const onDownload = (url: string) => {
		// let element = document.createElement('a');
		// element.setAttribute('href', url);
		// element.setAttribute('download', "shipment.pdf");
		// element.style.display = 'none';
		// document.body.appendChild(element);
		// element.click();
		// document.body.removeChild(element);
		window.open(url, '_blank')
	}

	const onClose = useCallback(() => push(cRoute), [push, cRoute]);

	if (orderData && shipments.length)
		return (
			<ShipmentViewModal orderNumber={`${orderData.orderNumber}`} orderData={orderData} onClose={onClose} nextRoute={nextRoute}>
				<styled.BodyWrapper>
					<div>
						<styled.Caption children={word('global.order.data')} />
						<TitleRaw minWidth={70}>
							<TitleRaw.Item flex={1.25} children={word('order.items')} />
							<TitleRaw.Item children={word('global.sku')} />
							<TitleRaw.Item
								flex={0.75}
								children={word('global.qty').replace(/\W/, '').toUpperCase()}
							/>
						</TitleRaw>
						{
							orderData.productsList.map((props) => <OrderDataRow key={props.id} {...props} value={1111} />)
						}
						<div />
					</div>
					<div>
						<styled.Caption children={word('global.shipment.data')} />
						<TitleRaw>
							<TitleRaw.Item flex={1.25} children={word('global.shipment.carrier')} />
							<TitleRaw.Item align="left" children={word('global.tracking.number')} />
							<TitleRaw.Item align="left" children={word('global.shipment.date')} />
							<TitleRaw.Space flex={0} />
						</TitleRaw>
						{
							shipments.map((props) => {
								if (props.status !== 'cancelled') {
									return (
										<ShipmentDataRow {...props} onCancel={onCancel} onDownload={() => onDownload(props.labelUrl)} />
									)
								}
							})
						}
						<div />
					</div>
				</styled.BodyWrapper>
			</ShipmentViewModal>
		);
	else
		return null
};
