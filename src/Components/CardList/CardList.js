import React from "react";
import Card from '../Card/Card'
import styles from './CardList.module.css'

export default function CardList({ listName, deleteFunc }) {
  const cards = listName.map(({id, ...otherProps}) => {
   return <Card {...otherProps} deleteFunc={deleteFunc} id={id} />
  })
    return (
      <>
      <div className={styles.cardsContainer}>{cards}</div>
      </>
    )
}
