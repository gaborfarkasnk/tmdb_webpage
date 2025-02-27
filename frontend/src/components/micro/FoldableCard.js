import React, {useState} from 'react'

export default function FoldableCard({title, content}) {
    
    const [opened, set_opened] = useState(false)
      
    return (
    <div className='card sidebar-card' onClick={e =>set_opened(!opened)}>
        <div className='header'>
            <b>{title}</b>
            {
                opened? <i className="fa-solid fa-angle-down"/> : <i className="fa-solid fa-angle-right"/>
            }
        </div>

            {
                opened? <hr />: null
            }

            {
                opened? content: null
            }

    </div>
  )
}
