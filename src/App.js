import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Book Search</Link>
          <button><Link to="/bookshelf">My Bookshelf</Link></button>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BookSearchPage onAddToBookshelf={addToBookshelf} />}
          />
          <Route
            path="/bookshelf"
            element={<BookshelfPage bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
