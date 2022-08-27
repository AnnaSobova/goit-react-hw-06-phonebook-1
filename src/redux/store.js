import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';
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

const contactsSlice = createSlice({
  name: 'contacs',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;

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
