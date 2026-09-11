import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';
import { favoritesReducer } from './favorites/slice';

const favoritesPersistConfig = {
  key: 'traveltrucks-favorites',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
