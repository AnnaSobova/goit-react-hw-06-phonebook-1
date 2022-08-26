import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
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

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const filterContacts = createAction('filter/filterContacts');

const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => {
    return action.payload;
  },
});

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

const contacsPersistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contacsPersistedReducer,
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
