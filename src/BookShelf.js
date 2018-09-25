import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

  render() {
    //console.log("this Props", this.props.moveBook);
    return (
      <div className="list-books-content">
        {this.props.bookShelves.map( bookshelf =>
          <div key={bookshelf.name}>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelf.name}</h2>
            <div className="bookshelf-books">
            <ol  className="books-grid">
              {bookshelf.bookCollection.map(book => <Book key={book.id} book={book} moveBook={this.props.moveBook}/>)}
            </ol>
            </div>
          </div>
        </div>
        )}
      </div>
    )}
}

export default BookShelf
