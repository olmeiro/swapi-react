import React from 'react'

import './style.css'
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();
  
  return (
    isOpen &&
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        <button className='modal-close' onClick={closeModal}><AiFillCloseCircle className='closeModal' value={{ style: { verticalAlign: 'middle' } }}/></button>
        {children}
      </div>
    </article>
  )
}

export default Modal;