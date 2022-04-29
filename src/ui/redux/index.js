import { combineReducers } from 'redux';
import { companyReducer, themeReducer } from './reducer';

export default combineReducers({
    theme: themeReducer,
    company: companyReducer
  });
  