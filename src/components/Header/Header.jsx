import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@mui/material/'

export const Header = ({ title }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5" component="div" data-testid="header-text">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};