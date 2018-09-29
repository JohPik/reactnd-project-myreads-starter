// line 55 App v1
searchBooks = (query) => {
  BooksAPI.search(query).then((books) => {
    this.setState({ searchResult: books })
  })
}

// line 55 App v2
searchBooks = (query) => {
  if (query.length === 0) {
    this.setState({ searchResult: '' })
    console.log("Search Result NOTHING", this.state.searchResult);
  } else {
    BooksAPI.search(query).then((books) => {
      this.setState({ searchResult: books })
      console.log("Search Result SOMETHING", this.state.searchResult);
    })
  }
}


// line 37 BookSearch v1
{this.props.searchResult.map(book => <Book key={book.id} book={book} moveBook={this.props.moveBook}/>)}

// line 37 BookSearch v2
{this.props.searchResult.length > 0 ?
  this.props.searchResult.map(book => <Book key={book.id} book={book} moveBook={this.props.moveBook}/>)
  : null
}
