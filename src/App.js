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

  // call for All the Books currently in the App
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
      })
    }

  render() {
    // console.log('bookCollection', this.state.bookCollection)
    // console.log('bookShelve1', this.bookShelves[0].bookCollection)
    // console.log('bookShelve2', this.bookShelves[1].bookCollection)
    // console.log('bookShelve3', this.bookShelves[2].bookCollection)
    return (
      <div className="app">
        {/*  State 1  */}
        <div className="list-books">
        <Header />
        <BookShelf allBooks={this.state.allBooks} />
        </div>
      </div>
    )}
}

export default BooksApp
