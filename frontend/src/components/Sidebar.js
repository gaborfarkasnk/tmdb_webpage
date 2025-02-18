import React from 'react'
import FoldableCard from './micro/FoldableCard'
import Combobox from './micro/Combobox'

function Sorting(){
  
  const options = [
    'Popularity Descending',
    'Popularity Ascending',
    'Rating Descending',
    'Rating Ascending',
    'Release Date Descending',
    'Release Date Ascending',
    'A-Z Descending',
    'A-Z Ascending'
  ]

  return(
    <div className='card-content' onClick={e => e.stopPropagation()}>
      <p>Sort Results by</p>
      <Combobox items={options} selected_item={options[0]}/>
    </div>
  )
}

function Filters(){
  
  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
  ]
  
  
  return(
    <div className='card-content' onClick={e => e.stopPropagation()}>
      {
        genres.map(genre_item => <div>{genre_item}</div>)
      }
    </div>
    
  )
}

export default function Sidebar() {
  return (
    <div className='sidebar '>

      <h2>Popular Movies</h2>
      <FoldableCard title='Sort' content={<Sorting/>}/>
      <FoldableCard title='Filters' content={<Filters/>}/>
    
    </div>
  )
}
