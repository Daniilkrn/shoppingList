import '../../styles/cartItems.scss'
import { useDispatch, useSelector } from "react-redux/es/exports"
import Close from '../Helpers/close'
import {MdRemoveShoppingCart} from 'react-icons/md'
import { clearItems, removeItem } from '../../store/reducers/cartSlice'
import { addItem } from '../../store/reducers/cartSlice'
import styled from 'styled-components'
import ModalConfirm from '../Helpers/modalConfitm'
import { useEffect, useState, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import {send} from 'emailjs-com'
import emailjs from '@emailjs/browser'
import react from 'react'
import CartSendUser from '../Helpers/CartSendUser'

const StyledCartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const Cart = () => {

    const refc= useRef()

    const items = useSelector(state => state.cardStore.items)
    const dispatch = useDispatch()

    const [modal,setModal] = useState(false)  
    const [clearCart,setClearCart] = useState(false)
    const [aboutUser,setAboutUser] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)
    console.log(name);
    const [timeoutToClear, setTimeoutToClear] = useState(false)
    const [timeoutClear, setTimeoutClear] = useState(10)

    const oneClickPlus = (e) => {
        e.stopPropagation()
        const item = {
            id: Number(e.target.id)
        }
        dispatch(
            addItem(item)
        )
    }

    const oneClickMinus = (e) => {
        e.stopPropagation()
        const item = {
            id: Number(e.target.id),
            minus: true
        }
        dispatch(
            addItem(item)
        )
    }

    const handlerSubmit = (e) => {
        let regexpPhone = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        let regexpName = new RegExp(/[a-zA-Z]/gm)
        if(regexpPhone.test(phone) && regexpName.test(name)){
        let templateParams = {
            from_name: name,
            phone: phone, 
            message: JSON.stringify(items.map(el => el))
        };
        
        emailjs.send("service_qw2acib","template_cm0z5gp",templateParams,"JCLX-b6bXHmuIZWn1")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
        }
    }

    useEffect(()=>{
        if(aboutUser) setModal(true)
    },[aboutUser])

    // if(modal){
    //     const timer = setInterval(() => {
    //         setTimeoutClear(timeoutClear - 1)
    //     }, 1000);  
    // }

        return(
        <>
        {
            aboutUser ? 
        <ModalConfirm modal={aboutUser} setModal={setAboutUser}>
                <form action="" className='form2'>
                    <label>Как мы можем к вам обращатсья?</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                    <label>Ваш номер телефона</label>
                    <input type="phone" onChange={(e)=>setPhone(e.target.value)}/>
                </form>
                <button className='btn_form2' onClick={(e)=>{
                    setAboutUser(false)
                    setModal(true)
                    setClearCart(false)
                    handlerSubmit(e)
                }}>Отправить</button>
        </ModalConfirm> : 
        <ModalConfirm modal={modal} setModal={setModal}>
        {
            clearCart ?
            <div className='confirm_clearCart'>
                <span>
                    <p>Вы уверены?</p>
                </span>
                <div className="clear_warn">
                    <button onClick={()=>{
                        setModal(false)
                    }}>Нет</button>
                    <button onClick={()=>{
                        dispatch(clearItems([]))
                        setModal(false)
                    }}>Да</button>
                </div>
            </div>  :
            <div>
                <span>
                    <p>Ваш заказ отправлен к нам!</p>
                    <p>Мы скоро свяжемся с вами для подтверждения заказа</p>
                </span>
                <div className="clear_warn">
                    <span> Очистить корзину и вернутсья на сайт?</span>
                    <button onClick={()=>{
                        setModal(false)
                        dispatch(clearItems([]))
                    }}>Да</button>
                </div>
            </div>
        }
    </ModalConfirm>
        }
        <StyledCartWrapper>
            <div className={!items.length ? 'cart_block_container emptyCart' : 'cart_block_container'}>
                <div className="cart_items_container">
            {
                items &&
                    items.map(el => 
                        <div className="cart_item" key={el.id}>
                            <div className="info">
                                <div className="title">
                                    {el.title}
                                </div>
                                <div className="price">
                                    {el.price} р.
                                </div>
                            </div>
                            <div className="count_container">
                                <span className="plus" id={el.id} onClick={(e)=>oneClickPlus(e)}></span>
                                <div className="count">
                                    {el.count} шт.
                                </div>
                                <span className="minus" id={el.id} onClick={(e)=>oneClickMinus(e)}></span>
                            </div>
                            <div className="close_container">
                                <Close idItem={el.id}/>
                            </div>
                        </div>
                    )
            }
            {
                !items.length ? 
                <div className='empty_cart'>
                    <span>Ваша корзина пуста</span>
                    <NavLink to='/shop'>Смотреть каталог</NavLink>
                </div> : null
            }
                </div>   
            </div>
            {
                items.length ? 
                <div className="send_cart">
                    <div className="send_container">
                        <button ref={refc} onClick={(e)=>{
                            setAboutUser(true)
                        }}>Отправить мой заказ</button>
                    </div>
                    <div className="clear_cart" onClick={()=>{
                        setClearCart(true)
                        setModal(true)
                    }}>
                        Очистить корзину
                        <MdRemoveShoppingCart size={35} className='cartClear_icon'/>
                    </div>
                </div> : null
            }
        </StyledCartWrapper>
        </>
        )
}

export default Cart