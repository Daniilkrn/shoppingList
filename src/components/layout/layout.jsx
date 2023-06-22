import React, {useState} from "react"
import {Outlet} from "react-router-dom"
import styled from 'styled-components'
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ModalConfirm from "../Helpers/modalConfitm";

export const StyledMain = styled.main`
    width:100%
    padding-top: 50px;
    display: flex;
    flex: 1 1 auto;
    background-color: #165281;
    justify-content: center;
`

export const StyledMainContainer = styled.div`
    width:1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`

const Layout = () => {
    
    return (
        <>
            <Header></Header>
            <StyledMain>
                <StyledMainContainer className="StyledMainContainer">
                    <Outlet/>   
                </StyledMainContainer>
            </StyledMain>
            <Footer></Footer>
        </>
    )
}

export default Layout