import { useMemo, useState, useCallback, useRef } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useWithoutBubble } from '../../../../@core/hooks/useWithoutBubble';

import { AppRoutes } from '../../../../app/api';

import { Link, useHistory } from 'react-router-dom';
import { ItemRaw, StatusLabel } from '../../../../@core/modules/ListBuilder';
import { AvatarLetter } from '../../../../@core/modules/Other';
import { Tooltip } from '../../../../@core/modules/Tooltip';
import { MoreMenu } from '../../../../@core/modules/ListBuilder';
import parse from 'html-react-parser';

import * as styled from './OrdersList.styled';
import { OrderItem } from '../../../../../client/client';
import { CustomerInfo, OrderValue, Product, UpdateOrderStatusRequest } from '../../../../../proto/order_manager_pb';
import { ChangeEventHandler } from '../../../../@core/hooks/useInputState';
import { useEffect } from 'react';
import { NoteIcon16, NotAppliedIcon20, AlertSuccessIcon20, PhoneIcon20 } from '../../../../../assets/icons';
import { getCompanyId } from '../../../../../utils';
import { BlobProvider } from '@react-pdf/renderer';
import { InvoiceComponent } from '../../../../@core/modules/Invoice/Invocie';
import { addInfoToast, updateToast } from '../../../../toast';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import firebase from '../../../../../utils/firebase';
import { config } from '../../../../../private';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { CompanyInfo } from '../../../../../proto/company_manager_pb';
import { useSelector } from 'react-redux';


type Props = {
  index: number;
  name: string;
  storeId: string;
  orderDate: string;
  customerName: string;
  shortName: string;
  country: string;
  items: string;
  shippingMethod: string;
  iconColour?: string;
  products: Product.AsObject[];
  paymentMethod: string;
  customer: CustomerInfo.AsObject;
  orderValue: OrderValue.AsObject;
  orderStatus: StatusLabel;
  createdDate: string;
  storeType: string;
  note: React.ReactNode;
  selectedOrders: OrderItem[];
  onClickChecbox?: ChangeEventHandler;
  onClickTrack?: () => void;
  showMenu: boolean;
  showWarning: () => void;
  orderData: OrderItem;
  companyData?: CompanyInfo.AsObject;
};

type ParamsProps = {
  id: string;
  storeId: string;
};

const currencySymbol = '£';

