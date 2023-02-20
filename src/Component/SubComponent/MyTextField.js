import { TextField } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'main',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})
const MyTextField = (props) => {
  return (
    <CssTextField {...props}></CssTextField>
  )
}

export default MyTextField