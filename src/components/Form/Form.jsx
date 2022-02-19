import React, { useEffect, useState } from "react"
import styles from './Form.module.css'

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('')
  const [inputTextDirty, setInputTextDirty] = useState(false)
  const [textError, setTextError] = useState('Поле не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
     if(textError) {
       setFormValid(false)
     } else {
       setFormValid(true)
     }
   }, [textError])

  const blurHandler = (evt) => {
    setInputTextDirty(true)
  }

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
    if (!evt.target.value) {
      setTextError('Поле не может быть пустым')
    } else {
      setTextError('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleText}>
      {(inputTextDirty && textError) && <p className={styles.error}>{textError}</p>}
      <input type="text" className={styles.input} name="message" value={text} onBlur={evt => blurHandler(evt)} onChange={evt => inputHandler(evt)} placeholder='Введите Ваше сообщение' />
      <button disabled={!formValid} className={styles.button} type="submit">Отправить</button>
    </form>
  )
}