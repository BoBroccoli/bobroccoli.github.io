import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const CodeServicePage = () => {
  return (
    <>
      <Stack spacing={10} mt={10} mb={10}>
        <Typography variant="h3" color='#3AA14F' align="center">Ongoing Projects</Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{flexDirection: {xs: 'column', md:"row"}}}
        >
          <Box
            sx={{
              backgroundImage: "url(./web_building.png)",
              width: {xs: 400, md:900},
              height: {xs: 400, md:900},
              backgroundSize: "cover",
            }}
          />
          <Paper
            sx={{
              width: {xs: '80%', md:"40%"},
              position: "relative",
              left: {md:"-10%"},
              backgroundColor: "#3AA14F",
              p: 3,
            }}
          >
            <Typography variant="h3" sx={{ p: 3 }}>
              Build Website
            </Typography>
            <Typography variant="body1" color={"white"} sx={{ p: 3 }}>
              Customize website for your portforlio or your business with much
              lower price.
            </Typography>
          </Paper>
        </Box>

        <Box
          display="flex"
          sx={{flexDirection: {xs: 'column', md:"row"}}}
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            sx={{
              width: {xs: '80%', md:"40%"},
              position: "relative",
              left: {md:"10%"},
              backgroundColor: "#3AA14F",
              p: 3,
            }}
          >
            <Typography variant="h3" sx={{ p: 3 }}>
              Create Connection
            </Typography>
            <Typography variant="body1" color={"white"} sx={{ p: 3 }}>
              Help you connect to experienced professional from many companies like Google, Meta, Amazon. Understand what
              they and what technologies they use.
            </Typography>
          </Paper>
          <Box
            sx={{
              backgroundImage: "url(./industry.png)",
              width: {xs: 400, md:900},
              height: {xs: 400, md:900},
              backgroundSize: "cover",
            }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default CodeServicePage;
