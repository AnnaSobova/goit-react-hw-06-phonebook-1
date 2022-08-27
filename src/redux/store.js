import { configureStore } from '@reduxjs/toolkit';
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
import { contactsSlice } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['items'],
};

const contacsPersistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: contacsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// >>>>>>>>>>>>>>>>>>>> Варіант на createAction та createReducer <<<<<<<<<<<<<<<<<<<<<<<<<<

// export const addContact = createAction('contacts/addContact');
// export const removeContact = createAction('contacts/removeContact');
// export const filterContacts = createAction('filter/filterContacts');

// const filterReducer = createReducer('', {
//   [filterContacts]: (state, action) => {
//     return action.payload;
//   },
// });

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [removeContact]: (state, action) => {
//     return state.filter(item => item.id !== action.payload);
//   },
// });
