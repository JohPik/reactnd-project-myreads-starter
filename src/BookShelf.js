import React from 'react'
import Book from './Book'

function BookShelf(props){
  return(
    <div className="list-books-content">
      {props.bookShelves.map( bookshelf =>
        <div key={bookshelf.name}>
          <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelf.name}</h2>
          <div className="bookshelf-books">
          <ol  className="books-grid">
            {bookshelf.bookCollection.map(book => <Book key={book.id} book={book} moveBook={props.moveBook}/>)}
          </ol>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default BookShelf
