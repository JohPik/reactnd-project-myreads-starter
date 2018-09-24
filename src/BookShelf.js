import React, { Component } from 'react'
import BookList from './BookList'




class BookShelf extends Component {

// this is a function and it works
  filterBooks() {
    let bookNum1 = "bbay"
    let bookNum2 = "Hecato"
    let bookNum3 = "ffjdkjfdjf"
    let bookNum4 = this.props
    console.log(`this is ${bookNum1} fron ${bookNum2} going to  ${bookNum4}!!!`)
  }



  render() {


    this.filterBooks()
    console.log("filterBooks", this.filterBooks)
    console.log("bookShelProps", this.props)
    //console.log("bookshelves", this.props.bookShelves)



    return (
          <div className="list-books-content">
          {this.props.bookShelves.map( bookshelf =>
            <div key={bookshelf.name}>
              <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf.name}</h2>
              <div className="bookshelf-books">
                {/*<BookList books={this.props} bookshelf={bookshelf.name}/> */}
                <p>Hello</p>
              </div>
            </div>
          </div>
          )}
          </div>
    )}
}

export default BookShelf
