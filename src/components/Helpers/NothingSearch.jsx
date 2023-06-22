import React from 'react'
import {CgSmileSad} from 'react-icons/cg'

const NothingSearch = () => {
  return (
    <div className='nothingSearch'>
        <span>По вашему запросу ничего не найдено...
            <p>Попробуйте изменить параметры запроса</p>
        </span>
        <span className='icon_container'>
            <CgSmileSad size={50}/>
        </span>
    </div>
  )
}

export default NothingSearch