import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
    render() {
      //console.log("BookListprops", this.props)
      // console.log("currentlyReading", this.props.books.currentlyReading)

      if (this.props.bookshelf === "Currently Reading") {
        return (
          <ol  className="books-grid">
            {this.props.books.currentlyReading.map(book =>
            <Book key={book.id} list={book}/>
            )}
          </ol>
          )
      } else if (this.props.bookshelf === "Want To Read") {
        return (
          <ol className="books-grid">
            {this.props.books.wantToRead.map(book =>
              <Book key={book.id} list={book}/>
            )}
          </ol>
          )
      } else {
        return (
          <ol className="books-grid">
            {this.props.books.read.map(book =>
              <Book key={book.id} list={book}/>
            )}
          </ol>
          )
      }

    }
}

export default BookList
