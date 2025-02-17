import React from 'react'
import FoldableCard from './micro/FoldableCard'

function Sorting(){
  return(
    <div className='card-content'>
      <p>Sort Results by</p>
    </div>
  )
}

function Filters(){
  return(
    <div className='card-content'>
      Filters...
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
