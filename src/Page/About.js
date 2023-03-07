import { Box, Typography } from "@mui/material";
import React from "react";
import Contact from "../Component/Contact";
import MyTimeline from "../Component/MyTimeline";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '100%'
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
      >
        <Typography variant="h4" color="white">
          About Me
        </Typography>
      </Box>
      <Box sx={{ height: "auto", justifyContent: "center", display: "flex" }}>
        <Typography
          variant="h6"
          color="black"
          sx={{ width: {xs: '90%',md:"60%"}, justifyContent: "center" }}
          p={{xs: 0, md:8}}
        >
          I'm someone who enjoys staying active and pursuing a variety of
          interests. In my free time, you might find me playing basketball with
          friends or hitting the slopes to go skiing. I work as a software
          engineer, which keeps my mind engaged and challenged. But even though
          my day job involves working with computers and code, I also like to
          get my hands dirty and work on physical projects. I love tinkering
          with engines and fixing up things in my spare time. There's something
          really satisfying about taking something that's broken and making it
          run smoothly again. Overall, I try to stay busy and engaged with a
          variety of activities, both physical and mental. Life is too short to
          sit still and watch the world go by, so I like to stay active.
        </Typography>
      </Box>
      <MyTimeline />
      <Contact />
    </Box>
  );
};

export default About;
