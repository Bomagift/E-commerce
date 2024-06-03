// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../Features/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;