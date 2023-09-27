// src/redux/books/booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], // Initial state: empty array
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Add a book to the array
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      // Remove a book by its ID
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
