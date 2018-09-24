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
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }

  bookShelves = [
    {name: "Currently Reading", id:"currentlyReading", bookCollection:[]},
    {name: "Want To Read", id:"wantToRead"},
    {name: "Read", id:"read"}
  ]


  componentDidMount() {
    BooksAPI.getAll().then((books) => {

      /* Filter the books between bookShelves */
      let currentlyReading = books.filter(book => book.shelf === "currentlyReading");
      let wantToRead = books.filter(book => book.shelf === "wantToRead");
      let read = books.filter(book => book.shelf === "read");

      this.bookShelves[0].bookCollection.push(currentlyReading)
      this.setState({ currentlyReading, wantToRead, read })

      })
    }




  render() {

    // console.log('bookCollection', this.state.bookCollection)
    console.log('somebooks', this.bookShelves[0].bookCollection); // it shows the inside of the bookco

    return (
      <div className="app">
        {/*  State 1  */}
        <div className="list-books">
        <Header />
        <BookShelf bookShelves={this.bookShelves} currentlyReading={this.state.currentlyReading} wantToRead={this.state.wantToRead} read={this.state.read}/>
        </div>
      </div>
    )}
}

export default BooksApp
