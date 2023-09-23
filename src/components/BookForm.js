import React, { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., add the book to the list)
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title" // Associate with the label using 'htmlFor'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            id="author" // Associate with the label using 'htmlFor'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
