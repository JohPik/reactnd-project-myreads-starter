import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Book from './Book'
import BookShelf from './BookShelf'
import MyBook from './MyBooks'
import BookSearch from './BookSearch'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books:[],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>
    this.setState(
      {books:books}
    ))
  }

  render() {
    return (
      <div className="app">
        {/*  State 1  */}
        <div className="list-books">
          <Header />

          <Book books={this.state.books}/>
          {/*<BookShelf />*/}
        </div>
      </div>
    )}
}

export default BooksApp
