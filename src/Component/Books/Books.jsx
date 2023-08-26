import React from 'react'
import './Books.css'
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import BookCard from '../BookCard/BookCard';
import {FiMenu} from 'react-icons/fi'

export default function Books() {
  const books=[{urlImg:'/z.jpg' , title:'petroMk'},{urlImg:'/c.jpg' , title:'petroMk'},{urlImg:'/v.jpg' , title:'petroMk'},]
  function hidehefer(){
    document.getElementById('books').classList.toggle('show-header')
  }
  return (
    <div className="books" id='books'>
      <FiMenu className="main-page-menu" onClick={()=>hidehefer()}/>
      <div className="books-box">
        <div className="books-box-left">
          <h1>کتێبەکان</h1>
          <Form.Select
            style={{ marginTop: "2rem", width: "60%" }}
            aria-label="Default select example"
          >
            <option> بابەتی کتێبەکان </option>
            <option value="1">هەڵکۆڵین</option>
            <option value="2">پاڵاوگە</option>
            <option value="3">نەوت و کیمیا</option>
          </Form.Select>
        </div>
        <div className="books-box-right">
          {books.map((book)=>(
            <BookCard url={book.urlImg} title={book.title}/>
          ))}
        </div>
      </div>
    </div>
  )
}
