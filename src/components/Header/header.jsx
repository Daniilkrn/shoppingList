import styles from 'styled-components'
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi"

import '../../styles/header.scss'
import { useSelector } from 'react-redux';
import AdminHeader from '../adminPage/AdminHeader';
import ModalConfirm from '../Helpers/modalConfitm';
import { useState } from 'react';
import AuthPage from '../adminPage/AuthPage';

const StyledHeader = styles.header`
    width: 100%;
    height: 80px;
    background: gray;
    display: flex;
    justify-content: center;
`
const StyledHeaderContainer = styles.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const StyledLinksContainer = styles.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100%;
`
const StyledCartContainer = styles.div`
    display: flex;
    background: gray;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    height:80%;
    border-radius:1em;
`
const StyledAuthContainer = styles.div`
    display: flex;
    background: gray;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    height:80%;
    border-radius:1em;
`
const Header = () => {
    
    const {items, totalPrice} = useSelector(state => state.cardStore)
    const totalCount = items.reduce((acc,item) => acc + item.count, 0)

    const [modal, setModal] = useState(false)

    const handleModal = (flag) =>{
        setModal(false)
        alert(flag)
    }

    return(
        <StyledHeader>
            <StyledHeaderContainer>
                <StyledLinksContainer>
                    <NavLink to="shop" className="link">КАТАЛОГ</NavLink>
                    <NavLink to="contacts" className="link">КОНТАКТЫ</NavLink>
                    <NavLink to="about" className="link">О НАС</NavLink>
                </StyledLinksContainer>
                {/* <AdminHeader></AdminHeader> */}
                <StyledAuthContainer className="StyledAuthContainer">
                    <button onClick={()=>{
                        setModal(true)
                    }}>Войти</button>
                </StyledAuthContainer>
                <StyledCartContainer className="StyledCartContainer">
                    <NavLink to="cart" className="link">
                        {totalPrice} р.
                        <span></span>
                        <BiCartAlt size={20} className="cart_icon"/>{totalCount}
                    </NavLink>
                </StyledCartContainer>
            </StyledHeaderContainer>
            <ModalConfirm setModal={setModal} modal={modal}>
                <AuthPage setModal={setModal} modal={modal} handleModal={handleModal}></AuthPage>
            </ModalConfirm>
        </StyledHeader>
    )
}

export default Header