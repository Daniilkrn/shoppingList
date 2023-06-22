import React, { useState } from 'react'
import '../../styles/adminPage.scss'
import axios from 'axios'
import ModalConfirm from '../Helpers/modalConfitm'
import { useForm, SubmitHandler, useFieldArray, } from 'react-hook-form';
import RegErrors from './regErrors';
import { IShippingField } from '../../App.interface';

const RegPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<IShippingField>();

    // const { fields, append, remove } = useFieldArray({
    //     name: "reg",
    //     control,
    //     rules: {
    //         required: "Добавьте хотя бы один параметр!",
    //     }
    // })


    const [modal, setModal] = useState(false)

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })


    function handleReg(e: any) {
        e.preventDefault()
        setModal(true)
        axios.post('http://localhost:3001/register', formData)
            .then(res => console.log(res))
    }

    const onSubmit: SubmitHandler<IShippingField> = data => {

    }

    return (
        <div className='form'>
            {
                modal ?
                    <ModalConfirm modal={modal} setModal={setModal}>
                        <div className="desc">
                            <h2>Вы успешно зарегистрировались!</h2>
                        </div>
                        <div className="actions">
                            <button>Войти</button>
                        </div>
                    </ModalConfirm> :
                    <>
                        <div className="desc">
                            Регистрация
                        </div>
                        <div className="form_container">
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <label>
                                    <input type="text"
                                        {...register('login', {
                                            required: 'Это обязательное поле3!',
                                            minLength:{
                                                value: 2,
                                                message: 'w'
                                            }
                                        })}
                                    />
                                </label>
                                <RegErrors errors={errors.login} />
                                <label>пароль
                                    <input type="password"
                                        {...register('password', {
                                            required: 'Это обязательное поле4!',
                                        })} />
                                </label>
                                <RegErrors errors={errors.password} />
                            </form>
                            <div className="btn_form" onClick={handleReg}>Регистрация</div>
                        </div>
                    </>
            }
        </div>
    )
}

export default RegPage