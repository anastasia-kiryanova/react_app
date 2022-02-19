import React from 'react'
import styles from './MessageList.module.css'

export const MessageList = ({ messages }) => {
  return (
    <ul className={styles.messsagesList}>
      {messages.map(message => 
        <li className={styles.messageItem} key={message.id}>{message.author} : {message.text}</li>
      )}
    </ul>
  )
}