import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <h2>Home Page</h2>
              <BookList />
            </div>
          )}
        />
        <Route
          path="/categories"
          element={(
            <div>
              <h2>Categories</h2>
              <p>Under Construction</p>
            </div>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
