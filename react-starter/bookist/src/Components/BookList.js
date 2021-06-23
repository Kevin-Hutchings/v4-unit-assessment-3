import React from 'react';

export default function BookList ({books}){
   // const {id, title, author, img} = books;

   const mappedBooks = books.map((book, index) => {
      return(
      <div>
         <img key={index} src={book.img} alt="book cover"/>
         <h3 key={index}>{book.title} By {book.author}</h3>
      </div>

      )
   });

   return(
      <div> {mappedBooks} </div>
   )
}

