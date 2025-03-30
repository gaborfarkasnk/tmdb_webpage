import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBox from './micro/SearchBox'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
      
      <div style={{display:"inherit"}}>
        <Link to="/">
          <img className='navbar-logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" />
        </Link>
        <Link to="/">
          <i className="fa-solid fa-house"/>
        </Link>
        <Link to="/" className='navbar-item'>Movies</Link>
        <Link  to= "/tvshows" className='navbar-item'>TV Shows</Link >
        <Link to= "/people" className='navbar-item'>People</Link >
        <Link  to= "/more" className='navbar-item'>More</Link >
      </div>
      
      <div style={{display:"inherit"}}>
        <Link to= "/language" className='en_button'>EN</Link>
        <Link to= "/login" className='navbar-item'>Login</Link>
        <Link to= "/registration" className='navbar-item'> Join TMDB</Link>
        <SearchBox/>
        
        
      </div>
    
    </div>
  )
}
