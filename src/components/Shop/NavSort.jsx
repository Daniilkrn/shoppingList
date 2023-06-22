import React from 'react'
import {MdExpandMore} from 'react-icons/md'
import {useState} from 'react'
import axios from 'axios'

export const NavSort = ({ onClickSortType, onClickSortTypeDis}) => {

  const [stateModalSort,setStateModalSort] = useState(false)
  const [defaultSortName, setDefaultSortName] = useState('цена')

  const sortRef = React.useRef()
  const refSpan = React.useRef()

  React.useEffect(()=>{
    const handleClickOutside = (event) => {
      let path = event.path || (event.composedPath && event.composedPath())
      if(!path.includes(sortRef.current)){
        setStateModalSort(false)
      } 
      if(path.includes(refSpan.current)){
        setStateModalSort(true)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  },[])

  const upperHandler = (e) => {
    setStateModalSort(false)
    setDefaultSortName(e.target.textContent + ' цены')
  }

  const disPriceHandler = (e) => {
    setStateModalSort(false)
    setDefaultSortName(e.target.textContent + ' цены')
  }

  return (
    <div className='navSort'>
      <div className="flagSort">
        Сортировать:
        <span ref={refSpan} onClick={()=>{      
        
      }}>{defaultSortName}<MdExpandMore/></span>
      </div>
      {
        stateModalSort ? 
        <div className="modalSort_container" ref={sortRef}>
          <div className="price" onClick={(e) =>{
            upperHandler(e)
            onClickSortType(e)
          }}>
            По возрастанию
          </div>
          <div className="price_desc" onClick={(e)=>{
            disPriceHandler(e)
            onClickSortTypeDis(e)
          }}>
            По убыванию
          </div>
        </div>
        : null
      }
    </div>
  )
}
