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
    bookCollection: [], // not necessary
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }

  bookShelves = [
    {name: "Currently Reading", id:"currentlyReading"},
    {name: "Want To Read", id:"wantToRead"},
    {name: "Read", id:"read"}
  ]


  componentDidMount() {
    BooksAPI.getAll().then((books) => {

      let currentlyReading = []
      let wantToRead = []
      let read = []

          books.map(book => {
            

            // if (book.shelf === "currentlyReading") {
            //   currentlyReading.push(book)
            //   this.setState({ currentlyReading })
            // } else if (book.shelf === "wantToRead"){
              // wantToRead.push(book)
              // this.setState({ wantToRead })
            // } else {
            //   read.push(book)
            //   this.setState({ read })
            // }

            //Assign the books to their right let
            switch (book.shelf) {
              case "currentlyReading" :
                currentlyReading.push(book)
              break;
              case "wantToRead" :
                wantToRead.push(book)
              break;
              case "read" :
                read.push(book)
              break;
            }

            //Assign the books to the State
            this.setState({
              currentlyReading,
              wantToRead,
              read })
          })

    })
  }


  render() {

    // console.log('bookCollection', this.state.bookCollection)

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
