import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import axios from 'axios'

const Search = ({ propsHandlerSearch, flagSearch }) => {

  const [searchParam, setSearchParam] = useState('')
  const [searchData, setSearchData] = useState([])

  const handlerSearch = () => {
    try {
      axios.get(`http://localhost:3001/catalog?title_like=${searchParam}`)
        .then(response => {
          setSearchData(response.data)
          handlerSearchHandler(response.data, searchParam)
        })
        .catch(function (error) {
        })
        .finally(() => {

        })
    } catch (error) {
    }
  }

  const handlerSearchHandler = (searchData, searchParam) => {
    propsHandlerSearch(searchData, searchParam)
  }

  const handlerChangeInput = () => {
    if (flagSearch) {
      setTimeout(() => {
        handlerSearch()
      }, 1000);
    }
  }

  return (
    <div className='search'>
      <input type="text" onChange={(e) => {
        setSearchParam(e.target.value.trim())
        handlerChangeInput()
      }} />
      <label>
        <BiSearchAlt onClick={handlerSearch} className='search_icon' />
      </label>
    </div>
  )
}

export default Search