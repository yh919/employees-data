import React, { Fragment } from "react";
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';
import DeleteButton from "../Layout/DeleteButton";





const BackDrop = ({close , show}) => {
    return <div className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} onClick={close}></div>
}

const Overlay = ({close , show , children}) => {
    return <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
        <DeleteButton onClick={close} />
        {children}
    </div>

}

const Modal = ({ children, show , close}) => {
    
    return (
        <Fragment>
            
            {ReactDOM.createPortal(<>
                    <BackDrop close={close} show={show} />
                <Overlay close={close} show={show}> {children} </Overlay></>
                , document.getElementById('modal')
                )
            }
            </Fragment>
    
    );}
 
export default Modal;