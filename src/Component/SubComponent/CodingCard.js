import React from 'react'
import { Box, Card, CardContent, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const CodingCard = (props) => {
  const expand = props.expand;
  const setExpand = props.setExpand;
  const imageUrl = props.imageUrl;
  const cardTitle = props.cardTitle;
  const cardContent = props.cardContent;
  return (
    <Card raised={true} sx={{width: {sx: '100%', md: '400px', padding: 20, margin: '30px'}}}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Spring"
            />
            <Typography variant="h4" color="black" align='center'>{cardTitle}</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <ExpandMore
                expand={expand}
                onClick={()=>{setExpand(!expand)}}
                aria-expanded={expand}
                aria-label="show more"
              ><ExpandMoreIcon fontSize='large'/></ExpandMore>
            </Box>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body1" color="text.secondary" fontWeight={10}>
                  {cardContent}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
  )
}

export default CodingCard