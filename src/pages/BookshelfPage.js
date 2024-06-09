import React from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        <Bookshelf bookshelf={bookshelf} />
      </div>
    </div>
  );
};

export default BookshelfPage;
