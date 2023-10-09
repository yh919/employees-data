import React from "react";
import styles from "./Card.module.css"
export default function Card( {listName , type , deleteFunc } ) {
      
    const cards = listName.map(({ name, age, title , salary , type }, i) => {
    return (
        <div
            className={styles.cardWrap}
            key={i}
            style={{ backgroundColor: type === "male" ? "lightblue" : "pink" }}>
          <div>Name : { name }</div>
          <div>Age : { age }</div>
            <div>Title : {title}</div>
            <div>Salary : {salary}</div>
            <div className={styles.deleteBtn} onClick={ (e) => deleteFunc(e,i)}>X</div>
          </div> )
    });
    return (
      <>
        <div className={styles.cardsContainer}>
        {cards}
        </div>
        </>
    )
    

}