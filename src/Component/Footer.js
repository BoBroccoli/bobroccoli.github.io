import { Button, Grid, IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", width: "100%", backgroundColor: "#585858" }}>
        <Grid container height="100%" padding={5}>
          <Grid item xs={12} md={4} padding={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
              height="100%"
            >
              <Typography variant="h4" padding={2}>
                BoBrocoli
              </Typography>
              <Typography variant="h7" padding={2}>
                Always want to be inspired
              </Typography>
              <Box
                display={"flex"}
                justifyContent="space-around"
                width={100}
                padding={2}
              >
                <IconButton href="https://www.instagram.com/bobroccoli_">
                  <InstagramIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton href="mailto:bowen4091761@gmail.com">
                  <EmailIcon sx={{ color: "white" }} />
                </IconButton>
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
              <Button p={2} variant="h6" onClick={() => {navigate('about'); window.scrollTo({top: 0, behavior: 'smooth'})}} sx={{ color: "white", fontSize: "large" }}>
                {"About Me"}
              </Button>
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
              <Button p={2} variant="h6" onClick={() => {navigate('about'); window.scrollTo({top: 0, behavior: 'smooth'})}} sx={{ color: "white", fontSize: "large" }}>
                {"Contact"}
              </Button>
              <Button p={2} variant="h6" onClick={() => {navigate('schedule'); window.scrollTo({top: 0, behavior: 'smooth'})}} sx={{ color: "white", fontSize: "large" }}>
                {"Schedule"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
