import React, { Component } from 'react'

class MyBooks extends Component {
  state = {
    MyBooks: [
      {currentlyReading: []},
      {wantToRead: []},
      {read: []}
    ]
  }
  render() {
    return <p>Hello MyBooks</p>
    }
}

export default MyBooks
