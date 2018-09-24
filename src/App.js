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

  bookShelves = [
    {name: "Currently Reading", id:"currentlyReading", bookCollection:[]},
    {name: "Want To Read", id:"wantToRead", bookCollection:[]},
    {name: "Read", id:"read", bookCollection:[]}
  ]


  componentDidMount() { // call for All the Books currently in the App
    BooksAPI.getAll().then((books) => {

      /* Filter the books between bookShelves */
      let currentlyReading = books.filter(book => book.shelf === "currentlyReading");
      let wantToRead = books.filter(book => book.shelf === "wantToRead");
      let read = books.filter(book => book.shelf === "read");

      this.bookShelves[0].bookCollection.push(currentlyReading)
      this.bookShelves[1].bookCollection.push(wantToRead)
      this.bookShelves[2].bookCollection.push(read)

      this.setState({ currentlyReading, wantToRead, read })

      })
    }




  render() {

    // console.log('bookCollection', this.state.bookCollection)
    console.log('bookShelve1', this.bookShelves[0].bookCollection); // it shows the inside of the bookco
    console.log('bookShelve2', this.bookShelves[1].bookCollection);
    console.log('bookShelve3', this.bookShelves[2].bookCollection);

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
