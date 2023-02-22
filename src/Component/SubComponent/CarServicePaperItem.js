import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CarServicePaperItem = (props) => {
  const img_url = props.img_url;
  const title = props.title;
  const content = props.content;
  const external_link = props.external_link;
  const link_title = props.link_title;
  return (
    <Paper elevation={4} sx={{ p: 2, m: 5, width: "80%" }}>
      <Grid container >
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: img_url,
              width: 150,
              height: 150,
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2} sx={{ width: { xs: "100%", lg: "80%" } }}>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
            >
              {title}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Typography
                color="black"
                gutterBottom
                variant="body2"
                component="div"
                sx={{ width: { xs: "50%", md: "100%" } }}
              >
                {content}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Link href={external_link} underline="none" sx={{ fontSize: 20, color: '#3AA14F' }}>
                {link_title}
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={2} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Box display="flex">
              <Button variant="outlined" size="small" sx={{color: '#3AA14F', borderColor: '#3AA14F', '&:hover': {borderColor: "#3AA14F"} }} startIcon={<AddCircleIcon />}>
                Quote
              </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarServicePaperItem;
