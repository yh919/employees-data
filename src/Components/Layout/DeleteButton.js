import React from "react";
import styles from '../../App/App.module.css'

const DeleteButton = ( {onClick ,style} ) => {
    return ( 
        <div className={styles.deleteBtn} style={style} onClick={onClick}>X</div>
     );
}
 
export default DeleteButton;