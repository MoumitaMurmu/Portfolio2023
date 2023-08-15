import React from 'react'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{AiFillFolder} from 'react-icons/ai'
import{MdPermContactCalendar} from 'react-icons/md'
import{AiFillAppstore} from 'react-icons/ai'
import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' title='Home' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiOutlineHome/></a>
      <a href='#about' title='About' onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href='#experience' title='Skills' onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ""}><AiFillAppstore/></a>

      <a href='#project' title='Project' onClick={()=> setActiveNav('#project')}  className={activeNav === '#project' ? 'active' : ""}><AiFillFolder/></a>
      <a href='#contact' title='Contact' onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ""}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav;