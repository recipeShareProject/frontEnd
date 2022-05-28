import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import postReducer from 'redux/slices/postSlice';
import tagReducer from 'redux/slices/tagSlice';
import imgReducer from 'redux/slices/imgSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['img'],
};

const rootReducer = combineReducers({
  post: postReducer,
  tag: tagReducer,
  img: imgReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // }),
    }).concat(logger),
});
export const persistor = persistStore(store);
export default store;
