import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {

  state = {
      shelvesName:["Currently Reading", "Want to Read", "Read"],
      currentlyReading: [],
      wantToRead: [],
      read: []
  }

  render() {
    return (
      <div className="list-books-content">
        <div>{/* Maybe need to remove this div part1*/}
            {this.state.shelvesName.map(shelf =>
              <div className="bookshelf" key={shelf}>
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books"></div>
                <Books />
              </div>
            )}
        </div>{/* Maybe need to remove this div part2*/}
      </div>
    )}
}

export default BookShelf
