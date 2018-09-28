import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {
  state = {
    query: '',
    searchResult: []
  }

  searchManage = (query) => {
    this.updateQuery(query)
    this.props.searchBooks(query)
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    console.log(this.state.query)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.searchManage(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResult.map(book => <Book key={book.id} book={book} moveBook={this.props.moveBook}/>)}
          </ol>
        </div>
      </div>

    )}
  }

export default BookSearch
