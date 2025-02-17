import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
  return (
    <div className='navbar'>
      
      <div style={{display:"inherit"}}>
        <img className='navbar-logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" />
        <i className="fa-solid fa-house"/>
        <div className='navbar-item'>Movies</div>
        <div className='navbar-item'>TV Shows</div>
        <div className='navbar-item'>People</div>
        <div className='navbar-item'>More</div>
      </div>
      
      <div style={{display:"inherit"}}>
        <div className='en_button'>EN</div>
        <div className='navbar-item'>Login</div>
        <div className='navbar-item'> Join TMDB</div>
        <i className="fa-solid fa-magnifying-glass"/>
        
        
      </div>
    
    </div>
  )
}
