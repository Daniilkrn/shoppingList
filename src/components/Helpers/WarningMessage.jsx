import React from 'react'
import {RiErrorWarningFill} from "react-icons/ri"

export const WarningMessage = ({children}) => {
  return (
    <div className='WarningMessage'>
        <div className="content">
            <RiErrorWarningFill className='icon'/>
            <div className="text">
                {children}
            </div>
        </div>
    </div>
  )
}
