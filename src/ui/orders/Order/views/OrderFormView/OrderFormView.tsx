import { useLocale } from '../../../../../assets/locale';
import { useHistory } from 'react-router-dom';
import { useCallback, useRef, useState } from 'react';

import { AppRoutes } from '../../../../app/api';

import { IconButton, MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { DatePicker } from '../../../../@core/modules/DatePicker';
import { AddressSection, FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom } from '../../../../@core/modules/Input';
import { DisplayRound } from '../../../../@core/modules/Other';
import { Select } from '../../../../@core/modules/Select';
import { DateRaw } from '../../components/DateRaw';
import { EditIcon18, ReceiptIcon18 } from '../../../../../assets/icons';

import * as styled from './OrderFormView.styled';
import { OrderItem } from '../../../../../client/client';
import { BlobProvider } from '@react-pdf/renderer';
import { InvoiceComponent } from '../../../../@core/modules/Invoice/Invocie';
import { CustomerInfo } from '../../../../../proto/order_manager_pb';
import firebase from '../../../../../utils/firebase';
import { addInfoToast, updateToast } from '../../../../toast';
import { getStorage, ref, uploadBytesResumable } from '@firebase/storage';
import { config } from '../../../../../private';
import { getAuth } from '@firebase/auth';
import { getApp } from '@firebase/app';
import { getFunctions, httpsCallable } from '@firebase/functions';
import { useSelector } from 'react-redux';

type Props = {
  customer: CustomerInfo.AsObject,
  billing: CustomerInfo.AsObject,
  createdDate: string,
  paymentMethod: string,
  orderData: OrderItem,
};

const date = new Date().getTime();

export const OrderFormView: React.VFC<Props> = ({ customer, billing, createdDate, paymentMethod, orderData }) => {
  const { word } = useLocale();
  const { push } = useHistory();
  const toastId = useRef<any>(null);
  const [generating, setGenerating] = useState(false);
  const companyLogo = useSelector((state: any) => state.company.logo);
  const companyInfo = useSelector((state: any) => state.company.company);


  const nRoute = AppRoutes.Orders.Order.Ship.Step2.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId);
  const cRoute = AppRoutes.Orders.Order.Index.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId);

  const onEdit = useCallback(() => push(AppRoutes.Orders.Order.Edit.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId)), [push]);

  const onShip = () => {
    push(AppRoutes.Orders.Order.Ship.Step1.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId), {
      orderData,
      nRoute,
      cRoute
    });
  }

  const onViewShipment = () => {
    push(AppRoutes.Orders.Order.View.Shipment.replace(':id', orderData.orderNumber).replace(':storeId', orderData.storeId), {
      orderData,
      nRoute,
      cRoute
    });
  }

  const noEmpty = (value: string) => {
    if (!value || value === " ") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <DisplayRound overflow flex={0}>
      <styled.BodyWrapper>
        <FormSection title={word('global.order')} list>
          <FormCaption caption={word('global.due-date')}>
            <DatePicker dropdown startDate={date} />
          </FormCaption>
          <DateRaw label={'Created'} date={createdDate} />
          {
            companyLogo.length > 0 && (
              <SplitInput>
                {
                  !generating || !companyInfo ?
                    <MainButton icon={<ReceiptIcon18 />} type="secondary" children={word('global.view.invoice')} onClick={() => setGenerating(true)} />
                    :
                    <BlobProvider document={<InvoiceComponent order={[orderData]} companyData={companyInfo} logoUrl={companyLogo} />}>
                      {({ blob, url, loading, error }) => {
                        if (!loading && url && blob) {
                          toastId.current = addInfoToast(`Generating invoice...`, false);
                          const auth = getAuth();
                          const storage = getStorage(firebase, config.firebase.invoices);
                          const path = `${auth.currentUser?.uid}/${orderData.orderNumber}/${Math.random()}.pdf`;
                          const storageRef = ref(storage, path);
                          const uploadTask = uploadBytesResumable(storageRef, blob);

                          uploadTask.on('state_changed', async (snapshot: any) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            updateToast(toastId.current, `Generating invoice... ${Math.round(progress)}%`, 'info', false);
                          }, (err) => {
                            updateToast(toastId.current, err.message, 'error', 2000);
                          }, async () => {
                            fetch('https://previewapi-l42gl5wdwa-nw.a.run.app/createPreviewMedia',
                              {
                                method: 'POST',
                                mode: 'cors', // no-cors, *cors, same-origin
                                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                                credentials: 'same-origin', // include, *same-origin, omit
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                redirect: 'follow', // manual, *follow, error
                                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                                body: JSON.stringify({ path }) // body data type must match "Content-Type" header
                              })
                              .then(res => res.json())
                              .then((res) => {
                                if (res.error) {
                                  setGenerating(false);
                                  updateToast(toastId.current, res.error, 'error', 2000);
                                } else {
                                  setGenerating(false);
                                  updateToast(toastId.current, `Successfully generated.`, 'success', 2000);
                                  window.open(res.url, '_blank')
                                }
                              })
                              .catch((err) => {
                                setGenerating(false);
                                updateToast(toastId.current, 'Cannot load the invoice.', 'error', 2000);
                              })
                          })
                        }
                        return <MainButton icon={<ReceiptIcon18 />} type="secondary" children={word('global.view.invoice')} />
                      }}
                    </BlobProvider>
                }
                {orderData.status === 'Shipped' ?
                  <MainButton children={word('global.view.shipment')} onClick={onViewShipment} /> :
                  <MainButton children={word('global.ship')} onClick={onShip} />
                }
              </SplitInput>
            )
          }
        </FormSection>
        <FormSection showSplitter topPadding list>
          <styled.EditButtonWrapper>
            <IconButton onClick={onEdit}>
              <EditIcon18 />
            </IconButton>
          </styled.EditButtonWrapper>
          {billing && (noEmpty(billing.fullName) || noEmpty(billing.phoneNumber) || noEmpty(billing.email)) && (
            <AddressSection label={word('global.billing')}>
              {billing && billing.fullName && (<AddressSection.Field children={billing.fullName} />)}
              {billing && billing.phoneNumber && (<AddressSection.Field children={billing.phoneNumber} />)}
              {billing && billing.email && (<AddressSection.Field children={billing.email} />)}
            </AddressSection>
          )}
          {paymentMethod && (
            <AddressSection label={word('global.payment')}>
              <AddressSection.Field children={'Method: ' + paymentMethod} />
            </AddressSection>
          )}
          {billing && (noEmpty(billing.fullName) || noEmpty(billing.company) || noEmpty(billing.address1) || noEmpty(billing.address2) || noEmpty(billing.city) || noEmpty(billing.stateName) || noEmpty(billing.postcode) || noEmpty(billing.country)) && (
            <AddressSection label={word('global.billing.address')}>
              {billing && billing.fullName && (<AddressSection.Field children={billing.fullName} />)}
              {billing && billing.company && (<AddressSection.Field children={billing.company} />)}
              {billing && billing.address1 && (<AddressSection.Field children={billing.address1} />)}
              {billing && billing.address2 && (<AddressSection.Field children={billing.address2} />)}
              {billing && billing.city && (<AddressSection.Field children={billing.city} />)}
              {billing && billing.stateName && (<AddressSection.Field children={billing.stateName} />)}
              {billing && billing.postcode && (<AddressSection.Field children={billing.postcode} />)}
              {billing && billing.country && (<AddressSection.Field children={billing.country} />)}
            </AddressSection>
          )}
          <AddressSection label={word('global.shipping.address')}>
            {customer && customer.fullName && (<AddressSection.Field children={customer.fullName} />)}
            {customer && customer.company && (<AddressSection.Field children={customer.company} />)}
            {customer && customer.address1 && (<AddressSection.Field children={customer.address1} />)}
            {customer && customer.address2 && (<AddressSection.Field children={customer.address2} />)}
            {customer && customer.city && (<AddressSection.Field children={customer.city} />)}
            {customer && customer.country && (<AddressSection.Field children={customer.stateName} />)}
            {customer && customer.postcode && (<AddressSection.Field children={customer.postcode} />)}
            {customer && customer.country && (<AddressSection.Field children={customer.country} />)}
          </AddressSection>
        </FormSection>
        <FormSection title={word('global.shipping-method')} showSplitter list>
          <FormCaption caption={word('global.shipping-method')}>
            <Select />
          </FormCaption>
          <FormCaption caption={word('global.shipping-cost')}>
            <InputCustom />
          </FormCaption>
        </FormSection>
        <FormSection title={word('global.additional')} showSplitter>
          <FormCaption caption={word('global.tag')}>
            <Select />
          </FormCaption>
        </FormSection>
      </styled.BodyWrapper>
    </DisplayRound>
  );
};