export const OrdersRaw: React.VFC<Props> = ({
  index,
  name,
  storeId,
  orderDate,
  customerName,
  shortName,
  country,
  items,
  iconColour,
  shippingMethod,
  orderStatus,
  products,
  paymentMethod,
  orderValue,
  customer,
  storeType,
  createdDate,
  note,
  selectedOrders,
  onClickChecbox,
  showWarning,
  onClickTrack,
  showMenu,
  orderData,
  companyData
}) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const toastId = useRef<any>(null);
  const companyLogo = useSelector((state: any) => state.company.logo);
  const [generating, setGenerating] = useState(false);
  const onClickWithoutBubble = useWithoutBubble();

  const orderLink = useMemo(() => AppRoutes.Orders.Order.Index.replace(':storeId', storeId).replace(':id', name), [storeId, name]);
  const [status, setStatus] = useState<StatusLabel>('default');

  const ruleIsApplied = !true;
  const ruleIsAppliedText = useMemo(
    () => ruleIsApplied ? word('order.automation.rule.applied') : word('order.automation.rule.not.applied'),
    [ruleIsApplied, word]
  );
  const orderStatusIsShipped = orderStatus === 'shipped';
  const orderStatusIsShippedText = useMemo(
    () => orderStatusIsShipped ? word('order.view.shipment') : word('order.ship.order'),
    [orderStatusIsShipped, word]
  );

  useEffect(() => {
    setStatus(orderStatus);
  }, [orderStatus]);

  const onOpenOrder = useCallback(() => push(orderLink), [orderLink, push]);

  return (
    <ItemRaw hover>
      <ItemRaw.Merge margin="0px -80px 0px 0px" flex={1}>
        <ItemRaw.Checkbox
          onClickWrapper={onClickWithoutBubble}
          handleChangeEvent={onClickChecbox}
          checked={selectedOrders.some((item) => item.orderNumber === name)}
        />
      </ItemRaw.Merge>
      <ItemRaw.Merge flex={10} onClick={onOpenOrder}>
        <styled.ItemWrapper>
          <ItemRaw.Title flex={1.5} bold>
            <Link
              to={{
                pathname: AppRoutes.Orders.Order.Index.replace(':storeId', storeId).replace(':id', name),
              }}
            >
              <styled.FlexRow>
                <AvatarLetter name={shortName} backgroundColor={iconColour} icon={<PhoneIcon20 />} />
                {name}
              </styled.FlexRow>
            </Link>
          </ItemRaw.Title>
          <ItemRaw.ProductItem flex={2.5} products={products} />
          <ItemRaw.Title children={currencySymbol + orderValue.total.toFixed(2)} />
          <ItemRaw.Title children={parse(orderDate)} />
          <ItemRaw.Title children={customerName} />
          <ItemRaw.Title children={country} />
          <ItemRaw.Title children={shippingMethod} />
          <ItemRaw.OrderStatus label={status} />
        </styled.ItemWrapper>
      </ItemRaw.Merge>
      <ItemRaw.Merge>
        <styled.IconsWrapper>
          <styled.NoteWrapperWithHovering>
            <Tooltip align="right" position="top" content={ruleIsAppliedText}>
              {ruleIsApplied && <NotAppliedIcon20 />}
            </Tooltip>
          </styled.NoteWrapperWithHovering>
          <styled.NoteWrapper>
            {note && (
              <Tooltip align="right" position="top" content={note}>
                <NoteIcon16 />
              </Tooltip>
            )}
          </styled.NoteWrapper>
          <styled.NoteWrapperWithHovering onClick={onClickTrack}>
            <Tooltip align="right" position="top" content={orderStatusIsShippedText}>
              <styled.TruckIcon active={orderStatusIsShipped ? "true" : "false"} />
            </Tooltip>
          </styled.NoteWrapperWithHovering>
          <styled.NoteWrapperWithHovering>
            <MoreMenu position="bottom" onClickWrapper={onClickWithoutBubble} visible={showMenu}>
              <MoreMenu.Button children={orderStatusIsShippedText} onClick={onClickTrack} />
              {companyLogo && (
                <>
                  {
                    !generating || !companyData ?
                      <MoreMenu.Button children={word('global.print.labels')} onClick={() => setGenerating(true)} />
                      :
                      <BlobProvider document={<InvoiceComponent order={[orderData]} companyData={companyData} logoUrl={companyLogo} />}>
                        {({ blob, url, loading, error }) => {
                          if (!loading && url && blob) {
                            toastId.current = addInfoToast(`Generating invoice...`, false);

                            const storage = getStorage(firebase, config.firebase.invoices);
                            const storageRef = ref(storage, `${companyId}/${orderData.orderNumber}/${Math.random()}.pdf`);
                            const uploadTask = uploadBytesResumable(storageRef, blob);

                            uploadTask.on('state_changed', async (snapshot: any) => {
                              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                              updateToast(toastId.current, `Generating invoice... ${Math.round(progress)}%`, 'info', false);
                            }, (err) => {
                              updateToast(toastId.current, err.message, 'error', 2000);
                            }, () => {
                              getDownloadURL(uploadTask.snapshot.ref)
                                .then((downloadUrl) => {
                                  updateToast(toastId.current, `Successfully generated.`, 'success', 2000);
                                  window.open(downloadUrl, '_blank')
                                  setGenerating(false);
                                })
                                .catch((err) => {
                                  setGenerating(false);
                                  updateToast(toastId.current, err.message, 'error', 2000);
                                })
                            })
                          }
                          return <MoreMenu.Button children={word('global.print.labels')} />
                        }}
                      </BlobProvider>
                  }
                </>
              )}
              <MoreMenu.Button children={word('global.export.csv')} />
              <MoreMenu.Button children={word('global.view.order')} />
              <MoreMenu.Button children={word('global.cancel.order')} onClick={showWarning} />
              <MoreMenu.Button children={word('global.delete.order')} />
            </MoreMenu>
          </styled.NoteWrapperWithHovering>
        </styled.IconsWrapper>
      </ItemRaw.Merge>
    </ItemRaw>
  );
};