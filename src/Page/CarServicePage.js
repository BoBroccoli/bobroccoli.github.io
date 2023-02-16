import { Button, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

const CarServicePage = () => {
  return (
    <Box sx={{ marginTop: 15, backgroundImage: 'url(./s2-bg.jpg)', height: {xs:'400px', md: '800px', lg: '1000px'},backgroundSize: 'cover'}}>
      <Box sx={{ display: "flex", flexDirection:{xs: 'column', md: 'row'}, height: '100%', alignItems: 'center' }}>
        <Box sx={{width: 500, margin: '100px', backgroundColor: 'white', opacity: 0.7, padding: '20px', borderRadius: '40px'}}>
          <Typography variant='body3' color='black' fontWeight='bolder'>I love to work on cars. I changed lots of things for my car, such as engine oil, timing belt, AC replacement, breaks, rotors, 
            and etc. If you are interested in the cars or need my help for replacement. Please let me know.
          </Typography>
        </Box>
        <Grid container spacing={'20px'} width={800}>
          <Grid item xs={12}>
            <Paper elevation={4} sx={{p:3}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box sx={{backgroundImage: 'url(./car_brake.png)', width: 200, height: 200,backgroundSize: 'cover'}} />
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    <Typography color='black' gutterBottom variant="h4" component="div">Brake Service</Typography>
                    <Typography color='black' gutterBottom variant="body3" component="div">Help you replace both brake pads and rotors, I can show you exactly steps how to do it and next time you will know what need to be done. </Typography>
                    <Link href="https://www.autozone.com/lp/duralast-brakes" underline="none" sx={{ color: 'black', fontSize: 20}}>
                      {'Autozone Brakes'}
                    </Link>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Button variant='outlined' startIcon={<AddCircleIcon />}>
                    Quote
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={1} md={1}>
            <Box sx={{backgroundImage: 'url(./engine.png)', width: 300,height: 300,backgroundSize: 'cover'}}></Box> 
          </Grid>
          <Grid item xs={1} md={1}>
            <Box sx={{backgroundImage: 'url(./suspension.png)', width: 300, height: 300,backgroundSize: 'cover'}}></Box>
          </Grid>
          <Grid item xs={1} md={1}>
            <Box sx={{backgroundImage: 'url(./compressor.png)', width: 300,height: 300,backgroundSize: 'cover'}}></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CarServicePage