import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <>
      <Box sx={{ height: "300px", width: "100%", backgroundColor: "#585858" }}>
        <Grid container height='100%'>
          <Grid item xs={4} >
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent={'space-around'} height='100%'>
              <Typography variant="h4">BoBrocoli</Typography>
              <Typography variant="h7">Always want to be inspired</Typography>
              <Box display={'flex'} justifyContent='space-around' width={100}>
                <InstagramIcon sx={{color: 'white'}} />
                <EmailIcon sx={{color: 'white'}} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            {" "}
            one{" "}
          </Grid>
          <Grid item xs={4}>
            {" "}
            one{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
