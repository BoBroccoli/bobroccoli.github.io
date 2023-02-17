import { Button, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import CarServicePaperItem from "../Component/SubComponent/CarServicePaperItem";

const CarServicePage = () => {
  const item_arr = [
    {
      img_url: "url(./car_brake.png)",
      title: "Brake Service",
      content:
        "Help you replace both brake pads and rotors, I can show you exactly steps how to do it and next time you will know what need to be done.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Brakes Parts",
    },
    {
      img_url: "url(./engine.png)",
      title: "Engine Service",
      content:
        "Help you replace the engine oil and filter. Tell you what is the best oil for your car engine. Most shop charges a lot, you will find out how cheap it is.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Engine Parts",
    },
    {
      img_url: "url(./suspension.png)",
      title: "Suspension Service",
      content:
        "Help you identify what is the issue of your suspension, I can show you how to inspect the car's suspension and replace the parts only needed.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Suspension Parts",
    },
    {
      img_url: "url(./compressor.png)",
      title: "AC Service",
      content:
        "Hot summer and AC not cool enought? I can show you how to find out which part is leaking, replace the AC compressor and recharge the AC System.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "AC Parts",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: 15,
        backgroundImage: "url(./s2-bg.jpg)",
        height: "auto",
        backgroundSize: "cover",
      }}
    >
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "wrap-content",
              width: { xs: "60%", md: "80%" },
              backgroundColor: "white",
              opacity: 0.7,
              padding: "20px",
              borderRadius: "40px",
              marginTop: {xs: 5, lg: 0}
            }}
          >
            <Typography variant="body3" color="black" fontWeight="bolder">
              I love to work on cars. I changed lots of things for my car, such
              as engine oil, timing belt, AC replacement, breaks, rotors, and
              etc. If you are interested in the cars or need my help for
              replacement. Please let me know.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={9} spacing={"20px"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {item_arr.map((item) => (
              <CarServicePaperItem {...item} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarServicePage;
