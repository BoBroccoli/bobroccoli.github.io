import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CarFixImage from "../Component/CarFixImage";
import { LineUpTypography } from "../Component/StyledComponent/LineUpTypography";
import CarServicePaperItem from "../Component/SubComponent/CarServicePaperItem";

const CarServicePage = () => {
  
  const item_arr = [
    {
      key: 1,
      img_url: "url(./car_brake.png)",
      title: "Brake Service",
      content:
        "Help you replace both brake pads and rotors, I can show you exactly steps how to do it and next time you will know what need to be done.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Brakes Parts",
    },
    {
      key: 2,
      img_url: "url(./engine.png)",
      title: "Engine Service",
      content:
        "Help you replace the engine oil and filter. Tell you what is the best oil for your car engine. Most shop charges a lot, you will find out how cheap it is.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Engine Parts",
    },
    {
      key: 3,
      img_url: "url(./suspension.png)",
      title: "Suspension Service",
      content:
        "Help you identify what is the issue of your suspension, I can show you how to inspect the car's suspension and replace the parts only needed.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "Suspension Parts",
    },
    {
      key: 4,
      img_url: "url(./compressor.png)",
      title: "AC Service",
      content:
        "Hot summer and AC not cool enought? I can show you how to find out which part is leaking, replace the AC compressor and recharge the AC System.",
      external_link: "https://www.autozone.com/lp/duralast-brakes",
      link_title: "AC Parts",
    },
  ];
  return (
    <>
    <Box
      sx={{
        marginTop: "70px",
        height: "auto",
      }}
    >
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box width="95%" marginTop={2}>
              <Divider>
                <Typography variant="h5" color="black">
                  Past Projects
                </Typography>
              </Divider>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                backgroundColor: "white",
                opacity: 0.7,
                padding: "20px",
                borderRadius: "40px",
                marginTop: { xs: "20px", md: "0px" },
              }}
            >
              <LineUpTypography>
                I love to work on cars. I changed lots of things for my car,
                such as engine oil, timing belt, AC replacement, breaks, rotors,
                and etc. If you are interested in the cars or need my help for
                replacement. Please let me know.
              </LineUpTypography>
            </Box>
            <CarFixImage />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box width={"80%"} marginTop={2}>
            <Divider>
              <Typography variant="h5" color="black">
                Car Service
              </Typography>
            </Divider>
          </Box>
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
    </>
  );
};

export default CarServicePage;
