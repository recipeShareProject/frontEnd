import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import reducers from '../reducers';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    const {logger} = require('redux-logger');
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], //TODO : localstorage 에 저장할 state
};
const persistedReducer = persistReducer(persistConfig, reducers(history));

function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([routeMiddleware, thunk.withExtraArgument(history)]),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}
export default configureStore;
export {history};
