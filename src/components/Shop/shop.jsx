import Layout from "../layout/layout";
import axios from 'axios'
import Card from "./card";
import '../../styles/card.scss'
import styled from 'styled-components'
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { addItem } from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { NavLink } from "react-router-dom";
import App from "../../App";
import { useSelector } from "react-redux";
import CardItem from "./cardItem";
import { data } from "../../data/data";
import { NavSort } from "./NavSort";
import { NavPages } from "./NavPages";
import Search from "./Search";
import NothingSearch from "../Helpers/NothingSearch";

const StyledShopWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
`

const StyledShopContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    height: 100%;
`

const StyledNavContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`

const pages = new Set()

const Shop = () => {

    const [fetching, setFetching] = useState(true)
    const [pageCount, setPageCount] = useState(1)
    const [cartState, setCartState] = useState([])
    const [pagesLength, setPagesLength] = useState([])
    
    const [sortMethod, setSortMethod] = useState('asc')
    const [sortType,setSortType] = useState('')
    const [flagToSort, setFlagToSort] = useState(false)

    /*search*/
    const [flagSearch, setFlagSearch] = useState(false)
    const [searchParam, setSearchParam] = useState('')

    const pagesRef = useRef([pages].map(() => React.createRef()))

    const handleChange = (e) => {
        setFetching(true)
        setPageCount(e.target.id)
    }

    for (let i = 0; i < pagesLength.length; i++) {
        let element = pagesLength[i].page
        pages.add(element)
    }   

    const hanlderSort = (e) => {
        if(e.target.className === 'price_desc'){
            setSortMethod('desc')
        } else{
            setSortMethod('asc')
        }
        setSortType(e.target.className)
        setFlagToSort(true)
        setFetching(true)
    }

    const propsHandlerSearch = (searchData, searchParam) => {
        console.log(searchParam);
        setCartState([...searchData])
        setSearchParam(searchParam)
        setFlagSearch(true)
        setFlagToSort('price')
    }

    const allWithClass = Array.from(
        document.getElementsByClassName('page_num')
    )
    if(pagesRef.current[0].current) pagesRef.current[0].current.style.border = '1px solid black'
    if(pageCount > 1) pagesRef.current[0].current.style.border = 'none'

    useEffect(() => {
        for (let i = 0; i < allWithClass.length; i++) {
            if(allWithClass[i].id === pageCount){
                allWithClass[i].style.border = '1px solid black'
            } else {
                allWithClass[i].style.border = 'none'
            } 
        }
    }, [pageCount])
    
    useEffect(() => {
        if(fetching){
            console.log(sortMethod);
            try {
                axios.get(flagToSort && !flagSearch ? (
                    `http://localhost:3001/catalog?_sort=${sortType}&_order=${sortMethod}&page=${pageCount}`
                ) : flagSearch ?  (
                        `http://localhost:3001/catalog?_sort=price&_order=${sortMethod}&page=${cartState[0].page}&title_like=${searchParam}`
                    ) 
                :
                `http://localhost:3001/catalog?page=${pageCount}`
                )  
                .then(response => {
                    setCartState([...response.data])
                })
                .catch(function (error){
                    
                })
                .finally(()=>{
                    setFetching(false)
                    setFlagToSort(false)
                })
            } catch (error) {
                
            }
        }
        axios.get(`http://localhost:3001/catalog?_page`)
            .then(response => {
                setPagesLength(response.data)
        })
    }, [fetching, flagToSort])

    return (
        <StyledShopWrapper className="StyledShopWrapper">
            <StyledNavContainer className="StyledNavContainer">
                <NavSort sortType={sortType} onClickSortType={(e)=>hanlderSort(e)} onClickSortTypeDis={(e)=>hanlderSort(e)}></NavSort>
                <Search propsHandlerSearch={(e, searchParam)=>propsHandlerSearch(e, searchParam)} flagSearch={flagSearch}></Search>
            </StyledNavContainer>
            <StyledShopContainer>
                { 
                cartState &&
                    cartState.map(el => 
                        <NavLink to={`${el.id}`} key={el.id}>
                            <CardItem key={el.id} id={el.id} title={el.title} price={el.price} desc={el.desc} image={el.image}/>
                        </NavLink> 
                    )   
                } 
                {
                    !cartState.length ? <NothingSearch></NothingSearch> : null
                }
            </StyledShopContainer>
            {/* <NavPages pagesLength={data} onClick={handleChange}></NavPages> */}
            <div className='navPages'>
                {
                    [...pages].map((el, i) => 
                        <div key={el}>
                            <div className={"page_num"} ref={pagesRef.current[i]} id={i+1} onClick={(e) => handleChange(e)}>
                                {el}
                            </div>
                        </div>  
                    )
                }
            </div>
        </StyledShopWrapper>
        )
}  

export default Shop