// src/redux/categories/categoriesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], // Initial state: empty array
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: () => 'Under construction', // Remove line break
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
