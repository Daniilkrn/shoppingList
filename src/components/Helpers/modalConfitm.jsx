import React, { useEffect } from 'react'
import Close from './close'
import { useState } from 'react'

const ModalConfirm = ({children, modal, setModal,}) => {


  return (
    <div className={modal ? "modalConfirm_wrapper active" : "modalConfirm_wrapper"} onClick={()=>{
        setModal(false)
    }}> 
        <div className="modalConfirm" onClick={(e)=>{
            e.stopPropagation()
        }}>
            <div className={modal ? "close_container active" : "close_container"}>
                <Close modal={modal} setModal={setModal}></Close>
            </div>
            {children}
        </div>
    </div>
  )
}

export default ModalConfirm