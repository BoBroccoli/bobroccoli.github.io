import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const CodingServicePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  return (
    <>
      <Box sx={{width: {xs: '100%', sm: '100%', md: '80%'}}}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={4} >
            <Box sx={{backgroundImage: 'url(./coding.png)', backgroundSize: 'cover', height: 300, width: '100%'}}></Box>
          </Grid>
          <Grid item xs={8}>
            <Item sx={{marginBottom: '40px'}}>
              <Typography variant='h3' color={'black'}>Coding Assistant</Typography>
            </Item>
            <Item>
              <Typography variant='h5' color={'black'}>Hello and welcome to my personal website! I am a software engineer with a passion for utilizing technology to solve complex problems and create meaningful solutions. With experience in a variety of technologies and frameworks, I am dedicated to helping individuals and organizations achieve their goals and drive their success.</Typography>  
            </Item>
          </Grid>          
        </Grid>
      </Box>
    </>
  )
}

export default CodingServicePage