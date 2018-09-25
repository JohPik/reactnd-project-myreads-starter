import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

  // The Book Shelves and their Collection of Books
  bookShelves = [
    {name: "Currently Reading", id:"currentlyReading", bookCollection:[]},
    {name: "Want To Read", id:"wantToRead", bookCollection:[]},
    {name: "Read", id:"read", bookCollection:[]}
  ]

  // Filter The Books
  filterBooks() {
    let currentlyReading = this.props.allBooks.filter(book => book.shelf === "currentlyReading");
    let wantToRead = this.props.allBooks.filter(book => book.shelf === "wantToRead");
    let read = this.props.allBooks.filter(book => book.shelf === "read");

    // this.bookShelves[0].bookCollection.push(currentlyReading)
    // this.bookShelves[1].bookCollection.push(wantToRead)
    // this.bookShelves[2].bookCollection.push(read)
    // this.setState({ currentlyReading, wantToRead, read })

    this.bookShelves[0].bookCollection = currentlyReading
    this.bookShelves[1].bookCollection = wantToRead
    this.bookShelves[2].bookCollection = read

    // console.log("currentlyReading", currentlyReading)
  }




  render() {

    // Call the Filter functions
    this.filterBooks()

    // console.log("bookShelProps", this.props)
    // console.log("bookShelProps AllBooks", this.props.allBooks)
    // console.log("bookshelves", this.bookShelves)
    // console.log("currentlyReading Collection", this.bookShelves[0].bookCollection);
    // console.log("wantToRead Collection", this.bookShelves[1].bookCollection);
    // console.log("read Collection", this.bookShelves[2].bookCollection);

    return (
          <div className="list-books-content">
          {this.bookShelves.map( bookshelf =>
            <div key={bookshelf.name}>
              <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf.name}</h2>
              <div className="bookshelf-books">
              {/* <BookList bookshelves={this.bookShelves}/> */}
              <ol  className="books-grid">
                {bookshelf.bookCollection.map(book => <Book key={book.id} book={book}/>)}
              </ol>
              </div>
            </div>
          </div>
          )}
          </div>
    )}
}

export default BookShelf
