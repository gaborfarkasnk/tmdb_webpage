import React from 'react'
import Sidebar from './Sidebar'
import MovieListView from './MovieListView'
import { useLocation } from 'react-router-dom'
import TvShowListView from './TvShowListView'
import PeopleListView from './PeopleListView'

export default function Listview() {
  
  const location = useLocation()

  return (
    <div className='content horisontal-box'>
        
        

        {
          location.pathname !== "/people"? <Sidebar/> : null
        }

        {
          location.pathname === "/"? <MovieListView/> : null
        }

        {
          location.pathname === "/tvshows"? <TvShowListView/> : null
        }

        {
          location.pathname === "/people"? <PeopleListView/> : null
        }

    </div>
  )
}
