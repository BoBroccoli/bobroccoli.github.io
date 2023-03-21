import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
const Contact = () => {
  const MyIconButton = styled(IconButton)({
  transition: 'all .3s ease-out',
  '&:hover': {
    transform: 'translate(0, -5px)',
  }
})
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: '100%' ,
        alignItems: "center",
      }}
    >
      <Box width="95%" marginTop={2}>
        <Divider>
          <Typography variant="h4" color="black">
            Contact
          </Typography>
        </Divider>
      </Box>
      <Avatar
        alt="Bo"
        src="/photo.jpg"
        sx={{ width: "150px", height: "150px", mt:5 }}
      />
      <CardContent>
        <Stack spacing={4}>
          <Typography variant="h4" color={"black"} align="center">
            Bo(Beau) Wen
          </Typography>
          <Typography variant="h5" color={"black"} align="center">
            Cell Phone : 2184091761
          </Typography>
          <Typography variant="h5" color={"black"} align="center">
            Email : bowen4091761@gmail.com
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Tooltip sx={{'.MuiTooltip-tooltipPlacementTop': {height: '100px'}}} title="Instagram" arrow placement="top">
              <MyIconButton href='https://www.instagram.com/bobroccoli_'>
                <InstagramIcon fontSize="large" sx={{ color: "#c32aa3" }} />
              </MyIconButton>
            </Tooltip>
            <Tooltip title="Github" arrow placement="top">
              <MyIconButton href='https://github.com/BoBroccoli'>
                <GitHubIcon fontSize="large" sx={{ color: "#010101" }} />
              </MyIconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow placement="top" sx={{}}>
              <MyIconButton href='https://www.linkedin.com/in/bo-beau-wen-a62304a8/'>
                <LinkedInIcon fontSize="large" sx={{ color: "#0a66c2" }} />
              </MyIconButton>
            </Tooltip>
            <Tooltip title="Email" arrow placement="top">
              <MyIconButton href='mailto:bowen4091761@gmail.com'>
                <EmailIcon fontSize="large" sx={{ color: "#4285f4" }} />
              </MyIconButton>
            </Tooltip>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Contact;
