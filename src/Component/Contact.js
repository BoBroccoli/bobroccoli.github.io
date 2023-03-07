import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
const Contact = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Bo"
        src="/photo.jpg"
        sx={{ width: "300px", height: "300px" }}
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography color={"black"} align="center">
            Name : Bo
          </Typography>
          <Typography color={"black"} align="center">
            Cell Phone : 2184091761
          </Typography>
          <Typography color={"black"} align="center">
            Email : bowen4091761@gmail.com
          </Typography>
          <Box>
          <IconButton color="primary" aria-label="upload picture" component="label">
      </IconButton>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Contact;
