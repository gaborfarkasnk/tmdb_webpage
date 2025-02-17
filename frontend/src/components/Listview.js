import React from 'react'
import Sidebar from './Sidebar'
import MovieListView from './MovieListView'

export default function Listview() {
  return (
    <div className='content horisontal-box'>
        <Sidebar/>
        <MovieListView/>
    </div>
  )
}
