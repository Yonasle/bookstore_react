// src/components/YourComponent.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const YourComponent = () => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4', // Replace with a unique ID generation logic
      title: 'New Book',
      author: 'Author Name',
      category: 'Fiction', // Replace with the actual category
    };

    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {/* Your component content */}
      <button type="button" onClick={handleAddBook}>Add Book</button>
      <button type="button" onClick={() => handleRemoveBook('item1')}>Remove Book</button>
      {/* Replace 'item1' with the actual ID of the book you want to remove */}
    </div>
  );
};

export default YourComponent;
