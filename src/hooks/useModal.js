import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useModal = (initialValue = false) => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () =>{
    setIsOpen(false);
    navigate(-1);
  }

  return [isOpen, openModal, closeModal];
};

export default useModal;
