import React from 'react'
import Poster from "../../images/poster.webp"
import PopularityProgress from './PopularityProgress'
import { Link } from 'react-router-dom'

export default function MovieCard() {
  return (
    <Link to = "/movies/12345-mufasa" className='card movie-card'>
        <div className= 'poster-container'> 
          <img src={Poster} alt="poster" />
          <PopularityProgress/>
        </div>

        <div className= 'title-container'>
          <h4>Mufasa long title movies need three rows long title</h4>
          <p>Sep 12, 2024</p>
        </div>

    </Link>
  )
}
