import React, {useState} from 'react'

export default function Combobox({items, selected_item}) {
  
    const [opened, set_opened] = useState(false)
    const [current_item, set_current_item] = useState(selected_item)
  
    return (
        <div className='combo-box'>
            <div className='combo-button' onClick={e => set_opened(!opened)}>
                {current_item}
                {opened? <i className="fa-solid fa-angle-down"/> : <i className="fa-solid fa-angle-left"/>}
            </div>

            {
                opened?
                    <div className='combo-items-container'>
                        {
                            items.map(menu_item => <div className='combo-item' onClick={e => set_current_item(menu_item)}>{menu_item}</div>)
                        }
                    </div>
                :
                    null
            }
        <div></div>
        </div>
    )
}
