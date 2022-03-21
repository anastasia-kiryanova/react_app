import React, { useEffect, useState, useRef } from 'react'
import styles from './Form.module.css'
import { Button, TextField } from '@mui/material'

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('')
  const inputRef = useRef(null);
  
  useEffect(() => {
      inputRef.current.focus();
   }, [text])

  const  handleText = (evt) => {
    evt.preventDefault()
    addMessage({
      text,
      author: 'User',
    })
    setText('')
  }

  const inputHandler = (evt) => {
    setText(evt.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleText}>
      <TextField name="message" variant="outlined" label="Введите сообщение" value={text} onChange={evt => inputHandler(evt)} required inputRef={inputRef} sx={{ width: '300px', mr: '30px', }} />
      <Button type="submit" variant="contained" color="info">Отправить</Button>
    </form>
  )
}