import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Menubar.css"

function Menubar() {
  return (
      <div className='navbar'>
        <div className='menu-main-logo'>
          <Link to='/'><h1 id='logo'>S</h1></Link>
        </div>
        <div className='items'>
          <NavLink className='main-menu icons eff' to='/'><HomeIcon className='icon'/></NavLink>
          <NavLink className='main-menu icons eff' to='/Contact'><EmailIcon className='icon'/></NavLink>
          <NavLink className='main-menu icons eff' to='/About'><InfoIcon className='icon'/></NavLink>
        </div>
        <div className='items'>
          <NavLink className='social-menu icons' ><EmailIcon fontSize='small'/></NavLink>
          <NavLink className='social-menu icons' ><LinkedInIcon fontSize='small'/></NavLink>
          <NavLink className='social-menu icons' ><InstagramIcon fontSize='small'/></NavLink>
        </div>
      </div>
  )
}

export default Menubar