// src/components/YourComponent.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import './YourComponent.css'; // Import the CSS file

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

  const handleRemoveBook = () => {
    // Replace 'item1' with the actual ID of the book you want to remove
    dispatch(removeBook('item1'));
  };

  return (
    <div className="your-component-container">
      <button type="button" onClick={handleAddBook} className="add-button">
        Add Book
      </button>
      <button
        type="button"
        onClick={handleRemoveBook}
        className="remove-button"
      >
        Remove Book
      </button>
    </div>
  );
};

export default YourComponent;
