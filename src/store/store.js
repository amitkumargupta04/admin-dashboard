import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api.js';
import authReducer from './authSlice.jsx';   // ← .js add kiya

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});