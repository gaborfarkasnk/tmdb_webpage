import React from 'react'
import { useParams } from 'react-router-dom'
import Backdrop from "../images/backdrop.jpg"
import Poster from "../images/poster.webp"
import PopularityProgress from './micro/PopularityProgress'


export default function MovieDetails() {
  
    const {slug} = useParams()
    return (
    <div> 
        {/* MovieDetails: <span>{slug}</span> */}
        <div className= "movie-details-header">
            <img src={Backdrop} alt="backdrop" className="backdrop" />
            <div className="content movie-details-container">
                <img src={Poster} alt="poster" className= "poster"/>
                <div>
                    <h1>Mufasa: The Lion King (2024)</h1>
                    <p>2025. 03. 26. (HU) Adventure, Family, Animation, 1h 58m</p>
                    <PopularityProgress/>
                    <h3>Overview</h3>
                    <p>Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

