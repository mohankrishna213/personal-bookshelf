import React from 'react';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search for books..."
    />
  );
};

export default SearchBar;
