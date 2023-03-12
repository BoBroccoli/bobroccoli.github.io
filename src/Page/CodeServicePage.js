import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const CodeServicePage = () => {
  return (
    <>
      <Stack spacing={2}>
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
        <Box
          sx={{
            backgroundImage: 'url(./web_building.png)',
            width: 650,
            height: 650,
            backgroundSize: "cover",
          }}
        />
        <Paper sx={{width: '30%', position: "relative", left: '-15%', backgroundColor: '#3AA14F'}}>
          <Typography variant="h4" color={'white'}>Customize website for your portforlio or your business with much lower price.</Typography>
        </Paper>
        </Box>
      </Stack>
    </>
  );
};

export default CodeServicePage;
