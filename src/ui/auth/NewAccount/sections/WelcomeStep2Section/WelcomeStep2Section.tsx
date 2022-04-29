import { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocale } from '../../../../../assets/locale';

import { AppRoutes } from '../../../../app/api';

import { FormCaption } from '../../../../@core/modules/Container';
import { Select } from '../../../../@core/modules/Select';
import { WelcomeModal } from '../../components/WelcomeModal';
import { MainButton } from '../../../../@core/modules/Button';
import { Modal } from '../../../../@core/modules/Modal';

import * as styled from './WelcomeStep2Section.styled';
import * as welcomeStyled from '../WelcomeSection/WelcomeSection.styled';
import { useGrpcClient } from '../../../../../client/client-hook';
import { addErrorToast, addSuccessToast } from '../../../../toast';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { getCompanyId } from '../../../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyData } from '../../../../redux/action';

type Props = {
  onClose: () => void;
};

type SelectProps = {
  label: string,
  value: string
}

const weightUnits = [
  {
    label: 'Grams (g)',
    value: 'g'
  }, {
    label: 'Kilograms (kg)',
    value: 'kg'
  }, {
    label: 'Pounds (lb)',
    value: 'lb'
  }, {
    label: 'Ounces (oz)',
    value: 'oz'
  }
];

const dimensionUnits = [
  {
    label: 'Centimeters (cm)',
    value: 'cm'
  }, {
    label: 'Inches (inch)',
    value: 'inch'
  }
]

const currencies = [
  {
    label: 'US Dollar ($)',
    value: 'USD'
  }, {
    label: 'Great British Pounds (£)',
    value: 'GBP'
  }, {
    label: 'Euros (€)',
    value: 'EUR'
  }
]

export const WelcomeStep2Section: React.FC<Props> = ({ onClose }) => {
  const { push, goBack } = useHistory();
  const { word } = useLocale();
  const location = useLocation();
  const { user } = useAuth0();
  const getclient = useGrpcClient();
  const dispatch = useDispatch();
  const companyData = useSelector((state: any) => state.company.company);

  const [selectedWeightUnit, setSelectedWeightUnit] = useState<SelectProps[]>([weightUnits[0]]);
  const [selectedDimensionUnit, setSelectedDimensionUnit] = useState<SelectProps[]>([dimensionUnits[0]]);
  const [selectedCurrency, setSelectedCurrency] = useState<SelectProps[]>([currencies[0]]);

  const onNext = () => {
    if (selectedCurrency.length === 0 || selectedDimensionUnit.length === 0 || selectedWeightUnit.length === 0) {
      addErrorToast('Please select all units');
      return;
    }
    getclient()
      .then(client => {
        const requestData = {
          companyId: getCompanyId(user),
          companyInfo: {
            defaultCurrency: selectedCurrency[0].value,
            weightUnit: selectedWeightUnit[0].value,
            dimensionUnit: selectedDimensionUnit[0].value,
          }
        }
        client
          .editCompany(requestData)
          .then(res => {
            addSuccessToast('Successfully updated');
            dispatch(setCompanyData({
              ...companyData,
              defaultCurrency: selectedCurrency[0].value,
              weightUnit: selectedWeightUnit[0].value,
              dimensionUnit: selectedDimensionUnit[0].value
            }))
            push(AppRoutes.Auth.Welcome.Step3, location.state)
          })
          .catch(err => {
            addErrorToast(err.message);
          })
      })
      .catch(err => {
        addErrorToast(err.message);
      })
  }

  return (
    <WelcomeModal
      title={word('welcome.step-2.set-default-unit')}
      onClose={onClose}
      footer={
        <>
          <Modal.SecondaryButton children={word('global.back')} onClick={goBack} />
          <MainButton children={word('global.continue')} onClick={onNext} />
        </>
      }
    >
      <styled.BodyWrapper>
        <welcomeStyled.Description children={word('welcome.step-2.this-will-default-unit')} />
        <styled.FormList>
          <FormCaption caption={word('global.weight.unit')}>
            <Select values={weightUnits} defaultValues={selectedWeightUnit} selectedValues={selectedWeightUnit} onSelectedChanged={setSelectedWeightUnit} />
          </FormCaption>
          <FormCaption caption={word('global.dimension.unit')}>
            <Select values={dimensionUnits} defaultValues={selectedDimensionUnit} selectedValues={selectedDimensionUnit} onSelectedChanged={setSelectedDimensionUnit} />
          </FormCaption>
          <FormCaption caption={word('global.currency.code')}>
            <Select values={currencies} defaultValues={selectedCurrency} selectedValues={selectedCurrency} onSelectedChanged={setSelectedCurrency} />
          </FormCaption>
        </styled.FormList>
      </styled.BodyWrapper>
    </WelcomeModal>
  );
};
