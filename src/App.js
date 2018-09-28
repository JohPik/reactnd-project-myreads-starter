import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'


class BooksApp extends React.Component {
  state = {
    allBooks: [], //Contains all the Books currently in Shelves
    searchResult: [] //Contains all the Books in Search Results
  }

    // The Book Shelves and their Collection of Books
    bookShelves = [
      {name: "Currently Reading", id:"currentlyReading", bookCollection:[]},
      {name: "Want To Read", id:"wantToRead", bookCollection:[]},
      {name: "Read", id:"read", bookCollection:[]}
    ]

    // Filter The Books from allBooks to the bookCollections of BookShelves
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

  // Search for new books
  searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ searchResult: books })
      // console.log("books", books)
      //console.log("searchResult", this.state.searchResult)
    })
  }


  render() {
    //Filters the book before Rendering
    this.filterBooks()

    return (
      <div className="app">
        {/*  The Book Shelves  */}
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header />
            <BookShelf bookShelves={this.bookShelves} moveBook={this.moveBook}/>
              <div className="open-search">
                <Link to="/searchBooks" className="add-book">Add a book</Link>
              </div>
          </div>
        )}/>

      {/* The Search */}
        <Route path="/searchBooks" render={() => (
            <BookSearch searchBooks={this.searchBooks} searchResult={this.state.searchResult} moveBook={this.moveBook}/>
            )}/>
      </div>
    )}
}

export default BooksApp
