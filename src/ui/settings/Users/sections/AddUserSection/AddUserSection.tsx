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
import * as styled from './AddUserSection.styled';
import { useHistory } from 'react-router-dom';

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

export const AddUserSection: React.VFC<Props> = ({ onClose }) => {
  const { word } = useLocale();
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useUserClient();
  const toastId = useRef<any>(null);
  const { goBack } = useHistory();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState<SelectProps[]>([]);
  const [timezoneList, setTimezoneList] = useState<SelectProps[]>([]);
  const [role, setRole] = useState<SelectProps[]>([]);

  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
  }, [timezones])

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
    if (password.length === 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false)
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
      password.length === 0 ||
      role.length === 0 ||
      timezone.length === 0 ||
      !validateEmail(email)
    ) {
      return;
    }

    toastId.current = addInfoToast('Adding user', false);
    getClient()
      .then((client) => {
        client
          .addUser({
            companyId: companyId,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            timeZone: timezone[0].value,
            role: role[0].value,
            isOwner: false
          })
          .then((res) => {
            updateToast(toastId.current, 'Successfully added', 'success', 5000);
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
      title={word('global.add.user')}
      footer={<MainButton children={word('global.add')} onClick={onSave} />}
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
            <FormCaption caption={word('global.password')}>
              <InputPassword value={password} onChange={setPassword} error={passwordError} />
            </FormCaption>
          </SplitInput>
          <FormCaption caption={word('global.role')}>
            <Select
              placeholder='Select role'
              selectedValues={role}
              values={roleList}
              onSelectedChanged={(e) => setRole(e)}
              error={roleError}
            />
          </FormCaption>
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
