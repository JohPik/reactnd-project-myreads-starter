import React, { Component } from 'react'

class Book extends Component {

      render() {
        // console.log("Bookprops", this.props)
        // console.log("Bookprops LIST", this.props.list)

        return(
          <li key={this.props.id}>
               <div className="book">
                 <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.list.imageLinks.smallThumbnail}")` }}></div>
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
                 <div className="book-title">{this.props.list.title}</div>
                 <div className="book-authors">{this.props.list.authors}</div>
               </div>
            </li>
        )
      }
  }


export default Book
