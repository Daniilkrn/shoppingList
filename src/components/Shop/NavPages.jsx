import React from 'react'
import {useState} from 'react'

export const NavPages = ({pagesLength, onClick}) => {
    
    const [pageId, setPageId] = useState(1)    

    const handleChange = (e) => {
        onClick(e.target.textContent)
    }

  return (
    <div className='navPages'>
        {
            pagesLength.map(el =>
                <div key={el.id}>
                    <div className="page_num" onClick={handleChange}>
                        {el.id}
                    </div>
                </div>
            )
        }
    </div>
  )
}
