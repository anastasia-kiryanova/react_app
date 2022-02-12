import React from 'react'
import styles from './Message.module.css'

export const Message = (props) => {
  return (
    <>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </>
  )
}