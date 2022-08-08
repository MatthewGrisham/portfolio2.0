import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserDelete} from 'react-icons/ai'
import {BiBookHeart} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'

const nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUserDelete/></a>
      <a href='#experience'><BiBookHeart/></a>
      <a href='#contact'><AiOutlineMessage/></a>            
    </nav>
  )
}

export default nav