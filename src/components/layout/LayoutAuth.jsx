import React from 'react'
import { StyledMain } from './layout'
import { StyledMainContainer } from './layout'
import { Outlet } from 'react-router-dom'

const LayoutAuth = () => {
    return (
        <>
            <StyledMain>
                <StyledMainContainer className="StyledMainContainer">
                    <Outlet />
                </StyledMainContainer>
            </StyledMain>
        </>
    )
}

export default LayoutAuth