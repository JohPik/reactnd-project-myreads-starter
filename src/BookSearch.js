import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {
  state = {
    query: '' //Contains the query from input field
  }

  //Update query when input field changes and
  updateQuery = (query) => {
    this.setState({query})
    }

  //Trigers updateQuery() and searchBooks
  searchManage = (query) => {
    this.updateQuery(query)
    this.props.searchBooks(query.trim())
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={this.props.resetSearch}>Close</Link>
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
            {this.props.searchResult.length > 0 && (
                this.props.searchResult.map(book => <Book key={book.id} book={book} moveBook={this.props.moveBook}/>)
            )}
          </ol>
        </div>
      </div>

    )}
  }

export default BookSearch
