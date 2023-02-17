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
      <Grid container spacing={1}>
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
              width: 200,
              height: 200,
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2} sx={{ width: { xs: "100%", lg: "80%" } }}>
            <Typography
              color="black"
              gutterBottom
              variant="h4"
              component="div"
              textAlign="center"
            >
              {title}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Typography
                color="black"
                gutterBottom
                variant="body3"
                component="div"
                textAlign="center"
                sx={{ width: { xs: "50%", md: "100%" } }}
              >
                {content}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Link href={external_link} underline="none" sx={{ fontSize: 20 }}>
                {link_title}
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box display="flex" justifyContent="center">
            <Button variant="outlined" startIcon={<AddCircleIcon />}>
              Quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarServicePaperItem;
