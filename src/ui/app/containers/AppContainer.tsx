import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider, useLocalStorage } from '../../../assets/locale';
import { ThemeContainer } from '../../../assets/theme';
import { useAuth0 } from '../../../business/auth/hooks';
import { config } from '../../../private';
import { getCompanyId, onSupport } from '../../../utils';
import { AppRoutes } from '../api';
import { useDispatch, useSelector } from 'react-redux'
import { setAuto, setCompanyData, setCompanyLogo, setFrom, setTo, switchTheme } from '../../redux/action';
import { useGrpcClient } from '../../../client/client-hook';
import { addErrorToast } from '../../toast';

export const AppContainer: React.FC = ({ children }) => {
  const { user, accessToken } = useAuth0();
  const dispatch = useDispatch();
  const getClient = useGrpcClient();
  const companyId = getCompanyId(user);
  const fromTime = useSelector((state: any) => state.theme.from);
  const toTime = useSelector((state: any) => state.theme.to);
  const auto = useSelector((state: any) => state.theme.auto);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [autoTheme, setAutoTheme] = useLocalStorage("auto", "false");
  const [from, setFromStorage] = useLocalStorage("from", "20:00");
  const [to, setToStorage] = useLocalStorage("to", "06:00");

  React.useEffect(() => {
    if (theme === "dark") {
      dispatch(switchTheme(true));
    } else {
      dispatch(switchTheme(false));
    }
    if (autoTheme === "true") {
      dispatch(setAuto(true));
    } else {
      dispatch(setAuto(false));
    }
    dispatch(setFrom(from));
    dispatch(setTo(to));
  }, [theme, autoTheme, from, to])

  React.useEffect(() => {
    var baseURL = config.hostname;
    var barcode = '';
    var interval: any;

    const handleDown = (evt: KeyboardEvent) => {
      if (interval) {
        clearInterval(interval);
      }

      if (evt.code === 'Enter') {
        if (barcode && barcode.includes('orderid')) {
          var params = barcode.split('/');
          window.location.replace(`${baseURL}${AppRoutes.Orders.Order.Index.replace(':storeId', params[1]).replace(':id', params[2])}`);
        }
        barcode = '';
        return;
      }

      if (evt.code !== 'Shift' && evt.code !== 'Escape') {
        barcode += evt.key;
      }
    }

    document.addEventListener("keydown", handleDown);

    interval = setInterval(() => {
      barcode = '';
    }, 100);

    return () => {
      window.removeEventListener("keydown", handleDown);
      clearInterval(interval);
    }
  }, [])

  React.useEffect(() => {
    if (user) {
      let key = config.auth0.namespace + '/user_metadata';
      let metaData: any = (user as any)[key];
      onSupport(user.email, metaData.firstName + ' ' + metaData.lastName, '');
    }
  }, [user]);

  React.useEffect(() => {
    if (companyId) {
      getClient()
        .then((client) => {
          client
            .getCompany({ companyId })
            .then(async (res: any) => {
              dispatch(setCompanyData(res.companyInfo));
              const rawResponse: Response = await fetch(res.companyInfo.logoUrl);
              const blob: Blob = await rawResponse.blob();
              dispatch(setCompanyLogo(URL.createObjectURL(blob)));
            })
            .catch((err) => {
              addErrorToast(err);
            })
        })
        .catch((err) => {
          addErrorToast(err);
        })
    }
  }, [companyId])

  React.useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 30000);
  }, []);

  React.useEffect(() => {
    if (auto) {
      if (fromTime < toTime) {
        if (fromTime <= getHour(currentTime) && getHour(currentTime) < toTime) {
          dispatch(switchTheme(true));
        } else {
          dispatch(switchTheme(false));
        }
      } else {
        if ((fromTime <= getHour(currentTime) && getHour(currentTime) < '24:00') || ('00:00' <= getHour(currentTime) && getHour(currentTime) < toTime)) {
          dispatch(switchTheme(true));
        } else {
          dispatch(switchTheme(false));
        }
      }
    }
  }, [currentTime, auto])

  const getHour = (date: Date) => {
    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  return (
    <LocaleProvider defaultLocale='en'>
      <ThemeContainer>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeContainer>
    </LocaleProvider>
  );
};
