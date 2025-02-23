import React, { useState } from 'react'

export default function () {

    const [opened, set_opened] = useState(false)

    return (
        <div onClick={e => set_opened(!opened)} className='search-box-container'>
            {
                opened?
                <input type="text" placeholder='Search...' onClick={e => e.stopPropagation()} />
                :
                null
            }
            <i className="fa-solid fa-magnifying-glass" />
        </div>
    )
}
