import React from 'react'
import './Users.css'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

export default function Users() {
  return (
    <div className='users'>
      <div className='users-box'>

        <div className='user-box'>
          <img src="" alt="" />
          <h3>soran ghafoori</h3>
          <p> ئەندازیاری نەوت </p>
          <div>
            <p>ماستەری نەوتی زانکۆی تاران</p>
            <p>نووسەری کتێبی نەوت لە کوێوە هاتوووه </p>
            <p>دامەزراوی پاڵاوگەی تیشک</p>
          </div>
          <hr />
          <div>
            <TiSocialLinkedinCircular />
          </div>
        </div>

        <div className='user-box'>
          <img src="" alt="" />
          <h3>soran ghafoori</h3>
          <p> ئەندازیاری نەوت </p>
          <div>
            <p>ماستەری نەوتی زانکۆی تاران</p>
            <p>نووسەری کتێبی نەوت لە کوێوە هاتوووه </p>
            <p>دامەزراوی پاڵاوگەی تیشک</p>
          </div>
          <hr />
          <div>
            icon
          </div>
        </div>

      </div>
    </div>
  )
}
