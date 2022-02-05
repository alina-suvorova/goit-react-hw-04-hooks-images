import style from './Modal.module.css'

import React, { useEffect } from 'react'


const Modal = ({largeImageURL, onToggleModal}) => {
    useEffect(() => {
        window.addEventListener('keydown', onHandleEscapeClick)
        return () => window.removeEventListener('keydown', onHandleEscapeClick)
    })
    const onHandleEscapeClick = (e) => e.code === "Escape" && onToggleModal();
    const onOverlayClick = (e) => e.target === e.currentTarget && onToggleModal();
    return (
        <div className={style.Overlay} onClick={onOverlayClick}>
            <div className={style.Modal}>
                <img src={largeImageURL} alt="" />
            </div>
        </div>
    );
}

export default Modal;
