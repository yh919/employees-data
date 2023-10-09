import styles from './Card.module.css'
import React from 'react';

const Card = ({ name, age, title , salary , skills ,type , id, deleteFunc}) => {
    const skill = skills.join(" | ")
    return (
        <>
        <div
            className={styles.cardWrap}
            style={{ backgroundColor: type === "male" ? "lightblue" : "pink" }}>
          <div>Name : { name }</div>
          <div>Age : { age }</div>
            <div>Title : {title}</div>
                <div>Salary : {salary}</div>
                <div>Skills : { skill }</div>
            <div className={styles.deleteBtn} onClick={ (e) => deleteFunc(e,id)}>X</div>
          </div> 
                </>
    );
}
 
export default Card;