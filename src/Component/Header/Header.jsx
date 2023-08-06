import React from 'react'
import './Header.css'
import {TbLogin} from 'react-icons/tb'
import {MdOutlineShoppingCart} from 'react-icons/md'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <button>چوونه ژوورەوە<TbLogin className='header-left-icon'/></button>
            <button><MdOutlineShoppingCart className='header-left-icon'/></button>
        </div>
        <div className='header-main'>
            <a href="">لاپەڕەی سەرەکی </a>
            <a href="">کۆرسی فێرکاری </a>
            <a href="">پەرتووک </a>
            <a href="">دامەزراندن </a>
            <a href="">پرسیار و وڵام </a>
            <a href="">ئێمه </a>
            
        </div>
        <div className='header-right'>
            لۆگۆ
        </div>
    </div>
  )
}
