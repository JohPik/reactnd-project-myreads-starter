import React, { Component } from 'react'
import BookList from './BookList'

class BookShelf extends Component {
  render() {

    //console.log("bookShelProps", this.props)
    //console.log("bookshelves", this.props.bookShelves)



    return (
          <div className="list-books-content">
          {this.props.bookShelves.map( bookshelf =>
            <div key={bookshelf.name}>
              <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf.name}</h2>
              <div className="bookshelf-books">
                <BookList books={this.props} bookshelf={bookshelf.name}/>
              </div>
            </div>
          </div>
          )}
          </div>
    )}
}

export default BookShelf
