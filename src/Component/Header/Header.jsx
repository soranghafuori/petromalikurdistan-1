import React from 'react'
import './Header.css'
import {TbLogin} from 'react-icons/tb'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <button>چوونه ژوورەوە<TbLogin className='header-left-icon'/></button>
            <button><MdOutlineShoppingCart className='header-left-icon'/></button>
        </div>
        <div className='header-main'>
            <NavLink to="/"><a href="">لاپەڕەی سەرەکی </a></NavLink>
            <NavLink to="/courses"><a href="">کۆرسی فێرکاری </a></NavLink>
            <NavLink to="/books"><a href="">پەرتووک </a></NavLink>
            <NavLink to="/users"><a href=""> ئەندامان </a></NavLink>
            <NavLink to="/about"><a href="">ئێمه </a></NavLink>
        </div>
        <div className='header-right'>
            لۆگۆ
        </div>
    </div>
  )
}
