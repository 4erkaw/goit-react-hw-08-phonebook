import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './contacts/contacts-reducer';
import { contactsApi } from '../service/contactsAPI';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

// import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { pokemonApi } from './services/pokemon'

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// })

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
