import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList'; // Import your components
import BookForm from './components/BookForm';
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
              {/* Define your home page content here */}
              <h2>Home Page</h2>
              <BookList />
            </div>
          )}
        />
        <Route
          path="/categories"
          element={(
            <div>
              {/* Define your categories page content here */}
              <h2>Categories Page</h2>
              <BookForm />
            </div>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
