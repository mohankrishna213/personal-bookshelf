import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const BookSearchPage = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => setResults(data.docs))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="book-search-page">
      <SearchBar query={query} onQueryChange={setQuery} />
      <div className="search-results">
        {results.map((book, index) => (
          <BookCard key={index} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
