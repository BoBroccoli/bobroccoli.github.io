import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(./galacy.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: 300,
          backgroundRepeat: "no-repeat",
        }}
      ><Typography variant="h4" color='white'>About Me</Typography></Box>
    </Box>
  );
};

export default About;
