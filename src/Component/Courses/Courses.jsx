import React from "react";
import Form from "react-bootstrap/Form";
import "./Courses.css";
export default function Courses() {
  return (
    <div className="courses">
      <div className="courses-box">
        <div className="courses-box-left">
          <h1>کۆرسەکانی فێرکاری</h1>
          <Form.Select style={{marginTop:'2rem', width:'60%'}} aria-label="Default select example">
            <option> بابەتی کۆرسەکان </option>
            <option value="1">هەڵکۆڵین</option>
            <option value="2">پاڵاوگە</option>
            <option value="3">نەوت و کیمیا</option>
          </Form.Select>
        </div>
        <div className="courses-box-right">
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
          <div className="qwer"></div>
        </div>
      </div>
    </div>
  );
}
