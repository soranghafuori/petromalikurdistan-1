import React from "react";
import "./BookCard.css";
import { Button } from "react-bootstrap";


export default function BookCard({url,title}) {
  return (
    <div className="book">
      <div className="book-img">
        <img src={url} alt="" />
      </div>
      <div className="book-title">
        <h3>{title}</h3>
        <Button>زانیاری زۆرتر و داگرتن</Button>
      </div>
    </div>
  );
}
