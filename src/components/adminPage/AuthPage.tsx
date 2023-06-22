/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../../styles/adminPage.scss'
import axios from 'axios'
import ModalConfirm from '../Helpers/modalConfitm'
import { SubmitHandler, useForm } from 'react-hook-form';
import RegErrors from '../regPage/regErrors';
import { IShippingField } from '../../App.interface';

const AuthPage = ({ handleModal, modal, setModal }: any) => {

    // const [modal, setModal] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IShippingField>();

    const [reg, setToReg] = useState(false)

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    function handleReg(e: any, reg: any) {
        e.preventDefault()
        propsChangeModal(reg)
        // setModal(false)
        // axios.post('http://localhost:3001/login', formData)
        //     .then(res => console.log(res))
    }

    const propsChangeModal = (reg: any) => {
        handleModal(reg)
    }

    const onSubmit: SubmitHandler<IShippingField> = data => {

    }

    return (
        <div className='form'>
            {
                // modal ?
                //     <ModalConfirm modal={modal} setModal={setModal}>
                //         <div className="desc">
                //             <h2>{reg ? 'вы успешно зарегистрировались!' : 'вы успешно вошли в систему!'}!</h2>
                //         </div>
                //         <div className="actions">
                //             <button>{reg ? 'Войти' : null}</button>
                //         </div>
                //     </ModalConfirm> :
                <>
                    <div className="desc">
                        {reg ? "Регистрация" : "Вход в систему"}
                    </div>
                    <div className="form_container">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <label>Логин
                                <input
                                    {...register('login', {
                                        required: 'Это обязательное поле!',
                                    })}
                                />
                            </label>
                            <RegErrors errors={errors.login} />
                            <label htmlFor="">Пароль
                                <input type="password"
                                    {...register('password', {
                                        required: 'Это обязательное поле!',
                                    })}
                                />
                            </label>
                            <RegErrors errors={errors.password} />
                            <button className="btn_form" onClick={(e)=>{
                                handleReg(e,reg)
                            }}>{reg ? "Создать аккаунт" : "Войти"}</button>
                        </form>
                        {reg ? null :
                            <div className="mb_desc">
                                <li>У вас ещё нет аккаунта?<a href="" onClick={(e) => {
                                    e.preventDefault()
                                    setToReg(true)
                                }}> зарегистрируйтесь!</a></li>
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default AuthPage