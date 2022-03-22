import React from 'react'
import { nanoid } from 'nanoid'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

const chats = [
  {
    id: nanoid(),
    name: 'Чат 1',
  },
  {
    id: nanoid(),
    name: 'Чат 2',
  },
  {
    id: nanoid(),
    name: 'Чат 3',
  },
  {
    id: nanoid(),
    name: 'Чат 4',
  },
]

export const ChatList = () => {
  return (
    <List sx={{
          width: '250px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          bgcolor: 'primary.main',
          mt: '30px',
          padding: '12px',
          color: '#ffffff',
        }} data-testid='list'>
      {chats.map((item) => (
        <ListItem key={item.id}>
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}