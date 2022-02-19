import React from 'react'
import styles from './App.module.css';
import { Message } from './components/Message/Message';

export const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Мое первое приложение</h1>
      <Message title={'React'} description={'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'} />
    </div>
  )
}