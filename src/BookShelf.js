import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
  <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <Book books={this.state.books}/>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <Book books={this.state.books}/>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <Book books={this.state.books}/>
        </div>
      </div>

    </div>
  </div>
    )}
}

export default BookShelf
