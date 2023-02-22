import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const MySheet = (props) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        width: props.width,
        height: props.height,
        borderRadius: "8px",
        borderWidth: '2px',
        borderColor: "white",
        backgroundColor: "#dcdcdc",
        ...props.sx,
      }}
    >
      <Box sx={{position:'relative', top:'-13px' ,width: '30%', backgroundColor: '#dcdcdc'}}>
      <Typography align="center" color='#3AA14F'>
        {props.subject}
      </Typography>
      </Box>
      {props.children}
    </Paper>
  );
};

export default MySheet;
