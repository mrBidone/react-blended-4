import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todosSlice';

import storage from 'redux-persist/lib/storage';
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
import { filterReducer } from './filter/filterSlice';

const todosConfig = {
  key: 'todos',
  storage,
};

export const store = configureStore({
  reducer: {
    todos: persistReducer(todosConfig, todosReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
