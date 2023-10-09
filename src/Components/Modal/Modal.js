import React, { Fragment } from "react";
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';

const BackDrop = ({close}) => {
    return <div className={styles.backDrop} onClick={close}></div>
}

const Overlay = () => {
    return <div className={styles.overlay}></div>

}

const Modal = ({ show , close}) => {
    
    return (
    show &&
        <Fragment>
            
            {ReactDOM.createPortal(<>
                    <BackDrop close={close} />
                <Overlay /></>
                , document.getElementById('modal')
                )
            }
            </Fragment>
    
    );}
 
export default Modal;