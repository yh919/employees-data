import React from "react";
import styles from '../../App/App.module.css'

const Button = (props) => {
    return ( 
        <>
            <button
                className={styles.button}
                onClick={props.onClick}
                type={`${props.type ? props.type : 'button' }`}>
                {props.children}
            </button>
        </>
     );
}
 
export default Button;