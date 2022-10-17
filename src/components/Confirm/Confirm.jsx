import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classStyle from './Confirm.module.css'

export default function Confirm(props) {
  return (
    <Backdrop className={classStyle.Backdrop} onClick={()=>props.onDesc()}>  
        <div className={classStyle.contain}>
            <p className={classStyle
            .title}>{props.title}</p>
            <div className={classStyle.btns}>
                <button className={classStyle.confirm} onClick={()=>props.onOK()}>确定</button>
                <button className={classStyle.desc} onClick={()=>props.onDesc()}>取消</button>
            </div>
        </div>
    </Backdrop>
  )
}
