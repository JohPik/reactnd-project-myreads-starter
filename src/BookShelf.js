import React, { Component } from 'react'

class BookShelf extends Component {
  render() {
    return (
  <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>this is going to be my first shelf</li>
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>this is going to be my second shelf</li>
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>this is going to be my third shelf</li>
          </ol>
        </div>
      </div>

    </div>
  </div>
    )}
}

export default BookShelf
