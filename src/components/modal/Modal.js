import React from 'react'

import './style.css'

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();
  
  return (
    isOpen &&
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        <button className='modal-close' onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
  )
}

export default Modal;