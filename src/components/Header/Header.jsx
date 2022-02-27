import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material/'

export const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5" component="div">
          Добро пожаловать в чат
        </Typography>
      </Toolbar>
    </AppBar>
  )
}