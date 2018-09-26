import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    allBooks: [],
    showSearchPage: false
  }

    // The Book Shelves and their Collection of Books
    bookShelves = [
      {name: "Currently Reading", id:"currentlyReading", bookCollection:[]},
      {name: "Want To Read", id:"wantToRead", bookCollection:[]},
      {name: "Read", id:"read", bookCollection:[]}
    ]

    // Filter The Books
    filterBooks() {
      let currentlyReading = this.state.allBooks.filter(book => book.shelf === "currentlyReading");
      let wantToRead = this.state.allBooks.filter(book => book.shelf === "wantToRead");
      let read = this.state.allBooks.filter(book => book.shelf === "read");

      this.bookShelves[0].bookCollection = currentlyReading
      this.bookShelves[1].bookCollection = wantToRead
      this.bookShelves[2].bookCollection = read

    }

    // call for All the Books currently in the App
    getAllBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books })
      })
    }

  // Make the API has been called
  componentDidMount() {
    this.getAllBooks()
    }

  // Change the book from one Shelf to another
  moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.getAllBooks())
      }

  render() {
    //Filters the book before Rendering
    this.filterBooks()

    return (
      <div className="app">
        {/*  State 1  */}
        <div className="list-books">
          <Header />
          <BookShelf bookShelves={this.bookShelves} moveBook={this.moveBook}/>
        </div>
      </div>
    )}
}

export default BooksApp
