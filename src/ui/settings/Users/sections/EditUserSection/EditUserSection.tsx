import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../../../../assets/locale';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useUserClient } from '../../../../../client/client-hook';
import { getCompanyId, validateEmail } from '../../../../../utils';

import { MainButton } from '../../../../@core/modules/Button';
import { FormCaption } from '../../../../@core/modules/Container';
import { FormSection, SplitInput } from '../../../../@core/modules/FormBuilder';
import { InputCustom, InputPassword } from '../../../../@core/modules/Input';
import { Modal } from '../../../../@core/modules/Modal';
import { Select } from '../../../../@core/modules/Select';
import timezones from 'timezones-list';
import { addErrorToast, addInfoToast, updateToast } from '../../../../toast';
import * as styled from './EditUserSection.styled';
import { useHistory, useLocation, useParams } from 'react-router-dom';

type Props = { onClose: () => void };

const roleList = [
  {
    label: 'Account Owner',
    value: 'rol_r4l8ECLOFvA7EvQt'
  }, {
    label: 'Warehouse Manager',
    value: 'rol_prmNyNNxFNzB77az'
  }, {
    label: 'Picker & Packer',
    value: 'rol_xGQiD3tkLdXBSXnS'
  }
]

type SelectProps = {
  label: string;
  value: string;
}

type ParamProps = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  timeZone: string;
  role: {
    id: string;
    name: string
  },
  status: boolean;
}

export const EditUserSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useUserClient();
  const toastId = useRef<any>(null);
  const { goBack } = useHistory();
  const { state } = useLocation();
  const userData = state as ParamProps;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timezone, setTimezone] = useState<SelectProps[]>([]);
  const [timezoneList, setTimezoneList] = useState<SelectProps[]>([]);
  const [role, setRole] = useState<SelectProps[]>([]);

  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [timezoneError, setTimezoneError] = useState(false);

  useEffect(() => {
    let newList: SelectProps[] = [];
    for (let i = 0; i < timezones.length; i++) {
      newList.push({
        label: timezones[i].label,
        value: timezones[i].tzCode
      })
    }
    setTimezoneList(newList);

    if (userData) {
      setEmail(userData.email);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setTimezone([{
        value: timezones.filter(item => item.tzCode === userData.timeZone)[0].label,
        label: timezones.filter(item => item.tzCode === userData.timeZone)[0].tzCode
      }])
      setRole([{
        value: userData.role.id,
        label: userData.role.name
      }])
    }
  }, [timezones, userData])

  const onSave = () => {
    if (email.length === 0) {
      setEmailError(true);
    } else {
      if (!validateEmail(email)) {
        addErrorToast('Invalid email.')
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (firstName.length === 0) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false)
    }
    if (lastName.length === 0) {
      setLastNameError(true);
    } else {
      setLastNameError(false)
    }
    if (role.length === 0) {
      setRoleError(true);
    } else {
      setRoleError(false)
    }
    if (timezone.length === 0) {
      setTimezoneError(true);
    } else {
      setTimezoneError(false)
    }

    if (
      email.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      role.length === 0 ||
      timezone.length === 0 ||
      !validateEmail(email)
    ) {
      return;
    }

    toastId.current = addInfoToast('Updating user', false);
    getClient()
      .then((client) => {
        client
          .editUser({
            userId: userData.id,
            companyId: companyId,
            email: email,
            firstName: firstName,
            lastName: lastName,
            timeZone: timezone[0].value,
            role: role[0].value
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully updated', 'success', 5000);
            goBack();
          })
          .catch((err) => {
            updateToast(toastId.current, err.message, 'error', 5000);
          })
      })
      .catch((err) => {
        updateToast(toastId.current, err.message, 'error', 5000);
      })
  }

  return (
    <Modal
      visible
      onClose={onClose}
      width={640}
      height={520}
      title={word('global.edit.user')}
      footer={<MainButton children={word('global.update')} onClick={onSave} />}
    >
      <styled.BodyWrapper>
        <FormSection list>
          <SplitInput>
            <FormCaption caption={word('global.first-name')}>
              <InputCustom value={firstName} onChange={setFirstName} error={firstNameError} />
            </FormCaption>
            <FormCaption caption={word('global.last-name')}>
              <InputCustom value={lastName} onChange={setLastName} error={lastNameError} />
            </FormCaption>
          </SplitInput>
          <SplitInput>
            <FormCaption caption={word('global.email')}>
              <InputCustom value={email} onChange={setEmail} error={emailError} />
            </FormCaption>
            <FormCaption caption={word('global.role')}>
              <Select
                placeholder='Select role'
                selectedValues={role}
                values={roleList}
                onSelectedChanged={(e) => setRole(e)}
                error={roleError}
              />
            </FormCaption>
          </SplitInput>

        </FormSection>
        <FormSection title={word('global.additional')} list>
          <FormCaption caption={word('global.timezone')}>
            <Select
              placeholder='Select timezone'
              selectedValues={timezone}
              values={timezoneList}
              onSelectedChanged={(e) => setTimezone(e)}
              error={timezoneError}
              position="top"
            />
          </FormCaption>
        </FormSection>
      </styled.BodyWrapper>
    </Modal>
  );
};
