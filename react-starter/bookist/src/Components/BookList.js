import React from 'react';

export default function BookList ({books, addBook}){
   const mappedBooks = books.map((book, index) => {
      return(
      <div className="books">
         <img 
            id="book-covers" 
            onClick={() => addBook(book.title)} 
            key={index} 
            src={book.img} 
            alt="book covers"
         />
         <h3 key={index}> {book.title} By {book.author} </h3>
      </div>
      )
   });

   return(
      <div className="book-section"> {mappedBooks} </div>
   );
}