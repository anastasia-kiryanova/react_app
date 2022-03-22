import React, { useEffect, useState, useCallback } from 'react'
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import { nanoid } from 'nanoid'
import { ChatList } from './components/ChatList/ChatList'
import { Header } from './components/Header/Header'


export const App = () => {
  const [messages, setMessages] = useState([]) 
  const title = 'Добро пожаловать в чат'

  useEffect(() => {
    if (messages.length && messages[messages.length-1].author === 'User'){
      const timeout = setTimeout (() => addMessage({
        text: 'Спасибо за обращение! Свяжемся с вами в ближайшее время',
        author: 'Bot',
      }), 1500)

      return () => {
        clearTimeout(timeout);
      }
    }
  }, [messages])

  const addMessage = useCallback(
    ({ text, author }) => {
      setMessages([
        ...messages, 
        {
          id: nanoid(),
          author,
          text,
        },
      ])
    },
    [messages]
  )
  
  return (
    <>
      <Header title={title} />
      <div className={styles.app}>
        <ChatList />
        <div className={styles.content}>
          <Form addMessage={addMessage} />
          <MessageList messages={messages} />
        </div>
      </div>
    </>
  )
}
