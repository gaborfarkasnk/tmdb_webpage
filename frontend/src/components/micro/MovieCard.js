import React from 'react'
import Poster from "../../images/poster.webp"
import PopularityProgress from './PopularityProgress'
import { Link } from 'react-router-dom'

export default function MovieCard({movie_data}) {
  return (
    <Link to = "/movies/12345-mufasa" className='card movie-card'>
        <div className= 'poster-container'> 
          <img src={movie_data.poster_path} alt="poster" />
          <PopularityProgress/>
        </div>

        <div className= 'title-container'>
          <h4>{movie_data.title}</h4>
          <p>{movie_data.release_date}</p>
        </div>

    </Link>
  )
}
