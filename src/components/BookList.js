import React from 'react';
import Book from './Book';

function BookList() {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author A' },
    { id: 2, title: 'Book 2', author: 'Author B' },
    // Add more books here
  ];

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default BookList;
