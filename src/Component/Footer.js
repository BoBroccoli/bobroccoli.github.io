import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <>
      <Box sx={{display: 'flex', width: "100%", backgroundColor: "#585858" }}>
        <Grid container height="100%" padding={5}>
          <Grid item xs={12} md={4} padding={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
              height="100%"
            >
              <Typography variant="h4" padding={2}>BoBrocoli</Typography>
              <Typography variant="h7" padding={2}>Always want to be inspired</Typography>
              <Box display={"flex"} justifyContent="space-around" width={100} padding={2}>
                <InstagramIcon sx={{ color: "white" }} />
                <EmailIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={"flex-end"}
              height="70%"
            >
              <Link p={2} variant="h6" href="/">
                {"My Services"}
              </Link>
              <Link p={2} variant="h6" href="/">
                {"About Me"}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={"flex-end"}
              height="70%"
            >
              <Link p={2} variant="h6" href="/">
                {"Contact"}
              </Link>
              <Link p={2} variant="h6" href="/">
                {"Schedule"}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
