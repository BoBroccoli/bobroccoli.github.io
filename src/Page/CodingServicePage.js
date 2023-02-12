import { Box, Card, CardContent, CardMedia, Collapse, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import { useTheme } from '@emotion/react';
import { ExpandMore } from '@mui/icons-material';
const CodingServicePage = () => {
  const theme = useTheme();
  const [webBuildingMoreExpanded, setWebBuildingMoreExpanded] = useState(false);
  
  const [webTeachingMoreExpanded, setWebTeachingMoreExpanded] = useState(false);
  return (
    <>
      <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box sx={{ marginTop: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(./coding.png)', backgroundSize: 'cover',  width: {xs: '100%', lg: 1200}, height: {xs: 1200, md: 1200}, backgroundRepeat: 'no-repeat'}}>
            <Box sx={{backgroundColor: 'white', opacity: 0.7, width: {xs: '100%', md:'50%'}, height: {xs: '70%', sm:'50%'}, padding: 10}}>
              <Typography marginBottom={10} align='center' variant='h4' color={'black'}>Coding Assistant</Typography>
              <Typography align='center' variant='h5' color={'black'}>Hello and welcome to my personal website! I am a software engineer with a passion for utilizing technology to solve complex problems and create meaningful solutions. With experience in a variety of technologies and frameworks, I am dedicated to helping individuals and organizations achieve their goals and drive their success.</Typography>        
            </Box>
          </Box>

          <Box sx={{marginTop: 5, width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
          <Card raised={true} sx={{width: {sx: '100%', md: '400px', padding: 10, margin: '10px 10px 10px 10px'}}}>
            <CardMedia
              component="img"
              image={'./web_building.png'}
              alt="Spring"
            />
            <ExpandMore
              expand={webBuildingMoreExpanded}
              onClick={()=>{setWebBuildingMoreExpanded(!webBuildingMoreExpanded)}}
              aria-expanded={webBuildingMoreExpanded}
              aria-label="show more"
            ><ExpandMoreIcon /></ExpandMore>
            <Collapse in={webBuildingMoreExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" color="text.secondary" fontWeight={10}>
                  Whether it's for personal use or business, I am here to help you create a website that meets your unique needs and requirements. 
                  Let's take your online presence to the next level! Contact me for more information on how I can help you build the website of your dreams.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card raised={true} sx={{width: {sx: '100%', md: '400px', padding: 10, margin: '10px 10px 10px 10px'}}}>
            <CardMedia
              component="img"
              image={'./mac.png'}
              alt="Spring"
            />
            <ExpandMore
              expand={webTeachingMoreExpanded}
              onClick={()=>{setWebTeachingMoreExpanded(!webTeachingMoreExpanded)}}
              aria-expanded={webTeachingMoreExpanded}
              aria-label="show more"
            ><ExpandMoreIcon /></ExpandMore>
            <Collapse in={webTeachingMoreExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                I offer a comprehensive coding assistant service that covers everything from data structures to interview preparation. 
                My goal is to help you strengthen your coding abilities and achieve your career aspirations. 
                With my expertise and personalized approach, I am confident that I can help you reach your full potential. 
                Let's work together to enhance your coding skills and advance your career. 
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card raised={true} sx={{width: {sx: '100%', md: '400px', padding: 10, margin: '10px 10px 10px 10px'}}}>
            <CardMedia
              component="img"
              image={'./web_building.png'}
              alt="Spring"
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          </Box>
      </Box>
    </>
  )
}

export default CodingServicePage