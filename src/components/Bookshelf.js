import React from 'react';

const Bookshelf = ({ bookshelf }) => {
  return (
    <>
      {bookshelf.map((book, index) => (
        <div key={index} className="bookshelf-book">
          <h3>{book.title}</h3>
          <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))}
    </>
  );
};

export default Bookshelf;
