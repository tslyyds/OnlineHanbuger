import React from 'react'
import classStyle from './Backdrop.module.css'
import ReactDOM from 'react-dom'

const backdrop = document.getElementById('backdrop')
export default function Backdrop(props) {
  return ReactDOM.createPortal(<div {...props} className={`${classStyle.backdrop} ${props.className}`}>
    {props.children}
  </div>, backdrop)
}
