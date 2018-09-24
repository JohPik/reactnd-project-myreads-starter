return (
  {this.props.books.map(book =>
<li key={book.id}>
   <div className="book">
     <div className="book-top">
       <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
       <div className="book-shelf-changer">
         <select>
           <option value="move" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
         </select>
       </div>
     </div>
     <div className="book-title">{book.title}</div>
     <div className="book-authors">{book.authors}</div>
   </div>
</li>
)}
)


{book.shelf === "currentlyReading" ? 'msg' : null}


/** Ned this to render books **/

<li key={book.id}>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-title">{book.shelf}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
</li>