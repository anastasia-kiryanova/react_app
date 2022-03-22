import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.css'
import { Button, TextField } from '@mui/material'

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('')
  const inputRef = useRef(null);
  
  useEffect(() => {
      inputRef.current.focus();
   })

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
      <TextField name="message" variant="outlined" label="Введите сообщение" value={text} onChange={evt => inputHandler(evt)} required inputRef={inputRef} sx={{ width: '300px', mr: '30px', }} inputProps={{ 'data-testid': 'form-input' }} />
      <Button type="submit" variant="contained" color="info" data-testid="form-button">Отправить</Button>
    </form>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func.isRequired
}