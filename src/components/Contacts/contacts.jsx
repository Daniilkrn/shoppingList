import React, { useState } from 'react'
import '../../styles/contacts.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {MdPlace} from 'react-icons/md'
import {GiSmartphone} from 'react-icons/gi'
import ModalConfirm from '../Helpers/modalConfitm'
import { WarningMessage } from '../Helpers/WarningMessage'


export const Contacts = () => {

  const [modal,setModal] = useState(false)  
  const [warnMessage, setWarnMeassage] = useState(false)
  const [checker,setChecker] = useState(false)

  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [file,setFile] = useState()
  
  const [nameInfo, setNameInfo] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setChecker(true)
    if(name.trim() && mail.trim()){
      setNameInfo(name)
      setModal(true)
      setChecker(false)
      setName('')
      setMail('')
    } else {
      setWarnMeassage(true)
      setTimeout(() => {
        setWarnMeassage(false)
      }, 3500);
    }
  }


  return (
    <>
      <section>
      <div className="desc_contacts">
        <li>
          <GiSmartphone className='iocn'/>
          Тел.: 89080811189 Ирина
        </li>       
        <li>
          <AiOutlineMail className='icon'/>
          Электронный адрес: td_ule@mail.ru
        </li>
        <li>
          <MdPlace className='icon'/>
          Мы находимся по адресу:г. Челябинск, ул. Чайковского
        </li>
        <a href='https://yandex.ru/maps/56/chelyabinsk/house/ulitsa_chaykovskogo_70a/YkgYdQJgQEQPQFtvfX12dHVmYg==/?ll=61.354300%2C55.176084&z=16.51' 
        className='location' role='button' target='_blank'>
          Посмотреть на карте
        </a>    
      </div>
      <form>
          <legend>Связаться с нами</legend>
          <label>Ваше имя<span>*</span></label>
          <input type="text" name="username" value={name} className={!name.trim().length && checker ? "input error" : "input"} onChange={(e)=>{
              setName(e.target.value)
          }}/>
          <label>Электронная почта <span>*</span></label>
          <input type="e-mail" name="email" value={mail} className={!mail.trim().length && checker ? "input error" : "input"} onChange={(e)=>{
            setMail(e.target.value)
          }}/>
          <label>Прикрепите файл</label>
          <input type="file" name="file" className="input"/>
          <div className="btn_form">
            <button onClick={(e)=>{
              submitHandler(e)
            }}>Отправить</button>
          </div>
          {
            warnMessage ? 
            <WarningMessage>
              Заполните все обязательные поля
            </WarningMessage>
            :
            null
          }
      </form>
      </section>
      <ModalConfirm modal={modal} setModal={setModal}>
        <div className="info">
          <li>{nameInfo}, Спасибо за обратную связь!</li>
          <li> Наш менеджер в ближайшее время свяжется с вами</li>
        </div>
      </ModalConfirm>
    </>
  )
}

export default Contacts