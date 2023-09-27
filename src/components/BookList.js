// src/components/BookList.js

import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            <br />
            {' '}
            {/* Add a line break here */}
            by
            {' '}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
