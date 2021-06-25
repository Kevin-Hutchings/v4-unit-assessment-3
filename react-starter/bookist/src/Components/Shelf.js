import React from 'react';

export default function Shelf ({shelf, remove}) {
   const mappedTitles = shelf.map((el, index) => {
      return(
         <p key={index}>{el}</p>
      )
   });

   if(shelf.length === 0){
      return(
         <div>
            <h1> Your Shelf </h1>
            <h3> Click on a book cover to add it to the shelf. </h3>
         </div>
      )
   } else {
      return(
         <section className="shelf">
            <h1 > Your Shelf </h1>
            <button id="clear-shelf" className="button" onClick={() => remove()}> clear shelf </button>
            <p><b>Book titles:</b> {mappedTitles} </p>
         </section>
      )
   };
}