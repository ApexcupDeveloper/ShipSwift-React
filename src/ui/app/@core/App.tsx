import React from 'react';
import { AppContainer } from '../containers/AppContainer';
import { AuthContainer } from '../containers/AuthContainer';
import { RouterView } from '../views/RouterView';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const App: React.VFC = () => {
  return (
    <Provider store={store}>
      <AuthContainer>
        <AppContainer>
          <RouterView />
          <ToastContainer closeButton={true} hideProgressBar={true} position="bottom-right" transition={Slide} />
        </AppContainer>
      </AuthContainer>
    </Provider>
  );
};
