import React from 'react'
import { MenuItem, Menu } from '@mui/material'
const MyMenu = (props) => {
  return (
    <Menu
    id={props.id}
    anchorEl={props.anchorEl}
    open={props.open}
    onClose={props.onClose}
  >
    {props.myMenuItems.map(item => (
      <MenuItem key={item.id} onClick={props.handleMenuClose} sx={{color: 'primary.main'}}>{item.label}</MenuItem>
    ))}
  </Menu>
  )
}

export default MyMenu