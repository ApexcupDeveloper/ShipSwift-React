import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";

// import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [thunk];


// Middleware: Redux Persist Persisted Reducer
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    }) : compose;


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


// Exports
export { store };
